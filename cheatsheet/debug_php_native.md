
# PHP Cheatsheet

A continuación se presenta un resumen de algunas funciones de PHP:

## Assert

```php
assert($assertion)
```

- Verifica si una expresión es verdadera.
- Si la expresión es falsa, se genera un error de aserción.

## Assert Options

```php
assert_options($what, $value)
```

- Configura opciones para las aserciones.

## Debug Backtrace

```php
debug_backtrace()
```

- Devuelve una matriz multidimensional que representa la pila de llamadas actual.

## Debug Print Backtrace

```php
debug_print_backtrace()
```

- Imprime información sobre la pila de llamadas actual.

## Die

```php
die($message)
```

- Finaliza la ejecución del script y muestra un mensaje opcional.

## Display Errors

```php
display_errors($value)
```

- Configura si los errores deben mostrarse en el navegador.

## Error Clear Last

```php
error_clear_last()
```

- Borra la información del último error.

## Error Get Last

```php
error_get_last()
```

- Obtiene información sobre el último error ocurrido.

## Error Log

```php
error_log($message, $message_type, $destination, $extra_headers)
```

- Registra un mensaje de error.

## Error Reporting

```php
error_reporting($level)
```

- Establece el nivel de reporte de errores.

## Exit

```php
exit($status)
```

- Finaliza la ejecución del script.

## Get Class Methods

```php
get_class_methods($class_name)
```

- Obtiene los métodos de una clase.

## Get Defined Constants

```php
get_defined_constants($categorize)
```

- Obtiene todas las constantes definidas.

## Get Defined Functions

```php
get_defined_functions()
```

- Obtiene todas las funciones definidas.

## Get Defined Vars

```php
get_defined_vars()
```

- Obtiene todas las variables definidas.

## Get Extension Funcs

```php
get_extension_funcs($extension)
```

- Obtiene las funciones de una extensión específica.

## Get Include Path

```php
get_include_path()
```

- Obtiene los directorios de inclusión de archivos.

## Get Loaded Extensions

```php
get_loaded_extensions($zend_extensions)
```

- Obtiene todas las extensiones cargadas.

## Get Object Vars

```php
get_object_vars($object)
```

- Obtiene las variables de un objeto.

## Getcwd

```php
getcwd()
```

- Obtiene el directorio actual.

## Ini Alter

```php
ini_alter($varname, $newvalue)
```

- Cambia el valor de una directiva de configuración en tiempo de ejecución.

## Ini Get

```php
ini_get($varname)
```

- Obtiene el valor de una directiva de configuración.

## Ini Get All

```php
ini_get_all($extension, $details)
```

- Obtiene todas las directivas de configuración y sus valores.

## Ini Restore

```php
ini_restore($varname)
```

- Restaura el valor original de una directiva de configuración.

## Ini Set

```php
ini_set($varname, $newvalue)
```

- Establece el valor de una directiva de configuración.

## Log Errors

```php
log_errors($flag)
```

-

 Habilita o deshabilita el registro de errores en el archivo de registro de errores.

## Memory Get Peak Usage

```php
memory_get_peak_usage($real_usage)
```

- Obtiene el pico de uso de memoria actual.

## Memory Get Usage

```php
memory_get_usage($real_usage)
```

- Obtiene el uso de memoria actual.

## Microtime

```php
microtime($get_as_float)
```

- Obtiene la fecha y hora actuales en microsegundos.

## Print R

```php
print_r($expression, $return)
```

- Imprime información sobre una variable de forma formateada.

## Register Shutdown Function

```php
register_shutdown_function($callback, $parameter)
```

- Registra una función para ser ejecutada al finalizar el script.

## Restore Error Handler

```php
restore_error_handler()
```

- Restaura el manejador de errores anterior.

## Restore Exception Handler

```php
restore_exception_handler()
```

- Restaura el manejador de excepciones anterior.

## Set Error Handler

```php
set_error_handler($error_handler, $error_types)
```

- Establece una función personalizada como manejador de errores.

## Set Exception Handler

```php
set_exception_handler($exception_handler)
```

- Establece una función personalizada como manejador de excepciones.

## Set Include Path

```php
set_include_path($new_include_path)
```

- Establece los directorios de inclusión de archivos.

## Trigger Error

```php
trigger_error($error_msg, $error_type)
```

- Genera un error personalizado.

## Var Dump

```php
var_dump($expression)
```

- Muestra información sobre una variable o expresión de forma detallada.

Recuerda consultar la documentación oficial de PHP para obtener más detalles sobre cada función y cómo utilizarlas correctamente.