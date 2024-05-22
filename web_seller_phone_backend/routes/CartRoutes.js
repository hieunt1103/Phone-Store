import express from 'express';
import authMiddleware from '../Middleware/authMiddleware.js';
import {
    addToCart,
    getCartItems,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeProduct,
} from '../controller/CartController.js';

const router = express.Router();

router.use(authMiddleware);
router.post('/cart/add', addToCart);
router.get('/cart/:id_user', getCartItems);
router.put('/cart/increase/:id_user/:id_product', increaseCartQuantity);
router.put('/cart/decrease/:id_user/:id_product', decreaseCartQuantity);
router.delete('/cart/remove/:id_cart_item', removeProduct);

export default router;
