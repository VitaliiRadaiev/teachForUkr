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

function render_slider_nav_buttons()
{
    ?>
    <div class="hidden lg:block absolute right-0 bottom-[calc(100%+50px)]">
        <div class="inline-flex gap-[24px]">
            <button class="nav-btn prev icon-arrow-left-long flex items-center justify-center h-[50px] w-[60px] text-[20px] text-dark-primary bg-light-primary-60 rounded-[8px] transition-colors cursor-pointer hover:text-white hover:bg-dark-primary-60"></button>
            <button class="nav-btn next icon-arrow-right-long flex items-center justify-center h-[50px] w-[60px] text-[20px] text-dark-primary bg-light-primary-60 rounded-[8px] transition-colors cursor-pointer hover:text-white hover:bg-dark-primary-60"></button>
        </div>
    </div>
<?php
}

function render_slider_nav()
{
?>
    <div class="mt-[20px] md:mt-[30px] flex justify-center [&:has(.swiper-pagination-lock)]:hidden">
        <div class="slider-bullets"></div>
    </div>
    <?= render_slider_nav_buttons() ?>
<?php
}

?>