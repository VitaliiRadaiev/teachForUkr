<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(
      $attributes['classes'],
      ($attributes['className'] ?? ''),
      get_margin_classes($attributes['margin'])
   );
?>

   <div class="<?= $classes ?> article-quote nested-bg-item rounded-[12px] p-[16px] md:p-[40px]">
      <img class="h-[16px] md:h-[20px] w-auto mx-auto accent-second-filter" src="<?= get_template_directory_uri() . '/assets/images/icons/semi-circle-right-double.svg' ?>" alt="">
      <?= $content; ?>
   </div>
<?php endif; ?>