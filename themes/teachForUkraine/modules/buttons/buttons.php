<?php

function render_menu_link($menu, $classes = '', $attr = '')
{
?>
    <a href="<?= $menu->url ?>" target="<?= $menu->target ? '_blank' : '_self' ?>" <?= $attr ?> class="<?= $classes ?>">
        <?= $menu->title ?>
    </a>
    <?php
}

function render_link($link, $classes = '', $attr = '')
{
    if (check($link) && !empty($link['url'])):
    ?>
        <a href="<?= $link['url'] ?>" target="<?= $link['target'] ? '_blank' : '_self' ?>" <?= $attr ?> class="<?= $classes ?>">
            <?= html_entity_decode($link['title']) ?>
        </a>
    <?php
    endif;
}

function render_button_link($link, $classes = '', $attr = '')
{
    if (check($link) && !empty($link['url'])):
    ?>
        <a href="<?= $link['url'] ?>" target="<?= $link['target'] ? '_blank' : '_self' ?>" <?= $attr ?> class="<?= $classes ?>">
            <span data-text="<?= html_entity_decode($link['title']) ?>"></span>
        </a>
<?php
    endif;
}

?>