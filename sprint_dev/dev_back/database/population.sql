use cafeteria;

INSERT INTO rol(nombre)values('admin');
INSERT INTO rol(nombre)values('cliente');
INSERT INTO rol(nombre)values('trabajador');

INSERT INTO tipo_producto(idTipo_Producto,nombre_tipo)values(1,'Bebidas empaquetadas');

delete from usuario where idUsuario = 2;

select * from usuario;
select * from trabajador;

update usuario set contrasena = sha2('renato',256) where correo = 'renato@gmail.com';





