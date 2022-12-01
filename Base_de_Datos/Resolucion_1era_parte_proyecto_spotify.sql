-- EJERCITACION SPOTIFY - 1ERA PARTE

/*1. Mostrar el nombre de usuario y contar la cantidad de playlist que tiene*/
select nombreusuario, usuario.idusuario, count(idPlaylist) as cantidad from playlist
join usuario
on usuario.idUsuario = playlist.idusuario
group by nombreusuario;

/*2. Generar un reporte, donde se muestre el método de pago , la cantidad de operaciones que se realizaron con cada uno y el importe total .*/

 select t.tipoformapago, count(p.idPagos) as cantidad_operaciones, sum(importe) as importe_total  
 from tipoformapago t
 join datospagoxusuario dp on t.idTipoFormaPago = dp.idTipoFormaPago
 join usuario u on u.idUsuario = dp.idusuario
 join suscripcion s on s.idusuario = u.idUsuario
 join pagos p on p.idPagos = s.idpagos
 group by t.TipoFormaPago;
 

/*3. Listar las canciones que tienen los artistas cuyo nombre contiene la letra “r” y el pertenecen al código de género 20.
*/

select c.titulo from cancion c
join generoxcancion gc
on c.idCancion = gc.IdCancion
join album a
on a.idAlbum = c.IdAlbum
join artista ar
on a.idArtista = ar.idArtista
where ar.nombre like "%r%" and IdGenero = 20;

/* 4.Listar todos los usuarios que que pagaron con efectivo y la fecha de pago sea del 2020*/

select distinct nombreusuario 
from tipoformapago t
join datospagoxusuario dp on t.idTipoFormaPago = dp.idTipoFormaPago
join usuario u on u.idUsuario = dp.idusuario
join suscripcion s on s.idusuario = u.idUsuario
join pagos p on p.idPagos = s.idpagos
where TipoFormaPago = "efectivo" and year(fechaPago) = 2020;

/*5. Generar un reporte de todas las canciones, cuyo álbum no posee imagen de portada. */

select c.* from cancion c
join album a
on a.idAlbum = c.IdAlbum
where imagenportada is null;

-- 6. Genera un reporte por género e informar la cantidad de canciones que posee. 
-- Si una canción tiene más de un género, debe ser incluida en la cuenta de cada uno de esos géneros.

select g.genero, count(c.idCancion) as cantidad from cancion c
join generoxcancion gc
on c.idCancion = gc.IdCancion
join genero g
on g.idGenero = gc.IdGenero
group by g.genero;

-- 7. Listar todos las playlist que no están en estado activo y a que usuario pertenecen , ordenado por la fecha de eliminación.
select playlist.titulo, usuario.nombreusuario, descripcion,Fechaeliminada from playlist
join estadoplaylist
on playlist.idestado = estadoplaylist.idEstadoPlaylist
join usuario
on usuario.idUsuario = playlist.idusuario
where estadoplaylist.descripcion = "eliminada"
order by Fechaeliminada;

-- 8. Generar un reporte que muestre por tipo de usuario, la cantidad de usuarios que posee.
select t.TipoUsuario, count(idUsuario) as cantidad from usuario u
join tipousuario t
on t.idTipoUsuario = u.IdTipoUsuario
group by t.TipoUsuario;

-- 9.Listar la suma total obtenida por cada tipo de suscripción, en el periodo del 01-01-2020 al 31-12-2020
select tu.TipoUsuario, sum(importe) as suma_total from suscripcion s
join pagos p
on s.idpagos = p.idPagos
join tipousuario tu
on tu.idTipoUsuario = s.IdTipoUsuario
where fechaPago between "2020-01-01" and "2020-12-31"
group by tu.TipoUsuario;

-- 10. Listar el álbum y la discográfica que posea la canción con más reproducciones.
select a.titulo, d.nombre from album a
join discografica d
on a.iddiscografica = d.idDiscografica
join cancion c
on c.IdAlbum = a.idAlbum
order by c.cantreproduccion desc
limit 1;