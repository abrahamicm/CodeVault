```sql
-- Sintaxis básica para crear una tabla
CREATE TABLE nombre_tabla (
  columna1 tipo_dato_restricciones,
  columna2 tipo_dato_restricciones,
  ...
);

-- Ejemplo:
CREATE TABLE usuarios (
  id INT PRIMARY KEY,
  nombre VARCHAR(50),
  edad INT,
  correo VARCHAR(100) NOT NULL,
  fecha_registro DATE
);
```

```sql
-- Agregar restricciones a las columnas
CREATE TABLE nombre_tabla (
  columna1 tipo_dato_restricciones,
  columna2 tipo_dato_restricciones,
  ...
  CONSTRAINT nombre_restriccion PRIMARY KEY (columna1),
  CONSTRAINT nombre_restriccion UNIQUE (columna2),
  CONSTRAINT nombre_restriccion CHECK (condición),
  CONSTRAINT nombre_restriccion FOREIGN KEY (columna) REFERENCES otra_tabla(columna)
);

-- Ejemplo:
CREATE TABLE usuarios (
  id INT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  correo VARCHAR(100) UNIQUE,
  edad INT CHECK (edad >= 18),
  departamento_id INT,
  CONSTRAINT fk_departamento FOREIGN KEY (departamento_id) REFERENCES departamentos(id)
);
```

```sql
-- Crear una tabla basada en otra existente
CREATE TABLE nueva_tabla AS
SELECT columna1, columna2, ...
FROM tabla_existente
WHERE condición;

-- Ejemplo:
CREATE TABLE usuarios_nuevos AS
SELECT id, nombre, correo
FROM usuarios
WHERE fecha_registro >= '2022-01-01';
```
