-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dhnoticias_checkpoint_grupo9
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dhnoticias_checkpoint_grupo9
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dhnoticias_checkpoint_grupo9` DEFAULT CHARACTER SET utf8 ;
USE `dhnoticias_checkpoint_grupo9` ;

-- -----------------------------------------------------
-- Table `dhnoticias_checkpoint_grupo9`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dhnoticias_checkpoint_grupo9`.`categoria` (
  `idcategoria` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `estado` CHAR(1) NOT NULL,
  PRIMARY KEY (`idcategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dhnoticias_checkpoint_grupo9`.`subcategoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dhnoticias_checkpoint_grupo9`.`subcategoria` (
  `idsubcategoria` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `estado` CHAR(1) NOT NULL,
  `categoria_idcategoria` INT NOT NULL,
  PRIMARY KEY (`idsubcategoria`, `categoria_idcategoria`),
  INDEX `fk_subcategoria_categoria1_idx` (`categoria_idcategoria` ASC) VISIBLE,
  CONSTRAINT `fk_subcategoria_categoria1`
    FOREIGN KEY (`categoria_idcategoria`)
    REFERENCES `dhnoticias_checkpoint_grupo9`.`categoria` (`idcategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dhnoticias_checkpoint_grupo9`.`ciudad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dhnoticias_checkpoint_grupo9`.`ciudad` (
  `idciudad` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idciudad`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dhnoticias_checkpoint_grupo9`.`pais`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dhnoticias_checkpoint_grupo9`.`pais` (
  `idpais` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idpais`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dhnoticias_checkpoint_grupo9`.`contraseña`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dhnoticias_checkpoint_grupo9`.`contraseña` (
  `idcontraseña` INT NOT NULL AUTO_INCREMENT,
  `clave` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idcontraseña`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dhnoticias_checkpoint_grupo9`.`autor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dhnoticias_checkpoint_grupo9`.`autor` (
  `idautor` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `mail` VARCHAR(45) NOT NULL,
  `telefono` INT NOT NULL,
  `ciudad_idciudad` INT NOT NULL,
  `pais_idpais` INT NOT NULL,
  `contraseña_idcontraseña` INT NOT NULL,
  PRIMARY KEY (`idautor`, `ciudad_idciudad`, `pais_idpais`, `contraseña_idcontraseña`),
  INDEX `fk_autor_ciudad1_idx` (`ciudad_idciudad` ASC) VISIBLE,
  INDEX `fk_autor_pais1_idx` (`pais_idpais` ASC) VISIBLE,
  INDEX `fk_autor_contraseña1_idx` (`contraseña_idcontraseña` ASC) VISIBLE,
  CONSTRAINT `fk_autor_ciudad1`
    FOREIGN KEY (`ciudad_idciudad`)
    REFERENCES `dhnoticias_checkpoint_grupo9`.`ciudad` (`idciudad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_autor_pais1`
    FOREIGN KEY (`pais_idpais`)
    REFERENCES `dhnoticias_checkpoint_grupo9`.`pais` (`idpais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_autor_contraseña1`
    FOREIGN KEY (`contraseña_idcontraseña`)
    REFERENCES `dhnoticias_checkpoint_grupo9`.`contraseña` (`idcontraseña`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dhnoticias_checkpoint_grupo9`.`articulo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dhnoticias_checkpoint_grupo9`.`articulo` (
  `idarticulos` INT NOT NULL AUTO_INCREMENT,
  `fecha_publicacion` DATE NOT NULL,
  `fecha_creacion` DATE NOT NULL,
  `titulo` VARCHAR(45) NOT NULL,
  `contenido` TEXT NOT NULL,
  `estado` CHAR(2) NOT NULL,
  `subcategoria_idsubcategoria` INT NOT NULL,
  `autor_idautor` INT NOT NULL,
  PRIMARY KEY (`idarticulos`, `subcategoria_idsubcategoria`, `autor_idautor`),
  INDEX `fk_articulo_subcategoria_idx` (`subcategoria_idsubcategoria` ASC) VISIBLE,
  INDEX `fk_articulo_autor1_idx` (`autor_idautor` ASC) VISIBLE,
  CONSTRAINT `fk_articulo_subcategoria`
    FOREIGN KEY (`subcategoria_idsubcategoria`)
    REFERENCES `dhnoticias_checkpoint_grupo9`.`subcategoria` (`idsubcategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_articulo_autor1`
    FOREIGN KEY (`autor_idautor`)
    REFERENCES `dhnoticias_checkpoint_grupo9`.`autor` (`idautor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dhnoticias_checkpoint_grupo9`.`recurso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dhnoticias_checkpoint_grupo9`.`recurso` (
  `idrecurso` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `ruta` VARCHAR(100) NOT NULL,
  `articulo_idarticulos` INT NOT NULL,
  `articulo_subcategoria_idsubcategoria` INT NOT NULL,
  PRIMARY KEY (`idrecurso`, `articulo_idarticulos`, `articulo_subcategoria_idsubcategoria`),
  INDEX `fk_recurso_articulo1_idx` (`articulo_idarticulos` ASC, `articulo_subcategoria_idsubcategoria` ASC) VISIBLE,
  CONSTRAINT `fk_recurso_articulo1`
    FOREIGN KEY (`articulo_idarticulos` , `articulo_subcategoria_idsubcategoria`)
    REFERENCES `dhnoticias_checkpoint_grupo9`.`articulo` (`idarticulos` , `subcategoria_idsubcategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dhnoticias_checkpoint_grupo9`.`especialidad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dhnoticias_checkpoint_grupo9`.`especialidad` (
  `idespecialidad` INT NOT NULL AUTO_INCREMENT,
  `tipo_especialidad` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idespecialidad`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dhnoticias_checkpoint_grupo9`.`lector`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dhnoticias_checkpoint_grupo9`.`lector` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `mail` VARCHAR(45) NOT NULL,
  `ciudad_idciudad` INT NOT NULL,
  `pais_idpais` INT NOT NULL,
  `contraseña_idcontraseña` INT NOT NULL,
  PRIMARY KEY (`idusuario`, `ciudad_idciudad`, `pais_idpais`, `contraseña_idcontraseña`),
  INDEX `fk_lector_ciudad1_idx` (`ciudad_idciudad` ASC) VISIBLE,
  INDEX `fk_lector_pais1_idx` (`pais_idpais` ASC) VISIBLE,
  INDEX `fk_lector_contraseña1_idx` (`contraseña_idcontraseña` ASC) VISIBLE,
  CONSTRAINT `fk_lector_ciudad1`
    FOREIGN KEY (`ciudad_idciudad`)
    REFERENCES `dhnoticias_checkpoint_grupo9`.`ciudad` (`idciudad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_lector_pais1`
    FOREIGN KEY (`pais_idpais`)
    REFERENCES `dhnoticias_checkpoint_grupo9`.`pais` (`idpais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_lector_contraseña1`
    FOREIGN KEY (`contraseña_idcontraseña`)
    REFERENCES `dhnoticias_checkpoint_grupo9`.`contraseña` (`idcontraseña`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dhnoticias_checkpoint_grupo9`.`comentario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dhnoticias_checkpoint_grupo9`.`comentario` (
  `idcomentario` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NOT NULL,
  `contenido` TEXT NOT NULL,
  `articulo_idarticulos` INT NOT NULL,
  `articulo_subcategoria_idsubcategoria` INT NOT NULL,
  `articulo_autor_idautor` INT NOT NULL,
  `autor_idautor` INT NOT NULL,
  `lector_idusuario` INT NOT NULL,
  PRIMARY KEY (`idcomentario`, `articulo_idarticulos`, `articulo_subcategoria_idsubcategoria`, `articulo_autor_idautor`, `autor_idautor`, `lector_idusuario`),
  INDEX `fk_comentario_articulo1_idx` (`articulo_idarticulos` ASC, `articulo_subcategoria_idsubcategoria` ASC, `articulo_autor_idautor` ASC) VISIBLE,
  INDEX `fk_comentario_autor1_idx` (`autor_idautor` ASC) VISIBLE,
  INDEX `fk_comentario_lector1_idx` (`lector_idusuario` ASC) VISIBLE,
  CONSTRAINT `fk_comentario_articulo1`
    FOREIGN KEY (`articulo_idarticulos` , `articulo_subcategoria_idsubcategoria` , `articulo_autor_idautor`)
    REFERENCES `dhnoticias_checkpoint_grupo9`.`articulo` (`idarticulos` , `subcategoria_idsubcategoria` , `autor_idautor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comentario_autor1`
    FOREIGN KEY (`autor_idautor`)
    REFERENCES `dhnoticias_checkpoint_grupo9`.`autor` (`idautor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comentario_lector1`
    FOREIGN KEY (`lector_idusuario`)
    REFERENCES `dhnoticias_checkpoint_grupo9`.`lector` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dhnoticias_checkpoint_grupo9`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dhnoticias_checkpoint_grupo9`.`usuario` (
  `idcuenta` INT NOT NULL AUTO_INCREMENT,
  `cuenta` VARCHAR(45) NOT NULL,
  `lector_idusuario` INT NOT NULL,
  `lector_ciudad_idciudad` INT NOT NULL,
  `lector_pais_idpais` INT NOT NULL,
  `autor_idautor` INT NOT NULL,
  `autor_ciudad_idciudad` INT NOT NULL,
  `autor_pais_idpais` INT NOT NULL,
  PRIMARY KEY (`idcuenta`, `lector_idusuario`, `lector_ciudad_idciudad`, `lector_pais_idpais`, `autor_idautor`, `autor_ciudad_idciudad`, `autor_pais_idpais`),
  UNIQUE INDEX `cuenta_UNIQUE` (`cuenta` ASC) VISIBLE,
  INDEX `fk_usuario_lector1_idx` (`lector_idusuario` ASC, `lector_ciudad_idciudad` ASC, `lector_pais_idpais` ASC) VISIBLE,
  INDEX `fk_usuario_autor1_idx` (`autor_idautor` ASC, `autor_ciudad_idciudad` ASC, `autor_pais_idpais` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_lector1`
    FOREIGN KEY (`lector_idusuario` , `lector_ciudad_idciudad` , `lector_pais_idpais`)
    REFERENCES `dhnoticias_checkpoint_grupo9`.`lector` (`idusuario` , `ciudad_idciudad` , `pais_idpais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_autor1`
    FOREIGN KEY (`autor_idautor` , `autor_ciudad_idciudad` , `autor_pais_idpais`)
    REFERENCES `dhnoticias_checkpoint_grupo9`.`autor` (`idautor` , `ciudad_idciudad` , `pais_idpais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dhnoticias_checkpoint_grupo9`.`autor_has_especialidad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dhnoticias_checkpoint_grupo9`.`autor_has_especialidad` (
  `autor_idautor` INT NOT NULL,
  `especialidad_idespecialidad` INT NOT NULL,
  PRIMARY KEY (`autor_idautor`, `especialidad_idespecialidad`),
  INDEX `fk_autor_has_especialidad_especialidad1_idx` (`especialidad_idespecialidad` ASC) VISIBLE,
  INDEX `fk_autor_has_especialidad_autor1_idx` (`autor_idautor` ASC) VISIBLE,
  CONSTRAINT `fk_autor_has_especialidad_autor1`
    FOREIGN KEY (`autor_idautor`)
    REFERENCES `dhnoticias_checkpoint_grupo9`.`autor` (`idautor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_autor_has_especialidad_especialidad1`
    FOREIGN KEY (`especialidad_idespecialidad`)
    REFERENCES `dhnoticias_checkpoint_grupo9`.`especialidad` (`idespecialidad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
