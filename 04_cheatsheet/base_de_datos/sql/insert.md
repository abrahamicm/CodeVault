
## Sintaxis básica

```sql
INSERT INTO tabla (columna1, columna2, ...)
VALUES (valor1, valor2, ...);
```

## Insertar valores en todas las columnas de una tabla

```sql
INSERT INTO tabla
VALUES (valor1, valor2, ...);
```

## Insertar múltiples filas en una sola sentencia

```sql
INSERT INTO tabla (columna1, columna2, ...)
VALUES (valor1, valor2, ...),
       (valor1, valor2, ...),
       (valor1, valor2, ...);
```

## Insertar valores NULL en una columna

```sql
INSERT INTO tabla (columna1, columna2)
VALUES (valor1, NULL);
```

## Insertar valores desde una consulta SELECT

```sql
INSERT INTO tabla (columna1, columna2, ...)
SELECT columna1, columna2, ...
FROM otra_tabla
WHERE condición;
```

## Insertar valores con una subconsulta

```sql
INSERT INTO tabla (columna1, columna2, ...)
VALUES (
  (SELECT columna1 FROM otra_tabla WHERE condición),
  valor2,
  ...
);
```
