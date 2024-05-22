import express from 'express';
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProductById,
    searchProduct,
    filterProduct,
} from '../controller/ProductController.js';

const router = express.Router();
router.get('/get/product', (req, res) => getAllProducts(req, res));
router.get('/get/product/:id', (req, res) => getProductById(req, res));
router.post('/post/product', (req, res) => createProduct(req, res));
router.put('/put/product/:id', (req, res) => updateProduct(req, res));
router.delete('/delete/product/:id', (req, res) => deleteProductById(req, res));
router.get('/search/product', (req, res) => searchProduct(req, res));
router.get('/filter/product', (req, res) => filterProduct(req, res));

export default router;
