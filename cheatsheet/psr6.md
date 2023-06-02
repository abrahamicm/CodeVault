Aquí tienes un cheatsheet de PSR-6 (PHP Standard Recommendation 6) en formato Markdown:

# Cheatsheet de PSR-6

## Interfaces principales

### CacheItemInterface

```php
interface CacheItemInterface
{
    public function getKey(): string;
    public function get(): mixed;
    public function isHit(): bool;
    public function set($value): static;
    public function expiresAt(DateTimeInterface $expiration): static;
    public function expiresAfter(int|DateInterval $time): static;
}
```

### CacheItemPoolInterface

```php
interface CacheItemPoolInterface
{
    public function getItem(string $key): CacheItemInterface;
    public function getItems(array $keys = []): iterable;
    public function hasItem(string $key): bool;
    public function clear(): bool;
    public function deleteItem(string $key): bool;
    public function deleteItems(array $keys): bool;
    public function save(CacheItemInterface $item): bool;
    public function saveDeferred(CacheItemInterface $item): bool;
    public function commit(): bool;
}
```

## Implementación básica

### Crear una implementación de CacheItemInterface

```php
use Psr\Cache\CacheItemInterface;

class MyCacheItem implements CacheItemInterface
{
    // Implementar los métodos de la interfaz
}
```

### Crear una implementación de CacheItemPoolInterface

```php
use Psr\Cache\CacheItemInterface;
use Psr\Cache\CacheItemPoolInterface;

class MyCacheItemPool implements CacheItemPoolInterface
{
    // Implementar los métodos de la interfaz
}
```

## Ejemplo de uso

```php
use Psr\Cache\CacheItemPoolInterface;

// Crear un objeto de caché
$cache = new MyCacheItemPool();

// Obtener un elemento de la caché
$item = $cache->getItem('clave');

// Verificar si el elemento está disponible
if ($item->isHit()) {
    // Obtener el valor del elemento
    $valor = $item->get();
} else {
    // El elemento no está en la caché

    // Obtener el valor de alguna otra fuente
    $valor = obtenerValorDesdeFuenteExterna();

    // Establecer el valor en el elemento de la caché
    $item->set($valor);

    // Guardar el elemento en la caché
    $cache->save($item);
}
```

## Notas adicionales

- Asegúrate de utilizar una implementación de `CacheItemPoolInterface` compatible con PSR-6 o crea tu propia implementación siguiendo las especificaciones de la interfaz.

- PSR-6 es una especificación y no una implementación concreta. Puedes encontrar bibliotecas y sistemas que implementan PSR-6, como Symfony Cache, Doctrine Cache, entre otros.

- Consulta la documentación oficial de la biblioteca o sistema que elijas para obtener información adicional sobre cómo configurar y utilizar PSR-6 en tu proyecto.

Recuerda que PSR-6 es una recomendación de estándar y su objetivo es proporcionar una interfaz común para trabajar con cachés en PHP. La implementación específica puede variar dependiendo de la biblioteca o sistema que utilices.