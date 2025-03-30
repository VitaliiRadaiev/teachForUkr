<?php
if (check($attributes['text'])):
    $classes = get_margin_classes($attributes['margin']) . ' ' . 'text-' . $attributes['size'] . ' ' . $attributes['classes'] . (check($attributes['aligment']) ? ' text-' . $attributes['aligment'] : '');
?>
    <?php if (check($attributes['text'])): ?>
        <p class="<?= $classes ?>">
            <?= $attributes['text'] ?>
        </p>
    <?php endif; ?>
<?php endif; ?>