SELECT pais, count(*)
FROM clientes
group by pais 
having pais = 'Brazil';

SELECT id_genero, count(*)
FROM canciones
group by id_genero
having id_genero = 6;

SELECT sum(total)
FROM facturas;

SELECT id_album, avg(milisegundos)
FROM canciones
group by id_album;

SELECT id, id_tipo_de_medio, min(bytes)
FROM canciones;

SELECT id_cliente, sum(total)
FROM facturas
GROUP BY id_cliente;

SELECT c.nombre, g.nombre genero, c.compositor
FROM canciones c, generos g
WHERE c.id_genero = g.id
AND c.compositor = 'Willie Dixon'
AND g.nombre = 'Blues';




