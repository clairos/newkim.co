CREATE DATABASE newkim;

USE newkim;

CREATE TABLE products(
	id_product INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL, 
    price DECIMAL(12,2) UNSIGNED, 
    color VARCHAR(30),
    image VARCHAR(50), 
    image_model VARCHAR(50),
    image_detail VARCHAR(50), 
    image_alt VARCHAR(100) NOT NULL, 
    collection VARCHAR(30) NOT NULL, 
    display_home TINYINT NOT NULL DEFAULT 0,
    category VARCHAR(20) NOT NULL
);

CREATE TABLE clients(
	id_client INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    profile_name VARCHAR(100) NOT NULL, 
    email VARCHAR(50) NOT NULL, 
    password VARCHAR(100) NOT NULL, 
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
    FOREIGN KEY (id_client) REFERENCES clients(id_client),
    id_cart INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_cart) REFERENCES cart(id_cart)
);

CREATE TABLE order_products(
	id_order_product INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    quantity INT UNSIGNED NOT NULL, 
    id_product INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_product) REFERENCES products(id_product),
    id_order INT UNSIGNED NOT NULL, 
    FOREIGN KEY (id_order) REFERENCES orders(id_order)
);

CREATE TABLE cart(
	id_cart INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_client INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_client) REFERENCES clients(id_client)
);

CREATE TABLE cart_products(
	id_cart_products INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_product INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_product) REFERENCES products(id_product),
    id_cart INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_cart) REFERENCES cart(id_cart),
    quantity INT UNSIGNED NOT NULL,
    size INT(2) UNSIGNED NOT NULL
);

-- CASO NECESSITE ALTERAR AS TABELAS QUE JÁ HAVIAM SIDO CRIADAS

ALTER TABLE products AUTO_INCREMENT = 1; -- PARA ZERAR O ID_PRODUCT CASO NECESSÁRIO

ALTER TABLE products ADD COLUMN category VARCHAR(20) NOT NULL;
ALTER TABLE products MODIFY COLUMN image VARCHAR(50);
ALTER TABLE products MODIFY COLUMN image_model VARCHAR(50);
ALTER TABLE products MODIFY COLUMN image_detail VARCHAR(50);
ALTER TABLE products MODIFY COLUMN color VARCHAR(30);
ALTER TABLE products MODIFY COLUMN display_home TINYINT NOT NULL DEFAULT 0;
ALTER TABLE products MODIFY COLUMN price DECIMAL(12,2) UNSIGNED;

ALTER TABLE orders ADD COLUMN id_cart INT UNSIGNED NOT NULL;
ALTER TABLE orders ADD CONSTRAINT id_cart FOREIGN KEY (id_cart) REFERENCES cart(id_cart);

ALTER TABLE cart_products ADD COLUMN id_cart INT(10) UNSIGNED NOT NULL;
ALTER TABLE cart_products ADD CONSTRAINT id_cart FOREIGN KEY (id_cart) REFERENCES cart(id_cart);
ALTER TABLE cart_products ADD COLUMN size INT(2) UNSIGNED NOT NULL;