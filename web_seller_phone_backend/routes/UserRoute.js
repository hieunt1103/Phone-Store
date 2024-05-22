import express from 'express';
import { createUser, getDetailsUser, loginUser, getAllUser, refreshToken} from '../controller/UserController.js';

const router = express.Router();
router.post('/post/user', (req, res) => createUser(req, res));
router.post('/post/login', (req, res) => loginUser(req, res));
router.get('/get/users', (req, res) => getAllUser(req, res));
router.get('/getDetailUser/:id_user', (req, res) => getDetailsUser(req, res));
router.post('/refresh-token',(req, res) => refreshToken(req, res))
export default router;
