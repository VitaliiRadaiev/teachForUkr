<?php
/*
 * Create custom post type
 * */
add_action('init', 'init_post_types');
function init_post_types()
{
    register_post_type('partner', array(
        'label' => null,
        'labels' => array(
            'name' => 'Партнери',
            'singular_name' => 'Партнер',
            'add_new' => 'Додати партнера',
            'add_new_item' => 'Додати нового партнера',
            'edit_item' => 'Редагувати партнера',
            'new_item' => 'Новий партнер',
            'view_item' => 'Перегляд партнера',
            'search_items' => 'Пошук партнера',
            'not_found' => 'Не знайдено партнера',
            'not_found_in_trash' => 'В кошику не знайдено партнерів',
            'parent_item_colon' => '',
            'menu_name' => 'Партнери',
        ),
        'description' => '',
        'public' => true,
        'publicly_queryable' => false,
        'exclude_from_search' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'show_in_admin_bar' => true,
        'show_in_nav_menus' => true,
        'show_in_rest' => true,
        'rest_base' => null,
        'menu_position' => 4,
        'hierarchical' => false,
        'supports' => array('title', 'thumbnail', 'excerpt'),
        'taxonomies' => array(),
        'has_archive' => false,
        'query_var' => false,
        'menu_icon' => 'dashicons-groups',
    ));
}