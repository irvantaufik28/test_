create database family;

create table list (
id serial primary key,
name varchar(50),
parent_id int
)


insert into list(name,parent_id)
values
('Zaki', 2),
('Ilham', null),
('Irawan', 2),
('Arka', 3)


SELECT t1.id, t1.name, t2.name AS parent_name
FROM list AS t1
LEFT JOIN list AS t2 ON t1.parent_id = t2.id