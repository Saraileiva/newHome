const debug = require("debug")("app:dog-controller");
const db = require("../config/database");

const controller = {}

// Find all dogs

controller.getAllDogs = async (req, res) => {
    try {
        const connection = await db.getConnection();
        const result = await connection.query("SELECT dog_name, race, dog_age, ocult AS 'Avaliable' FROM DOG");

        console.log(result);

        if(!result) {
            return res.status(404).json({ error: "No hay ningun perrito registrado" });
        };
        res.status(200).json({ result });
    }catch (error) {
        debug(error);
        return res.status(500).json({ error: "Ocurrio un error inesperado en el servidor" })
    }
    
}

controller.findById = async (req, res) => {
    try {
        const { dog_id } = req.body;

        const connection = await db.getConnection();
        const searched = await connection.query('SELECT dog_name, race, dog_age, ocult AS "Available" FROM DOG WHERE dog_id = ?', 
        dog_id);

        console.log(searched);

        if(searched == "") {
            return res.status(404).json({ error: "No se encuntra ningún perrito con ese id" });
        };
        res.status(200).json({ searched });
    }catch (error) {
        debug(error);
        return res.status(500).json({ error: "Ocurrio un error inesperado en el servidor" })
    }
    
}

controller.createDog = async (req, res) => {
    try {
        // Obtener datos del perro
        const { dog_name, dog_age, race } = req.body;

        const connection = await db.getConnection();
        const register = await connection.query("INSERT INTO DOG (dog_name, dog_age, race) VALUES (?, ?, ?)",
        [dog_name, dog_age, race]);

        return res.status(201).json({ register });

    } catch (error) {
        debug({ error });
        return res.status(500).json({ message: "Error inesperado!" })
    }
}

controller.updateDogAge = async (req, res) => {
    try {
        const { dog_id, new_age } = req.body;

        const connection = await db.getConnection();
        
        const dog_exist = await connection.query('SELECT * FROM DOG WHERE dog_id = ?',
        [dog_id]);

        if(dog_exist == ""){
            return res.status(404).json({ error: "El perrito con el id ingresado no existe" });
        }        

        // Esta disponible
        const dog_available = await connection.query('SELECT * FROM DOG WHERE dog_id = ? AND ocult = TRUE',
        [dog_id]);

        const isAvailable = dog_available[0];

        if(isAvailable){
            return res.status(404).json({ error: "El perrito con el id ingresado no esta disponible" });
        }

        const update = await connection.query('UPDATE DOG SET dog_age = ? WHERE dog_id = ?',
        [new_age, dog_id]);
        
        res.status(200).json({ message: "Edad actualizada con éxito! "});
    }catch (error) {
        debug(error);
        return res.status(500).json({ error: "Ocurrio un error inesperado en el servidor" })
    }    
}

controller.deleteDog = async (req, res) => {
    try{
        const { dog_id } = req.body;

        // Buscar el usuario por su username o email en la tabla
        const connection = await db.getConnection();
        const user_exist = await connection.query("SELECT * FROM DOG WHERE dog_id = ?",
        [dog_id]);

        // Si no existe
        if (user_exist == "") {
            return res.status(404).json({ error: "Perrito no registrado" });
        }

        // Esta disponible
        const dog_available = await connection.query('SELECT * FROM DOG WHERE dog_id = ? AND ocult = TRUE',
        [dog_id]);

        const isAvailable = dog_available[0];

        if(isAvailable){
            return res.status(404).json({ error: "El perrito con el id ingresado ya se encontraba oculto" });
        }
        
        // Si el usuario existe, actualizar el email
        const makedelete = await connection.query("UPDATE DOG SET ocult = TRUE WHERE dog_id = ?", 
            [dog_id]);

        if (makedelete.affectedRows === 0) 
            return res.status(400).json({ error: "Ocurrio un error en la eliminacion" });

        return res.status(200).json({message: "Perrito eliminado con éxito!"});
    } catch (error) {
        debug(error);
        return res.status(500).json({ error: "Error inesperado" })
    }
}

module.exports = controller;