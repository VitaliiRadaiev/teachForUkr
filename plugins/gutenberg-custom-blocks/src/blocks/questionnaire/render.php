<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(
      get_margin_classes($attributes['margin']),
      $attributes['classes'],
      ($attributes['className'] ?? '')
   );
?>
   <div class="<?= $classes ?> questionnaire rounded-[12px] nested-bg-item py-[40px] md:py-[50px] px-[20px] md:px-[94px]">
      <?= $content; ?>
   </div>
<?php endif; ?>