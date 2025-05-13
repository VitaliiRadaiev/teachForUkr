<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(
      $attributes['classes'],
      ($attributes['className'] ?? ''),
      get_margin_classes($attributes['margin'])
   );
?>

   <div class="<?= $classes ?> article-box nested-bg-item rounded-[12px] p-[20px] md:p-[30px]">
       <?= $content; ?>
   </div>
<?php endif; ?>