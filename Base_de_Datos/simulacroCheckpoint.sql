SELECT u.nombreusuario, COUNT(p.idPlaylist)
FROM usuario u
LEFT JOIN playlist p
ON u.idUsuario = p.idusuario
GROUP BY u.nombreusuario;

SELECT f.tipoFormaPago, p.idPagos, SUM(Importe)
FROM tipoformapago f
LEFT JOIN datospagousuario d
ON f.idTipoFormaPago = d.idTipoFormaPago
LEFT JOIN 

