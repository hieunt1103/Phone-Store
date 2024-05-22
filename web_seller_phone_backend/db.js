import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const conn = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

export default conn;

