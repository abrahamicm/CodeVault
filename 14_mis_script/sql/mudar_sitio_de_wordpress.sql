# actualizar dominio en wordpres
UPDATE wp_options SET option_value = REPLACE ( option_value, 'dominioantiguo.com', 'dominionuevo.com' );
UPDATE wp_posts SET guid = REPLACE ( guid, 'dominioantiguo.com', 'dominionuevo.com' );
UPDATE wp_posts SET post_content = REPLACE ( post_content, 'dominioantiguo.com', 'dominionuevo.com' );
UPDATE wp_postmeta SET meta_value = REPLACE ( meta_value, 'dominioantiguo.com', 'dominionuevo.com' );
