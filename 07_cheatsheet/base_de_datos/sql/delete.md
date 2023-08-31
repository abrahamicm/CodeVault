```sql
-- Sintaxis básica
DELETE FROM tabla
[WHERE condición];
```

```sql
-- Eliminar todos los registros de una tabla
DELETE FROM tabla;
```

```sql
-- Eliminar registros seleccionados con la cláusula WHERE
DELETE FROM tabla
WHERE condición;
```

```sql
-- Eliminar utilizando una subconsulta
DELETE FROM tabla1
WHERE columna IN (
  SELECT columna
  FROM tabla2
  WHERE condición
);
```

```sql
-- Eliminar utilizando una JOIN
DELETE tabla1
FROM tabla1
JOIN tabla2 ON tabla1.columna = tabla2.columna
WHERE condición;
```
