-- 1 Mostrar el nombre de usuario y contar la cantidad de playlist que tiene

SELECT u.nombreusuario, COUNT(p.idPlaylist)
FROM usuario u
LEFT JOIN playlist p
ON u.idUsuario = p.idusuario
GROUP BY u.nombreusuario;

-- 2 Generar un reporte, donde se muestre el método de pago, la cantidad de operaciones que se realizaron con cada uno y el importe total

SELECT f.tipoFormaPago 'metodo de pago', count(p.idPagos) cantidad, SUM(p.Importe) 'importe total'
FROM tipoformapago f
INNER JOIN datospagoxusuario d ON f.idTipoFormaPago = d.idTipoFormaPago
INNER JOIN usuario u ON u.idUsuario = d.idusuario
INNER JOIN suscripcion s ON s.idusuario = u.idUsuario
INNER JOIN pagos p ON s.idpagos = p.idPagos
GROUP BY f.TipoFormaPago;

-- 3 Listar las canciones que tienen los artistas cuyo nombre contiene la letra “r” y pertenecen al código de género 20.

SELECT c.titulo, ar.Nombre, g.idGenero
FROM cancion c 
INNER JOIN album a ON c.IdAlbum = a.idAlbum
INNER JOIN artista ar ON a.idArtista = ar.idArtista
INNER JOIN generoxcancion gc ON c.idCancion = gc.IdCancion
INNER JOIN genero g ON gc.IdGenero = g.idGenero
WHERE ar.Nombre LIKE '%r%' AND g.idGenero = 20;

-- 4 Listar todos los usuarios que pagaron con efectivo y la fecha de pago sea del 2020

SELECT u.nombreusuario, tp.TipoFormaPago, p.fechaPago 
FROM usuario u 
INNER JOIN datospagoxusuario dxu ON u.idUsuario = dxu.idusuario
INNER JOIN tipoformapago tp ON dxu.idTipoFormaPago = tp.idTipoFormaPago
INNER JOIN suscripcion s ON u.idUsuario = s.idusuario
INNER JOIN pagos p ON s.idpagos = p.idPagos
WHERE tp.TipoFormaPago = 'efectivo' AND YEAR(p.fechaPago) = 2020;

-- 5 Generar un reporte de todas las canciones, cuyo álbum no posee imagen de portada

SELECT c.titulo, a.imagenportada
FROM cancion c 
LEFT JOIN album a ON c.IdAlbum = a.idAlbum
WHERE a.imagenportada IS NULL;

-- 6 Genera un reporte por género e informar la cantidad de canciones que posee. Si una canción tiene más de un género, debe ser incluida en la cuenta de cada uno de esos géneros

SELECT g.Genero, count(c.titulo)
FROM genero g 
LEFT JOIN generoxcancion gc ON g.idGenero = gc.IdGenero
LEFT JOIN cancion c ON gc.IdCancion = c.idCancion
GROUP BY g.Genero;

-- 7 Listar todos las playlist que no están en estado activo y a que usuario pertenecen, ordenado por la fecha de eliminación

SELECT ep.descripcion, u.nombreusuario, p.Fechaeliminada
FROM estadoplaylist ep 
INNER JOIN playlist p ON ep.idEstadoPlaylist = p.idestado
INNER JOIN usuario u ON p.idusuario = u.idUsuario
WHERE ep.descripcion = 'eliminada'
ORDER BY p.Fechaeliminada;

-- 8 Generar un reporte que muestre por tipo de usuario, la cantidad de usuarios que posee

SELECT tu.TipoUsuario, count(*)
FROM tipousuario tu
INNER JOIN usuario u ON tu.idTipoUsuario = u.IdTipoUsuario
GROUP BY tu.TipoUsuario;

-- 9  Listar la suma total obtenida por cada tipo de suscripción, en el periodo del 01-01-2020 al 31-12-2020

SELECT sum(p.Importe), tu.TipoUsuario
FROM tipousuario tu
INNER JOIN suscripcion s ON tu.idTipoUsuario = s.IdTipoUsuario
INNER JOIN pagos p ON s.idpagos = p.idPagos
WHERE p.fechaPago BETWEEN '01-01-2020' AND '31-12-2020'
GROUP BY tu.TipoUsuario;

-- revisar

-- 10 Listar el álbum y la discográfica que posea la canción con más reproducciones

SELECT a.titulo, d.nombre, max(c.cantreproduccion)
FROM album a 
INNER JOIN discografica d ON a.iddiscografica = d.idDiscografica
INNER JOIN cancion c ON a.idAlbum = c.IdAlbum;


-- PARTE 2

-- 11 Listar todos los usuarios que no hayan generado una playlist

SELECT u.nombreusuario, p.idPlaylist
FROM usuario u 
LEFT JOIN playlist p ON u.idUsuario = p.idusuario
WHERE p.idPlaylist IS NULL;

-- 12 Listar todas las canciones hayan o no recibido likes (cuántos) y aclarar si han sido reproducidas o no. Listar las 15 primeras ordenadas como si fueran un Ranking

SELECT c.titulo, c.cantlikes, c.cantreproduccion,
	CASE
		WHEN cantreproduccion = 0 THEN 'No reproducida'
        WHEN cantreproduccion IS NULL THEN 'No reproducida'
		ELSE 'Reproducida'
	END reproducciones
FROM cancion c
ORDER BY c.cantlikes DESC
LIMIT 15;


-- 13 Generar un reporte con el nombre del artista y el nombre de la canción que no pertenecen a ninguna lista.

SELECT a.Nombre, c.titulo, p.idPlaylist
FROM artista a 
LEFT JOIN album al ON a.idArtista = al.idArtista
LEFT JOIN cancion c ON al.idAlbum = c.IdAlbum
LEFT JOIN playlistxcancion pc ON pc.Idcancion = c.idCancion
LEFT JOIN playlist p ON pc.IdPlaylist = p.idPlaylist
WHERE p.idPlaylist IS NULL;


-- 14 Listar todas las canciones, el nombre del artista, la razón social de la discográfica y la cantidad de veces que fue reproducida.

SELECT c.titulo, a.Nombre, d.nombre, c.cantreproduccion
FROM cancion c 
INNER JOIN album al ON c.IdAlbum = al.idAlbum
INNER JOIN artista a ON al.idArtista = a.idArtista
INNER JOIN discografica d ON al.iddiscografica = d.idDiscografica;



-- 15 Listar todas las discográficas, que pertenezcan a Inglaterra y la cantidad de álbumes que hayan editado.

SELECT d.nombre, p.Pais, count(a.idAlbum)
FROM discografica d
INNER JOIN pais p ON d.idPais = p.idPais
INNER JOIN album a ON d.idDiscografica = a.iddiscografica
WHERE p.Pais = 'Inglaterra'
GROUP BY d.nombre;


-- 16 Listar a todos los artistas que no poseen ningún álbum.

SELECT a.Nombre, al.idAlbum
FROM artista a 
LEFT JOIN album al ON a.idArtista = al.idArtista
WHERE al.idAlbum IS NULL;

-- 17  Listar todos los álbumes que tengan alguna canción que posea más de un género

SELECT al.titulo album, c.titulo cancion, count(g.idGenero) generos
FROM album al 
INNER JOIN cancion c ON al.idAlbum = c.IdAlbum
INNER JOIN generoxcancion gc ON gc.IdCancion = c.idCancion
INNER JOIN genero g ON gc.IdGenero = g.idGenero
GROUP BY al.titulo, c.titulo
HAVING count(g.idGenero) > 1;

-- 18 Generar un reporte por usuario , listando las suscripciones que tiene o tuvo, el importe que abonó y los datos de las formas de pago con que lo realizó.

SELECT u.nombreusuario, s.idSuscripcion, p.Importe, fp.TipoFormaPago
FROM usuario u
LEFT JOIN suscripcion s ON u.idUsuario = s.idusuario
LEFT JOIN pagos p ON s.idpagos = p.idPagos
LEFT JOIN datospagoxusuario du ON du.idusuario = u.idUsuario
LEFT JOIN tipoformapago fp ON fp.idTipoFormaPago = du.idTipoFormaPago;





