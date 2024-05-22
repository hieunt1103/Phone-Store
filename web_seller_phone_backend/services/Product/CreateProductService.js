import Product from '../../model/ProductModel.js';
export const create = async (productData) => {
    try {
        const newProduct = await Product.create(productData);
        return newProduct;
    } catch (error) {
        throw new Error(`Could not create product: ${error.message}`);
    }
    
};