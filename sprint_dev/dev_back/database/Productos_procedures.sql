#### CRUD Productos

# Crear Producto
DELIMITER //
CREATE PROCEDURE registrarProducto(in nombres varchar(40), IN descripciones varchar(40), in stocks int, in precios float, in tipo varchar(30))
BEGIN
	INSERT INTO productos(nombre,descripcion,stock,precio,Tipo_Producto_idTipo_Producto)
    VALUES(nombres,descripciones, stocks,precios,(select idTipo_Producto from tipo_producto where nombre_tipo = tipo));
END//