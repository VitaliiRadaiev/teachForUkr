<?php
   $classes = combine_classes(
      'ol-list-number',
      $attributes['classes'],
      ($attributes['className'] ?? ''),
      $attributes['accent'],
      $attributes['gapClass'],
      get_margin_classes($attributes['margin']),
      combine_string(['prefix' => 'text-'], $attributes['fontSize']),
      combine_string(['prefix' => 'text-'], $attributes['aligment']),
      combine_string(['prefix' => 'ol-ml-'], $attributes['spaceLeft']),
   );
?>

<ol class="<?= $classes ?>">
   <?= $content; ?>
</ol>