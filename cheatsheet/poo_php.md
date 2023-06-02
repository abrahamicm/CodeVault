# Cheatsheet de Programación Orientada a Objetos (POO) en PHP

## Clases y Objetos

### Definición de una clase

```php
class MiClase
{
    // Propiedades (Variables de instancia)
    // ...

    // Métodos
    // ...
}
```

### Creación de un objeto

```php
$miObjeto = new MiClase();
```

### Acceso a las propiedades y métodos

```php
// Acceso a una propiedad
$miObjeto->propiedad;

// Llamada a un método
$miObjeto->metodo();
```

## Propiedades

### Declaración de propiedades

```php
class MiClase
{
    public $propiedadPublica;    // Accesible desde cualquier lugar
    protected $propiedadProtegida;  // Accesible desde la clase y sus subclases
    private $propiedadPrivada;   // Accesible solo desde la clase
}
```

### Obtener y establecer valores de propiedades

```php
// Obtener el valor de una propiedad
$valor = $miObjeto->propiedad;

// Establecer el valor de una propiedad
$miObjeto->propiedad = $nuevoValor;
```

## Métodos

### Declaración de métodos

```php
class MiClase
{
    public function metodoPublico()
    {
        // Código del método
    }

    protected function metodoProtegido()
    {
        // Código del método
    }

    private function metodoPrivado()
    {
        // Código del método
    }
}
```

### Invocación de métodos

```php
$miObjeto->metodoPublico();   // Llamada a un método público

// Llamada a un método protegido o privado dentro de la clase
$this->metodoProtegido();
$this->metodoPrivado();
```

## Herencia

### Declaración de una clase hija

```php
class MiClaseHija extends MiClasePadre
{
    // Propiedades y métodos adicionales
    // ...
}
```

### Llamada a métodos de la clase padre

```php
// Llamada a un método de la clase padre desde la clase hija
parent::metodo();
```

## Interfaces

### Declaración de una interfaz

```php
interface MiInterfaz
{
    public function metodo1();
    public function metodo2();
    // ...
}
```

### Implementación de una interfaz

```php
class MiClase implements MiInterfaz
{
    public function metodo1()
    {
        // Implementación del método
    }

    public function metodo2()
    {
        // Implementación del método
    }
    // ...
}
```

## Modificadores de Acceso

### Public

```php
class MiClase
{
    public $propiedad;
    public function metodo()
    {
        // Código del método
    }
}
```

### Protected

```php
class MiClase
{
    protected $propiedad;
    protected function metodo()
    {
        // Código del método
    }
}
```

### Private

```php
class MiClase
{
    private $propiedad;
    private function metodo()
    {
        // Código del método
    }
}
```

## Polimorfismo



### Sobreescritura de métodos

```php
class MiClasePadre
{
    public function metodo()
    {
        // Código del método en la clase padre
    }
}

class MiClaseHija extends MiClasePadre
{
    public function metodo()
    {
        // Código del método en la clase hija
    }
}
```

## Final

### Clases final

```php
final class MiClaseFinal
{
    // ...
}
```

### Métodos final

```php
class MiClase
{
    final public function metodoFinal()
    {
        // Código del método
    }
}
```

## Clases Abstractas

### Declaración de una clase abstracta

```php
abstract class MiClaseAbstracta
{
    abstract public function metodoAbstracto();
}
```

### Herencia y uso de clases abstractas

```php
class MiClase extends MiClaseAbstracta
{
    public function metodoAbstracto()
    {
        // Implementación del método abstracto
    }
}
```

## Namespace

### Declaración de un namespace

```php
namespace MiNamespace;

class MiClase
{
    // ...
}
```

### Uso de un namespace

```php
use MiNamespace\MiClase;

$miObjeto = new MiClase();
```

## Autoload

### Definición de una función autoload

```php
spl_autoload_register(function ($clase) {
    $archivo = __DIR__ . '/' . str_replace('\\', '/', $clase) . '.php';
    if (file_exists($archivo)) {
        require $archivo;
    }
});
```

## Constantes

### Declaración de una constante de clase

```php
class MiClase
{
    const CONSTANTE = 'valor';
}
```

### Acceso a una constante de clase

```php
$valor = MiClase::CONSTANTE;
```

## Métodos Mágicos

### __construct()

```php
class MiClase
{
    public function __construct()
    {
        // Constructor de la clase
    }
}
```

### __get() y __set()

```php
class MiClase
{
    public function __get($propiedad)
    {
        // Obtener el valor de una propiedad
    }

    public function __set($propiedad, $valor)
    {
        // Establecer el valor de una propiedad
    }
}
```

### __toString()

```php
class MiClase
{
    public function __toString()
    {
        return 'Texto representativo del objeto';
    }
}
```

### __call() y __callStatic()

```php
class MiClase
{
    public function __call($nombreMetodo, $argumentos)
    {
        // Lógica personalizada para manejar llamadas a métodos inexistentes
    }

    public static function __callStatic($nombreMetodo, $argumentos)
    {
        // Lógica personalizada para manejar llamadas a métodos estáticos inexistentes
    }
}
```