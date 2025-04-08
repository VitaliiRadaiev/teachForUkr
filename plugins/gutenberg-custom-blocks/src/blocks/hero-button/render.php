<?php
$text = '';
$url = '#';
$target = '_self';
$classes = combine_classes(
    $attributes['classes'],
    ($attributes['className'] ?? '')
);


if (check($attributes['text'])) {
    $text = $attributes['text'];
}

if ($attributes['postType'] ?? null) {
    $url = $attributes['postType']['url'];

    if ($attributes['postType']['opensInNewTab'] ?? null) {
        $target = '_blank';
    }
}
?>
<a href="<?= $url ?>" target="<?= $target ?>" class="hero-btn grow shrink-0 <?= $classes ?>">
    <span data-text="<?= $text ?>"></span>
</a>