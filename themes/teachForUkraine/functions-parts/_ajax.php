<?php

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

function ajax_get_acf_global_links()
{
    $fields = get_fields('options');

    if (!$fields) {
        return new WP_Error('no_fields', 'Поля не найдены', array('status' => 404));
    }

    $result = [
        'link_join' => $fields['link_join'] ?? null,
        'link_support'     => $fields['link_support'] ?? null,
        'link_become_partner'  => $fields['link_become_partner'] ?? null,
        'link_registration'     => $fields['link_registration'] ?? null,
        'link_PayPal'     => $fields['link_PayPal'] ?? null,
        'link_Wayforpay'     => $fields['link_Wayforpay'] ?? null,
        'link_BankTransfer'     => $fields['link_BankTransfer'] ?? null,
        'link_more_partners'     => $fields['link_more_partners'] ?? null,
        'link_more_news'     => $fields['link_more_news'] ?? null,
        'link_more_stories'     => $fields['link_more_stories'] ?? null,
        'link_vacancies'     => $fields['link_vacancies'] ?? null,
        'link_faq'     => $fields['link_faq'] ?? null,
    ];

    return rest_ensure_response($result);
}

function ajax_get_acf_global_buttons_text()
{
    $fields = get_fields('options');

    if (!$fields) {
        return new WP_Error('no_fields', 'Поля не найдены', array('status' => 404));
    }

    $result = [
        'text_subscribe' => $fields['text_subscribe'] ?? null,
        'text_more_details' => $fields['text_more_details'] ?? null,
        'text_more' => $fields['text_more'] ?? null,
        'text_all' => $fields['text_all'] ?? null,
        'text_show_more' => $fields['text_show_more'] ?? null,
        'text_go_to' => $fields['text_go_to'] ?? null,
        'text_review' => $fields['text_review'] ?? null,
        'text_download_more' => $fields['text_download_more'] ?? null,
    ];

    return rest_ensure_response($result);
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

function ajax_get_cta_form_decor_buttons_text()
{
    return rest_ensure_response([
        get_field('text_growth', 'options'),
        get_field('text_team', 'options'),
        get_field('text_responsibility', 'options')
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
    $search = $request->get_param('search');
    $page = $request->get_param('page');
    $posts_per_page = $request->get_param('posts_per_page');

    $args = [
        'page' => $page,
        'posts_per_page' => $posts_per_page,
        'search' => $search
    ];

    if ($category === 'all') {
        $args = array_merge($args, [
            'category' => $category
        ]);
    } else {
        $args = array_merge($args, [
            'category' => array_filter(explode(',', $category), function ($item) {
                return $item !== 'all';
            })
        ]);
    }

    $query = get_news($args);

    $posts = create_news_response_data($query);

    wp_reset_postdata();
    return rest_ensure_response([
        'posts' => $posts,
        'max_num_pages' => $query->max_num_pages
    ]);
}
function ajax_get_news_by_ids($request)
{
    $ids = $request->get_param('ids');
    $query = get_news_by_ids(explode(',', $ids));

    $posts = create_news_response_data($query);

    wp_reset_postdata();
    return rest_ensure_response([
        'posts' => $posts
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


function ajax_get_stories($request)
{
    $category = $request->get_param('category');
    $search = $request->get_param('search');
    $page = $request->get_param('page');
    $posts_per_page = $request->get_param('posts_per_page');

    $args = [
        'page' => $page,
        'posts_per_page' => $posts_per_page,
        'search' => $search
    ];

    if ($category === 'all') {
        $args = array_merge($args, [
            'category' => $category
        ]);
    } else {
        $args = array_merge($args, [
            'category' => array_filter(explode(',', $category), function ($item) {
                return $item !== 'all';
            })
        ]);
    }

    $query = get_stories($args);

    $posts = create_stories_response_data($query);

    wp_reset_postdata();
    return rest_ensure_response([
        'posts' => $posts,
        'max_num_pages' => $query->max_num_pages
    ]);
}
function ajax_get_stories_by_ids($request)
{
    $ids = $request->get_param('ids');
    $query = get_stories_by_ids(explode(',', $ids));

    $posts = create_stories_response_data($query);

    wp_reset_postdata();
    return rest_ensure_response([
        'posts' => $posts
    ]);
}
function ajax_get_stories_categories()
{
    $terms = get_terms(array(
        'taxonomy' => 'story-category',
        'hide_empty' => false,
    ));
    return rest_ensure_response($terms);
}


function ajax_get_people($request)
{
    $category = $request->get_param('category');
    $search = $request->get_param('search');
    $page = $request->get_param('page');
    $posts_per_page = $request->get_param('posts_per_page');

    $args = [
        'page' => $page,
        'posts_per_page' => $posts_per_page,
        'search' => $search
    ];

    if ($category === 'all') {
        $args = array_merge($args, [
            'category' => $category
        ]);
    } else {
        $args = array_merge($args, [
            'category' => array_filter(explode(',', $category), function ($item) {
                return $item !== 'all';
            })
        ]);
    }

    $query = get_people($args);

    $posts = create_people_response_data($query);

    wp_reset_postdata();
    return rest_ensure_response([
        'posts' => $posts,
        'max_num_pages' => $query->max_num_pages
    ]);
}
function ajax_get_people_by_ids($request)
{
    $ids = $request->get_param('ids');
    $query = get_people_by_ids(explode(',', $ids));

    $posts = create_people_response_data($query);

    wp_reset_postdata();
    return rest_ensure_response([
        'posts' => $posts
    ]);
}
function ajax_get_people_categories()
{
    $terms = get_people_categories();
    return rest_ensure_response($terms);
}
function ajax_get_people_sub_categories($request)
{
    $id = $request->get_param('id');
    $terms = get_people_sub_categories($id);
    return rest_ensure_response($terms);
}

function ajax_get_cases_for_block_slider()
{
    $text_more_details = get_field('text_more_details', 'options');
    $cases = get_cases_for_block_slider();

    $posts = [];

    if (check($cases)) {
        foreach ($cases as $case) {
            $url = get_the_permalink($case->ID);
            $image = get_image(get_post_thumbnail_id($case->ID), 'transition-transform duration-1000', false);
            $title = get_the_title($case->ID);
            $excerpt = get_the_excerpt($case->ID);

            $posts[] = [
                'id' =>  $case->ID,
                'url' => $url,
                'image' => $image,
                'title' => $title,
                'excerpt' => $excerpt,
                'text_more_details' => $text_more_details
            ];
        }
    }

    return rest_ensure_response([
        'posts' => $posts
    ]);
}

function ajax_get_reviews($request)
{
    $category = $request->get_param('category');
    $search = $request->get_param('search');
    $page = $request->get_param('page');
    $posts_per_page = $request->get_param('posts_per_page');

    $args = [
        'page' => $page,
        'posts_per_page' => $posts_per_page,
        'search' => $search
    ];

    if ($category === 'all') {
        $args = array_merge($args, [
            'category' => $category
        ]);
    } else {
        $args = array_merge($args, [
            'category' => array_filter(explode(',', $category), function ($item) {
                return $item !== 'all';
            })
        ]);
    }

    $query = get_reviews($args);

    $posts = create_reviews_response_data($query);

    wp_reset_postdata();
    return rest_ensure_response([
        'posts' => $posts,
        'max_num_pages' => $query->max_num_pages
    ]);
}
function ajax_get_reviews_by_ids($request)
{
    $ids = $request->get_param('ids');
    $query = get_reviews_by_ids(explode(',', $ids));

    $posts = create_reviews_response_data($query);

    wp_reset_postdata();
    return rest_ensure_response([
        'posts' => $posts
    ]);
}
function ajax_get_reviews_categories()
{
    $terms = get_reviews_categories();
    return rest_ensure_response($terms);
}


function ajax_get_vacancies($request)
{
    $category = $request->get_param('category');
    $search = $request->get_param('search');
    $page = $request->get_param('page');
    $posts_per_page = $request->get_param('posts_per_page');

    $args = [
        'page' => $page,
        'posts_per_page' => $posts_per_page,
        'search' => $search
    ];

    if ($category === 'all') {
        $args = array_merge($args, [
            'category' => $category
        ]);
    } else {
        $args = array_merge($args, [
            'category' => array_filter(explode(',', $category), function ($item) {
                return $item !== 'all';
            })
        ]);
    }

    $query = get_vacancies($args);

    $posts = create_vacancies_response_data($query);

    wp_reset_postdata();
    return rest_ensure_response([
        'posts' => $posts,
        'max_num_pages' => $query->max_num_pages
    ]);
}

function ajax_get_vacancy_city()
{
    $terms = get_vacancies_cities();
    return rest_ensure_response($terms);
}

function ajax_get_reports()
{
    $text_see_the_report = get_field('text_see_the_report', 'options');
    $query = get_reports();

    $posts = [];

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $id = get_the_ID();
            $title = get_the_title();
            $excerpt = get_the_excerpt();
            $file_url = get_field('report_file', $id);

            $posts[] = [
                'id' =>  $id,
                'title' => $title,
                'excerpt' => $excerpt,
                'file_url' => $file_url,
                'text_see_the_report' => $text_see_the_report
            ];
        }
    }

    return rest_ensure_response([
        'posts' => $posts
    ]);
}

function ajax_get_questions($request)
{
    $category = $request->get_param('category');
    $search = $request->get_param('search');
    $page = $request->get_param('page');
    $posts_per_page = $request->get_param('posts_per_page');
    $popular = $request->get_param('popular');

    $args = [
        'page' => $page,
        'posts_per_page' => $posts_per_page,
        'search' => $search,
        'popular' => $popular
    ];

    if ($category === 'all') {
        $args = array_merge($args, [
            'category' => $category
        ]);
    } else {
        $args = array_merge($args, [
            'category' => array_filter(explode(',', $category), function ($item) {
                return $item !== 'all';
            })
        ]);
    }

    $query = get_questions($args);

    $posts = create_questions_response_data($query);

    wp_reset_postdata();
    return rest_ensure_response([
        'posts' => $posts,
        'max_num_pages' => $query->max_num_pages
    ]);
}
function ajax_get_questions_by_ids($request)
{
    $ids = $request->get_param('ids');
    $query = get_questions_by_ids(explode(',', $ids));

    $posts = create_questions_response_data($query);

    wp_reset_postdata();
    return rest_ensure_response([
        'posts' => $posts
    ]);
}
function ajax_get_questions_categories()
{
    $terms = get_questions_categories();
    return rest_ensure_response($terms);
}

// register endpoints
function register_endpoints()
{
    register_rest_route('site-core/v1', 'options', array(
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
    register_rest_route('site-core/v1', 'options-links', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_acf_global_links',
        'permission_callback' => '__return_true',
    ));
    register_rest_route('site-core/v1', 'options-buttons-text', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_acf_global_buttons_text',
        'permission_callback' => '__return_true',
    ));

    register_rest_route('site-core/v1', 'hero-main-decor-buttons', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_hero_main_decor_buttons_text',
        'permission_callback' => '__return_true'
    ));
    register_rest_route('site-core/v1', 'cta-form-decor-buttons', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_cta_form_decor_buttons_text',
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
            'search' => array(
                'required' => false,
                'default'  => '',
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
    register_rest_route('site-core/v1', 'news-by-ids', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_news_by_ids',
        'permission_callback' => '__return_true',
        'args'     => array(
            'ids' => array(
                'required' => false,
                'default'  => '',
                'validate_callback' => function ($param) {
                    return is_string($param);
                }
            )
        )
    ));
    register_rest_route('site-core/v1', 'news-categories', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_news_categories',
        'permission_callback' => '__return_true'
    ));

    register_rest_route('site-core/v1', 'story', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_stories',
        'permission_callback' => '__return_true',
        'args'     => array(
            'category' => array(
                'required' => false,
                'default'  => 'all',
                'validate_callback' => function ($param) {
                    return is_string($param);
                }
            ),
            'search' => array(
                'required' => false,
                'default'  => '',
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
    register_rest_route('site-core/v1', 'story-by-ids', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_stories_by_ids',
        'permission_callback' => '__return_true',
        'args'     => array(
            'ids' => array(
                'required' => false,
                'default'  => '',
                'validate_callback' => function ($param) {
                    return is_string($param);
                }
            )
        )
    ));
    register_rest_route('site-core/v1', 'story-categories', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_stories_categories',
        'permission_callback' => '__return_true'
    ));

    register_rest_route('site-core/v1', 'people', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_people',
        'permission_callback' => '__return_true',
        'args'     => array(
            'category' => array(
                'required' => false,
                'default'  => 'all',
                'validate_callback' => function ($param) {
                    return is_string($param);
                }
            ),
            'search' => array(
                'required' => false,
                'default'  => '',
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
    register_rest_route('site-core/v1', 'people-by-ids', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_people_by_ids',
        'permission_callback' => '__return_true',
        'args'     => array(
            'ids' => array(
                'required' => false,
                'default'  => '',
                'validate_callback' => function ($param) {
                    return is_string($param);
                }
            )
        )
    ));
    register_rest_route('site-core/v1', 'people-categories', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_people_categories',
        'permission_callback' => '__return_true'
    ));
    register_rest_route('site-core/v1', 'people-sub-categories', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_people_sub_categories',
        'permission_callback' => '__return_true',
        'args'     => array(
            'parentid' => array(
                'required' => true,
                'validate_callback' => function ($param) {
                    return is_numeric($param) && intval($param) > 0;
                }
            )
        )
    ));

    register_rest_route('site-core/v1', 'review', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_reviews',
        'permission_callback' => '__return_true',
        'args'     => array(
            'category' => array(
                'required' => false,
                'default'  => 'all',
                'validate_callback' => function ($param) {
                    return is_string($param);
                }
            ),
            'search' => array(
                'required' => false,
                'default'  => '',
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
    register_rest_route('site-core/v1', 'review-by-ids', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_reviews_by_ids',
        'permission_callback' => '__return_true',
        'args'     => array(
            'ids' => array(
                'required' => false,
                'default'  => '',
                'validate_callback' => function ($param) {
                    return is_string($param);
                }
            )
        )
    ));
    register_rest_route('site-core/v1', 'review-categories', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_reviews_categories',
        'permission_callback' => '__return_true'
    ));

    register_rest_route('site-core/v1', 'case-for-slider', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_cases_for_block_slider',
        'permission_callback' => '__return_true',
    ));

    register_rest_route('site-core/v1', 'vacancy', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_vacancies',
        'permission_callback' => '__return_true',
        'args'     => array(
            'category' => array(
                'required' => false,
                'default'  => 'all',
                'validate_callback' => function ($param) {
                    return is_string($param);
                }
            ),
            'search' => array(
                'required' => false,
                'default'  => '',
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
    register_rest_route('site-core/v1', 'vacancy-city', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_vacancy_city',
        'permission_callback' => '__return_true'
    ));

    register_rest_route('site-core/v1', 'report', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_reports',
        'permission_callback' => '__return_true'
    ));

    register_rest_route('site-core/v1', 'question', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_questions',
        'permission_callback' => '__return_true',
        'args'     => array(
            'category' => array(
                'required' => false,
                'default'  => 'all',
                'validate_callback' => function ($param) {
                    return is_string($param);
                }
            ),
            'search' => array(
                'required' => false,
                'default'  => '',
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
                'default'  => 5,
                'validate_callback' => function ($param) {
                    return is_numeric($param) && intval($param) > 0;
                }
            ),
            'popular' => array(
                'required' => false,
                'default'  => false,
                'validate_callback' => function ($param) {
                    return $param === 'true' || $param === 'false' || is_bool($param);
                },
                'sanitize_callback' => function ($param) {
                    return filter_var($param, FILTER_VALIDATE_BOOLEAN);
                }
            )
        )
    ));
    register_rest_route('site-core/v1', 'question-by-ids', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_questions_by_ids',
        'permission_callback' => '__return_true',
        'args'     => array(
            'ids' => array(
                'required' => false,
                'default'  => '',
                'validate_callback' => function ($param) {
                    return is_string($param);
                }
            )
        )
    ));
    register_rest_route('site-core/v1', 'question-categories', array(
        'methods'  => 'GET',
        'callback' => 'ajax_get_questions_categories',
        'permission_callback' => '__return_true'
    ));
}


// helpers
function create_news_response_data($query)
{
    $text_more_details = get_field('text_more_details', 'options');
    $posts = [];

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $id = get_the_ID();
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
                'id' =>  $id,
                'image' => $image,
                'title' => html_entity_decode($title, ENT_QUOTES | ENT_HTML5),
                'url' => $url,
                'date' => $date,
                'text_more_details' => $text_more_details,
                'excerpt' => html_entity_decode($excerpt, ENT_QUOTES | ENT_HTML5),
                'categories' => $categories_data,
            ];
        }
    }

    return $posts;
}

function create_stories_response_data($query)
{
    $text_more_details = get_field('text_more_details', 'options');
    $posts = [];

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $id = get_the_ID();
            $image = get_image(get_post_thumbnail_id(), 'ibg', false);
            $title = get_the_title();
            $url = get_post_permalink();
            $excerpt = get_the_excerpt();
            $date = get_the_date('j F, Y');

            $posts[] = [
                'id' =>  $id,
                'image' => $image,
                'title' => html_entity_decode($title, ENT_QUOTES | ENT_HTML5),
                'url' => $url,
                'date' => $date,
                'text_more_details' => $text_more_details,
                'excerpt' => html_entity_decode($excerpt, ENT_QUOTES | ENT_HTML5),
            ];
        }
    }

    return $posts;
}

function create_people_response_data($query)
{
    $posts = [];

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $id = get_the_ID();
            $image = get_image(get_post_thumbnail_id(), 'ibg', false);
            $title = get_the_title();
            $excerpt = get_the_excerpt();
            $social = get_field('people_social', $id);

            $posts[] = [
                'id' =>  $id,
                'image' => $image,
                'title' => html_entity_decode($title, ENT_QUOTES | ENT_HTML5),
                'excerpt' => html_entity_decode($excerpt, ENT_QUOTES | ENT_HTML5),
                'social' => $social
            ];
        }
    }

    return $posts;
}

function create_reviews_response_data($query)
{
    $posts = [];

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $id = get_the_ID();
            $image = get_image(get_post_thumbnail_id(), 'ibg', false, 'medium');
            $title = get_the_title();
            $excerpt = get_the_excerpt();
            $position = get_field('review_position', $id);

            $posts[] = [
                'id' =>  $id,
                'image' => $image,
                'title' => $title,
                'position' => $position,
                'excerpt' => $excerpt,
            ];
        }
    }

    return $posts;
}

function create_vacancies_response_data($query)
{
    $text_more_details = get_field('text_more_details', 'options');
    $posts = [];

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $id = get_the_ID();
            $title = get_the_title();
            $excerpt = get_the_excerpt();

            $terms = get_the_terms(get_the_ID(), 'vacancy-city');

            $posts[] = [
                'id' =>  $id,
                'title' => html_entity_decode($title, ENT_QUOTES | ENT_HTML5),
                'excerpt' => html_entity_decode($excerpt, ENT_QUOTES | ENT_HTML5),
                'cities' => $terms,
                'text_more_details' => $text_more_details
            ];
        }
    }

    return $posts;
}

function create_questions_response_data($query)
{
    $posts = [];

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $id = get_the_ID();
            $title = get_the_title();
            $content = apply_filters('the_content', get_the_content());

            $posts[] = [
                'id' =>  $id,
                'title' => html_entity_decode($title, ENT_QUOTES | ENT_HTML5),
                'content' => html_entity_decode($content, ENT_QUOTES | ENT_HTML5)
            ];
        }
    }

    return $posts;
}
