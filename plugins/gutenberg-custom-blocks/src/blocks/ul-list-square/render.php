<?php
   $classes = combine_classes(
      'ul-list-square',
      $attributes['classes'],
      ($attributes['className'] ?? ''),
      $attributes['accent'],
      $attributes['gapClass'],
      get_margin_classes($attributes['margin']),
      combine_string(['prefix' => 'text-'], $attributes['fontSize']),
      combine_string(['prefix' => 'text-'], $attributes['aligment']),
      combine_string(['prefix' => 'ul-ml-'], $attributes['spaceLeft']),
   );
?>

<ul class="<?= $classes ?>">
   <?= $content; ?>
</ul>