<?php
   $classes = combine_classes(
      ($attributes['className'] ?? ''),
   );
?>
<div class="<?= $classes ?> shrink grow card-with-number nested-bg-item rounded-[12px] p-[16px] md:p-[20px] flex flex-col gap-y-[20px] md:gap-y-[40px]">
   <?= $content; ?>
</div>