
/*Ej 1*/

SELECT id AS 'Número de autor', apellido, nombre, email FROM autores WHERE nombre LIKE 'A%'; 

/*Ej 2*/

SELECT nombre, apellido, password, telefono_movil FROM usuario WHERE telefono_movil = "5492645661478";

/*Ej 3*/

SELECT COUNT(*) AS 'Cantidad de Artículos', estadoart AS 'Estado' FROM articulos WHERE estadoart = '0';

/*Ej 4*/

SELECT id, nombre_recurso FROM recursos WHERE id IN (8, 16, 29, 35);

