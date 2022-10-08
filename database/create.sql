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

create table mkt.brand (
	id serial primary key,
	name text not null,
	description text not null,
	date timestamp default now()
);

insert into mkt.brand (name,description) values ('Dell', 'Marca de Notebook');
insert into mkt.brand (name,description) values ('Xiaomi', 'Marca de Celular');

create table mkt.category (
	id serial primary key,
	name text not null,
	description text not null,
	type text not null,
	date timestamp default now()
);

insert into mkt.category (name,description, type) values ('Computador', '', 'Eletronicos');
insert into mkt.category (name,description, type) values ('Celular', '', 'Eletronicos');

create table mkt.variation (
	id serial primary key,
	name text not null,
	description text not null,
	type text not null,
	date timestamp default now()
);

insert into mkt.variation (name,description, type) values ('P', 'Medida roupa', 'Tamanho');
insert into mkt.variation (name,description, type) values ('M', 'Medida roupa', 'Tamanho');
insert into mkt.variation (name,description, type) values ('G', 'Medida roupa', 'Tamanho');