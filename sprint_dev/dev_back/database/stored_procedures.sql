####### CRUD Cliente ###########
###### Registrar Cliente
## EJEMPLO
CALL registrarCliente('Antonio','Arce','Gudino','5516143595','tony.ipn26@gmail.com','sd15d3f1sf3d',2);

DELIMITER //
CREATE PROCEDURE registrarCliente(
IN nomb VARCHAR(45),IN ape_paterno VARCHAR(45), IN ape_materno VARCHAR(45),
IN telefono VARCHAR(12), IN email VARCHAR(45), IN contra VARCHAR(70), in roll tinyint)
BEGIN
	INSERT INTO usuario (nombre, apellido_paterno, apellido_materno, num_telefono, correo, contrasena, Rol_idRol)
	VALUES (nomb,ape_paterno,ape_materno, telefono,email,sha2(contra,256),roll);
    
    INSERT INTO cliente(Usuario_idUsuario) VALUES((select idUsuario from usuario where correo like email));
END //

###### Consultar todos los clientes o uno solo
## EJEMPLO

DELIMITER //
CREATE PROCEDURE consultarClientes(IN opcion INT, IN correo varchar(60))
BEGIN
	IF opcion = 1 then
		SELECT concat(usu.nombre,' ', usu.apellido_paterno,' ', usu.apellido_materno)as Nombre, usu.num_telefono, usu.correo 
        FROM usuario usu
        WHERE usu.Rol_idRol = 2;
    ELSEIF opcion = 2 then
		SELECT usu.idUsuario, usu.nombre, usu.apellido_paterno, usu.apellido_materno, usu.num_telefono, usu.correo
        FROM usuario usu
        WHERE usu.Rol_idRol = 2 and usu.correo = correo;
	END IF;
END //


DELIMITER //
CREATE PROCEDURE consultarUsuarioCorreo(IN correo varchar(60), IN pass varchar(100))
begin
	select usu.correo, usu.contrasena from usuario usu
    where usu.correo like correo and usu.contrasena like pass;
END//

