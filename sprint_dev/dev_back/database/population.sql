use cafeteria;
INSERT INTO rol(nombre)values('admin');
INSERT INTO rol(nombre)values('cliente');
INSERT INTO rol(nombre)values('trabajador');
INSERT INTO tipo_producto(idTipo_Producto,nombre_tipo)values(1,'Bebidas empaquetadas');

select * from usuario;

update usuario set apellido_paterno = 'Zavala' where correo = 'xochilt@gmail.com';
alter table usuario add(
is_active int default 1
);

alter table productos add(
is_active int default 1
);