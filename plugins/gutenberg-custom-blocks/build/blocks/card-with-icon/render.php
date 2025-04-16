<?php
   $classes = combine_classes(
      $attributes['classes'],
      ($attributes['className'] ?? ''),
      $attributes['columns'],
      $attributes['direction'],
   );
?>
<div class="<?= $classes ?> card-with-icon nested-bg-item rounded-[12px] p-[16px] md:p-[20px] flex gap-y-[20px] md:gap-y-[40px] gap-x-[14px] md:gap-x-[20px] md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2">
   <?= $content; ?>
</div>