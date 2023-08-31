# Cheatsheet del estándar PSR-3: Logger Interface

## Interfaz del Logger
La interfaz `Psr\Log\LoggerInterface` define los métodos que deben estar presentes en un logger compatible con PSR-3. Los métodos principales son:

- `emergency($message, array $context = [])`: Registra un mensaje de nivel de emergencia.
- `alert($message, array $context = [])`: Registra un mensaje de nivel de alerta.
- `critical($message, array $context = [])`: Registra un mensaje de nivel crítico.
- `error($message, array $context = [])`: Registra un mensaje de nivel de error.
- `warning($message, array $context = [])`: Registra un mensaje de nivel de advertencia.
- `notice($message, array $context = [])`: Registra un mensaje de nivel de aviso.
- `info($message, array $context = [])`: Registra un mensaje de nivel de información.
- `debug($message, array $context = [])`: Registra un mensaje de nivel de depuración.

```php
use Psr\Log\LoggerInterface;

class MyLogger
{
    private $logger;

    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    public function doSomething()
    {
        // ...

        $this->logger->info('Something happened');
    }
}
```

## Mensajes y contexto
- El mensaje pasado a los métodos del logger debe ser una cadena de texto que describa el evento o la información a registrar.
- El contexto es un array asociativo opcional que contiene información adicional relevante para el mensaje.

```php
$this->logger->error('An error occurred', ['exception' => $exception]);
```

## Niveles de registro
Los mensajes registrados a través del logger deben tener un nivel de registro asociado. Los niveles de registro comunes en PSR-3 son, de mayor a menor severidad:

- `emergency`: Utilizado para situaciones críticas que requieren una acción inmediata.
- `alert`: Utilizado para situaciones críticas que requieren atención inmediata.
- `critical`: Utilizado para errores críticos que requieren atención.
- `error`: Utilizado para errores inesperados en el flujo de la aplicación.
- `warning`: Utilizado para advertencias que no son errores críticos pero que pueden requerir atención.
- `notice`: Utilizado para eventos normales pero significativos.
- `info`: Utilizado para mensajes informativos.
- `debug`: Utilizado para mensajes de depuración y seguimiento detallado.

```php
$this->logger->debug('Debug message');
$this->logger->error('An error occurred');
```

## Adaptadores y bibliotecas de registro
Existen muchas implementaciones y bibliotecas compatibles con PSR-3 que proporcionan funcionalidad de registro. Algunas de las más populares incluyen:

- Monolog: https://github.com/Seldaek/monolog
- Loggy: https://github.com/katzien/Loggy
- Laminas Log: https://github.com/laminas/laminas-log
