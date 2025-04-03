<?php
if (!($attributes['isHide'])):
    $classes = combine_classes(
        'simple-text-content',
        get_margin_classes($attributes['margin']),
        combine_string(['prefix' => 'text-'], $attributes['fontSize']),
        combine_string(['prefix' => 'text-'], $attributes['aligment']),
        $attributes['classes'],
        ($attributes['className'] ?? '')
    );
?>
    <div class="<?= $classes ?>">
        <?= $content; ?>
    </div>
<?php endif; ?>