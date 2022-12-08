-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`pacientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pacientes` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`especialidades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`especialidades` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`medicos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`medicos` (
  `id` INT NOT NULL,
  `matricula` TINYINT(50) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `especialidades_id` INT NOT NULL,
  PRIMARY KEY (`id`, `especialidades_id`),
  INDEX `fk_medicos_especialidades1_idx` (`especialidades_id` ASC) VISIBLE,
  CONSTRAINT `fk_medicos_especialidades1`
    FOREIGN KEY (`especialidades_id`)
    REFERENCES `mydb`.`especialidades` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`turnos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`turnos` (
  `id` INT NOT NULL,
  `fecha_y_hora` DATETIME NOT NULL,
  `pacientes_id` INT NOT NULL,
  `medicos_id` INT NOT NULL,
  PRIMARY KEY (`id`, `pacientes_id`, `medicos_id`),
  INDEX `fk_turnos_pacientes1_idx` (`pacientes_id` ASC) VISIBLE,
  INDEX `fk_turnos_medicos1_idx` (`medicos_id` ASC) VISIBLE,
  CONSTRAINT `fk_turnos_pacientes1`
    FOREIGN KEY (`pacientes_id`)
    REFERENCES `mydb`.`pacientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_turnos_medicos1`
    FOREIGN KEY (`medicos_id`)
    REFERENCES `mydb`.`medicos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
