<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(
      get_margin_classes($attributes['margin']),
      $attributes['classes'],
      ($attributes['className'] ?? '')
   );
?>

   <div class="breadcrumbs <?= $classes ?>">
      <?php if (function_exists('rank_math_the_breadcrumbs')) rank_math_the_breadcrumbs(); ?>
   </div>

<?php endif; ?>