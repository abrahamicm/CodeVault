PHPStan es una herramienta de análisis estático para PHP que ayuda a encontrar errores en el código y mejorar la calidad del mismo. Proporciona verificaciones de tipo estático y detección de posibles problemas en tiempo de ejecución.

A continuación, se muestra una cheatsheet con algunos comandos y características clave de PHPStan:

## Instalación

```
composer require --dev phpstan/phpstan
```

## Configuración

Crear un archivo `phpstan.neon` en la raíz del proyecto con la siguiente configuración básica:

```neon
includes:
    - vendor/phpstan/phpstan/extension.neon

parameters:
    level: 5
    paths:
        - src
```

## Ejecutar PHPStan

```
vendor/bin/phpstan analyse
```

## Niveles de severidad

PHPStan utiliza niveles de severidad para indicar la gravedad de los problemas encontrados:

- Level 0: Ningún análisis adicional.
- Level 1: Análisis básico (predeterminado).
- Level 2: Análisis más estricto.
- Level 3: Análisis adicional, incluyendo reglas de codificación más estrictas.
- Level 4: Análisis experimental.
- Level 5: Análisis para proyectos grandes y bien probados.

Puedes cambiar el nivel de severidad en el archivo `phpstan.neon`.

## Anotaciones de tipo

PHPStan se basa en anotaciones de tipo para inferir y verificar el tipo de variables, argumentos de función, valores de retorno, etc. Utiliza las siguientes anotaciones:

- `@var`: Anotación para declarar el tipo de una variable.
- `@param`: Anotación para declarar el tipo de un argumento de función.
- `@return`: Anotación para declarar el tipo de valor de retorno de una función.
- `@throws`: Anotación para declarar el tipo de una excepción lanzada por una función.

Ejemplo:

```php
/** @var string */
$nombre = "Juan";

/**
 * @param int $edad
 * @return string
 */
function obtenerSaludo($edad) {
    // ...
}
```

## Ignorar errores

Si necesitas ignorar errores específicos de PHPStan, puedes utilizar las siguientes anotaciones:

- `@phpstan-ignore-next-line`: Ignora el siguiente error en la línea siguiente.
- `@phpstan-ignore-line`: Ignora todos los errores en la línea actual.
- `@phpstan-ignore-error`: Ignora todos los errores en el archivo actual.

Ejemplo:

```php
// @phpstan-ignore-next-line
$variableNoDeclarada = 123;
```

## Extensiones y configuración adicional

PHPStan permite configuraciones adicionales y extensiones para adaptarse a tus necesidades específicas. Puedes consultar la documentación oficial de PHPStan para obtener más información sobre las extensiones y configuraciones disponibles.

Esta cheatsheet proporciona solo una introducción básica a PHPStan. Recuerda consultar la documentación oficial y explorar todas las características y opciones que ofrece para aprovechar al máximo esta valiosa herramienta de análisis estático para PHP.