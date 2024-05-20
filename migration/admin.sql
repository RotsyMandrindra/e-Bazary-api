CREATE TABLE IF NOT EXISTS user_admin(
    user_admin_id serial primary key,
    email varchar(200) not null, 
    name varchar(200) not null, 
    password varchar(200) not null
);