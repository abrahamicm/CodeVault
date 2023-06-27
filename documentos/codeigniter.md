## Cargar un nuevo helper
- Crear archivo en **application/helpers/** lo llamaremos **new_helper.php**
### Usar helper en controladores modelos o vistas
~~~php
    $this->load->helper('new_helper');// el parametro es el nombre del archivo
    echo test_method('Hello World');// test_method esta en el archio que cargue
~~~
### O cargarlo globalmente
- Abrir **application\config\autoload.php**
- Agregar helper 
~~~php
$autoload['helper'] = array('new_helper');// el parametro es el nombre del archivo
~~~

## Configurar la función log_message para que muestre todos los niveles de mensaje
- Abrir application\config\config.php
- Para mostrar todos los niveles de mensaje configurar la opción en 4
~~~php
$config['log_threshold'] = (ENVIRONMENT !== 'production' ? 4 : 0);
~~~
## enviar json en el controlador
~~~php
 $this->output
        ->set_content_type('application/json')
        ->set_output(json_encode($dataArray));
~~~

## mostrar cabecera y footer
~~~php
init_head();
init_tal();
~~~

## log mensaje de errores
~~~php
 log_message('debug', 'Some variable was correctly set');
~~~

## mostrar mensaje de error 
~~~php
show_error($message, $status_code, $heading = 'An Error Was Encountered')
~~~