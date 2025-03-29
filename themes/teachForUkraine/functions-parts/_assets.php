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


function load_gutenberg_editor_styles() {
    wp_enqueue_style(
        'editor-styles',
        get_template_directory_uri() . '/admin-style.css',
        array(),
        filemtime(get_template_directory() . '/admin-style.css')
    );
}
add_action('enqueue_block_editor_assets', 'load_gutenberg_editor_styles');