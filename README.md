# Database MySQL

1. Tạo Database và bảng cùng các mối liên hệ

create database phone_data;
use phone_data;
CREATE TABLE users (
id_user INT PRIMARY KEY AUTO_INCREMENT,
username NVARCHAR(255) NOT NULL,
email NVARCHAR(255) NOT NULL,
password NVARCHAR(255) NOT NULL
);

CREATE TABLE tokens (
id_token INT PRIMARY KEY AUTO_INCREMENT,
id_user INT,
token NVARCHAR(255),
FOREIGN KEY (id_user) REFERENCES users(id_user)
);

CREATE TABLE products(
id_product INT PRIMARY KEY AUTO_INCREMENT,
nameProduct NVARCHAR(255) NOT NULL,
price DECIMAL(10, 2) NOT NULL,
stock_quantity INT NOT NULL
);

CREATE TABLE descriptions (
id_product INT PRIMARY KEY,
descrip_product LONGTEXT NOT NULL,
FOREIGN KEY (id_product) REFERENCES products(id_product)
);

CREATE TABLE carts (
id_cart INT PRIMARY KEY AUTO_INCREMENT,
id_user INT,
FOREIGN KEY (id_user) REFERENCES users(id_user)
);

CREATE TABLE cart_items (
id_cart_item INT PRIMARY KEY AUTO_INCREMENT,
id_cart INT,
id_product INT,
quantity INT NOT NULL,
FOREIGN KEY (id_cart) REFERENCES carts(id_cart),
FOREIGN KEY (id_product) REFERENCES products(id_product)
);

CREATE TABLE pictures (
id_picture INT PRIMARY KEY AUTO_INCREMENT,
id_product INT,
url_picture LONGBLOB NOT NULL,
FOREIGN KEY (id_product) REFERENCES products(id_product)
);

CREATE TABLE orders(
id_order INT PRIMARY KEY AUTO_INCREMENT,
id_user INT,
total_amount DECIMAL(10, 2) NOT NULL,
FOREIGN KEY (id_user) REFERENCES users(id_user)
);

CREATE TABLE order_details(
id_order_detail INT PRIMARY KEY AUTO_INCREMENT,
id_order INT,
id_product INT,
quantity INT NOT NULL,
price DECIMAL(10, 2) not null,
FOREIGN KEY (id_order) REFERENCES orders(id_order),
FOREIGN KEY (id_product) REFERENCES products(id_product)
);
