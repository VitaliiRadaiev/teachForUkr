<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(
      $attributes['classes'],
      ($attributes['className'] ?? ''),
      get_margin_classes($attributes['margin'])
   );
?>

   <div class="<?= $classes ?> article-video">
       <?= $content; ?>
   </div>
<?php endif; ?>