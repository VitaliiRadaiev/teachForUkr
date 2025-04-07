<?php

// function load_more_news()
// {

//     die();
// }
// add_action('wp_ajax_load_more_news', 'load_more_news');
// add_action('wp_ajax_nopriv_load_more_news', 'load_more_news');


function get_acf_option_field($request) {
    $field_name = $request->get_param('field');
    $field_value = get_field($field_name, 'options');

    if ($field_value === null) {
        return new WP_Error('no_field', 'Поле не найдено', array('status' => 404));
    }

    return rest_ensure_response([
        'field' => $field_name,
        'value' => $field_value
    ]);
}

function get_hero_main_decor_buttons_text() {
    return rest_ensure_response([
        get_field('text_participants', 'options'),
        get_field('text_children', 'options'),
        get_field('text_teach', 'options'),
        get_field('text_teachers', 'options'),
        get_field('text_schools', 'options'),
    ]);
}

function register_acf_options_endpoint() {
    register_rest_route('site-core/v1', '/options/', array(
        'methods'  => 'GET',
        'callback' => 'get_acf_option_field',
        'permission_callback' => '__return_true',
        'args'     => array(
            'field' => array(
                'required' => true,
                'validate_callback' => function ($param) {
                    return is_string($param);
                }
            )
        )
    ));

    register_rest_route('site-core/v1', 'hero-main-decor-buttons', array(
        'methods'  => 'GET',
        'callback' => 'get_hero_main_decor_buttons_text',
        'permission_callback' => '__return_true'
    ));
}