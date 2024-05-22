import { DataTypes } from 'sequelize';
import db from '../db.js';
import Product from './ProductModel.js';
import Cart from './Cart.js';
const CartItem = db.define('CartItem', {
    id_cart_item: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_cart: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Cart,
            key: 'id_cart',
          },
    },
    id_product: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nameProduct: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    url_picture: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
    tableName: 'cart_items',
});
Cart.hasMany(CartItem, { foreignKey: 'id_cart' });
CartItem.belongsTo(Cart, { foreignKey: 'id_cart' }); // Khóa ngoại chỉ định liên kết
CartItem.belongsTo(Product, { foreignKey: 'id_product' }); // `CartItem` thuộc về `Product`
Product.hasMany(CartItem, { foreignKey: 'id_product' }); // `Product` có nhiều `CartItem`
export default CartItem;
