# Cheatsheet de PSR-11

## Interfaces principales

### ContainerInterface

```php
interface ContainerInterface
{
    public function get($id);
    public function has($id): bool;
}
```

## Implementación básica

### Crear una implementación de ContainerInterface

```php
use Psr\Container\ContainerInterface;

class MyContainer implements ContainerInterface
{
    // Implementar los métodos de la interfaz
}
```

## Ejemplo de uso

```php
use Psr\Container\ContainerInterface;

// Crear un objeto de contenedor
$container = new MyContainer();

// Obtener una instancia de una clase registrada en el contenedor
$myObject = $container->get('MiClase');

// Verificar si el contenedor tiene una instancia registrada
if ($container->has('MiClase')) {
    // Realizar alguna acción
} else {
    // Manejar la falta de una instancia en el contenedor
}
```

## Notas adicionales

- PSR-11 es una especificación y no una implementación concreta. Puedes encontrar bibliotecas y sistemas que implementan PSR-11, como PHP-DI, Symfony Dependency Injection Component, entre otros.

- Consulta la documentación oficial de la biblioteca o sistema que elijas para obtener información adicional sobre cómo configurar y utilizar PSR-11 en tu proyecto.

Recuerda que PSR-11 es una recomendación de estándar y su objetivo es proporcionar una interfaz común para la inversión de control y la inyección de dependencias en PHP. La implementación específica puede variar dependiendo de la biblioteca o sistema que utilices.