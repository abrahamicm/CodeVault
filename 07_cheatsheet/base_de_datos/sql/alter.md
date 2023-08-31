```sql
-- Sintaxis básica para añadir una columna a una tabla existente
ALTER TABLE nombre_tabla
ADD columna tipo_dato_restricciones;

-- Ejemplo:
ALTER TABLE usuarios
ADD direccion VARCHAR(100);
```

```sql
-- Sintaxis básica para modificar el tipo de datos de una columna
ALTER TABLE nombre_tabla
ALTER COLUMN columna tipo_dato;

-- Ejemplo:
ALTER TABLE usuarios
ALTER COLUMN edad INT;
```

```sql
-- Sintaxis básica para renombrar una columna en una tabla existente
ALTER TABLE nombre_tabla
RENAME COLUMN nombre_columna TO nuevo_nombre_columna;

-- Ejemplo:
ALTER TABLE usuarios
RENAME COLUMN direccion TO direccion_envio;
```

```sql
-- Sintaxis básica para eliminar una columna de una tabla existente
ALTER TABLE nombre_tabla
DROP COLUMN nombre_columna;

-- Ejemplo:
ALTER TABLE usuarios
DROP COLUMN direccion_envio;
```

```sql
-- Sintaxis básica para modificar la estructura de una tabla
ALTER TABLE nombre_tabla
ALTER COLUMN columna tipo_dato_restricciones,
ADD CONSTRAINT nombre_restriccion PRIMARY KEY (columna),
DROP CONSTRAINT nombre_restriccion;

-- Ejemplo:
ALTER TABLE usuarios
ALTER COLUMN edad INT NOT NULL,
ADD CONSTRAINT pk_usuarios PRIMARY KEY (id),
DROP CONSTRAINT fk_departamento;
```
