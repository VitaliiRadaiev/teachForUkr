<?php
$classes = combine_classes(
   $attributes['classes'],
   ($attributes['className'] ?? ''),
   $attributes['columns']
);
?>

<div class="card-with-image card-rotate md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2 <?= $classes ?>">
   <?= $content; ?>
</div>