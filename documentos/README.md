## obtener los script de  cualquier pagina web
~~~javascript
Array.from(document.scripts).forEach(x=>console.log(x.src))
Array.from(document.getElementsByTagName("link")).forEach(x=>console.log(x.href))
~~~
## migrar sitio de wordporess
~~~sql
UPDATE wp_options SET option_value = REPLACE ( option_value, 'dominioantiguo.com', 'dominionuevo.com' );
UPDATE wp_posts SET guid = REPLACE ( guid, 'dominioantiguo.com', 'dominionuevo.com' );
UPDATE wp_posts SET post_content = REPLACE ( post_content, 'dominioantiguo.com', 'dominionuevo.com' );
UPDATE wp_postmeta SET meta_value = REPLACE ( meta_value, 'dominioantiguo.com', 'dominionuevo.com' );
~~~

## resumen de metodos de wordpress
## registar script
wp_register_script('miscript', get_stylesheet_directory_uri(). '/js/script.js', array('jquery'), '1', true );
## encolar script
wp_enqueue_script('miscript');
## remover accion
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
##agregar filtro
add_filter( 'tiny_mce_plugins', 'desactiva_emojis_tinymce' );
## agregar accion
add_action("techmarket_header_v4", "antes_de_la_cabecera",39);
## verificar si el usuario esta logueado
is_user_logged_in()
## mostrar un shortcode
do_shortcode("[tu shortcode]")


## atajo-teclado
atajo de teclado para windows navegadores etc

para chrome

<https://www.xataka.com/aplicaciones/los-61-atajos-de-teclado-de-chrome-para-multiplicar-por-diez-tu-productividad>

para window
<https://www.xataka.com/basics/estos-son-los-mejores-gestos-y-atajos-de-teclado-para-windows-10>


~~~javascript
var saveData = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, fileName) {
       // var json = JSON.stringify(data),
            blob = new Blob([data], {type: "text/plain"}),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());

var data = "hola mundooo";
    fileName = "my-download.json";

saveData(data, fileName);

~~~
## extraer videos de youtube

~~~javascript

$$(`a.yt-simple-endpoint.ytd-playlist-video-renderer`).forEach( x => console.log(x.href))

// copiar en el porta papeles
// remover dos veces para poder usar la funcion copy, si no toma el elemento

document.querySelector('#copy').remove();
document.querySelector('#copy').remove();
copy($$(`.yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail`).map( x => x.href).join())
~~~

## github

…or create a new repository on the command line

echo "# djangovue" >> README.md

git init

git add README.md

git commit -m "first commit"

git branch -M main

git remote add origin git@github.com:abrahamicm/djangovue.git

git push -u origin main



…or push an existing repository from the command line

git remote add origin git@github.com:abrahamicm/djangovue.git

git branch -M main

git push -u origin main


git config --global user.name "John Doe"
git config --global user.email johndoe@example.com


git config --list

## hacer capturas de pantallas en w3sccholl
~~~javascript
var casper = require('casper').create({
	viewportSize: {
        width: 1200,
        height: 1080
    }
});

// a= document.querySelectorAll('div#leftmenuinnerinner a');
//a.forEach(function(x){console.log(x.href)});
// b=[]
// a.forEach(function(x){b.push(x.href)});


var paginas = [
 'https://www.w3schools.com/php/php_ref_simplexml.asp',
 'https://www.w3schools.com/php/php_ref_string.asp',
 'https://www.w3schools.com/php/php_ref_xml.asp',
 'https://www.w3schools.com/php/php_ref_zip.asp',
 'https://www.w3schools.com/php/php_ref_timezones.asp',
];
casper.start();

paginas.forEach(function(x,index) {
   casper.thenOpen(x, function() {
    	console.log(index);
    	//console.log(document.getElementById('main').innerHTML);
       this.captureSelector(index+'.png', "#main");

    });
});

casper.run();

~~~

## Scraper de  http://w3.unpocodetodo.info/index.php
~~~javascript
// http://w3.unpocodetodo.info/index.php
$(".cheatsheet td:nth-of-type(1), .composite td:nth-of-type(1)").text(function(){this.innerHTML ="Metodo, "+this.innerHTML})
$(".cheatsheet td:nth-of-type(2), .composite td:nth-of-type(2)").text(function(){this.innerHTML ="sentencia javascript "+this.innerHTML})
$(".cheatsheet td:nth-of-type(3), .composite td:nth-of-type(3)").text(function(){this.innerHTML ="descripcion, "+this.innerHTML})
~~~


## redimencionar elementos con jquery
~~~javascript
$("*").width(function(i,c){
if(c >1349){
console.log("el elemento numero"  + i + "tiene " + c + "pixeles" );
this.style.paddin="0px";
this.style.width="1349px";
console.log(this)
}
})

// version mejorada
$(document).ready(function () {
  console.log("redimencionando elementos mayores al 100%" );
  $("*").width(function(i,c){
  if(c >$('body').width()){

  console.log("el elemento numero"  + i + "tiene " + c + "pixeles" );
  this.style.paddin="0px";
  this.style.margin="0px";
  this.style.width="100%";
  //console.log(this) usar para 
  }
  });
  console.log("redimencionados" );
});
~~~

## creacion-plugins-wordpress

plantilla de creacion de plugin por clases

[WordPress-Plugin-Boilerplate](https://github.com/DevinVinson/WordPress-Plugin-Boilerplate/blob/master/plugin-name/includes/class-plugin-name.php)

## 01-02-2022
investigando de las siguientes herramientas 

editor de codigo se conecta con git hub
<https://stackblitz.com/>

tutorial paso a paso de react sololearn

<https://www.sololearn.com/learning/1097/3554/8303/1>

duplicator plugin de wordpress 

<https://ve.wordpress.org/plugins/duplicator/>

tipyn game en github 

esta en javascript plano

<https://github.com/max180643/Type_Warrior/blob/master/script.js>

playgron de codigo sirve para php 

<https://paiza.io/projects>

## 15-01-2021

hoy investigue sobre distintos temas

- markdown
- whazapper
- zoomapi
- 7 ibros mas recomendados de javascript
- webpack
- estava viendo tambien en el cana de midev 

vi este video <https://www.youtube.com/watch?v=f2LH4N4Z0bU> sobre una extencion para visualizar markdown  
contrl shit  p, markdown preview : preview in brouwse, github.
este plugin convierte el archivo md en html y abre el navegador para previsualiza<r el archivo

**Nota:** tuve que reiniciar el navegador porque no queria abria automaticamente el navegador

me gustaria investigar sobre:
vuepress
nuxt


## 18-01-2021
ley de demeter

bind jquery y javascript

curso de one note

curso de postman

eliminar un tablero en trello

postman test

## herramientas_de_gestion


mini curso de asana

https://www.youtube.com/watch?v=3a9mkTTejKc

investigar

herramientas de alvaro felipe

https://www.youtube.com/watch?v=wEO9MQGOpec&t=845s

## Phantomjs
es un navegador sin interfaz grafica
### instrucciones 
1. descargar el archivo
2. agregarlo en las variables de entorno 
3. ejecutar comandos usando el prefijo phantomjs


Para comenzar instaciamos una variable que requiera **webpage** y ejecute el metodo **create();**

~~~javascript
var page = require('webpage').create(); ç
~~~

luego ejecutamos el metodo **page.open**, que recibe dos parametros, el primero es la url que queremos abrir y el segundo es una funcion anonima.  
~~~javascript
page.open(url,funccion) 
~~~
###### ejemplo.


~~~javascript
var page = require('webpage').create(); 
page.open('http://www.google.com', function(){
	console.log("se ha cargado la pagina")
})
~~~

para acceder a los agumentos del script hay que requerir el modulo **'system'**  
~~~javascript 
var system = require('system') 
~~~
###### ejemplo.

~~~javascript
var page = require('webpage').create();
var system = require('system');
page.open(system.arg[1], function(status){
	page.render('google.png');
	phantom.exit();
})

~~~
el metodo **page.render** hace una captura de pantalla de la pagina, toma como argumento el nombre de la imagen con la que queremos gardar la catura.  
~~~javascript
 page.render('nombre.extencion '); 
 ~~~
###### ejemplo.
~~~javascript
page.render('google.png');
~~~

el metodo **page.evaluate** se usa para ejecutar codigo javascript dentro del navegador y recibe una funcion anonima, que se encargara de realizar cada unas de la instrccione que estan dentro del ella.  
~~~javascript 
page.evaluate(function(){
// codigo ..
})
~~~
###### ejemplo.
~~~javascript
var page = require ('webpage').create();
var system = require ('system');
page.open(system.args[1], function(status){
	var titulo = page.evaluate(function(){
		return document.title;
});
console.log(titulo);
phantom.exit();
})
~~~
**page.includesJs** se utiliza para incluir algun script js, recice como parametros la url de donde se encuentra alojado el archivo y una funcion .  
~~~javascript 
page.includeJs('url', funcion) 
~~~
###### ejemplo.
~~~javascript 
page.includesJs('http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js', function(){
// codigo 
});
~~~
**page.onLoadFinished** es un metodo que se iguala a una funcion que se ejecutara cuando la pagina haya cargado.  
~~~javascript 
page.onLoadFinished = funcion; 
~~~
###### ejemplo.
~~~javascript
vpage.onLoadFinished  = function(){
	console.log("ha terminado de cargar la pagina");
	page.render('otrabusquedaenamazon.png')
}
page
~~~
### Resumen
**requires**  
var page = requiere('webpage').create();
var system = require('system'); 

**metodos de system**  
1. system.args: array con los argumentos


**metodos page** 
1. page.open: abre una pagina web.
2. page.render toma una captura de pantalla.
3. page.evaluate ejecuta javascript dentro de la pagina.
4. page.includesJs incluye archivos javacript dentro del documento.
5. page.onLoadFinished una funcion que se ejecuta al cargar la pagina.


para aprender mas sobre phantomjs viitar el siguiente video  https://www.youtube.com/watch?v=_IKh1IvIjZo&t=340s codalot phantomjs


## php

<https://psysh.org/#install>
~~~
wget https://psysh.org/psysh
chmod +x psysh
./psysh
~~~


asi se descarga un phar, desde window se puede usar el navedagor  tambien se pueda instalar globalmente en composer de la siguiente manera

~~~
composer g require psy/psysh:@stable
psysh
~~~

usar en composer 
~~~
vendor\bin\psysh
~~~

## spython
codigos utiles de python
~~~python
import os

directorios =os.getcwd().split("\\")
directorio = directorios[len(directorios)-1]
a=os.listdir(".")	
for x in os.listdir("."): os.rename(x, x.replace("Screenshot_", directorio + " "))
~~~
## crear archivos para wordpress
~~~python
lista = ["header.php","footer.php","sidebar.php","front-page.php","home.php","single.php","page.php","category.php","comments.php","search.php","404.php","functions.php"]

for x in lista:
	file = open(x, "w")
	file.close()
~~~
## quitar un .mp4 extra 
~~~python
import os
a=os.listdir(".")


for x in range(len(a)) : a[x]=a[x].replace(".mp4", "")

for x in a : os.mkdir(x)
~~~
## no se que hace
~~~python
import os
directorios = os.listdir()
lista =["1.	Manual del tema","2.	Quien deberia leer este manual","3.	Qué es un tema","4.	Licencias de WordPress y la GPL","5.	Configuración de un entorno de desarrollo","6.	Ejemplos de desarrollo de temas","7.	Archivos de plantilla","8.	Hoja de estilos principal (style.css)","9.	Tipos de publicaciones","10.	Organizar archivos de tema","11.	Jerarquía de plantilla","12.	Etiquetas de plantilla","13.	El lazo","14.	Funciones temáticas","15.	Vinculación de archivos de tema y directorios","16.	Incluyendo CSS y JavaScript","17.	Etiquetas condicionales","18.	Categorías, etiquetas y taxonomías personalizadas","19.	Publicar archivos de plantilla","20.	Plantillas de página","21.	Archivos de plantilla de archivos adjuntos","22.	Archivos de plantilla de tipo de publicación personalizada","23.	Archivos de plantilla parciales y varios","24.	Plantilla de comentarios","25.	Plantillas de taxonomía","26.	404 páginas","27.	Menús de administración","28.	Encabezados personalizados","29.	Logotipo personalizado","30.	Formatos de publicaciones","31.	Puestos pegajosos","32.	la página de ","33.	Widgets","34.	Menús de navegación","35.	Paginación","36.	Medios de comunicación","37.	Audio","38.	Imágenes","39.	Galerías","40.	Seguridad del tema","41.	Vulnerabilidades Comunes","42.	Privacidad del tema","43.	Temas infantiles","44.	Mejores prácticas de IU","45.	Mejores prácticas de JavaScript","46.	ganchos. Lanzando su tema","47.	Pruebas","48.	Enviar su tema a WordPress.org","49.	Lista de etiquetas de plantilla","50.	Lista de etiquetas condicionales"]
for x in range(50): os.rename(directorios[x], lista[x]+".ogg")

## otro
import os

directorios =os.getcwd().split("\\")
directorio = directorios[len(directorios)-1]
a=os.listdir(".")	
for x in os.listdir("."): os.rename(x, x.replace("Screenshot_", directorio + " "))

~~~

## add menu page wordpress
~~~php
<?php
// create custom plugin settings menu
add_action('admin_menu', 'my_cool_plugin_create_menu');

function my_cool_plugin_create_menu() {

	//create new top-level menu
	add_menu_page('My Cool Plugin Settings', 'Cool Settings', 'administrator', __FILE__, 'my_cool_plugin_settings_page' , plugins_url('/images/icon.png', __FILE__) );

	//call register settings function
	add_action( 'admin_init', 'register_my_cool_plugin_settings' );
}


function register_my_cool_plugin_settings() {
	//register our settings
	register_setting( 'my-cool-plugin-settings-group', 'new_option_name' );
	register_setting( 'my-cool-plugin-settings-group', 'some_other_option' );
	register_setting( 'my-cool-plugin-settings-group', 'option_etc' );
}

function my_cool_plugin_settings_page() {
?>
<div class="wrap">
<h1>Your Plugin Name</h1>

<form method="post" action="options.php">
    <?php settings_fields( 'my-cool-plugin-settings-group' ); ?>
    <?php do_settings_sections( 'my-cool-plugin-settings-group' ); ?>
    <table class="form-table">
        <tr valign="top">
        <th scope="row">New Option Name</th>
        <td><input type="text" name="new_option_name" value="<?php echo esc_attr( get_option('new_option_name') ); ?>" /></td>
        </tr>
         
        <tr valign="top">
        <th scope="row">Some Other Option</th>
        <td><input type="text" name="some_other_option" value="<?php echo esc_attr( get_option('some_other_option') ); ?>" /></td>
        </tr>
        
        <tr valign="top">
        <th scope="row">Options, Etc.</th>
        <td><input type="text" name="option_etc" value="<?php echo esc_attr( get_option('option_etc') ); ?>" /></td>
        </tr>
    </table>
    
    <?php submit_button(); ?>

</form>
</div>
<?php } ?>
~~~
"# documentos" 


## Cómo Mejorar la Caligrafía con Letra de Imprenta

[enlace](https://www.youtube.com/watch?v=WueBqOgW7UA)

## roeles y permisos 

https://spatie.be/docs/laravel-permission/v4/introduction



[02 - Cómo crear roles y permisos](https://www.youtube.com/watch?v=r5Zs9CGB754&list=PLZ2ovOgdI-kXghwSkvcQ1zVbsyUeYD8Wi&index=3)
0:40 Crear Seeder
1:38 Importar el modelo del rol
1:59 crear roles en el seeder
3:27 importar permisos y crealos en el seeder
4:24 ver el nombre de las rutas
6:48 vamos al archivo database seeder
9:08 asignar permiso a la tabla intermedia
10:45 syncRoles
12:55 assignRole

[How to generate scaffold with Infyom Laravel Generator](https://www.youtube.com/watch?v=g6Rp98_0inQ&list=PL0wCC44AhrC3JHzcB5qmjYkm70OaoKegg&index=4&t=81s)

selectTable:users:name,id

php artisan infyom:scaffold User --fromTable --tableName=users --ignoreFields=email_verified_at,remember_token



otras opciones
:api \$MODEL_NAME$ --paginate=10  
:scaffold \$MODEL_NAME --datatables=true  
:scaffold \$MODEL_NAME --views=index,create,edit,show  
:scaffold \$MODEL_NAME --factory  
:scaffold \$MODEL_NAME --seeder    
:scaffold \$MODEL_NAME --fieldsFile=filename_from_model_schema_directory_OR_path_from_base_directory_OR_absolute_file_path
:scaffold \$MODEL_NAME --tableName=custom_table_name  
:scaffold \$MODEL_NAME --fromTable --tableName=$TABLE_NAME
:scaffold \$MODEL_NAME --fromTable --tableName=$TABLE_NAME --connection=connectionName  
:api_scaffold Post --skip=routes,migration,model  
:scaffold \$MODEL_NAME --primary=custom_name_id
:scaffold \$MODEL_NAME --plural=AuthorBooks
:scaffold \$MODEL_NAME --prefix=admin
:scaffold \$MODEL_NAME --ignoreFields=geo_location,last_login
:scaffold \$MODEL_NAME --forceMigrate
:api \$MODEL_NAME --resources=true

| upported HTML Input Types & Formats                            | Valid Examples                     |
| -------------------------------------------------------------- | ---------------------------------- |
| text                                                           | text                               |
| textarea                                                       | textarea                           |
| email                                                          | email                              |
| date                                                           | date                               |
| number                                                         | number                             |
| password                                                       | password                           |
| file (partially supported)                                     | file                               |
| select                                                         |                                    |
| select,value1,value2,value3                                    | select,Daily,Weekly,Monthly        |
| select,label1:value1,label2:value2,label3:value3               | select,Sunday:0,Monday:1,Tuesday:2 |
| select from existing table                                     |                                    |
| selectTable:tableName:column1,column2                          | selectTable:users:name,id          |
| Note:where column1 is Option Label and column2 is Option Value | selectTable:categories:title,id    |
| checkbox                                                       | checkbox                           |
| checkbox,value                                                 | checkbox,yes                       |
|                                                                | checkbox,1                         |
| radio                                                          |                                    |
| radio,label1,label2                                            | radio,Male,Female                  |
| radio,label1:value1,label2:value2                              | radio,Yes:1,No:0                   |
| toggle switch                                                  | toggle-switch                      |

+ diagrama de gant [que es ](https://www.youtube.com/watch?v=7dXAFrxBOCY) 
+ kanban [que es ](https://www.youtube.com/watch?v=WP6Nt5XV980)  
<img src="capturas/Screenshot_1.jpg" width="100">

+ [SCRUMBAN - Lo mejor de Scrum y Kanban](https://www.youtube.com/watch?v=Kxz0_rDmRho)

+ [metodologias-cris-rua](https://www.youtube.com/watch?v=v3fLx7VHxGM&list=PLotrodX72SrScd-gxE4DESavRsHkC9Wyl&index=2)



+ curso de plantillas html
[youtube](https://www.youtube.com/watch?v=Lb0-zL4OYL0) 
+ inspiracion css
[youtube](https://www.youtube.com/watch?v=yI0X4e7bxHU) 

+ [curso de laravel y gralpql](https://www.youtube.com/watch?v=mt_o7ZWjEhA&list=PLWIk9Jo3Sp-VTXF1e-vJ9KdM-7jFjXR1l&index=1) 
+ [app inventor quiz](https://www.youtube.com/watch?v=XxCoBZuai5w)


## curl pequeño
~~~php
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://webhook.site/2d1caae7-94ad-4053-ae8c-827b0c6d26d5?action=3"
    ));
    curl_exec($curl);
    curl_close($curl);
~~~

## curl post 
~~~php
    $d=$_POST
    $dt = json_encode($d);
    $c = curl_init();
    curl_setopt_array($c, array(
        CURLOPT_URL => "https://webhook.site/2d1caae7-94ad-4053-ae8c-827b0c6d26d5",
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS =>"{
          data:$dt
      }"
    ));
    curl_exec($c);
    curl_close($c);
~~~

