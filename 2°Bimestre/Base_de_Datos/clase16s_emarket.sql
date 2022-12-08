
-- Parte 1: Realizar una consulta de la facturación de e-market.

SELECT f.FacturaID, f.FechaFactura, co.Compania correo, cl.Compania cliente, ca.CategoriaNombre categoria, p.ProductoNombre producto, fd.PrecioUnitario, fd.Cantidad
FROM facturas f
INNER JOIN correos co
ON f.EnvioVia = co.CorreoID
INNER JOIN clientes cl
ON f.ClienteID = cl.ClienteID
INNER JOIN facturadetalle fd
ON fd.FacturaID = f.FacturaID
INNER JOIN productos p 
ON fd.ProductoID = p.ProductoID
INNER JOIN categorias ca 
ON p.CategoriaID = ca.CategoriaID;

-- Parte 2
-- 1) Listar todas las categorías junto con información de sus productos. Incluir todas las categorías aunque no tengan productos.

SELECT c.CategoriaNombre categoria, p.*
FROM categorias c 
LEFT JOIN productos p
ON c.CategoriaID = p.CategoriaID;

-- 2) Listar la información de contacto de los clientes que no hayan comprado nunca en emarket.

SELECT c.Contacto, f.FacturaID
FROM clientes c 
LEFT JOIN facturas f 
ON c.ClienteID = f.ClienteID
WHERE f.FacturaID IS NULL;

-- 3) Realizar un listado de productos. Para cada uno indicar su nombre, categoría, y la información de contacto de su proveedor. Tener en cuenta que puede haber productos para los cuales no se indicó quién es el proveedor.

SELECT p.ProductoNombre producto, c.CategoriaNombre categoria, pr.Contacto proveedor
FROM productos p
LEFT JOIN proveedores pr 
ON p.ProveedorID = pr.ProveedorID
LEFT JOIN categorias c 
ON p.CategoriaID = c.CategoriaID;

-- 4) Para cada categoría listar el promedio del precio unitario de sus productos.

SELECT c.CategoriaNombre, avg(p.PrecioUnitario)
FROM categorias c 
LEFT JOIN productos p ON c.CategoriaID = p.CategoriaID
GROUP BY c.CategoriaNombre;

-- 5) Para cada cliente, indicar la última factura de compra. Incluir a los clientes que nunca hayan comprado en e-market.

SELECT c.Compania, max(f.FechaFactura)
FROM clientes c 
LEFT JOIN facturas f ON c.ClienteID = f.ClienteID
GROUP BY c.Compania;

-- 6) Todas las facturas tienen una empresa de correo asociada (enviovia). Generar un listado con todas las empresas de correo, y la cantidad de facturas correspondientes. Realizar la consulta utilizando RIGHT JOIN.

SELECT c.Compania, f.FacturaID
FROM facturas f 
RIGHT JOIN correos c ON f.EnvioVia = c.CorreoID;