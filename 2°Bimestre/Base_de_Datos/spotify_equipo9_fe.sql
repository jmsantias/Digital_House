-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema spotify
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema spotify
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `spotify` DEFAULT CHARACTER SET utf8 ;
USE `spotify` ;

-- -----------------------------------------------------
-- Table `spotify`.`contraseña`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`contraseña` (
  `idcontraseña` INT NOT NULL,
  `fecha_modificacion` DATETIME NOT NULL,
  `combinacion` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idcontraseña`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`plan`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`plan` (
  `idplan` INT NOT NULL,
  `tipo_plan` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idplan`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`usuario` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `fecha_nacimiento` DATE NOT NULL,
  `sexo` VARCHAR(1) NOT NULL,
  `codigo_postal` INT NOT NULL,
  `pais` VARCHAR(45) NOT NULL,
  `contraseña_idcontraseña` INT NOT NULL,
  `plan_idplan` INT NOT NULL,
  PRIMARY KEY (`idusuario`, `contraseña_idcontraseña`, `plan_idplan`),
  INDEX `fk_usuario_contraseña1_idx` (`contraseña_idcontraseña` ASC) VISIBLE,
  INDEX `fk_usuario_plan1_idx` (`plan_idplan` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_contraseña1`
    FOREIGN KEY (`contraseña_idcontraseña`)
    REFERENCES `spotify`.`contraseña` (`idcontraseña`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_plan1`
    FOREIGN KEY (`plan_idplan`)
    REFERENCES `spotify`.`plan` (`idplan`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`playlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`playlist` (
  `idplaylist` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `nro_canciones` INT NOT NULL,
  `fecha_creacion` DATETIME NOT NULL,
  `usuario_idusuario` INT NOT NULL,
  PRIMARY KEY (`idplaylist`, `usuario_idusuario`),
  INDEX `fk_playlist_usuario_idx` (`usuario_idusuario` ASC) VISIBLE,
  CONSTRAINT `fk_playlist_usuario`
    FOREIGN KEY (`usuario_idusuario`)
    REFERENCES `spotify`.`usuario` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`discografica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`discografica` (
  `iddiscografica` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `pais` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`iddiscografica`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`artista`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`artista` (
  `idartista` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `imagen` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idartista`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`album`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`album` (
  `idalbum` INT NOT NULL,
  `titulo` VARCHAR(45) NOT NULL,
  `año_publicacion` YEAR NOT NULL,
  `imagen` VARCHAR(255) NOT NULL,
  `discografica_iddiscografica` INT NOT NULL,
  `artista_idartista` INT NOT NULL,
  PRIMARY KEY (`idalbum`, `discografica_iddiscografica`, `artista_idartista`),
  INDEX `fk_album_discografica1_idx` (`discografica_iddiscografica` ASC) VISIBLE,
  INDEX `fk_album_artista1_idx` (`artista_idartista` ASC) VISIBLE,
  CONSTRAINT `fk_album_discografica1`
    FOREIGN KEY (`discografica_iddiscografica`)
    REFERENCES `spotify`.`discografica` (`iddiscografica`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_album_artista1`
    FOREIGN KEY (`artista_idartista`)
    REFERENCES `spotify`.`artista` (`idartista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`cancion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`cancion` (
  `idcancion` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `duracion` VARCHAR(45) NOT NULL,
  `nro_reproducciones` INT NOT NULL,
  `likes` INT NOT NULL,
  `album_idalbum` INT NOT NULL,
  `album_discografica_iddiscografica` INT NOT NULL,
  PRIMARY KEY (`idcancion`, `album_idalbum`, `album_discografica_iddiscografica`),
  INDEX `fk_cancion_album1_idx` (`album_idalbum` ASC, `album_discografica_iddiscografica` ASC) VISIBLE,
  CONSTRAINT `fk_cancion_album1`
    FOREIGN KEY (`album_idalbum` , `album_discografica_iddiscografica`)
    REFERENCES `spotify`.`album` (`idalbum` , `discografica_iddiscografica`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`estado_de_playlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`estado_de_playlist` (
  `idestado_de_playlist` INT NOT NULL,
  `estado_de_playlist` VARCHAR(45) NOT NULL,
  `playlist_idplaylist` INT NOT NULL,
  `playlist_usuario_idusuario` INT NOT NULL,
  PRIMARY KEY (`idestado_de_playlist`, `playlist_idplaylist`, `playlist_usuario_idusuario`),
  INDEX `fk_estado_de_playlist_playlist1_idx` (`playlist_idplaylist` ASC, `playlist_usuario_idusuario` ASC) VISIBLE,
  CONSTRAINT `fk_estado_de_playlist_playlist1`
    FOREIGN KEY (`playlist_idplaylist` , `playlist_usuario_idusuario`)
    REFERENCES `spotify`.`playlist` (`idplaylist` , `usuario_idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`cancion_has_playlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`cancion_has_playlist` (
  `cancion_idcancion` INT NOT NULL,
  `playlist_idplaylist` INT NOT NULL,
  `playlist_usuario_idusuario` INT NOT NULL,
  PRIMARY KEY (`cancion_idcancion`, `playlist_idplaylist`, `playlist_usuario_idusuario`),
  INDEX `fk_cancion_has_playlist_playlist1_idx` (`playlist_idplaylist` ASC, `playlist_usuario_idusuario` ASC) VISIBLE,
  INDEX `fk_cancion_has_playlist_cancion1_idx` (`cancion_idcancion` ASC) VISIBLE,
  CONSTRAINT `fk_cancion_has_playlist_cancion1`
    FOREIGN KEY (`cancion_idcancion`)
    REFERENCES `spotify`.`cancion` (`idcancion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cancion_has_playlist_playlist1`
    FOREIGN KEY (`playlist_idplaylist` , `playlist_usuario_idusuario`)
    REFERENCES `spotify`.`playlist` (`idplaylist` , `usuario_idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`genero`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`genero` (
  `idgenero` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idgenero`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`genero_has_cancion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spotify`.`genero_has_cancion` (
  `genero_idgenero` INT NOT NULL,
  `cancion_idcancion` INT NOT NULL,
  `cancion_album_idalbum` INT NOT NULL,
  `cancion_album_discografica_iddiscografica` INT NOT NULL,
  PRIMARY KEY (`genero_idgenero`, `cancion_idcancion`, `cancion_album_idalbum`, `cancion_album_discografica_iddiscografica`),
  INDEX `fk_genero_has_cancion_cancion1_idx` (`cancion_idcancion` ASC, `cancion_album_idalbum` ASC, `cancion_album_discografica_iddiscografica` ASC) VISIBLE,
  INDEX `fk_genero_has_cancion_genero1_idx` (`genero_idgenero` ASC) VISIBLE,
  CONSTRAINT `fk_genero_has_cancion_genero1`
    FOREIGN KEY (`genero_idgenero`)
    REFERENCES `spotify`.`genero` (`idgenero`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_genero_has_cancion_cancion1`
    FOREIGN KEY (`cancion_idcancion` , `cancion_album_idalbum` , `cancion_album_discografica_iddiscografica`)
    REFERENCES `spotify`.`cancion` (`idcancion` , `album_idalbum` , `album_discografica_iddiscografica`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
