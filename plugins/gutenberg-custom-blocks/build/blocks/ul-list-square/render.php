<?php
   $gap_y_map = [
      'sm' => 'gap-y-[5px]',
      'md' => 'gap-y-[10px]',
      'lg' => 'gap-y-[25px]',
      'xl' => 'gap-y-[40px]',
   ];

   $classes = combine_classes(
      'ul-list-square',
      $attributes['classes'],
      ($attributes['className'] ?? ''),
      $attributes['accent'],
      $gap_y_map[$attributes['gap']],
      get_margin_classes($attributes['margin']),
      combine_string(['prefix' => 'text-'], $attributes['fontSize']),
      combine_string(['prefix' => 'text-'], $attributes['aligment']),
      combine_string(['prefix' => 'ul-ml-'], $attributes['spaceLeft']),
   );
?>

<ul class="<?= $classes ?>">
   <?= $content; ?>
</ul>