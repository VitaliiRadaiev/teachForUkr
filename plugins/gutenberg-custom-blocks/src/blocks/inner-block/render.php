<?php
if (!($attributes['isHide'] ?? null)):
?>
    <?php if ($attributes['wrapper']): ?>
        <div class="<?= $attributes['classes'] ?>" <?= generate_html_data_attributes($attributes['dataAttributes']) ?>>
            <? echo $content; ?>
        </div>
    <?php else: ?>
        <? echo $content; ?>
    <?php endif; ?>
<?php endif; ?>