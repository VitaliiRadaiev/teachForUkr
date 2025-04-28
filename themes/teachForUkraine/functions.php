<?php
// Functions parts
include_once 'functions-parts/Mobile_Detect.php';
include_once 'functions-parts/_assets.php';
include_once 'functions-parts/_post-types-registration.php';
include_once 'functions-parts/_taxonomies-registration.php';
// include_once 'functions-parts/_breadcrumbs.php';
include_once 'functions-parts/_wp_queries.php';
include_once 'functions-parts/_ajax.php';
include_once 'functions-parts/_hooks.php';
include_once 'functions-parts/_custom-functions.php';
include_once 'functions-parts/_convert_to_webp.php';
include_once 'modules/index.php';

/*
 * REMOVE EMOJI ICONS
 * */
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');


add_action('admin_menu', 'remove_menu_pages');

function remove_menu_pages()
{
    remove_menu_page('edit.php');
}


/*
 * Удаление "мусора"
 * */
remove_action('wp_head', 'feed_links_extra', 3); // убирает ссылки на rss категорий
remove_action('wp_head', 'feed_links', 2); // минус ссылки на основной rss и комментарии
remove_action('wp_head', 'rsd_link');  // сервис Really Simple Discovery
remove_action('wp_head', 'wlwmanifest_link'); // Windows Live Writer
remove_action('wp_head', 'wp_generator');  // скрыть версию wordpress
remove_action('wp_head', 'start_post_rel_link', 10, 0);
remove_action('wp_head', 'index_rel_link');
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);
remove_action('wp_head', 'rest_output_link_wp_head');
remove_action('wp_head', 'wp_oembed_add_discovery_links');
remove_action('template_redirect', 'rest_output_link_header', 11, 0);


/*
 * Удаление пунктов меню (убрать комментарий для нужного пункта)
 * */
function remove_menus()
{
    //    remove_menu_page('index.php');                  //Консоль
    //    remove_menu_page('edit.php');                   //Записи
    //    remove_menu_page('upload.php');                 //Медиафайлы
    //    remove_menu_page('edit.php?post_type=page');    //Страницы
    remove_menu_page('edit-comments.php');          //Комментарии
    //    remove_menu_page('themes.php');                 //Внешний вид
    //    remove_menu_page('plugins.php');                //Плагины
    //    remove_menu_page('users.php');                  //Пользователи
    //    remove_menu_page('tools.php');                  //Инструменты
    //    remove_menu_page('options-general.php');        //Настройки

    //    remove_menu_page('admin.php?page=pmxi-admin-import');
    //    remove_menu_page('edit.php?post_type=acf-field-group');
    //        remove_menu_page( 'admin.php?page=Wordfence' );
    //        remove_menu_page( 'admin.php?page=pmxi-admin-import' );
    //        remove_menu_page( 'admin.php?page=wpseo_dashboard' );
}

add_action('admin_menu', 'remove_menus');

define('ICL_DONT_LOAD_LANGUAGE_SELECTOR_CSS', true);
/*
 * Страница опций
 * */
if (function_exists('acf_add_options_page')) acf_add_options_page();


//if (function_exists('add_theme_support')) add_theme_support('menus');

/*
 * ACF Map activation
 * */
// function my_acf_init()
// {

//     acf_update_setting('google_api_key', 'GOOGLE_MAP_API_KEY');
// }
//add_action('acf/init', 'my_acf_init');

// Добавление поддержки миниатюр для следующих постов:
// add_theme_support( 'post-thumbnails', ['news'] );

// Local acf fields

function local_acf_json_save_point($path)
{

    // update path
    $path = get_stylesheet_directory() . '/acf';

    // return
    return $path;
}
add_filter('acf/settings/save_json', 'local_acf_json_save_point');

function my_acf_json_load_point($paths)
{
    // Remove the original path (optional).
    unset($paths[0]);

    // Append the new path and return it.
    $paths[] = get_stylesheet_directory() . '/acf';

    return $paths;
}
add_filter('acf/settings/load_json', 'my_acf_json_load_point');


/*
 * Favicon for admin-panel
 * */
function mojFavicon()
{
    echo '<link rel="Shortcut Icon" type="image/x-icon" href="" />';
}
//add_action( 'admin_head', 'mojFavicon' );

function get_current_template()
{
    global $template;
    return basename($template, '.php');
}


// Serch form template
// add_filter( 'get_search_form', 'my_search_form' );
function my_search_form($form)
{

    $form = '
	<form role="search" method="get" id="searchform" action="' . home_url('/') . '" >
		<input placeholder="' . get_field('search_title', 'options') . '" type="text" value="' . get_search_query() . '" name="s" id="s" />
		<input type="submit" id="searchsubmit"  value="" />
	</form>';

    return $form;
}


// добавление редактора меню
if (function_exists('add_theme_support')) {
    add_theme_support('menus');
}

/*
 * Add Menu Wp
 * */
register_nav_menus(
    array(
        'Header menu' => 'Header menu',
        'Footer menu' => 'Footer menu',
        'Footer sub menu' => 'Footer sub menu'
    )
);

add_theme_support('menus');

add_theme_support('post-thumbnails');
add_image_size('full_hd', 1920, 1080);


add_action('wp_print_styles', 'wps_deregister_styles', 100);
function wps_deregister_styles()
{
    wp_deregister_style('contact-form-7');
}


/**
 * Filter URL entry before it gets added to the sitemap.
 *
 * @param array  $url  Array of URL parts.
 * @param string $type URL type. Can be user, post or term.
 * @param object $object Data object for the URL.
 */
add_filter('rank_math/sitemap/entry', function ($url, $type, $object) {

    $url = str_replace('/golovna', '', $url);
    return $url;
}, 10, 3);

/**
 * Filter the URL Rank Math SEO uses in the XML sitemap for this post type archive.
 *
 * @param string $archive_url The URL of this archive
 * @param string $post_type   The post type this archive is for.
 */
add_filter('rank_math/sitemap/post_type_archive_link', function ($archive_url, $post_type) {
    return 0;
}, 10, 2);

// Redirect from Uppercase urls to Lowercase urls
// add_action( 'init', 'redirect_to_lower_case' );
// function redirect_to_lower_case() 
// {
//     if ( $_SERVER['REQUEST_URI'] != strtolower( $_SERVER['REQUEST_URI']) ) {
//         header('Location: http://'.$_SERVER['HTTP_HOST'] . 
//                 strtolower($_SERVER['REQUEST_URI']), true, 301);
//         exit();
//     }
// }


function get_nav_menu_items_by_location($location, $args = [])
{

    // Get all locations
    $locations = get_nav_menu_locations();

    // Get object id by location
    $object = wp_get_nav_menu_object($locations[$location]);

    // Get menu items by menu name
    $menu_items = wp_get_nav_menu_items($object->name, $args);

    $menu_items_mod = [];
    foreach ($menu_items as $menu_item) {
        $menu_items_mod[$menu_item->ID] = $menu_item;
    }
    $relese = [];

    foreach ($menu_items_mod as $id => $menu) {
        if ($menu->menu_item_parent == 0) {
            $relese[] = $menu;
        } else {
            if (!isset($relese[$menu->post_parent]->children)) {
                $relese[$menu->post_parent]->children = [];
            }
            $relese[$menu->post_parent]->children[] = $menu;
        }
    }
    // Return menu post objects
    return $relese;
}


add_action('rest_api_init', 'register_endpoints');

function clean_post_slug_before_save($data)
{
    if (isset($data['post_name']) && !empty($data['post_name'])) {
        $data['post_name'] = preg_replace('/[^a-zA-Z0-9_-]/', '', $data['post_name']);
    }
    return $data;
}
add_filter('wp_insert_post_data', 'clean_post_slug_before_save', 10, 1);

function wpa_show_permalinks($post_link, $post)
{
    if (is_object($post) && $post->post_type == 'news') {
        $terms = wp_get_object_terms($post->ID, 'news-category');

        if (!empty($terms) && !is_wp_error($terms)) {
            return str_replace('%news-category%', $terms[0]->slug, $post_link);
        } else {
            return str_replace('news/%news-category%/', 'news/', $post_link);
        }
    }

    if (is_object($post) && $post->post_type == 'story') {
        $terms = wp_get_object_terms($post->ID, 'story-category');

        if (!empty($terms) && !is_wp_error($terms)) {
            return str_replace('%story-category%', $terms[0]->slug, $post_link);
        } else {
            return str_replace('story/%story-category%/', 'story/', $post_link);
        }
    }

    if (is_object($post) && $post->post_type == 'vacancy') {
        $terms = wp_get_object_terms($post->ID, 'vacancy-city');

        if (!empty($terms) && !is_wp_error($terms)) {
            return str_replace('%vacancy-city%', $terms[0]->slug, $post_link);
        } else {
            return str_replace('vacancy/%vacancy-city%/', 'vacancy/', $post_link);
        }
    }

    return $post_link;
}
add_filter('post_type_link', 'wpa_show_permalinks', 1, 2);
