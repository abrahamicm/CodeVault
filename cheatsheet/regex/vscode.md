# 1. Búsqueda básica:
- `.`: Cualquier carácter excepto salto de línea.
- `\w`: Cualquier carácter alfanumérico.
- `\d`: Cualquier dígito.
- `\s`: Cualquier espacio en blanco.

# 2. Cuantificadores:
- `*`: Cero o más repeticiones.
- `+`: Una o más repeticiones.
- `?`: Cero o una repetición.
- `{n}`: Exactamente n repeticiones.
- `{n,}`: Al menos n repeticiones.
- `{n,m}`: Entre n y m repeticiones.

# 3. Conjuntos de caracteres:
- `[abc]`: Cualquier carácter a, b o c.
- `[a-z]`: Cualquier carácter entre a y z en minúscula.
- `[A-Z]`: Cualquier carácter entre A y Z en mayúscula.
- `[^abc]`: Cualquier carácter que no sea a, b ni c.

# 4. Anclas:
- `^`: Coincide con el inicio de una línea.
- `$`: Coincide con el final de una línea.
- `\b`: Coincide con un límite de palabra.

# 5. Grupos y capturas:
- `()`: Agrupa una serie de caracteres y captura el resultado.
- `(?:)`: Agrupa sin capturar.

# 6. Operadores lógicos:
- `|`: Coincide con cualquiera de las opciones separadas por el operador.

# 7. Escape de caracteres especiales:
- `\`: Escapa un carácter especial.

# 8. Modificadores:
- `i`: Realiza una búsqueda sin distinción entre mayúsculas y minúsculas.
- `g`: Realiza una búsqueda global en todo el texto.

Para utilizar la captura de grupos, puedes acceder a los resultados capturados utilizando variables como `$# 1`, `$# 2`, etc., o mediante métodos específicos dependiendo del entorno o lenguaje que estés utilizando.