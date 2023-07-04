## Interfaz GUI del generador
- https://infyom.com/open-source/gui-interface/docs
### agregar paquete 
~~~
"require": {
   "infyomlabs/generator-builder": "^1.0"
} 
~~~
despues hacer un `composer update`

### Añadir proveedor de servicios

Agregue el siguiente proveedor de servicios a su matriz de proveedores en config/app.php
~~~
InfyOm\GeneratorBuilder\GeneratorBuilderServiceProvider::class, 
~~~

### Ejecutar comando de publicación
`php artisan vendor:publish`

Seleccionar la opcion que contenga GeneratorBuilderServiceProvider.

### Ejecutar rutas Publicar Comando
`php artisan infyom.publish:generator-builder`

Abrir la ruta  `/generator_builder` 

### Personalización
`php artisan infyom.publish:generator-builder --views`
- abrir `config/infyom/generator_builder.php`
- cambiar 'builder' => 'generator-builder::builder' **POR** 'builder' => 'infyom.generator-builder.builder'
- cambiar 'field-template' => 'generator-builder::field-template' **POR** 'field-template' => 'infyom.generator-builder.field-template'

## Swagger
### agregar en composer.json
~~~
"require": {
   "darkaonline/l5-swagger": "8.1",
   "infyomlabs/swagger-generator": "^3.0"
}
~~~
`composer update`

### publicar archivo de configuracion 
`php artisan vendor:publish --provider "L5Swagger\L5SwaggerServiceProvider"`

creara el siguiente archivo los archivos
~~~
config\l5-swagger.php (archivo)
resources\views\vendor\l5-swagger (directorio)
~~~

### hablilitar swagger en config/laravel_generator.php
~~~
'options' => [
    'swagger' => true,
], 
~~~

### uso 
~~~
php artisan l5-swagger:generate
~~~
Debe ejecutar este comando cada vez que genere nuevas API o modifique las API existentes.

Generará un archivo swagger para la interfaz de usuario swagger en la ruta `storage/api-docs/api-docs.json` Para acceder a la interfaz de usuario de Swagger, abra la URL `/api/documentationy` debería poder ver todos los documentos de API.