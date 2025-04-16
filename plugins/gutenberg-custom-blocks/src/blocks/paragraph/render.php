<?php
if (check($attributes['text'])):
    $classes = combine_classes(
        get_margin_classes($attributes['margin']),
        combine_string(['prefix' => 'text-'], $attributes['fontSize']),
        combine_string(['prefix' => 'text-'], $attributes['aligment']),
        $attributes['classes'],
        ($attributes['className'] ?? '')
    );
?>
    <p class="<?= $classes ?>">
        <?= $attributes['text'] ?>
    </p>
<?php endif; ?>