#### CRUD Productos

# Crear Producto
DELIMITER //
CREATE PROCEDURE registrarProducto(in nombres varchar(40), IN descripciones varchar(40), in stocks int, in precios float, in tipo varchar(30))
BEGIN
	INSERT INTO productos(nombre,descripcion,stock,precio,Tipo_Producto_idTipo_Producto)
    VALUES(nombres,descripciones, stocks,precios,(select idTipo_Producto from tipo_producto where nombre_tipo = tipo));
END//

DELIMITER //
CREATE PROCEDURE consultarProducto()
BEGIN
	select p.idProductos,p.nombre, p.descripcion, p.stock, p.precio, tp.nombre_tipo 
    from productos p
    INNER JOIN tipo_producto tp ON p.Tipo_Producto_idTipo_Producto = tp.idTipo_Producto;  
END//

describe productos;
