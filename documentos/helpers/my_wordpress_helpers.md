## crear usuario programaticamete
~~~php
function crear_usuario($marca)
{
    $username = $marca;
    $mail = $marca . "@example.com";
    $user_id = wp_create_user($username, 'passwordgoeshere', $mail);
    if (!is_wp_error($user_id)) {
        $user = new WP_User($user_id); 
        $user->roles;
        $user->add_role('locatario');
        $user->remove_role('subscriber');
        update_user_meta($user_id, '_user_type', 'general');
    }
}
crear_usuario('adore_boutique');
~~~

## quitar la barra de administracion de wordpress
~~~php
add_action( 'wp', function () {
	if ( ! current_user_can( 'manage_options' ) ) {
		show_admin_bar( false );
	}
} );
~~~

## que los nombre de archivo subidos esten en minuscula
~~~php
add_filter( 'sanitize_file_name', 'mb_strtolower' );
~~~

## permitir emoticones
~~~php
add_filter( 'widget_text', 'convert_smilies' );
add_filter( 'the_title', 'convert_smilies' );
add_filter( 'wp_title', 'convert_smilies' );
add_filter( 'get_bloginfo', 'convert_smilies' );
~~~