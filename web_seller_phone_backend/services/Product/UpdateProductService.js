import Product from '../../model/ProductModel.js';

const update = async (id, data) => {
    try {
        const checkProduct = await Product.findByPk(id);
        if (!checkProduct) {

            return {
                status: 'error',
                message: 'The product is not defined',
            };
        }

        await Product.update(data, {
            where: {
                id_product: id,
            },
        });

        return {
            status: 'success',
            message: 'Product updated successfully',
        };
    } catch (error) {
        throw error;
    }
};

export { update };
