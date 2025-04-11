<?php
function get_partners_categories()
{
    $text_all = get_field('text_all', 'options');
    $terms = get_terms(array(
        'taxonomy' => 'post-category',
        'hide_empty' => false,
    ));

    $categories = array();

    foreach ($terms as $term) {
        $related_posts = get_posts(array(
            'post_type'      => 'partner',
            'posts_per_page' => 1,
            'tax_query'      => array(
                array(
                    'taxonomy' => 'post-category',
                    'field'    => 'term_id',
                    'terms'    => $term->term_id,
                )
            )
        ));

        if (!empty($related_posts)) {
            $categories[] = $term;
        }
    }

    $all_term = (object) array(
        'name' => $text_all,
        'slug' => 'all'
    );

    array_unshift($categories, $all_term);

    return $categories;
}

function get_partners_for_block_slider()
{
    $limit = 5;

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
