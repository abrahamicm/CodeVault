# Cheatsheet del estándar PSR-4: Autoloading Standard

## Estructura de directorios y espacios de nombres
- La estructura de directorios debe seguir una convención basada en los espacios de nombres.
- Cada espacio de nombres se corresponde con una estructura de directorios.
- Los nombres de los espacios de nombres deben estar en PascalCase.
- Los nombres de las clases deben estar en PascalCase.
- Los nombres de los directorios deben estar en lowercase.

Ejemplo:
```
MiProyecto/
  ├─ src/
  │   └─ MiNamespace/
  │       ├─ Subnamespace/
  │       │   └─ MiClase.php
  │       └─ OtraClase.php
  └─ tests/
      └─ MiNamespace/
          └─ MiClaseTest.php
```

## Reglas de mapeo de nombres
- Cada segmento de un espacio de nombres corresponde a un directorio.
- Cada segmento de un nombre de clase corresponde a un archivo con la extensión `.php`.
- Los caracteres de subrayado (`_`) en los nombres de clases y espacios de nombres se traducen en la estructura de directorios.

Ejemplo:
- `MiNamespace\Subnamespace\MiClase` se traduce en `src/MiNamespace/Subnamespace/MiClase.php`.

## Autocarga
- Se recomienda utilizar un autocargador de clases compatible con PSR-4, como Composer.
- El autocargador debe seguir las reglas de mapeo de nombres definidas en PSR-4.
- El archivo `composer.json` debe contener la configuración del autocargador PSR-4.

Ejemplo:
```json
{
    "autoload": {
        "psr-4": {
            "MiNamespace\\": "src/",
            "MiNamespace\\Tests\\": "tests/"
        }
    }
}
```

## Uso de los espacios de nombres y clases
- En los archivos de código fuente, se debe utilizar la declaración `namespace` para indicar el espacio de nombres de las clases.
- Se debe utilizar la convención `use` para importar clases que se utilizan frecuentemente y evitar referencias completas a los espacios de nombres.

Ejemplo:
```php
<?php

namespace MiNamespace\Subnamespace;

use MiNamespace\OtraClase;

class MiClase
{
    // ...
}
```