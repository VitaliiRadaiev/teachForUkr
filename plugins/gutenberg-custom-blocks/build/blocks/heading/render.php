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
?>
    <?php if (check($attributes['text'])): ?>
        <<?= $attributes['htmlTeg'] ?> class="<?= $classes ?>">
            <?= $attributes['text'] ?>
        </<?= $attributes['htmlTeg'] ?>>
    <?php endif; ?>
<?php endif; ?>