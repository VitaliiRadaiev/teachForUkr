<?php
if (!($attributes['isHide'])):
    $classes = getMarginClasses($attributes['margin']) . ' ' . getHeadingSizeClass($attributes['size']) . ' ' . $attributes['classes'] . ' text-' . $attributes['aligment'];
?>
    <?php if (check($attributes['text'])): ?>
        <<?= $attributes['htmlTeg'] ?> class="<?= $classes ?>">
            <?= $attributes['text'] ?>
        </<?= $attributes['htmlTeg'] ?>>
    <?php endif; ?>
<?php endif; ?>