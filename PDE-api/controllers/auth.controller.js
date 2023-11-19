const bcrypt = require("bcrypt");
const ROLES = require("../data/roles.json");

const debug = require("debug")("app:auth-controller");
const db = require("../config/database");

const { createToken } = require("../token/jwt.tools");

const controller = {};

// Hash de contraseña
const hashPassword = async (password) => {
    // Generar un salt aleatorio
    const salt = await bcrypt.genSalt(10);
    // Generar el hash de la contraseña con el salt
    const hash = await bcrypt.hash(password, salt);
    // Devolver el hash
    return hash;
};

// Comparador de contraseñas
const comparePassword = async (password, hash) => {
    // Usar bcrypt para verificar si la contraseña coincide con el hash
    const match = await bcrypt.compare(password, hash);
    // Devolver el resultado
    return match;
};

// Register
controller.Register = async (req, res) => {
    try {
        // Obtener datos de usuario
        const { first_name, last_name, email_address, passwoord, country, address, cel_extension, cel_number} = req.body;

        // Verificar campos duplicados
        const connection = await db.getConnection();
        const available_email = await connection.query('SELECT * FROM USER WHERE email_address = ?',
        [email_address]);

        if(available_email != "") {
            return res.status(409).json({ error: "La dirección de correo ya está en uso" });
        } 

        // Encriptar la contrasena 
        const encryptedPassword = await hashPassword(passwoord);

        const register = await connection.query("INSERT INTO user (first_name, last_name, email_address, passwoord, rol) VALUES (?, ?, ?, ?, ?)",
        [first_name, last_name, email_address, encryptedPassword, ROLES.STANDAR_USER]);

        return res.status(201).json({ message: "Usuario creado con éxito "});

    } catch (error) {
        debug({ error });
        return res.status(500).json({ message: "Error inesperado!" })
    }
}

// Login
controller.Login = async (req, res) => {
    try {
        
        const { email_address, passwoord } = req.body;

        //Buscar usuario por email
        const connection = await db.getConnection();
        const user_exist = await connection.query('SELECT * FROM USER WHERE email_address = ?',
        [email_address]);

        if(user_exist == ""){
            return res.status(404).json({ error: "El usuario con el email ingresado no existe" });
        }        
        
        const user = user_exist[0];
        const hidden = user.hidden;
        if(hidden === 1) {
            return res.status(400).json({ error: "El usuario con el email ingresado ha sido suspendido" });
        }
        const match = await comparePassword(passwoord, user.passwoord);

        // Si la contraseña coincide, generar un token y agregarlo al campo de tokens del usuario, limitando el arreglo a 4 elementos
        if (match) {
            // Crear token
            const token = createToken(user.user_id);

            // Colocar token
            const updateToken = await connection.query('UPDATE USER SET token = ? WHERE user_id = ?',
            [token, user.user_id]); 

            if (updateToken.affectedRows === 0) {
                return res.status(400).json({ error: "Acceso incorrecto" });
            }
            return res.status(200).json({ token: token });

        }else {
            // Si la contraseña no coincide
            return res.status(400).json({ error: "Contraseña incorrecta" })
        }

        

    } catch (error) {
        debug({ error });
        
        return res.status(500).json({ message: "Error inesperado!" })
    }
}

// Whoami
controller.whoami = async (req, res) => {
    try {
        const { user_id, first_name, last_name, email_address, rol} = req.user;
        return res.status(200).json({ user_id, first_name, last_name, email_address, rol });
    } catch (error) {
        debug(error);
        return res.status(500).json({ error: "Error inesperado" })
    }
}

module.exports = controller;