```sql
-- Sintaxis básica
UPDATE tabla
SET columna1 = valor1, columna2 = valor2, ...
[WHERE condición];
```

```sql
-- Actualizar todos los registros de una tabla
UPDATE tabla
SET columna = valor;
```

```sql
-- Actualizar registros seleccionados con la cláusula WHERE
UPDATE tabla
SET columna = valor
WHERE condición;
```

```sql
-- Actualizar múltiples columnas
UPDATE tabla
SET columna1 = valor1, columna2 = valor2, ...
WHERE condición;
```

```sql
-- Actualizar utilizando cálculos y funciones
UPDATE tabla
SET columna = columna + valor;
```

```sql
-- Actualizar utilizando valores de otra tabla
UPDATE tabla1
SET columna = tabla2.columna
FROM tabla2
WHERE tabla1.id = tabla2.id;
```

```sql
-- Actualizar utilizando una subconsulta
UPDATE tabla1
SET columna = (
  SELECT columna
  FROM tabla2
  WHERE condición
)
WHERE condición;
```
