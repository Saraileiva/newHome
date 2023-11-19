const express = require("express");
const debug = require("debug")("app:post-controller");
const db = require("../config/database");

const controller = {};

//Find All post
controller.getAllPosts = async (req, res) => {
    try {
        const connection = await db.getConnection();
        const result = await connection.query("SELECT publication_date, USER.email_address AS 'Publicated by', publication_tittle, publication_description, contact_information, DOG.dog_name, DOG.race, email_contact, aditional_info FROM PUBLICATION JOIN DOG ON PUBLICATION.dog_id = DOG.dog_id JOIN USER ON PUBLICATION.user_id = USER.user_id WHERE PUBLICATION.hidden = FALSE");

        console.log(result);

        if(!result) {
            return res.status(404).json({ error: "No hay ningun post disponible" });
        };
        res.status(200).json({ result });
    }catch (error) {
        debug(error);
        return res.status(500).json({ error: "Ocurrio un error inesperado en el servidor" })
    }
    
}

//Find posts from users
controller.findByUserId = async (req, res) => {
    try {
        const { user_id } = req.body;

        const connection = await db.getConnection();
        const searched = await connection.query('SELECT publication_date, USER.email_address AS "Publicated by", publication_tittle, publication_description, contact_information, DOG.dog_name, DOG.race, email_contact, aditional_info FROM PUBLICATION JOIN DOG ON PUBLICATION.dog_id = DOG.dog_id JOIN USER ON PUBLICATION.user_id = USER.user_id WHERE USER.user_id = ? AND PUBLICATION.hidden = FALSE', 
        user_id);

        console.log(searched);

        if(searched == "") {
            return res.status(404).json({ error: "No se encuntra ningún post con ese id" });
        };
        res.status(200).json({ searched });
    }catch (error) {
        debug(error);
        return res.status(500).json({ error: "Ocurrio un error inesperado en el servidor" })
    }
    
}

//Find one by dog_id
controller.findOneByDogId = async (req, res) => {
    try {
        //Obtener los campos del post
        const { dog_id } = req.body;

        //const id = req.USER.user_id;
        const connection = await db.getConnection();
        const searched = await connection.query('SELECT publication_date, USER.email_address AS "Publicated by", publication_tittle, publication_description, contact_information, DOG.dog_name, DOG.race, email_contact, aditional_info FROM PUBLICATION JOIN DOG ON PUBLICATION.dog_id = DOG.dog_id JOIN USER ON PUBLICATION.user_id = USER.user_id WHERE DOG.dog_id = ? AND PUBLICATION.hidden = FALSE', 
        dog_id);
        
        if(searched == "") {
            return res.status(404).json({ error: "No se encuntra ningún post con ese id" });
        };

        return res.status(201).json(searched);
    } catch (error) {
        debug({ error });
        return res.status(500).json({ error: "Error interno de servidor" });
    }
}

//Create post
controller.create = async (req, res) => {
    try {
        //Obtener los campos del post
        const { publication_tittle, publication_description, contact_information, dog_id, email_contact, aditional_info } = req.body

        const user_id = req.user.user_id;

        const connection = await db.getConnection();
      
        const existDog = await connection.query("SELECT * FROM DOG WHERE dog_id = ?",
        [dog_id]);

        if(existDog == "") {
            return res.status(404).json({ error: "No existe el perrito con el id proporcionado" });
        }
    
        // Validacion 2
        const available = await connection.query("SELECT * FROM DOG WHERE dog_id = ? AND ocult = TRUE",
        [dog_id]);

        const already = available[0];

        if(already) {
            return res.status(400).json({ error: "El perrito con el id proporcionado, no esta disponible" });
        }

        const inPost = await connection.query('SELECT * FROM PUBLICATION WHERE dog_id = ?',
        [dog_id]);

        const stay = inPost[0];

        if(stay) {
            return res.status(400).json({ error: "El perrito con el id proporcionado, ya ha sido publicado" });
        }

        const create = await connection.query('INSERT INTO PUBLICATION (publication_tittle, publication_description, contact_information, user_id, dog_id, email_contact, aditional_info) VALUES (?, ?, ?, ?, ?, ?, ?)', 
        [publication_tittle, publication_description, contact_information, user_id, dog_id, email_contact, aditional_info]);

        return res.status(201).json({ user_id, message: "Post creado con exito" })
    } catch (error) {
        debug({ error });
        return res.status(500).json({ error: "Error interno de servidor" });
    }
}

//Update post
controller.updateDescription = async (req, res) => {
    try {
        const { publication_id, publication_description } = req.body;

        const connection = await db.getConnection();
        
        // Verificar si el post existe
        const post_exist = await connection.query('SELECT * FROM PUBLICATION WHERE publication_id = ?',
        [publication_id]);

        const exist = post_exist[0];

        if(!exist){
            return res.status(404).json({ error: "El post con el id ingresado no existe" });
        }      
        
        // Verificar que no sea hidden
        const post_available = await connection.query('SELECT * FROM PUBLICATION WHERE publication_id = ? AND hidden = TRUE',
        [publication_id]);

        const isAvailable = post_available[0];

        if(isAvailable){
            return res.status(404).json({ error: "El post con el id ingresado no esta disponible" });
        }

        const update = await connection.query('UPDATE PUBLICATION SET publication_description = ? WHERE publication_id = ?',
        [publication_description, publication_id]);
        
        res.status(200).json({ message: "Descripción actualizada con éxito! "});
    }catch (error) {
        debug(error);
        return res.status(500).json({ error: "Ocurrio un error inesperado en el servidor" })
    }    
}

//Delete post
controller.delete = async (req, res) => {
    try {
        //Obtener los campos del post
        const { publication_id } = req.body;

        //const id = req.USER.user_id;
        const connection = await db.getConnection();
        const searched = await connection.query('SELECT * FROM PUBLICATION WHERE publication_id = ?', 
        publication_id);

        if(searched == "") {
            return res.status(404).json({ error: "No se encuntra ningún post con ese id" });
        };

        const available = await connection.query('SELECT * FROM PUBLICATION WHERE publication_id = ? AND hidden = TRUE', 
        publication_id);

        const isAble = available[0];

        if(isAble) {
            return res.status(404).json({ error: "Ya se elimino el post con ese id" });
        }

        const erase = await connection.query('UPDATE PUBLICATION SET hidden = TRUE WHERE publication_id = ?', 
        publication_id);

        return res.status(201).json({ message: "Post eliminado con éxito!" });

    } catch (error) {
        debug({ error });
        return res.status(500).json({ error: "Error interno de servidor" });
    }
}


module.exports = controller;