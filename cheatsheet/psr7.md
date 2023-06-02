Aquí tienes un cheatsheet de PSR-7 (PHP Standard Recommendation 7) en formato Markdown:

# Cheatsheet de PSR-7

## Interfaces principales

### ServerRequestInterface

```php
interface ServerRequestInterface extends MessageInterface
{
    public function getServerParams(): array;
    public function getCookieParams(): array;
    public function withCookieParams(array $cookies): static;
    public function getQueryParams(): array;
    public function withQueryParams(array $query): static;
    public function getUploadedFiles(): array;
    public function withUploadedFiles(array $uploadedFiles): static;
    public function getParsedBody(): mixed;
    public function withParsedBody($data): static;
    public function getAttributes(): array;
    public function getAttribute(string $name, mixed $default = null): mixed;
    public function withAttribute(string $name, mixed $value): static;
    public function withoutAttribute(string $name): static;
}
```

### RequestInterface

```php
interface RequestInterface extends MessageInterface
{
    public function getRequestTarget(): string;
    public function withRequestTarget($requestTarget): static;
    public function getMethod(): string;
    public function withMethod($method): static;
    public function getUri(): UriInterface;
    public function withUri(UriInterface $uri, bool $preserveHost = false): static;
}
```

### ResponseInterface

```php
interface ResponseInterface extends MessageInterface
{
    public function getStatusCode(): int;
    public function withStatus($code, $reasonPhrase = ''): static;
    public function getReasonPhrase(): string;
}
```

### UriInterface

```php
interface UriInterface
{
    public function getScheme(): string;
    public function getAuthority(): string;
    public function getUserInfo(): string;
    public function getHost(): string;
    public function getPort(): ?int;
    public function getPath(): string;
    public function getQuery(): string;
    public function getFragment(): string;
    public function withScheme($scheme): static;
    public function withUserInfo($user, $password = null): static;
    public function withHost($host): static;
    public function withPort($port): static;
    public function withPath($path): static;
    public function withQuery($query): static;
    public function withFragment($fragment): static;
}
```

### StreamInterface

```php
interface StreamInterface
{
    public function __toString(): string;
    public function close(): void;
    public function detach();
    public function getSize(): ?int;
    public function tell(): int;
    public function eof(): bool;
    public function isSeekable(): bool;
    public function seek($offset, $whence = SEEK_SET): void;
    public function rewind(): void;
    public function isWritable(): bool;
    public function write($string): int;
    public function isReadable(): bool;
    public function read($length): string;
    public function getContents(): string;
    public function getMetadata($key = null): mixed;
}
```

## Implementaciones comunes

- **Guzzle HTTP**: Una biblioteca de cliente HTTP que implementa las interfaces de PSR-7.

- **Slim Framework**: Un microframework para PHP que utiliza PSR-7 para representar solicitudes y respuestas HTTP.

## Ejemplo de uso básico

```php
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\UriInterface;
use Psr\Http\Message\StreamInterface;

// Ejemplo de creación de objetos PSR-7

// Crear una solicitud de servidor (ServerRequestInterface)
$request = new MyServerRequest('GET', 'http://