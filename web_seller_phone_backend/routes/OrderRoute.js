import express from 'express';
import orderController from '../controller/OrderController.js';
import authMiddleware from '../Middleware/authMiddleware.js';
import adminMiddleware from '../Middleware/adminMiddleware.js'
const router = express.Router();
router.use(authMiddleware);
router.post('/create-order-from-cart', orderController.createOrderFromCartController);
router.get('/admin/orders', adminMiddleware,orderController.getAllOrder);
router.delete('/orders/:id', orderController.deleteOrder);
export default router;
