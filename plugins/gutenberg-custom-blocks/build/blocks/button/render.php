<?php
if (!($attributes['isHide'] ?? null)):

    $text = '';
    $url = '#';
    $target = '_self';
    $classes = $attributes['variant'] . ' ' . $attributes['accent'] . ' ' . getMarginClasses($attributes['margin']) . ' ' . $attributes['classes'];

    if ($attributes['acfField'] ?? null) {
        $option_link = get_field($attributes['acfField'], 'options');
    }

    if ($option_link ?? null) {
        $text = $option_link['title'];
        $url = $option_link['url'];
        $target = check($option_link['target']) ? $option_link['target'] : '_self';
    }

    if (check($attributes['text'])) {
        $text = $attributes['text'];
    }

    if($attributes['postType'] ?? null) {
        $url = $attributes['postType']['url'];

        if($attributes['postType']['opensInNewTab'] ?? null) {
            $target = '_blank';
        }
    }
?>
    <a href="<?= $url ?>" target="<?= $target ?>" class="<?= $classes ?>">
        <?= $text ?>
    </a>
<?php endif; ?>