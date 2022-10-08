CREATE ROLE "user-mkt" WITH
	LOGIN
	NOSUPERUSER
	CREATEDB
	NOCREATEROLE
	INHERIT
	NOREPLICATION
	CONNECTION LIMIT -1
	PASSWORD 'user-mkt';

create schema mkt;

create table mkt.product (
	id serial primary key,
	name text not null,
	description text not null,
    price double not null,
	date timestamp default now()
);

insert into mkt.product (name,description, price) values ('Notebook', 'Notebook Gamer Dell', 5000);

insert into mkt.product (name,description, price) values ('Celular', 'Xiaomi MI 11', 4500.00);