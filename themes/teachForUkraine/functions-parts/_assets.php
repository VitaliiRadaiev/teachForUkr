<?php 
/*
 * Подключение стилей и скриптов
 * */

function my_assets()
{
    if ( !is_user_logged_in() && !is_admin() ) { 
        wp_deregister_script( 'jquery' ); 
        wp_register_script( 'jquery', false );
    }

    wp_enqueue_style('main-style', get_template_directory_uri() . '/assets/css/main.css');
    wp_enqueue_script(
        'main-script',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        null,
        false
    );
}

add_action('wp_enqueue_scripts', 'my_assets');


add_action( 'admin_enqueue_scripts', 'load_admin_style' );
function load_admin_style() {
    wp_enqueue_style('admin-style-css', get_template_directory_uri() . '/admin-style.css');

}
add_editor_style('admin-style.css');