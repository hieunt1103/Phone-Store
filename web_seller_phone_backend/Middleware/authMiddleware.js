import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const authMiddleware = (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
        return res.status(401).json({ message: 'Authorization header is missing' });
    }
    const token = authorizationHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token is missing' });
    }
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
        req.id_user = decoded.payload.id_user;
        next();
    } catch (error) {
        return res.status(401).json({ message: error.message || 'Invalid token' });
    }
};

export default authMiddleware;
