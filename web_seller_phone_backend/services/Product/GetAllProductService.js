// ProductService.js

import Product from '../../model/ProductModel.js';

const getAllProductService = async () => {
    try {
        const products = await Product.findAll();
        return {
            status: 'success',
            message: 'Products retrieved successfully',
            data: products,
        };
    } catch (error) {
        return {
            status: 'error',
            message: error.message,
        };
    }
};
export { getAllProductService };
