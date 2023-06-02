# Cheatsheet de PSR-15

## Interfaces principales

### ServerRequestHandlerInterface

```php
interface ServerRequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface;
}
```

### MiddlewareInterface

```php
interface MiddlewareInterface
{
    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface;
}
```

### RequestHandlerInterface

```php
interface RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface;
}
```

## Uso básico

### Crear una implementación de MiddlewareInterface

```php
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;

class MyMiddleware implements MiddlewareInterface
{
    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        // Realizar acciones antes de pasar la solicitud al siguiente middleware

        $response = $handler->handle($request);

        // Realizar acciones después de recibir la respuesta del siguiente middleware

        return $response;
    }
}
```

### Crear una implementación de RequestHandlerInterface

```php
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Server\RequestHandlerInterface;

class MyRequestHandler implements RequestHandlerInterface
{
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        // Procesar la solicitud y devolver una respuesta

        return new MyResponse();
    }
}
```

### Encadenar middlewares y solicitar manejo

```php
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;

// Crear los objetos de middleware y RequestHandler
$middleware1 = new MyMiddleware1();
$middleware2 = new MyMiddleware2();
$requestHandler = new MyRequestHandler();

// Encadenar los middlewares en el orden deseado
$handler = $middleware1->process($middleware2, $requestHandler);

// Procesar la solicitud
$request = new MyServerRequest();
$response = $handler->handle($request);

// Manejar la respuesta
// ...
```

## Implementaciones populares

- **Slim Framework**: Un microframework para PHP que utiliza PSR-15 para la gestión de middlewares y solicitudes.

- **Zend Expressive**: Un framework de aplicaciones web basado en middleware que cumple con PSR-15.

## Notas adicionales

- PSR-15 es un estándar que define interfaces para middleware y manejo de solicitudes HTTP. Proporciona una forma estandarizada de encadenar y procesar middleware en PHP.

- Consulta la documentación oficial de las implementaciones que elijas para obtener información adicional sobre cómo configurar y utilizar PSR-15 en tu proyecto.

Recuerda que PSR-15 es una recomendación de estándar y la implementación específica puede variar dependiendo de la biblioteca o sistema que utilices.