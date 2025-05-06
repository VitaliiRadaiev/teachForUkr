<?php
$classes = combine_classes(
   $attributes['classes'],
   ($attributes['className'] ?? ''),
   $attributes['columns']
);
?>

<div class="<?= $classes ?> card-with-image-logo shrink-0 grow-0 relative nested-bg-item rounded-[12px] p-[5px] flex flex-col">
   <?= $content; ?>
</div>

