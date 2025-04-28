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

function get_news($queries = [])
{
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

function get_news_by_ids($ids = [])
{
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


function get_stories($queries = [])
{
    $defaults = [
        'category'       => 'all',
        'page'           => 1,
        'posts_per_page' => 16,
        'search'         => '',
    ];

    $queries = wp_parse_args($queries, $defaults);

    $args = array(
        'post_type' => 'story',
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
                    'taxonomy' => 'story-category',
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

function get_stories_by_ids($ids = [])
{
    if (empty($ids) || !is_array($ids)) {
        return new WP_Query();
    }

    $args = [
        'post_type'      => 'story',
        'post__in'       => $ids,
        'orderby'        => 'post__in',
        'posts_per_page' => -1,
        'post_status'    => 'publish',
    ];

    $query = new WP_Query($args);
    wp_reset_postdata();

    return $query;
}


function get_people($queries = [])
{
    $defaults = [
        'category'       => 'all',
        'page'           => 1,
        'posts_per_page' => 16,
        'search'         => '',
    ];

    $queries = wp_parse_args($queries, $defaults);

    $args = array(
        'post_type' => 'people',
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
        $terms = $queries['category'];
        $field = 'slug';

        if (is_array($terms) && count(array_filter($terms, 'is_numeric')) === count($terms)) {
            $field = 'term_id';
        }

        if (is_numeric($terms) && !is_array($terms)) {
            $field = 'term_id';
        }

        $args = array_merge($args, [
            'tax_query' => [
                [
                    'taxonomy' => 'people-category',
                    'field' => $field,
                    'terms' => $terms,
                ],
            ],
        ]);
    }

    $query = new WP_Query($args);
    wp_reset_postdata();

    return $query;
}

function get_people_by_ids($ids = [])
{
    if (empty($ids) || !is_array($ids)) {
        return new WP_Query();
    }

    $args = [
        'post_type'      => 'people',
        'post__in'       => $ids,
        'orderby'        => 'post__in',
        'posts_per_page' => -1,
        'post_status'    => 'publish',
    ];

    $query = new WP_Query($args);
    wp_reset_postdata();

    return $query;
}

function get_people_categories()
{
    $top_level_terms = get_terms([
        'taxonomy'   => 'people-category',
        'hide_empty' => true,
        'parent'     => 0,
    ]);

    foreach ($top_level_terms as &$term) {
        $term->sub_categories = get_term_children_recursive($term->term_id, 'people-category');
    }

    return $top_level_terms;
}

function get_people_sub_categories($category_id)
{
    $child_terms = get_terms([
        'taxonomy'   => 'people-category',
        'hide_empty' => true,
        'child_of'   => $category_id,
    ]);

    return $child_terms;
}


function get_cases_for_block_slider()
{
    $limit = 16;

    $args = array(
        'post_type' => 'case',
        'posts_per_page' => $limit,
        'post_status' => 'publish',
        'meta_query' => [
            'relation' => 'OR',
            [
                'key' => 'show_in_cases_slider_block',
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
            'post_type'      => 'case',
            'posts_per_page' => $remaining_posts_count,
            'post_status'    => 'publish',
            'orderby'        => 'rand',
            'post__not_in'   => $featured_ids,
            'meta_query'     => array(
                'relation' => 'OR',
                [
                    'key'     => 'show_in_cases_slider_block',
                    'value' => '0',
                    'compare' => '='
                ],
                [
                    'key'     => 'show_in_cases_slider_block',
                    'compare' => 'NOT EXISTS'
                ]
            )
        ));
        wp_reset_postdata();
        $other_posts = $other_query->posts;
    }

    return array_merge($featured_posts, $other_posts);
}

function get_reviews()
{
    $limit = 16;

    $args = array(
        'post_type' => 'review',
        'posts_per_page' => $limit,
        'post_status' => 'publish',
        'orderby'        => 'date',
        'order'          => 'DESC'
    );

    $query  = new WP_Query($args);
    wp_reset_postdata();

    return $query;
}

// helpers
function get_term_children_recursive($parent_id, $taxonomy)
{
    $children = get_terms([
        'taxonomy'   => $taxonomy,
        'hide_empty' => true,
        'parent'     => $parent_id,
    ]);

    if (empty($children)) {
        return null;
    }

    foreach ($children as &$child) {
        $child->sub_categories = get_term_children_recursive($child->term_id, $taxonomy);
    }

    return $children;
}
