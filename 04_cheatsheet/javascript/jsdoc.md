
1. Documentar una función:
```javascript
/**
 * Descripción de la función.
 * @param {tipo} nombreParametro - Descripción del parámetro.
 * @returns {tipo} - Descripción del valor de retorno.
 */
function nombreFuncion(nombreParametro) {
  // Cuerpo de la función
}
```

2. Documentar una variable:
```javascript
/**
 * Descripción de la variable.
 * @type {tipo}
 */
var nombreVariable;
```

3. Documentar una clase:
```javascript
/**
 * Descripción de la clase.
 * @class
 */
class NombreClase {
  constructor() {
    // Constructor de la clase
  }
}
```

4. Documentar un método de clase:
```javascript
/**
 * Descripción del método.
 * @memberof NombreClase
 * @instance
 * @param {tipo} nombreParametro - Descripción del parámetro.
 * @returns {tipo} - Descripción del valor de retorno.
 */
NombreClase.prototype.nombreMetodo = function(nombreParametro) {
  // Cuerpo del método
};
```

5. Documentar un evento:
```javascript
/**
 * Descripción del evento.
 * @event NombreEvento
 */
```

6. Documentar una propiedad de objeto:
```javascript
/**
 * Descripción de la propiedad.
 * @type {tipo}
 */
objeto.nombrePropiedad;
```

7. Otros tags comunes:
- `@param`: Documenta un parámetro de una función.
- `@returns`: Documenta el valor de retorno de una función.
- `@throws`: Documenta una excepción lanzada por una función.
- `@deprecated`: Indica que el elemento está obsoleto y se debe evitar.
- `@example`: Proporciona un ejemplo de uso.

