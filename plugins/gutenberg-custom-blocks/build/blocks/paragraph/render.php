<?php
$classes = combine_classes(
    get_margin_classes($attributes['margin']),
    combine_string(['prefix' => 'text-'], $attributes['fontSize']),
    combine_string(['prefix' => 'text-'], $attributes['aligment']),
    $attributes['classes'],
    ($attributes['className'] ?? '')
);

$text = '';

if ($attributes['acfField'] ?? null) {
    $text = get_field($attributes['acfField'], 'options');
}

if (check($attributes['text'])) {
    $text = $attributes['text'];
}
?>
<?php if (check($text)): ?>
    <p class="<?= $classes ?>">
        <?= $text ?>
    </p>
<?php endif; ?>