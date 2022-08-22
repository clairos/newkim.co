CREATE DATABASE newkim;

USE newkim;

CREATE TABLE products(
	id_product INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL, 
    price DECIMAL(12,2) UNSIGNED NOT NULL, 
    color VARCHAR(15) NOT NULL,
    image VARCHAR(30) NOT NULL, 
    image_model VARCHAR(30),
    image_detail VARCHAR(30) NOT NULL, 
    image_alt VARCHAR(100) NOT NULL, 
    collection VARCHAR(30) NOT NULL, 
    display_home TINYINT UNSIGNED NOT NULL
);

CREATE TABLE clients(
	id_client INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    profile_name VARCHAR(100) NOT NULL, 
    email VARCHAR(50) NOT NULL, 
    client_password VARCHAR(100) NOT NULL, 
    country VARCHAR(20) NOT NULL,
    shipping_first_name VARCHAR(50) NOT NULL, 
    shipping_last_name VARCHAR(50) NOT NULL, 
    address_line1 VARCHAR(100) NOT NULL, 
    address_line2 VARCHAR(100), 
    suburb_city VARCHAR(100) NOT NULL, 
    state_territory VARCHAR(50) NOT NULL, 
    postcode VARCHAR(15) NOT NULL, 
    phone VARCHAR(30) NOT NULL, 
    administrator TINYINT UNSIGNED NOT NULL
);

CREATE TABLE orders(
	id_order INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    order_code VARCHAR(6) NOT NULL, 
    order_date DATE, 
    id_client INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_client) REFERENCES clients(id_client)
);

CREATE TABLE order_products(
	id_order_product INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    quantity INT UNSIGNED NOT NULL, 
    id_product INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_product) REFERENCES products(id_product),
    id_order INT UNSIGNED NOT NULL, 
    FOREIGN KEY (id_order) REFERENCES orders(id_order)
);