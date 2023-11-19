const express = require("express");
const router = express.Router();
const debug = require("debug")("app:user-controller");
const db = require("../config/database");
const roles = require("../data/roles.json");

const controller = {}

// Find all users

controller.getAllUsers = async (req, res) => {
    try {
        const connection = await db.getConnection();
        const result = await connection.query("SELECT user_id, first_name, last_name, email_address, rol, hidden, country, address, cel_extension, cel_number FROM USER");

        console.log(result);

        if(!result) {
            return res.status(404).json({ error: "No hay ningun usuario registrado" });
        };
        res.status(200).json({ result });
    }catch (error) {
        debug(error);
        return res.status(500).json({ error: "Ocurrio un error inesperado en el servidor" })
    }
    
}

controller.findById = async (req, res) => {
    try {
        const { user_id } = req.body;

        const connection = await db.getConnection();
        const searched = await connection.query('SELECT user_id, first_name, last_name, email_address, rol, hidden, country, address, cel_extension, cel_number FROM USER WHERE user_id = ? AND hidden = FALSE', 
        user_id);

        console.log(searched);

        if(searched == "") {
            return res.status(404).json({ error: "No se encuntra ningún usuario con ese id" });
        };
        res.status(200).json({ searched });
    }catch (error) {
        debug(error);
        return res.status(500).json({ error: "Ocurrio un error inesperado en el servidor" })
    }
    
}

controller.updateUserRol = async (req, res) => {
    try {
        const { user_id, new_role } = req.body;

        const connection = await db.getConnection();

        const user_exist = await connection.query('SELECT * FROM USER WHERE user_id = ?',
        [user_id]);

        if(user_exist == ""){
            return res.status(404).json({ error: "El usuario con el id ingresado no existe" });
        }
        
        const user_available = await connection.query('SELECT * FROM USER WHERE user_id = ? AND hidden = TRUE',
        [user_id]);

        const isAble = user_available[0];

        if(isAble){
            return res.status(404).json({ error: "El usuario con el id ingresado esta suspendido" });
        }

        const currentRol = user_exist[0].rol;

        if(currentRol == new_role) {
            return res.status(404).json({ error: "El usuario ya contenia ese rol" });
        }

        const update = await connection.query('UPDATE USER SET rol = ? WHERE user_id = ?',
        [new_role, user_id]);
        
        res.status(200).json({ message: "Rol actualizado con éxito! "});
    }catch (error) {
        debug(error);
        return res.status(500).json({ error: "Ocurrio un error inesperado en el servidor" })
    }    
}

controller.deleteUser = async (req, res) => {
    try{
        const { email_address } = req.body;

        // Buscar el usuario por su username o email en la tabla
        const connection = await db.getConnection();
        const user_exist = await connection.query("SELECT * FROM USER WHERE email_address = ?",
        [email_address]);

        // Si no existe
        if (user_exist == "") {
            return res.status(404).json({ error: "Usuario no registrado" });
        }

        const user_available = await connection.query('SELECT * FROM USER WHERE email_address = ? AND hidden = TRUE',
        [email_address]);

        // Esta suspendido
        const isAble = user_available[0];

        if(isAble){
            return res.status(404).json({ error: "El usuario con el id ingresado ya esta suspendido" });
        }
        
        // Es sysadmin
        const issysAdmin = await connection.query('SELECT * FROM USER WHERE email_address = ?',
        [email_address]);

        const yep = issysAdmin[0].rol;
        if(yep == "sysadmin"){
            return res.status(404).json({ error: "El usuario sysadmin no se puede eliminar" });
        }

        // Si el usuario existe, actualizar el email
        const makedelete = await connection.query("UPDATE USER SET hidden = TRUE WHERE email_address = ?", 
        [email_address]);

        return res.status(200).json({ message: "Usuario eliminado con éxito!"});
    } catch (error) {
        debug(error);
        return res.status(500).json({ error: "Error inesperado" })
    }
}

controller.updateProfile = async (req, res) => {
    try {
        const { first_name, last_name, country, address, cel_extension, cel_number } = req.body;

        const user_id = req.user.user_id;

        const connection = await db.getConnection();

        const update = await connection.query('UPDATE USER SET first_name = ?, last_name = ?, country = ?, address = ?, cel_extension = ?, cel_number = ? WHERE user_id = ?',
        [first_name, last_name, country, address, cel_extension, cel_number, user_id]);
        
        res.status(200).json({ message: "Perfil actualizado con éxito! "});
    }catch (error) {
        debug(error);
        return res.status(500).json({ error: "Ocurrio un error inesperado en el servidor" })
    }    
}

module.exports = controller;