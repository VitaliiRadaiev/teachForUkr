<?php
function get_partners_categories()
{
    $text_all = get_field('text_all', 'options');
    $terms = get_terms(array(
        'taxonomy' => 'partners-category',
        'hide_empty' => false,
    ));

    $all_term = (object) array(
        'name' => $text_all,
        'slug' => 'all'
    );

    array_unshift($terms, $all_term);

    return $terms;
}

function get_partners(
    $queries = [
        'category' => 'all',
        'page' => 1
    ]
) {
    $args = array(
        'post_type' => 'partner',
        'posts_per_page' => 9,
        'post_status' => 'publish',
        'paged' => $queries['page'],
        'orderby' => 'date',
        'order' => 'DESC'
    );

    if ($queries['category'] !== 'all') {
        $args = array_merge($args, [
            'tax_query' => [
                [
                    'taxonomy' => 'partners-category',
                    'field' => 'slug',
                    'terms' => $queries['category'],
                ],
            ],
        ]);
    }

    $query = new WP_Query($args);
    wp_reset_postdata();

    return $query;
}

function get_partners_for_block_slider()
{
    $limit = 18;

    $args = array(
        'post_type' => 'partner',
        'posts_per_page' => $limit,
        'post_status' => 'publish',
        'meta_query' => [
            'relation' => 'OR',
            [
                'key' => 'show_in_partners_slider_block',
                'value' => '1',
                'compare' => '='
            ]
        ],
        'orderby'        => 'date',
        'order'          => 'DESC'
    );

    $featured_query  = new WP_Query($args);
    wp_reset_postdata();
    $featured_posts = $featured_query->posts;
    $featured_ids   = wp_list_pluck($featured_posts, 'ID');

    $remaining_posts_count = $limit - count($featured_posts);

    $other_posts = [];

    if ($remaining_posts_count > 0) {
        $other_query = new WP_Query(array(
            'post_type'      => 'partner',
            'posts_per_page' => $remaining_posts_count,
            'post_status'    => 'publish',
            'orderby'        => 'rand',
            'post__not_in'   => $featured_ids,
            'meta_query'     => array(
                'relation' => 'OR',
                [
                    'key'     => 'show_in_partners_slider_block',
                    'value' => '0',
                    'compare' => '='
                ],
                [
                    'key'     => 'show_in_partners_slider_block',
                    'compare' => 'NOT EXISTS'
                ]
            )
        ));
        wp_reset_postdata();
        $other_posts = $other_query->posts;
    }

    return array_merge($featured_posts, $other_posts);
}

function get_news($queries = []) {
    $defaults = [
        'category'       => 'all',
        'page'           => 1,
        'posts_per_page' => 16,
        'search'         => '',
    ];

    $queries = wp_parse_args($queries, $defaults);

    $args = array(
        'post_type' => 'news',
        'posts_per_page' => $queries['posts_per_page'],
        'post_status' => 'publish',
        'paged' => $queries['page'],
        'orderby' => 'date',
        'order' => 'DESC'
    );

    $search = trim($queries['search']);
    if (check($search)) {
        $args['s'] = $search;
    }

    if ($queries['category'] !== 'all') {
        $args = array_merge($args, [
            'tax_query' => [
                [
                    'taxonomy' => 'news-category',
                    'field' => 'slug',
                    'terms' => $queries['category'],
                ],
            ],
        ]);
    }

    $query = new WP_Query($args);
    wp_reset_postdata();

    return $query;
}

function get_news_by_ids($ids = []) {
    if (empty($ids) || !is_array($ids)) {
        return new WP_Query();
    }

    $args = [
        'post_type'      => 'news',
        'post__in'       => $ids,
        'orderby'        => 'post__in',
        'posts_per_page' => -1,
        'post_status'    => 'publish',
    ];

    $query = new WP_Query($args);
    wp_reset_postdata();

    return $query;
}
