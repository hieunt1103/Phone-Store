// ProductService.js
import Product from '../../model/ProductModel.js';
const deleteProduct = async (id) => {
    try {
        const checkProduct = await Product.findByPk(id);
        if (!checkProduct) {
            return {
                status: 'error',
                message: 'The product does not exist',
            };
        }

        await Product.destroy({
            where: {
                id_product: id,
            },
        });

        return {
            status: 'success',
            message: 'Product deleted successfully',
        };
    } catch (error) {
        throw error;
    }
};

export { deleteProduct };
