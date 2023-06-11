```sql
-- Sintaxis básica para eliminar una tabla
DROP TABLE nombre_tabla;

-- Ejemplo:
DROP TABLE usuarios;
```

```sql
-- Sintaxis básica para eliminar una base de datos
DROP DATABASE nombre_base_datos;

-- Ejemplo:
DROP DATABASE mi_basedatos;
```

```sql
-- Sintaxis básica para eliminar un índice
DROP INDEX nombre_indice ON nombre_tabla;

-- Ejemplo:
DROP INDEX idx_usuarios_nombre ON usuarios;
```

```sql
-- Sintaxis básica para eliminar una vista
DROP VIEW nombre_vista;

-- Ejemplo:
DROP VIEW vista_usuarios;
```

```sql
-- Sintaxis básica para eliminar una restricción
ALTER TABLE nombre_tabla
DROP CONSTRAINT nombre_restriccion;

-- Ejemplo:
ALTER TABLE usuarios
DROP CONSTRAINT fk_departamento;
```
