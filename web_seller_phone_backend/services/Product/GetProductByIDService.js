import Product from '../../model/ProductModel.js';

const getProduct = async (id) => {
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return {
                status: 'error',
                message: 'Product not found',
            };
        }

        return {
            status: 'success',
            data: product,
        };
    } catch (error) {
        throw error;
    }
};

export { getProduct };

