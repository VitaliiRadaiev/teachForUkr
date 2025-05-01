<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(
      ($attributes['className'] ?? ''),
   );
?>
   <div class="<?= $classes ?> item lg:flex gap-[30px] 4xl:gap-[40px]">
      <?= $content; ?>
   </div>
<?php endif; ?>