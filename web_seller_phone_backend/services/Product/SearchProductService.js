import Product from '../../model/ProductModel.js';
import { Op } from 'sequelize';

const searchProductByName = async (name) => {
    try {
        const products = await Product.findAll({
            where: {
                nameProduct: {
                    [Op.like]: `%${name}%`, 
                },
            },
        });
        return products;
    } catch (error) {
        throw error;
    }
};

export { searchProductByName };
