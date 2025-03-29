<?php
if (!($attributes['isHide'] ?? null)):
?>
    <?php if ($attributes['wrapper']): ?>
        <div class="<?= $attributes['classes'] ?>">
            <? echo $content; ?>
        </div>
    <?php else: ?>
        <? echo $content; ?>
    <?php endif; ?>
<?php endif; ?>