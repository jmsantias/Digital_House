-- 1

SELECT milisegundos, nombre cancion
FROM canciones
WHERE milisegundos > 120000
GROUP BY milisegundos;

-- 2

SELECT nombre
FROM canciones
WHERE nombre LIKE 'A%' 
OR nombre LIKE 'E%'
OR nombre LIKE 'I%'
OR nombre LIKE 'O%'
OR nombre LIKE 'U%';

-- 3

SELECT compositor, nombre
FROM canciones
ORDER BY compositor DESC;

SELECT nombre, compositor
FROM canciones
WHERE compositor != ''
ORDER BY nombre ASC;

-- 4
-- a

SELECT compositor, count(nombre)
FROM canciones
GROUP BY compositor
HAVING compositor != '';

-- b

SELECT compositor, count(nombre)
FROM canciones
GROUP BY compositor
HAVING compositor != '' AND count(*) > 10;

-- 5 
-- a

SELECT ciudad_de_facturacion, sum(total)
FROM facturas
GROUP BY ciudad_de_facturacion;

-- b

SELECT ciudad_de_facturacion, sum(total)
FROM facturas
WHERE pais_de_facturacion = 'Canadá'
GROUP BY ciudad_de_facturacion;

-- c 

SELECT ciudad_de_facturacion, sum(total)
FROM facturas
GROUP BY ciudad_de_facturacion
HAVING sum(total) > 38;

-- d 

SELECT pais_de_facturacion, ciudad_de_facturacion, sum(total)
FROM facturas
GROUP BY pais_de_facturacion, ciudad_de_facturacion;

-- 6
-- a 

SELECT min(milisegundos), max(milisegundos), avg(milisegundos)
FROM canciones;

-- b 

SELECT min(milisegundos), max(milisegundos), avg(milisegundos)
FROM canciones
group by id_genero;


