CREATE TABLE IF NOT EXISTS images(
    images_id serial primary key,
    product_id int references car(product_id),
    url varchar(50) not null
);