CREATE TABLE IF NOT EXISTS images(
    images_id serial primary key,
    product_id serial references car(product_id),
    url varchar(50) not null
);