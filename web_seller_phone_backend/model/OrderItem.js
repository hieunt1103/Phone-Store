import { DataTypes } from 'sequelize';
import db from '../db.js';
import Order from './order.js';
import Product from './ProductModel.js';

const OrderItem = db.define(
  'OrderItem',
  {
    id_order_item: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Order,
        key: 'id_order',
      },
    },
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: 'id_product',
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'order_items',
  },
);

export default OrderItem;
