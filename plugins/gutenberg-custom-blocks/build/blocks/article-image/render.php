<?php
    $classes = combine_classes(
       $attributes['classes'],
       ($attributes['className'] ?? ''),
        get_margin_classes($attributes['margin']),
        combine_string(['prefix' => 'text-'], $attributes['alignment']),
        ((!$attributes['isNativeSize'] && $attributes['variants'] == 0) ? '[&_img]:w-full [&_img]:aspect-[1/0.670] md:[&_img]:aspect-[1/0.482]' : ''),
        ((!$attributes['isNativeSize'] && $attributes['variants'] == 1) ? 'grid md:grid-cols-2 gap-[20px] lg:gap-[24px] 4xl:gap-[30px] [&_img]:w-full [&_img]:aspect-square' : ''),
        (($attributes['isNativeSize']) ? '[&_figure]:inline-block' : ''),
    );
?>

<div class="<?= $classes ?> article-image [&_img]:rounded-[12px]">
   <?= $content; ?>
</div>
