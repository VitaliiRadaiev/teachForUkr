<?php
if (!($attributes['isHide'])):
    $classes = combine_classes(
        get_margin_classes($attributes['margin']),
        get_heading_size_class($attributes['fontSize']),
        $attributes['classes'],
        ($attributes['className'] ?? ''),
        combine_string(['prefix' => 'text-'], $attributes['aligment']),
        get_container_classes($attributes['container'])
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
        <<?= $attributes['htmlTeg'] ?> class="<?= $classes ?>">
            <?= $text ?>
        </<?= $attributes['htmlTeg'] ?>>
    <?php endif; ?>
<?php endif; ?>