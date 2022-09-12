USE newkim;

ALTER TABLE products ADD COLUMN category VARCHAR(20) NOT NULL;
ALTER TABLE products MODIFY COLUMN image_detail VARCHAR(50);
ALTER TABLE products MODIFY COLUMN image VARCHAR(50);
ALTER TABLE products MODIFY COLUMN image_model VARCHAR(50);
ALTER TABLE products MODIFY COLUMN display_home TINYINT UNSIGNED NOT NULL DEFAULT 0;                                                                        
INSERT INTO products(product_name, price, color, image , image_model, image_detail,  image_alt, collection, display_home, category)
VALUES
('Sleeveless Tiered Dress', 748.00, 'Yellow', '20-model-front-dress.jpeg', '20-model-back-dress.jpeg', '20-model-side-dress.jpeg', 'Sleeveless tiered midi dress - yellow print', 'bari', 0, 'Dress'),
('Sleeveless Tiered Dress', 1315.00, 'White & Pink', '21-model-front-dress.jpeg', '21-model-back-dress.jpeg', '21-model-side-dress.jpeg', 'Sleeveless tiered midi dress - pink and white print', 'bari', 0, 'Dress'),
('Slim-Fit Mini Dress', 698.00, 'White & Yellow', '23-model-side-dress.jpeg', '23-model-back-dress.jpeg', '23-model-front-dress.jpeg', 'Slim-fit strappy mini dress - white and yellow print', 'bari', '0'),
('Slim-Fit Mini Dress', 572.00, 'Pink', '24-model-front-dress.jpeg', '24-model-side-dress.jpeg', '24-model-back-dress.jpeg', 'Slim-fit strappy mini dress - pink', 'bari', '0'),
('Slim-Fit Mini Dress', 572.00, 'Black', '25-model-side-dress.jpeg', '25-model-front-dress.jpeg', '25-model-back-dress.jpeg', 'Slim-fit fringe decorations strappy mini dress - black', 'bari', '0'),
('Ruffle Organza Mini Dress', 591.00, 'Pink', '26-model-front-dress.jpeg', '26-model-side-dress.jpeg', '26-dress.jpeg', 'Ruffle organza mini dress - pink print', 'bari', '0'),
('Square Puff Shirt', 671.00, 'White', '27-model-side-shirt.jpeg', '27-model-front-shirt.jpeg', '27-model-back-shirt.jpeg', 'Square puff sleeves shirt with a wide ribbon band behind - white', 'bari', '0'),
('Square Puff Shirt', 671.00, 'Pink', '28-model-front-shirt.jpeg', '28-model-side-shirt.jpeg', '28-model-back-shirt.jpeg', 'Square puff sleeves shirt with a wide ribbon band behind - pink', 'bari', '0'),
('Flower Collar Slim Shirt', 514.00, 'Yellow', '29-model-side-shirt.jpeg', '29-model-front-shirt.jpeg', '29-model-back-shirt.jpeg', 'Flower collar slim shirt - yellow', 'bari', '0'),
('Puff Sleeve Crop Blouse', 493.00, 'Black', '30-model-front-cropped.jpeg', '30-model-back-cropped.jpeg', '30-model-side-cropped.jpeg', 'Puff sleeve crop blouse - black', 'bari', '0'),
('Bogaji Collar Hawaiian Shirt', 392.00, 'Yellow', '31-model-side-shirt.jpeg', '31-model-back-shirt.jpeg', '31-model-front-shirt.jpeg', 'Bogaji collar hawaiian shirt - yellow print', 'bari', '0');