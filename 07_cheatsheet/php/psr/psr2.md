# Cheatsheet del estándar PSR-2: Coding Style Guide

## Espacios en blanco y sangría
- Las indentaciones deben consistir en 4 espacios. No se deben utilizar tabulaciones para la indentación.
- No debe haber espacio en blanco al final de ninguna línea.
- Se pueden usar líneas en blanco para mejorar la legibilidad del código.
- Los corchetes de apertura deben ir en la misma línea que la declaración, sin espacios en blanco.
- Los corchetes de cierre deben estar en una línea separada y alineados verticalmente con la declaración correspondiente.

```php
if ($condition) {
    // Code here
} else {
    // Code here
}
```

## Líneas y longitud de línea
- Las líneas no deben tener más de 120 caracteres.
- Si una línea excede los 120 caracteres, debe dividirse en varias líneas, siguiendo estas reglas:
    - El operador de división (`.` en concatenaciones) debe estar al final de la línea anterior.
    - La parte siguiente debe estar en la siguiente línea, sangrada con 4 espacios.

```php
$result = 'This is a very long string that exceeds the 120 character limit. ' .
          'To maintain readability, it should be split into multiple lines.';
```

## Etiquetas PHP
- Deben utilizarse las etiquetas de apertura completas `<?php` y `<?=`.
- No debe haber una línea en blanco después de la etiqueta de apertura `<?php`.

```php
<?php

echo 'Hello, World!';
```

## Nombres de variables y funciones
- Los nombres de variables y funciones deben ser descriptivos y estar en camelCase.
- Los nombres de las variables deben comenzar con una letra minúscula.
- Los nombres de las funciones deben comenzar con una letra mayúscula.

```php
$myVariable = 'value';

function calculateSum()
{
    // Code here
}
```

## Operadores y espacios en blanco
- Los operadores deben estar rodeados de espacios en blanco.
- Los operadores de concatenación deben tener un espacio antes y después de ellos.

```php
$result = $value1 + $value2;
$message = 'Hello, ' . $name . '!';
```
