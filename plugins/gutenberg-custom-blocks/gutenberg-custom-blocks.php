<?php

/**
 * Plugin Name:       Gutenberg Custom Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gutenberg-custom-blocks
 *
 * @package CreateBlock
 */

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

add_action('enqueue_block_assets', function () {
	$style_url = get_template_directory_uri() . '/assets/css/main.css';
	wp_enqueue_style('main-style', $style_url, array());

	if (is_admin()) {
		$style_url = plugins_url("build/style-index.css", __FILE__);
		wp_enqueue_style('t4u-style', $style_url, array());
	}
});

function create_block_gutenberg_custom_blocks_block_init()
{
	add_filter('block_categories_all', function ($categories) {
		array_unshift($categories, [
			'slug' => 'hero',
			'title' => 'Вcтупні баннери / заголовки'
		]);
		array_unshift($categories, [
			'slug' => 'numbers',
			'title' => 'Цифри'
		]);
		array_unshift($categories, [
			'slug' => 'image-text-button-row',
			'title' => 'Картинка + текст горизонтально'
		]);
		array_unshift($categories, [
			'slug' => 'blocks',
			'title' => 'Блоки'
		]);
		array_unshift($categories, [
			'slug' => 'partners',
			'title' => 'Партнери'
		]);
		return $categories;
	});

	$sections = glob(__DIR__ . '/build/sections/*', GLOB_ONLYDIR);
	$sub_sections = glob(__DIR__ . '/build/sections/**/*', GLOB_ONLYDIR);
	$blocks = glob(__DIR__ . '/build/blocks/*', GLOB_ONLYDIR);

	foreach (array_merge($sections, $sub_sections, $blocks) as $block_dir) {
		register_block_type($block_dir);
	}

	if (is_admin()) {
		$script_url = plugins_url('build/index.js', __FILE__);
		wp_enqueue_script('t4u-index', $script_url, array('wp-blocks', 'wp-element', 'wp-editor'));
	}
}
add_action('init', 'create_block_gutenberg_custom_blocks_block_init');


function get_registered_block_names($path)
{
	$blocks = [];
	$directories = glob($path, GLOB_ONLYDIR);

	foreach ($directories as $dir) {
		$block_json_path = $dir . '/block.json';
		if (file_exists($block_json_path)) {
			$block_json = json_decode(file_get_contents($block_json_path), true);
			if (isset($block_json['name'])) {
				$blocks[] = $block_json['name'];
			}
		}
	}

	return $blocks;
}

function example_allowed_block_types($allowed_block_types, $block_editor_context)
{
    $custom_blocks = array_merge(
        get_registered_block_names(__DIR__ . '/build/sections/*'),
        get_registered_block_names(__DIR__ . '/build/sections/**/*'),
        get_registered_block_names(__DIR__ . '/build/blocks/*')
    );

    $allowed_block_types = array_merge([
        'core/image',
        'core/list',
        'core/list-item',
        'core/paragraph',
    ], $custom_blocks);

    return $allowed_block_types;
}
add_filter('allowed_block_types_all', 'example_allowed_block_types', 10, 2);