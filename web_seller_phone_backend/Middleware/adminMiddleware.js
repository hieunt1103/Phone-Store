import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const adminMiddleware = (req, res, next) => {
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

        if (!decoded.payload.isAdmin) { // Chỉ admin mới được phép tiếp tục
            return res.status(403).json({ message: 'Access denied. Admins only.' });
        }

        req.id_user = decoded.payload.id_user; // Lưu thông tin vào request
        next(); // Cho phép tiếp tục nếu là admin
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

export default adminMiddleware;
