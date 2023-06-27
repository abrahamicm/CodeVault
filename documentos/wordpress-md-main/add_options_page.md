~~~php
<?php
/*
Plugin Name: Abraham Cargar oferta
Plugin URI: http://ivoo.com
Description: activar y desactivar oferta flash
Author: Abraham Cordero
Version: 1.0
Author URI: http://ivoo.com
Licence : GPL2


*/

add_action("admin_menu","abe_opciones_de_admin");
add_action("admin_init","abe_opciones_de_admin_init");
/**
 * acá registramos los campos que usaremos en un nuestra configuración del plugins
 * */
if(!function_exists("abe_opciones_de_admin_init"))
{
    function abe_opciones_de_admin_init()
    {
        register_setting("abe-group","abe_sku_activar");
        register_setting("abe-group","abe_sku_desactivar");
        register_setting("abe-group","abe_url_banner_home");
        register_setting("abe-group","abe_url_banner_categoria");
        register_setting("abe-group","abe_url_fecha_contador");
       
    }
}
/**
 * acá inicializamos el panel de nuestro Plugins
 * */
if(!function_exists("abe_opciones_de_admin"))
{
    function abe_opciones_de_admin()
    {
        add_options_page("activar of","activar of","manage_options","CC","abe_get_opciones_de_admin");
    }
}
/**
 * acá creamos el código HTML con el que se muestra nuestro panel
 * */
if(!function_exists("abe_get_opciones_de_admin"))
{
    function abe_get_opciones_de_admin()
    {
        echo wc_get_product_id_by_sku(12000005845);
        ?>
        <div class="wpap">
            <?php screen_icon()?><h2>Agregar activar of</h2>
            <h3 class="title">Descripción</h3>
<p>Este plugin permita cargar los productos que estan en oferta</p>
            <form method="post" action="options.php">
                 <?php settings_fields("abe-group")?>
                 <?php @do_settings_fields("admin","abe-group")?>
                 <table class="form-table">
                    <tr valign="top">
                        <th scope="row">
                            <label for="abe_sku_activar">SKU productos activar</label>
                        </th>
                       
                        <td>
                            <input type="text" name="abe_sku_activar" value="<?php echo get_option("abe_sku_activar")?>" />
                            <br />
                            <small></small>
                        </td>
                    </tr>
                    <tr>
                    <th scope="row">
                            <label for="abe_sku_activar">SKU productos desactivar</label>
                        </th>
                        <td> <input type="text" name="abe_sku_desactivar" value="<?php echo get_option("abe_sku_desactivar")?>" /><br /><small></small></td>

                    </tr>

                    <tr>
                        <th scope="row">
                            <label for="abe_sku_activar">url Banner Home</label>
                        </th>
                        <td> <input type="text" name="abe_url_banner_home" value="<?php echo get_option("abe_url_banner_home")?>" /><br /><small></small></td>

                    </tr>

                    <tr>
                        <th scope="row">
                            <label for="abe_sku_activar">url Banner categoria</label>
                        </th>
                        <td> <input type="text" name="abe_url_banner_categoria" value="<?php echo get_option("abe_url_banner_categoria")?>" /><br /><small></small></td>

                    
                    </tr>

                    <tr>
                        <th scope="row">
                            <label for="abe_sku_activar">Fecha contador</label>
                        </th>
                        <td> <input type="text" name="abe_url_fecha_contador" value="<?php echo get_option("abe_url_fecha_contador")?>" /><br /><small></small></td>
                    </tr>
         
                 </table>
                 <?php @submit_button()?>
            </form>
        </div>
        <?php
    }
}

~~~
