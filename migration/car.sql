CREATE TABLE IF NOT EXISTS car (
    product_id serial primary key,
    product_name varchar(200) not null,
    description varchar(200),
    brand varchar(50) not null,
    model varchar(50), 
    price double precision not null,
    color varchar(50) not null,
    motor_type varchar(50), 
    power varchar(50),
    place_number int not null,
    status boolean not null,
    type varchar(50)
);