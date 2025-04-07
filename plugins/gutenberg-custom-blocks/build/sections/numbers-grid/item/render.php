<?php
$classes = combine_classes(
   $attributes['rows'],
   $attributes['columns'],
   ($attributes['variants'] === 'top' ? 'lg:row-span-2' : ''),
   ($attributes['variants'] === 'left' ? 'lg:flex-row' : ''),
   ($attributes['variants'] === 'right' ? 'lg:flex-row-reverse' : ''),
);
?>


<div class="numbers-grid-card nested-bg-item p-[5px] rounded-[12px] flex flex-col gap-[5px] lg:gap-y-[15px] md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2 <?= $classes ?>">
   <? echo $content; ?>
</div>