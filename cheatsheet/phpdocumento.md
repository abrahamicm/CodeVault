1. Documentar una función:
```php
/**
 * Descripción de la función.
 *
 * @param tipo $nombreParametro Descripción del parámetro.
 * @return tipo Descripción del valor de retorno.
 */
function nombreFuncion($nombreParametro) {
    // Cuerpo de la función
}
```

2. Documentar una clase:
```php
/**
 * Descripción de la clase.
 */
class NombreClase {
    // Cuerpo de la clase
}
```

3. Documentar un método de clase:
```php
/**
 * Descripción del método.
 *
 * @param tipo $nombreParametro Descripción del parámetro.
 * @return tipo Descripción del valor de retorno.
 */
public function nombreMetodo($nombreParametro) {
    // Cuerpo del método
}
```

4. Documentar una propiedad de clase:
```php
/**
 * Descripción de la propiedad.
 *
 * @var tipo
 */
public $nombrePropiedad;
```

5. Documentar una constante:
```php
/**
 * Descripción de la constante.
 *
 * @var tipo
 */
const NOMBRE_CONSTANTE = valor;
```

6. Otros tags comunes:
- `@param`: Documenta un parámetro de una función o método.
- `@return`: Documenta el valor de retorno de una función o método.
- `@throws`: Documenta una excepción lanzada por una función o método.
- `@var`: Documenta el tipo de una variable o propiedad.
- `@access`: Define el nivel de acceso (public, protected, private) de una clase, método o propiedad.
- `@deprecated`: Indica que el elemento está obsoleto y se debe evitar.
- `@example`: Proporciona un ejemplo de uso.
