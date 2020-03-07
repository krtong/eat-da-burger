CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int,
	burger_name varchar(255) NOT NULL,
 	devoured boolean not null default 0,
	PRIMARY KEY (id)
);
