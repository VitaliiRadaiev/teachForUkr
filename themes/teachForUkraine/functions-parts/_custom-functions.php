<?php

function print_svg($url)
{
  $before_wp_content = strstr($url, '/wp-content', false);
  return file_get_contents($_SERVER['DOCUMENT_ROOT'] . $before_wp_content);
}

function cut_p_tags($dirty_html)
{
  $nice_html = $dirty_html;
  $nice_html = str_replace("<p>", "", $nice_html);
  $nice_html = str_replace("</p>", "", $nice_html);
  return $nice_html;
}

function isMobile()
{
  $detect = new Mobile_Detect;
  return $detect->isMobile();
}
function isTablet()
{
  $detect = new Mobile_Detect;
  return $detect->isTablet();
}
function isDesktop()
{
  return (!isTablet() && !isMobile());
}

function shareFacebook($linkToShare)
{
  return 'https://www.facebook.com/sharer/sharer.php?u=' . urlencode($linkToShare);
}
function shareLinkedIn($linkToShare)
{
  return 'https://www.linkedin.com/shareArticle?url=' . urlencode($linkToShare);
}
function shareTwitter($linkToShare)
{
  return 'https://twitter.com/intent/tweet?url=' . urlencode($linkToShare);
}

function get_image($image_id, $classes = '', $echo = true, $size = 'full')
{
  if ($image_id) {
    $image_html = wp_get_attachment_image($image_id, $size, false, array('class' => $classes));
    if ($echo) {
      echo $image_html;
    } else {
      return $image_html;
    }
  } else {
    return false;
  }
}

function check($var)
{
  if (is_string($var)) {
    $var = trim($var);
  }

  return $var && isset($var) && !empty($var);
}

function build_menu_hierarchy($items, $parent = 0)
{
  $menu = array();
  foreach ($items as $item) {
    if ($item->menu_item_parent == $parent) {
      $children = build_menu_hierarchy($items, $item->ID);
      if ($children) {
        $item->children = $children;
      }
      $menu[] = $item;
    }
  }
  return $menu;
}

function get_social_icon_by_url($url)
{
  $icons = [
    'facebook' => get_template_directory_uri() . '/assets/images/icons/facebook.svg',
    'instagram' => get_template_directory_uri() . '/assets/images/icons/instagram.svg',
    'linkedin' => get_template_directory_uri() . '/assets/images/icons/linkedin.svg',
    'tiktok' => get_template_directory_uri() . '/assets/images/icons/tiktok.svg',
    'twitter' => get_template_directory_uri() . '/assets/images/icons/twitter.svg',
  ];

  if (strpos($url, 'facebook.com') !== false) {
    return $icons['facebook'];
  } elseif (strpos($url, 'instagram.com') !== false) {
    return $icons['instagram'];
  } elseif (strpos($url, 'linkedin.com') !== false) {
    return $icons['linkedin'];
  } elseif (strpos($url, 'tiktok.com') !== false) {
    return $icons['tiktok'];
  } elseif (strpos($url, 'twitter.com') !== false || strpos($url, 'x.com') !== false) {
    return $icons['twitter'];
  }

  return null;
}

function get_margin_classes($margin)
{
  $top = !empty($margin['top']) ? ($margin['top'] !== 'no' ? "mt-{$margin['top']}" : 'mt-0') : '';
  $right = !empty($margin['right']) ? ($margin['right'] !== 'no' ? " mr-{$margin['right']}" : ' mr-0') : '';
  $bottom = !empty($margin['bottom']) ? ($margin['bottom'] !== 'no' ? " mb-{$margin['bottom']}" : ' mb-0') : '';
  $left = !empty($margin['left']) ? ($margin['left'] !== 'no' ? " ml-{$margin['left']}" : ' ml-0') : '';

  return trim("$top$right$bottom$left");
}

function get_gap_classes($gap)
{
  $x = !empty($gap['x']) ? "gap-x-{$gap['x']}" : '';
  $y = !empty($gap['y']) ? "gap-y-{$gap['y']}" : '';

  return combine_classes($x, $y);
}

function get_sections_margin_classes($margin)
{
  $top = !empty($margin['top']) ? ($margin['top'] !== 'no' ? "section-mt-{$margin['top']}" : 'mt-0') : '';
  $right = !empty($margin['right']) ? ($margin['right'] !== 'no' ? " section-mr-{$margin['right']}" : ' mr-0') : '';
  $bottom = !empty($margin['bottom']) ? ($margin['bottom'] !== 'no' ? " section-mb-{$margin['bottom']}" : ' mb-0') : '';
  $left = !empty($margin['left']) ? ($margin['left'] !== 'no' ? " section-ml-{$margin['left']}" : ' ml-0') : '';

  return trim("$top$right$bottom$left");
}

function get_sections_padding_classes($padding)
{
  $top = !empty($padding['top']) ? ($padding['top'] !== 'no' ? "section-pt-{$padding['top']}" : 'pt-0') : '';
  $right = !empty($padding['right']) ? ($padding['right'] !== 'no' ? " section-pr-{$padding['right']}" : ' pr-0') : '';
  $bottom = !empty($padding['bottom']) ? ($padding['bottom'] !== 'no' ? " section-pb-{$padding['bottom']}" : ' pb-0') : '';
  $left = !empty($padding['left']) ? ($padding['left'] !== 'no' ? " section-pl-{$padding['left']}" : ' pl-0') : '';

  return trim("$top$right$bottom$left");
}

function get_heading_size_class($size)
{
  $sizesMap = [
    'sm' => 'h5',
    'md' => 'h4',
    'lg' => 'h3',
    'xl' => 'h2',
    '2xl' => 'h1'
  ];

  return isset($sizesMap[$size]) ? $sizesMap[$size] : '';
}

function combine_classes(...$classes)
{
  return implode(' ', array_filter($classes, fn($class) => !empty($class)));
}

function get_default_section_classes($attributes)
{
  return combine_classes(
    get_sections_margin_classes($attributes['margin']),
    get_sections_padding_classes($attributes['padding']),
    $attributes['background'],
    ($attributes['className'] ?? '')
  );
}

function get_container_classes($val)
{
  if (!check($val)) {
    return '';
  }

  return 'block-container-' . $val;
}


function combine_string(array $options, string $value): string
{
  $prefix = $options['prefix'] ?? '';
  $postfix = $options['postfix'] ?? '';

  if (!$value) {
    return '';
  }

  return $prefix . $value . $postfix;
}

function get_flex_justify_alignment_classes($key)
{
  if (!check($key)) {
    return '';
  }

  $classes_map = [
    'left' => 'justify-start',
    'right' => 'justify-end',
    'center' => 'justify-center',
    'space-between' => 'justify-between'
  ];

  return isset($classes_map[$key]) ? $classes_map[$key] : '';
}

function generate_html_data_attributes($data_attributes)
{
  $attributes = [];

  foreach ($data_attributes as $key => $value) {
    $attributes[] = $key . '="' . esc_attr($value) . '"';
  }

  return implode(' ', $attributes);
}
