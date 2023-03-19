#### CRUD Trabajadores

# CREAR TRABAJADOR
DELIMITER //
create procedure registrarTrabajador(
IN nomb VARCHAR(45),IN ape_paterno VARCHAR(45), IN ape_materno VARCHAR(45),
IN telefono VARCHAR(12), IN email VARCHAR(45), IN contra VARCHAR(70), in roll tinyint)
BEGIN
	INSERT INTO usuario (nombre, apellido_paterno, apellido_materno, num_telefono, correo, contrasena, Rol_idRol)
	VALUES (nomb,ape_paterno,ape_materno, telefono,email,sha2(contra,256),roll);
    
    INSERT INTO trabajador(Usuario_idUsuario) Values((select idUsuario from usuario where correo like email));
END //

# Consultar 1 trabajador o todos
DELIMITER //
CREATE PROCEDURE consultarTrabajadores(IN opcion INT, IN email varchar(60))
BEGIN
	IF opcion = 1 then
		SELECT concat(nombre,' ', apellido_paterno,' ', apellido_materno)as Nombre, num_telefono, correo 
        FROM usuario
        WHERE Rol_idRol = 3;
    ELSEIF opcion = 2 then
		SELECT concat(nombre,' ', apellido_paterno,' ', apellido_materno)as Nombre, num_telefono, correo 
        FROM usuario 
        WHERE Rol_idRol = 3 and correo = email;
	END IF;
END //

