-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema cafeteria
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `cafeteria` ;

-- -----------------------------------------------------
-- Schema cafeteria
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cafeteria` DEFAULT CHARACTER SET utf8 ;
USE `cafeteria` ;

-- -----------------------------------------------------
-- Table `cafeteria`.`Rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cafeteria`.`Rol` (
  `idRol` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`idRol`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cafeteria`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cafeteria`.`Usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido_paterno` VARCHAR(45) NOT NULL,
  `apellido_materno` VARCHAR(45) NOT NULL,
  `num_telefono` VARCHAR(12) NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `contrasena` VARCHAR(100) NOT NULL,
  `Rol_idRol` INT NOT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE INDEX `correo_UNIQUE` (`correo` ASC) VISIBLE,
  INDEX `fk_Usuario_Rol_idx` (`Rol_idRol` ASC) VISIBLE,
  CONSTRAINT `fk_Usuario_Rol`
    FOREIGN KEY (`Rol_idRol`)
    REFERENCES `cafeteria`.`Rol` (`idRol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cafeteria`.`Trabajador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cafeteria`.`Trabajador` (
  `idTrabajador` INT NOT NULL AUTO_INCREMENT,
  `Usuario_idUsuario` INT NOT NULL,
  PRIMARY KEY (`idTrabajador`),
  INDEX `fk_Trabajador_Usuario1_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Trabajador_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `cafeteria`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cafeteria`.`Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cafeteria`.`Cliente` (
  `idCliente` INT NOT NULL AUTO_INCREMENT,
  `Usuario_idUsuario` INT NOT NULL,
  PRIMARY KEY (`idCliente`),
  INDEX `fk_Cliente_Usuario1_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Cliente_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `cafeteria`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cafeteria`.`Tipo_Producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cafeteria`.`Tipo_Producto` (
  `idTipo_Producto` INT NOT NULL,
  `nombre_tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idTipo_Producto`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cafeteria`.`Productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cafeteria`.`Productos` (
  `idProductos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `stock` INT NOT NULL,
  `precio` FLOAT NOT NULL,
  `Tipo_Producto_idTipo_Producto` INT NOT NULL,
  PRIMARY KEY (`idProductos`),
  INDEX `fk_Productos_Tipo_Producto1_idx` (`Tipo_Producto_idTipo_Producto` ASC) VISIBLE,
  CONSTRAINT `fk_Productos_Tipo_Producto1`
    FOREIGN KEY (`Tipo_Producto_idTipo_Producto`)
    REFERENCES `cafeteria`.`Tipo_Producto` (`idTipo_Producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cafeteria`.`Status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cafeteria`.`Status` (
  `idStatus` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idStatus`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cafeteria`.`Compra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cafeteria`.`Compra` (
  `no_compra` INT NOT NULL AUTO_INCREMENT,
  `Cliente_idCliente` INT NOT NULL,
  `Productos_idProductos` INT NOT NULL,
  `fecha` DATETIME(6) NOT NULL,
  `total` FLOAT NULL,
  `Status_idStatus` INT NOT NULL,
  INDEX `fk_Cliente_has_Productos_Productos1_idx` (`Productos_idProductos` ASC) VISIBLE,
  INDEX `fk_Cliente_has_Productos_Cliente1_idx` (`Cliente_idCliente` ASC) VISIBLE,
  PRIMARY KEY (`no_compra`),
  INDEX `fk_Compra_Status1_idx` (`Status_idStatus` ASC) VISIBLE,
  CONSTRAINT `fk_Cliente_has_Productos_Cliente1`
    FOREIGN KEY (`Cliente_idCliente`)
    REFERENCES `cafeteria`.`Cliente` (`idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Cliente_has_Productos_Productos1`
    FOREIGN KEY (`Productos_idProductos`)
    REFERENCES `cafeteria`.`Productos` (`idProductos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Compra_Status1`
    FOREIGN KEY (`Status_idStatus`)
    REFERENCES `cafeteria`.`Status` (`idStatus`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
