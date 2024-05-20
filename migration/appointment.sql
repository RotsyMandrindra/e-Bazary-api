CREATE TABLE IF NOT EXISTS appointment(
    appointment_id serial primary key,
    username varchar(200) not null,
    firstname varchar(200),
    email varchar(200) not null,
    contact varchar(50) not null,
    appointment_date TIMESTAMP not null,
    status boolean not null,
    user_admin_id serial references user_admin(user_admin_id)
);