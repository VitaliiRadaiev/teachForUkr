<?php
if (!($attributes['isHide'])):

    $text = '';
    $url = '#';
    $target = '_self';
    $classes = combine_classes(
        $attributes['variant'],
        $attributes['accent'],
        get_margin_classes($attributes['margin']),
        $attributes['classes'],
        ($attributes['className'] ?? '')
    );

    if ($attributes['acfField'] ?? null) {
        $option_field = get_field($attributes['acfField'], 'options');
    }

    if ($option_field ?? null) {
        if ($attributes['acfFieldType'] === 'link') {
            $text = $option_field['title'];
            $url = $option_field['url'];
            $target = check($option_field['target']) ? $option_field['target'] : '_self';
        } else {
            $text = $option_field;
        }
    }

    if (check($attributes['text'])) {
        $text = $attributes['text'];
    }

    if ($attributes['postType'] ?? null) {
        $url = $attributes['postType']['url'];

        if ($attributes['postType']['opensInNewTab'] ?? null) {
            $target = '_blank';
        }
    }
?>
    <?php if ($attributes['renderAs'] === 'link'): ?>
        <a href="<?= $url ?>" target="<?= $target ?>" class="<?= $classes ?>" <?= generate_html_data_attributes($attributes['dataAttributes']) ?>>
            <span data-text="<?= $text ?>"></span>
        </a>
    <?php else: ?>
        <button class="<?= $classes ?>" <?= generate_html_data_attributes($attributes['dataAttributes']) ?>>
            <span data-text="<?= $text ?>"></span>
        </button>
    <?php endif; ?>
<?php endif; ?>