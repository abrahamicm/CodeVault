# Cheatsheet del estándar PSR-1: Basic Coding Standard

## General
- Los archivos PHP deben usar únicamente las etiquetas de apertura `<?php` y `<?=`.
- Los archivos PHP deben omitir la etiqueta de cierre `?>` al final del archivo para evitar la inserción accidental de espacios en blanco o caracteres invisibles.

## Nombres de Clases, Interfaces y Traits
- Los nombres de clases deben ser declarados en PascalCase.
- Los nombres de interfaces deben ser declarados en PascalCase.
- Los nombres de traits deben ser declarados en PascalCase.

```php
class MyClass
{
    // ...
}

interface MyInterface
{
    // ...
}

trait MyTrait
{
    // ...
}
```

## Nombres de Constantes
- Los nombres de constantes deben ser declarados en mayúsculas con palabras separadas por guiones bajos.

```php
const MY_CONSTANT = 'value';
```

## Nombres de Métodos y Funciones
- Los nombres de métodos y funciones deben ser declarados en camelCase.

```php
class MyClass
{
    public function myMethod()
    {
        // ...
    }
}

function myFunction()
{
    // ...
}
```

## Uso de Espacios en Blanco
- No debe haber espacio en blanco al final de ninguna línea.
- Las líneas en blanco pueden ser utilizadas para mejorar la legibilidad del código.
- Las indentaciones deben consistir en espacios, no en tabulaciones.
- La indentación debe ser de 4 espacios.

```php
class MyClass
{
    public function myMethod()
    {
        if ($condition) {
            // Code here
        } else {
            // Code here
        }
    }
}
```
