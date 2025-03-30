<?php
if (!($attributes['isHide'])):
    $classes = getMarginClasses($attributes['margin']) . ' ' . 'text-' . $attributes['size'] . ' ' . $attributes['classes'] . (check($attributes['aligment']) ? ' text-' . $attributes['aligment'] : '');
?>
    <div class="<?= $classes ?>">
        <?= $content; ?>
    </div>
<?php endif; ?>