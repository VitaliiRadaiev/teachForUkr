<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(
      get_margin_classes($attributes['margin']),
      get_gap_classes($attributes['gap']),
      get_flex_justify_alignment_classes($attributes['alignment']),
      $attributes['classes'],
      ($attributes['className'] ?? '')
   );
?>
   <div class="button-group flex flex-wrap items-center <?= $classes ?>">
      <?= $content; ?>
   </div>
<?php endif; ?>