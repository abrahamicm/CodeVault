# Cheatsheet de PSR-16

## Interfaces principales

### CacheItemInterface

```php
interface CacheItemInterface
{
    public function getKey(): string;
    public function get(): mixed;
    public function isHit(): bool;
    public function set($value): bool;
    public function expiresAt($expiration): bool;
    public function expiresAfter($time): bool;
}
```

### CacheInterface

```php
interface CacheInterface
{
    public function get($key, $default = null);
    public function set($key, $value, $ttl = null): bool;
    public function delete($key): bool;
    public function clear(): bool;
    public function getMultiple($keys, $default = null): array;
    public function setMultiple($values, $ttl = null): bool;
    public function deleteMultiple($keys): bool;
    public function has($key): bool;
}
```

## Implementación básica

### Crear una implementación de CacheItemInterface

```php
use Psr\SimpleCache\CacheItemInterface;

class MyCacheItem implements CacheItemInterface
{
    // Implementar los métodos de la interfaz
}
```

### Crear una implementación de CacheInterface

```php
use Psr\SimpleCache\CacheInterface;

class MyCache implements CacheInterface
{
    // Implementar los métodos de la interfaz
}
```

## Ejemplo de uso

```php
use Psr\SimpleCache\CacheInterface;

// Crear un objeto de caché
$cache = new MyCache();

// Guardar un valor en la caché
$cache->set('clave', 'valor', 3600); // Con una expiración de 1 hora (3600 segundos)

// Obtener un valor de la caché
$valor = $cache->get('clave');

// Verificar si un valor existe en la caché
if ($cache->has('clave')) {
    // Realizar alguna acción
}

// Eliminar un valor de la caché
$cache->delete('clave');

// Limpiar todos los valores de la caché
$cache->clear();
```

## Notas adicionales

- PSR-16 es una especificación que define una interfaz simple para la manipulación de cachés en PHP. Proporciona métodos básicos para guardar, obtener y eliminar valores de una caché.

- Consulta la documentación oficial de las implementaciones que elijas para obtener información adicional sobre cómo configurar y utilizar PSR-16 en tu proyecto.

Recuerda que PSR-16 es una recomendación de estándar y la implementación específica puede variar dependiendo de la biblioteca o sistema que utilices.