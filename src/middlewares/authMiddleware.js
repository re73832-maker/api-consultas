const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: "Se requiere un token para acceder" });
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET || 'secret_key_provisional');
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Token inválido o expirado" });
    }
};

module.exports = verificarToken;