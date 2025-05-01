<?php
   $classes = combine_classes(
      $attributes['classes'],
      ($attributes['className'] ?? ''),
      $attributes['columns'],
      $attributes['direction'],
      (($attributes['columns'] === 'col-span-1' && $attributes['direction'] === 'flex-row') ? 'md-max:flex-col lg-and-xl-max:flex-col' : '')
   );
?>
<div class="<?= $classes ?> card-with-icon nested-bg-item rounded-[12px] p-[16px] md:p-[20px] flex gap-y-[20px] md:gap-y-[40px] gap-x-[14px] md:gap-x-[20px]">
   <?= $content; ?>
</div>