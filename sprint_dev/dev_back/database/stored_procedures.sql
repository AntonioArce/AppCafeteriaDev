
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
	VALUES (nomb,ape_paterno,ape_materno, telefono,email,contra,roll);
    
    INSERT INTO cliente(Usuario_idUsuario) VALUES((select idUsuario from usuario where correo like email));
END //

###### Consultar todos los clientes
## EJEMPLO
call consultarClientes(2,2);
DELIMITER //
CREATE PROCEDURE consultarClientes(IN opcion INT, IN id INT)
BEGIN
	IF opcion = 1 then
		SELECT usu.idUsuario, usu.nombre, usu.apellido_paterno, usu.apellido_materno, usu.num_telefono, usu.correo 
        FROM usuario usu, cliente cli WHERE usu.idUsuario = cli.Usuario_idUsuario;
    ELSEIF opcion = 2 then
		SELECT usu.idUsuario, usu.nombre, usu.apellido_paterno, usu.apellido_materno, usu.num_telefono, usu.correo
        FROM usuario usu, cliente cli
        WHERE usu.idUsuario = cli.Usuario_idUsuario
        AND usu.idUsuario = id;
	END IF;
END //






