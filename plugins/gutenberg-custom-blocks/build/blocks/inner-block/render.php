<?php
if (!($attributes['isHide'])):
    $classes = combine_classes(
        $attributes['classes'],
        ($attributes['className'] ?? ''),
    );
?>
    <?php if ($attributes['wrapper']): ?>
        <<?= $attributes['tag'] ?> class="<?= $classes ?>" <?= generate_html_data_attributes($attributes['dataAttributes']) ?>>
            <?= $content; ?>
        </<?= $attributes['tag'] ?>>
    <?php else: ?>
        <?= $content; ?>
    <?php endif; ?>
<?php endif; ?>