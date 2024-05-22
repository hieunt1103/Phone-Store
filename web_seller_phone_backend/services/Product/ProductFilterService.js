import Product from '../../model/ProductModel.js';
import { Sequelize } from 'sequelize';

const { Op } = Sequelize;

const filterProducts = async (filters) => {
    try {
        let whereClause = {};

        if (filters.brand) {
            whereClause.brand = {
                [Op.like]: `%${filters.brand}%`,
            };
        }

        if (filters.minPrice && filters.maxPrice) {
            whereClause.price = {
                [Op.between]: [filters.minPrice, filters.maxPrice],
            };
        } else if (filters.minPrice) {
            whereClause.price = {
                [Op.gte]: filters.minPrice,
            };
        } else if (filters.maxPrice) {
            whereClause.price = {
                [Op.lte]: filters.maxPrice,
            };
        }

        const filteredProducts = await Product.findAll({
            where: whereClause,
        });

        return filteredProducts;
    } catch (error) {
        throw error;
    }
};

export { filterProducts };
