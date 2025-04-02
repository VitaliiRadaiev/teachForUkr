<?php
$menus_names = ['Header menu'];
$menu_locations = get_nav_menu_locations();
$menus = [];

foreach ($menus_names as $menu_name) {
    $menu_id = $menu_locations[$menu_name];
    $menu_items = wp_get_nav_menu_items($menu_id);
    $menus[$menu_name] = build_menu_hierarchy($menu_items);
}

$header_options = get_field('header_options', 'options');
$link_join = get_field('link_join', 'options');
$link_support = get_field('link_support', 'options');
$text_searhc_placeholder = get_field('text_searhc_placeholder', 'options');

?>
<header data-header class="fixed top-0 left-0 w-full z-49 [&.header-scrolling_.header-backdrop]:opacity-95" data-popup="add-right-padding">
    <div class="container py-[16px] lg:!px-[30px] 3xl:!px-[60px] 4xl:!px-[80px]">
        <div class="relative">
            <div class="header-nav z-2 flex items-center gap-x-[20px] md:gap-x-[40px] lg:gap-x-[30px] p-[10px] relative transition-opacity [&.hide]:opacity-0 [&.hide]:invisible">
                <?php if (is_front_page()): ?>
                    <div class="pl-[4px] md:pl-[10px] shrink-0 grow-0">
                        <?= get_image($header_options['logo'], 'h-[var(--square-size)] w-auto') ?>
                    </div>
                <?php else: ?>
                    <a href="<?= get_home_url() ?>" class="pl-[4px] md:pl-[10px] shrink-0 grow-0" aria-label="Main logo, link to home">
                        <?= get_image($header_options['logo'], 'h-[var(--square-size)] w-auto') ?>
                    </a>
                <?php endif; ?>

                <nav class="hidden head-nav ml-[20px] 4xl:ml-[36px] xl:flex flex-wrap gap-x-[25px] 4xl:gap-x-[40px] gap-y-[4px] reverse-index">
                    <?php foreach ($menus['Header menu'] as $item): ?>
                        <?php if (!isset($item->children)): ?>
                            <div class="nav-item relative head-text">
                                <?php render_menu_link($item, 'nav-item-link min-h-[26px] 4xl:min-h-[29px] flex items-center text-dark-primary transition-colors [&_flag]:ml-[0.2em]') ?>
                            </div>
                        <?php else: ?>
                            <div class="nav-item relative head-text nav-item-has-children">
                                <?php render_menu_link($item, 'nav-item-link min-h-[26px] 4xl:min-h-[29px] flex items-center text-dark-primary transition-colors [&_flag]:ml-[0.2em]') ?>
                                <div class="nav-item-list pt-[15px] absolute top-full left-[-20px] opacity-0 invisible translate-y-[10px]">
                                    <div data-scroll-container class="bg-white border border-accent-first-10 !p-[20px] max-h-[calc(100svh-88px)] rounded-[12px] min-w-max">
                                        <?php foreach ($item->children as $item) {
                                            render_menu_link($item, 'nav-item-link flex items-center max-w-[300px] leading-[1.4em] font-normal [&:not(:first-child)]:pt-[10px] [&:not(:last-child)]:pb-[9px] [&:not(:last-child)]:border-b [&:not(:last-child)]:border-accent-first-10 transition-colors hover:text-dark-primary');
                                        } ?>
                                    </div>
                                </div>
                            </div>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </nav>

                <div class="header-nav-options ml-auto flex gap-[8px] [&.hide]:opacity-0 [&.hide]:invisible">
                    <button data-action="open-header-search" class="icon-search h-[var(--square-size)] w-[var(--square-size)] bg-background text-dark-primary rounded-[7px] flex items-center justify-center cursor-pointer transition-colors hover:text-accent-first text-[21px] md:text-[24px]"></button>
                    <div data-options data-dropdown class="lg:relative lg:z-3 [&.active_.options]:opacity-100 [&.active_.options]:visible [&.active_.options]:translate-y-0 [&.active>button]:text-accent-first   [&_.options]:hover:opacity-100 [&_.options]:hover:visible [&_.options]:hover:translate-y-0 [&>button]:hover:text-accent-first">
                        <button data-action="dropdown-toggle" class="dropdown-title icon-eye h-[var(--square-size)] w-[var(--square-size)] bg-background text-dark-primary rounded-[7px] flex items-center justify-center text-[21px] md:text-[24px]"></button>
                        <div class="dropdown-list options absolute left-1/2 -translate-x-1/2 max-w-[calc(100vw-32px)] w-[31.5em] top-[calc(100%-7px)] lg:top-[calc(100%+3px)] bg-white p-[16px] md:p-[20px] rounded-[12px] border border-accent-first-10 text-[15px] md:text-[16px] 4xl:text-[18px] opacity-0 invisible translate-y-[10px]">
                            <div class="flex items-center flex-wrap gap-x-[40px] gap-y-[10px]">
                                <div class="flex items-center gap-x-[20px]">
                                    <div>
                                        <?= $header_options['text_black_white'] ?>
                                    </div>
                                    <span class="block h-[20px] w-[1px] bg-accent-first-10"></span>
                                    <button data-action="set-black-white-mode" class="icon-black-white text-dark-primary text-[1.25em] transition hover:text-accent-first h-[1.45em] w-[1.45em] flex items-center justify-center cursor-pointer [&.active]:-scale-x-100"></button>
                                </div>
                                <div class="flex items-center gap-x-[20px]">
                                    <div>
                                        <?= $header_options['text_fotn_size'] ?>
                                    </div>
                                    <span class="block h-[20px] w-[1px] bg-accent-first-10"></span>
                                    <div class="flex gap-x-[10px]">
                                        <button data-action="set-text-size" data-size="16" class="active flex items-center justify-center h-[1.875em] w-[1.875em] rounded-[5px] text-dark-primary transition-colors cursor-pointer hover:bg-accent-first-10 [&.active]:bg-accent-first [&.active]:text-white [&.active]:pointer-events-none">
                                            <span class="uppercase">
                                                a
                                            </span>
                                        </button>
                                        <button data-action="set-text-size" data-size="20" class="flex items-center justify-center h-[1.875em] w-[1.875em] rounded-[5px] text-dark-primary transition-colors cursor-pointer hover:bg-accent-first-10 [&.active]:bg-accent-first [&.active]:text-white [&.active]:pointer-events-none">
                                            <span class="uppercase text-[1.25em] font-medium">
                                                a
                                            </span>
                                        </button>
                                        <button data-action="set-text-size" data-size="24" class="flex items-center justify-center h-[1.875em] w-[1.875em] rounded-[5px] text-dark-primary transition-colors cursor-pointer hover:bg-accent-first-10 [&.active]:bg-accent-first [&.active]:text-white [&.active]:pointer-events-none">
                                            <span class="uppercase text-[1.5em] font-bold">
                                                a
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="reset-options flex items-center gap-x-[20px] gap-y-[10px] pt-[16px] md:pt-[20px] mt-[16px] md:mt-[20px] border-t border-accent-first-10">
                                <div>
                                    <?= $header_options['text_reset'] ?>
                                </div>
                                <button data-action="reset-options" class="icon-eye text-dark-primary text-[1.25em] transition-colors hover:text-accent-first h-[1.45em] w-[1.45em] flex items-center justify-center cursor-pointer"></button>
                            </div>
                        </div>
                    </div>
                    <div data-language-switcher data-dropdown class="language-switcher relative text-dark-primary head-text">
                        <button data-action="dropdown-toggle" class="language-switcher-title h-[var(--square-size)] min-w-[var(--square-size)] px-[6px] md:px-[10px] bg-background rounded-[7px] flex items-center justify-center cursor-pointer transition-colors hover:text-accent-first">
                            Ua <span class="icon-chewron-down ml-[2px] text-[0.7em]"></span>
                        </button>
                        <div class="wpml-ls-statics-shortcode_actions wpml-ls wpml-ls-legacy-list-horizontal">
                            <ul>
                                <li class="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-uk wpml-ls-first-item wpml-ls-last-item wpml-ls-item-legacy-list-horizontal">
                                    <a href="https://nesepora.dl.net.ua/" class="wpml-ls-link">
                                        <span class="wpml-ls-native">En</span>
                                    </a>
                                </li>
                                <li class="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-uk wpml-ls-current-language wpml-ls-first-item wpml-ls-last-item wpml-ls-item-legacy-list-horizontal">
                                    <a href="https://nesepora.dl.net.ua/" class="wpml-ls-link">
                                        <span class="wpml-ls-native">Ua</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <button data-action="open-mobile-menu" class="h-[var(--square-size)] w-[var(--square-size)] bg-dark-primary rounded-[8px] relative xl:hidden">
                    <span class="block absolute top-1/2 left-1/2 h-[2px] w-[17px] bg-white transition"></span>
                    <span class="block absolute top-1/2 left-1/2 h-[2px] w-[17px] bg-white transition"></span>
                    <span class="block absolute top-1/2 left-1/2 h-[2px] w-[17px] bg-white transition"></span>
                    <span class="block absolute top-1/2 left-1/2 h-[2px] w-[17px] bg-white transition"></span>
                </button>

                <div class="hidden xl:flex gap-x-[10px]">
                    <?= render_button_link($link_join, 'btn-primary accent-first [&.btn-primary]:min-h-[48px] [&.btn-primary]:text-[1rem] 4xl:[&.btn-primary]:min-h-[53px] 4xl:[&.btn-primary]:text-[1.125rem] 4xl:[&.btn-primary]:px-[40px]'); ?>
                    <?= render_button_link($link_support, 'btn-primary accent-second [&.btn-primary]:min-h-[48px] [&.btn-primary]:text-[1rem] 4xl:[&.btn-primary]:min-h-[53px] 4xl:[&.btn-primary]:text-[1.125rem] 4xl:[&.btn-primary]:px-[40px]'); ?>
                </div>
            </div>
            <form data-ehader-search action="/" class="header-search absolute inset-0 z-3 flex items-center gap-x-[10px] p-[10px] opacity-0 invisible [&.active]:opacity-100 [&.active]:visible">
                <button type="submit" class="ml-[10px] icon-search flex items-center justify-center h-[24px] w-[24px] text-[24px] cursor-pointer text-dark-primary transition-colors hover:text-accent-first"></button>
                <input type="text" class="flex w-full items-center text-[1rem] leading-[1.4em] text-dark-primary placeholder:text-dark-primary-60 outline-none" placeholder="<?= $text_searhc_placeholder ?>">
                <button type="button" data-action="close-header-search" class="icon-x-mark flex items-center justify-center h-[44px] w-[44px] text-[14px] cursor-pointer text-dark-primary transition-colors hover:text-accent-first"></button>
            </form>
            <div class="header-backdrop bg-white absolute z-1 inset-0 rounded-[10px] md:rounded-[12px] transition-opacity"></div>
        </div>
    </div>
</header>

<div data-search-backdrop class="fixed inset-0 w-full z-48 backdrop-blur-sm opacity-0 invisible [&.active]:opacity-100 [&.active]:visible"></div>

<div data-mobile-menu class="fixed z-48 top-full left-0 w-full h-svh bg-background opacity-0 invisible [&.active]:opacity-100 [&.active]:visible [&.active]:-translate-y-full">
    <div class="container h-full flex flex-col justify-between gap-y-[24px] pb-[35px] pt-[96px] md:pt-[100px]">
        <div class="h-full overflow-y-auto pr-[16px] mr-[-16px] md:pr-[40px] md:mr-[-40px]">
            <nav class="min-h-full flex flex-col justify-center">
                <?php foreach ($menus['Header menu'] as $item): ?>
                    <?php if (!isset($item->children)): ?>
                        <div class="nav-item [&:not(:first-child)]:pt-[16px] [&:not(:last-child)]:pb-[16px] relative">
                            <?php render_menu_link($item, 'nav-item-link text-[1.25rem] font-bold leading-[1.2em] tracking-[-0.03em] uppercase block text-dark-primary'); ?>
                        </div>
                    <?php else: ?>
                        <div class="nav-item nav-item-has-children [&:not(:first-child)]:pt-[16px] [&:not(:last-child)]:pb-[16px] relative">
                            <?php render_menu_link($item, 'nav-item-link text-[1.25rem] font-bold leading-[1.2em] tracking-[-0.03em] uppercase block text-dark-primary'); ?>
                            <div style="display: none;" class="nav-item-list pl-[20px] flex flex-col gap-[16px] mt-[16px]">
                                <?php foreach ($item->children as $item) {
                                    render_menu_link($item, 'nav-item-link text-[1.125rem] leading-normal tracking-[-0.01em] font-medium');
                                } ?>
                            </div>
                        </div>
                    <?php endif; ?>
                <?php endforeach; ?>
            </nav>
        </div>
        <div class="grid grid-cols-2 gap-x-[10px]">
            <?= render_button_link($link_join, 'btn-primary accent-first [&.btn-primary]:min-h-[48px] [&.btn-primary]:text-[1rem] 4xl:[&.btn-primary]:min-h-[53px] 4xl:[&.btn-primary]:text-[1.125rem] 4xl:[&.btn-primary]:px-[40px]'); ?>
            <?= render_button_link($link_support, 'btn-primary accent-second [&.btn-primary]:min-h-[48px] [&.btn-primary]:text-[1rem] 4xl:[&.btn-primary]:min-h-[53px] 4xl:[&.btn-primary]:text-[1.125rem] 4xl:[&.btn-primary]:px-[40px]'); ?>
        </div>
    </div>
</div>