const { verifyToken } = require("../token/jwt.tools");
const db = require("../config/database");
const debug = require("debug")("app:auth-middleware");

const ROLES = require("./../data/roles.json");

const middlewares = {};

const tokenPrefix = "Bearer"

middlewares.authentication = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if(!authorization) {
            return res.status(401).json({ error: "No autorizado" });
        }

        const [prefix, token] = authorization.split(" ");

        if(prefix !== tokenPrefix) {
            return res.status(401).json({ error: "No autorizado" });
        }

        if(!token) {
            return res.status(401).json({ error: "No autorizado" });
        }

        const tokenObject = verifyToken(token);

        if(!tokenObject) {
            return res.status(401).json({ error: "No autorizado" });
        }

        const { userId } = tokenObject;
        debug(userId);

        const connection = await db.getConnection();
        const searched = await connection.query('SELECT * FROM USER WHERE user_id = ?',
        [userId]);
        
        if(!searched) {
            return res.status(401).json({ error: "No autorizado" });
        }

        const UserToken = searched[0].token.toString();

        isTokenValid = UserToken.includes(token);

        if(!isTokenValid) {
            return res.status(401).json({ error: "No autorizado" });
        }

        req.user = searched[0];
        req.token = token;

        next();

    } catch (error) {
        return res.status(500).json({ error: "Error inesperado de servidor!" })   
    }
}

middlewares.authorization = (rolRequired = ROLES.SYSADMIN) => {
    return (req, res, next) => {
        try {
            const { rol } = req.user;
            debug({ rol });

            const rolIndex = rol === rolRequired || rol === ROLES.SYSADMIN;

            if(!rolIndex) {
                return res.status(403).json({ error: "No tienes acceso, porque no eres administrador" });
            }

            next();
        } catch (error) {
            debug({ error });
            return res.status(500).json({ error: "Error inesperado de servidor" });
        }
    }
}

module.exports = middlewares;