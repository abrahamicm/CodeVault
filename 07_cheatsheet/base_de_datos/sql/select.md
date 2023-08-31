```sql
-- Sintaxis básica
SELECT columnas
FROM tabla
[WHERE condición]
[GROUP BY columnas]
[HAVING condición]
[ORDER BY columnas]
```

```sql
-- Seleccionar todas las columnas de una tabla
SELECT *
FROM tabla;
```

```sql
-- Seleccionar columnas específicas
SELECT columna1, columna2, ...
FROM tabla;
```

```sql
-- Aplicar alias a columnas o tablas
SELECT columna AS alias
FROM tabla AS alias;
```

```sql
-- Filtrar registros con la cláusula WHERE
SELECT columnas
FROM tabla
WHERE condición;
```

```sql
-- Filtrar con operadores lógicos
SELECT columnas
FROM tabla
WHERE condición1 AND condición2;
```

```sql
-- Ordenar los resultados con ORDER BY
SELECT columnas
FROM tabla
ORDER BY columna ASC|DESC;
```

```sql
-- Agrupar resultados con GROUP BY
SELECT columnas, función_agregada(columna)
FROM tabla
GROUP BY columnas;
```

```sql
-- Filtrar grupos con HAVING
SELECT columnas, función_agregada(columna)
FROM tabla
GROUP BY columnas
HAVING condición;
```

```sql
-- Unir datos de varias tablas con JOIN
SELECT columnas
FROM tabla1
JOIN tabla2 ON tabla1.columna = tabla2.columna;
```

```sql
-- Realizar cálculos con funciones de agregado
SELECT función_agregado(columna)
FROM tabla;
```

```sql
-- Aplicar funciones de manipulación de texto
SELECT columna, FUNCION(columna)
FROM tabla;
```

```sql
-- Utilizar operadores de comparación
SELECT columnas
FROM tabla
WHERE columna > valor;
```

```sql
-- Utilizar la cláusula IN para verificar valores en un conjunto
SELECT columnas
FROM tabla
WHERE columna IN (valor1, valor2, ...);
```

```sql
-- Realizar coincidencias parciales con la cláusula LIKE
SELECT columnas
FROM tabla
WHERE columna LIKE 'patrón';
```
