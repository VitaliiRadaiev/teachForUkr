<?php

// function load_more_news()
// {

//     die();
// }
// add_action('wp_ajax_load_more_news', 'load_more_news');
// add_action('wp_ajax_nopriv_load_more_news', 'load_more_news');


function ajax_get_acf_option_field($request)
{
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

function ajax_get_hero_main_decor_buttons_text()
{
    return rest_ensure_response([
        get_field('text_participants', 'options'),
        get_field('text_children', 'options'),
        get_field('text_teach', 'options'),
        get_field('text_teachers', 'options'),
        get_field('text_schools', 'options'),
    ]);
}

function ajax_get_partners($request)
{
    $category = $request->get_param('category');
    $page = $request->get_param('page');
    $text_go_to = get_field('text_go_to', 'options');

    $query = get_partners([
        'category' => $category,
        'page' => $page
    ]);
    $posts = [];

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $logo = get_image(get_post_thumbnail_id(), 'w-auto h-auto max-w-full max-h-full', false);
            $title = get_the_title();
            $url = get_field('url_partner', get_the_ID());
            $excerpt = get_the_excerpt();

            $categories_data = [];
            $categories = get_the_terms(get_the_ID(), 'partners-category');
            if (check($categories)) {
                foreach ($categories as $category) {
                    $category_type = get_field('category_icons', 'category_' . $category->term_id);
                    $categories_data[] = [
                        'type' => $category_type,
                        'img' => get_template_directory_uri() . '/assets/images/icons/category-icon-' . $category_type . '.svg',
                        'name' => $category->name
                    ];
                }
            }

            $posts[] = [
                'logo' => $logo,
                'title' => $title,
                'url' => $url,
                'text_go_to' => $text_go_to,
                'excerpt' => $excerpt,
                'categories' => $categories_data,
            ];
        }
    }

    wp_reset_postdata();
    return rest_ensure_response([
        'posts' => $posts,
        'max_num_pages' => $query->max_num_pages
    ]);
}
function ajax_get_partners_for_block_slider()
{
    $partners_posts = get_partners_for_block_slider();
    $posts = [];

    foreach ($partners_posts as $partner_post) {
        $logo = get_image(get_post_thumbnail_id($partner_post->ID), 'w-auto h-auto max-w-full max-h-full grayscale transition', false);
        $url = get_field('url_partner', $partner_post->ID);

        $posts[] = [
            'logo' => $logo,
            'url' => $url
        ];
    }

    return rest_ensure_response([
        'posts' => $posts,
    ]);
}

function ajax_get_partners_categories()
{
    return rest_ensure_response(get_partners_categories());
}

function ajax_get_news($request)
{
    $category = $request->get_param('category');
    $page = $request->get_param('page');
    $posts_per_page = $request->get_param('posts_per_page');
    $text_more_details = get_field('text_more_details', 'options');
    
    $query = get_news([
        'category' => explode(',', $category),
        'page' => $page,
        'posts_per_page' => $posts_per_page
    ]);

    $posts = [];


    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $image = get_image(get_post_thumbnail_id(), 'ibg transition-transform duration-1000', false);
            $title = get_the_title();
            $url = get_post_permalink();
            $excerpt = get_the_excerpt();
            $date = get_the_date('j F, Y');

            $categories_data = [];
            $categories = get_the_terms(get_the_ID(), 'news-category');
            if (check($categories)) {
                foreach ($categories as $category) {
                    $category_type = get_field('category_icons', 'category_' . $category->term_id);
                    $categories_data[] = [
                        'type' => $category_type,
                        'img' => get_template_directory_uri() . '/assets/images/icons/category-icon-' . $category_type . '.svg',
                        'name' => $category->name,
                        'slug' => $category->slug
                    ];
                }
            }

            $posts[] = [
                'image' => $image,
                'title' => $title,
                'url' => $url,
                'date' => $date,
                'text_more_details' => $text_more_details,
                'excerpt' => $excerpt,
                'categories' => $categories_data,
            ];
        }
    }

    wp_reset_postdata();
    return rest_ensure_response([
        'posts' => $posts,
        'max_num_pages' => $query->max_num_pages
    ]);
}
function ajax_get_news_categories()
{
    $terms = get_terms(array(
        'taxonomy' => 'news-category',
        'hide_empty' => false,
    ));
    return rest_ensure_response($terms);
}

function register_acf_options_endpoint()
{
    register_rest_route('site-core/v1', '/options/', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_acf_option_field',
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
        'callback' => 'ajax_get_hero_main_decor_buttons_text',
        'permission_callback' => '__return_true'
    ));

    register_rest_route('site-core/v1', 'partners', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_partners',
        'permission_callback' => '__return_true',
        'args'     => array(
            'category' => array(
                'required' => true,
                'default'  => 'all',
                'validate_callback' => function ($param) {
                    return is_string($param);
                }
            ),
            'page' => array(
                'required' => false,
                'default'  => 1,
                'validate_callback' => function ($param) {
                    return is_numeric($param) && intval($param) > 0;
                }
            )
        )
    ));

    register_rest_route('site-core/v1', 'partners-categories', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_partners_categories',
        'permission_callback' => '__return_true'
    ));

    register_rest_route('site-core/v1', 'partners-for-slider', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_partners_for_block_slider',
        'permission_callback' => '__return_true'
    ));

    register_rest_route('site-core/v1', 'news', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_news',
        'permission_callback' => '__return_true',
        'args'     => array(
            'category' => array(
                'required' => false,
                'default'  => 'all',
                'validate_callback' => function ($param) {
                    return is_string($param);
                }
            ),
            'page' => array(
                'required' => false,
                'default'  => 1,
                'validate_callback' => function ($param) {
                    return is_numeric($param) && intval($param) > 0;
                }
            ),
            'posts_per_page' => array(
                'required' => false,
                'default'  => 16,
                'validate_callback' => function ($param) {
                    return is_numeric($param) && intval($param) > 0;
                }
            )
        )
    ));

    register_rest_route('site-core/v1', 'news-categories', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_news_categories',
        'permission_callback' => '__return_true'
    ));
}
