## SQL Cheatsheet

### Bases de datos

1. **Crear una base de datos**:
```sql
CREATE DATABASE nombre_base_datos;
```

2. **Eliminar una base de datos**:
```sql
DROP DATABASE nombre_base_datos;
```

3. **Seleccionar una base de datos**:
```sql
USE nombre_base_datos;
```

### Tablas

1. **Crear una tabla**:
```sql
CREATE TABLE nombre_tabla (
   columna1 tipo_dato1,
   columna2 tipo_dato2,
   ...
);
```

2. **Eliminar una tabla**:
```sql
DROP TABLE nombre_tabla;
```

3. **Modificar una tabla**:
- Agregar una columna:
   ```sql
   ALTER TABLE nombre_tabla
   ADD COLUMN nombre_columna tipo_dato;
   ```

- Eliminar una columna:
   ```sql
   ALTER TABLE nombre_tabla
   DROP COLUMN nombre_columna;
   ```

4. **Mostrar la estructura de una tabla**:
```sql
DESC nombre_tabla;
```

### Consultas

1. **Seleccionar registros de una tabla**:
```sql
SELECT columna1, columna2, ...
FROM nombre_tabla
WHERE condicion;
```

2. **Insertar registros en una tabla**:
```sql
INSERT INTO nombre_tabla (columna1, columna2, ...)
VALUES (valor1, valor2, ...);
```

3. **Actualizar registros en una tabla**:
```sql
UPDATE nombre_tabla
SET columna1 = valor1, columna2 = valor2, ...
WHERE condicion;
```

4. **Eliminar registros de una tabla**:
```sql
DELETE FROM nombre_tabla
WHERE condicion;
```

5. **Ordenar registros**:
```sql
SELECT columna1, columna2, ...
FROM nombre_tabla
ORDER BY columna ASC/DESC;
```

6. **Unir tablas**:
```sql
SELECT columna1, columna2, ...
FROM tabla1
JOIN tabla2 ON tabla1.columna = tabla2.columna;
```

7. **Agrupar registros**:
```sql
SELECT columna, COUNT(*) as contador
FROM nombre_tabla
GROUP BY columna;
```

### Funciones de agregado

1. **Suma**:
```sql
SELECT SUM(columna) as suma
FROM nombre_tabla;
```

2. **Promedio**:
```sql
SELECT AVG(columna) as promedio
FROM nombre_tabla;
```

3. **Máximo**:
```sql
SELECT MAX(columna) as maximo
FROM nombre_tabla;
```

4. **Mínimo**:
```sql
SELECT MIN(columna) as minimo
FROM nombre_tabla;
```

