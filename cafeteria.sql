-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema cafeteria
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema cafeteria
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cafeteria` DEFAULT CHARACTER SET utf8mb3 ;
USE `cafeteria` ;

-- -----------------------------------------------------
-- Table `cafeteria`.`rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cafeteria`.`rol` (
  `idRol` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`idRol`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `cafeteria`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cafeteria`.`usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido_paterno` VARCHAR(45) NOT NULL,
  `apellido_materno` VARCHAR(45) NOT NULL,
  `num_telefono` VARCHAR(12) NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `contrasena` VARCHAR(100) NOT NULL,
  `Rol_idRol` INT NOT NULL,
  `is_active` INT NULL DEFAULT '1',
  PRIMARY KEY (`idUsuario`),
  UNIQUE INDEX `correo_UNIQUE` (`correo` ASC) VISIBLE,
  INDEX `fk_Usuario_Rol_idx` (`Rol_idRol` ASC) VISIBLE,
  CONSTRAINT `fk_Usuario_Rol`
    FOREIGN KEY (`Rol_idRol`)
    REFERENCES `cafeteria`.`rol` (`idRol`))
ENGINE = InnoDB
AUTO_INCREMENT = 15
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `cafeteria`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cafeteria`.`cliente` (
  `idCliente` INT NOT NULL AUTO_INCREMENT,
  `Usuario_idUsuario` INT NOT NULL,
  PRIMARY KEY (`idCliente`),
  INDEX `fk_Cliente_Usuario1_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Cliente_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `cafeteria`.`usuario` (`idUsuario`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `cafeteria`.`tipo_producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cafeteria`.`tipo_producto` (
  `idTipo_Producto` INT NOT NULL,
  `nombre_tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idTipo_Producto`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `cafeteria`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cafeteria`.`productos` (
  `idProductos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `stock` INT NOT NULL,
  `precio` FLOAT NOT NULL,
  `Tipo_Producto_idTipo_Producto` INT NOT NULL,
  `is_active` INT NULL DEFAULT '1',
  `imagen` VARCHAR(250) NULL DEFAULT NULL,
  PRIMARY KEY (`idProductos`),
  INDEX `fk_Productos_Tipo_Producto1_idx` (`Tipo_Producto_idTipo_Producto` ASC) VISIBLE,
  CONSTRAINT `fk_Productos_Tipo_Producto1`
    FOREIGN KEY (`Tipo_Producto_idTipo_Producto`)
    REFERENCES `cafeteria`.`tipo_producto` (`idTipo_Producto`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `cafeteria`.`status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cafeteria`.`status` (
  `idStatus` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idStatus`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `cafeteria`.`compra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cafeteria`.`compra` (
  `no_compra` INT NOT NULL AUTO_INCREMENT,
  `Cliente_idCliente` INT NOT NULL,
  `Productos_idProductos` INT NOT NULL,
  `fecha` DATETIME(6) NOT NULL,
  `total` FLOAT NULL DEFAULT NULL,
  `Status_idStatus` INT NOT NULL,
  PRIMARY KEY (`no_compra`),
  INDEX `fk_Cliente_has_Productos_Productos1_idx` (`Productos_idProductos` ASC) VISIBLE,
  INDEX `fk_Cliente_has_Productos_Cliente1_idx` (`Cliente_idCliente` ASC) VISIBLE,
  INDEX `fk_Compra_Status1_idx` (`Status_idStatus` ASC) VISIBLE,
  CONSTRAINT `fk_Cliente_has_Productos_Cliente1`
    FOREIGN KEY (`Cliente_idCliente`)
    REFERENCES `cafeteria`.`cliente` (`idCliente`),
  CONSTRAINT `fk_Cliente_has_Productos_Productos1`
    FOREIGN KEY (`Productos_idProductos`)
    REFERENCES `cafeteria`.`productos` (`idProductos`),
  CONSTRAINT `fk_Compra_Status1`
    FOREIGN KEY (`Status_idStatus`)
    REFERENCES `cafeteria`.`status` (`idStatus`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `cafeteria`.`trabajador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cafeteria`.`trabajador` (
  `idTrabajador` INT NOT NULL AUTO_INCREMENT,
  `Usuario_idUsuario` INT NOT NULL,
  PRIMARY KEY (`idTrabajador`),
  INDEX `fk_Trabajador_Usuario1_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Trabajador_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `cafeteria`.`usuario` (`idUsuario`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;

USE `cafeteria` ;

-- -----------------------------------------------------
-- procedure consultarClientes
-- -----------------------------------------------------

DELIMITER $$
USE `cafeteria`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarClientes`(IN opcion INT, IN correo varchar(60))
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
END$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure consultarProducto
-- -----------------------------------------------------

DELIMITER $$
USE `cafeteria`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarProducto`()
BEGIN
	select p.idProductos,p.nombre, p.descripcion, p.stock, p.precio, tp.nombre_tipo 
    from productos p
    INNER JOIN tipo_producto tp ON p.Tipo_Producto_idTipo_Producto = tp.idTipo_Producto;  
END$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure consultarTrabajadores
-- -----------------------------------------------------

DELIMITER $$
USE `cafeteria`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarTrabajadores`(IN opcion INT, IN email varchar(60))
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
END$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure registrarCliente
-- -----------------------------------------------------

DELIMITER $$
USE `cafeteria`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `registrarCliente`(
IN nomb VARCHAR(45),IN ape_paterno VARCHAR(45), IN ape_materno VARCHAR(45),
IN telefono VARCHAR(12), IN email VARCHAR(45), IN contra VARCHAR(70), in roll tinyint)
BEGIN
	INSERT INTO usuario (nombre, apellido_paterno, apellido_materno, num_telefono, correo, contrasena, Rol_idRol)
	VALUES (nomb,ape_paterno,ape_materno, telefono,email,sha2(contra,256),roll);
    
    INSERT INTO cliente(Usuario_idUsuario) VALUES((select idUsuario from usuario where correo like email));
END$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure registrarProducto
-- -----------------------------------------------------

DELIMITER $$
USE `cafeteria`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `registrarProducto`(in nombres varchar(40), IN descripciones varchar(40), in stocks int, in precios float, in tipo varchar(30))
BEGIN
	INSERT INTO productos(nombre,descripcion,stock,precio,Tipo_Producto_idTipo_Producto)
    VALUES(nombres,descripciones, stocks,precios,(select idTipo_Producto from tipo_producto where nombre_tipo = tipo));
END$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure registrarTrabajador
-- -----------------------------------------------------

DELIMITER $$
USE `cafeteria`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `registrarTrabajador`(
IN nomb VARCHAR(45),IN ape_paterno VARCHAR(45), IN ape_materno VARCHAR(45),
IN telefono VARCHAR(12), IN email VARCHAR(45), IN contra VARCHAR(70), in roll tinyint)
BEGIN
	INSERT INTO usuario (nombre, apellido_paterno, apellido_materno, num_telefono, correo, contrasena, Rol_idRol)
	VALUES (nomb,ape_paterno,ape_materno, telefono,email,sha2(contra,256),roll);
    
    INSERT INTO trabajador(Usuario_idUsuario) Values((select idUsuario from usuario where correo like email));
END$$

DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
