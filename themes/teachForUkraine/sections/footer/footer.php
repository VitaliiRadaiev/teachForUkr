<?php
$socials_list = get_field('socials_list', 'options');
$footer_options = get_field('footer_options', 'options');
$menus_names = ['Footer menu', 'Footer sub menu'];
$menu_locations = get_nav_menu_locations();
$menus = [];

foreach ($menus_names as $menu_name) {
    $menu_id = $menu_locations[$menu_name];
    $menu_items = wp_get_nav_menu_items($menu_id);
    $menus[$menu_name] = build_menu_hierarchy($menu_items);
}
?>

<footer class="relative z-3 bg-dark-primary text-white text-md pt-[50px] md:pb-[24px] xl:pb-0 lg:pt-[70px] [&_a]:transition-colors hover:[&_a]:text-accent-second">
    <div class="absolute left-0 bottom-[calc(100%-1px)] bg-dark-primary w-full h-[20px] md:h-[30px] rounded-t-[20px] md:rounded-t-[30px]"></div>
    <div class="container">
        <div class="flex flex-col lg:flex-row lg:gap-x-[20px] lg:justify-between">
            <?php if (is_front_page()): ?>
                <div>
                    <?= get_image($footer_options['logo'], 'h-[54px] w-auto') ?>
                </div>
            <?php else: ?>
                <a href="<?= get_home_url() ?>" aria-label="Main logo, link to home">
                    <?= get_image($footer_options['logo'], 'h-[54px] w-auto') ?>
                </a>
            <?php endif; ?>

            <?php if (check($footer_options['text'])): ?>
                <div class="mt-[40px] text-dark-primary-60 md:hidden">
                    <?= $footer_options['text'] ?>
                </div>
            <?php endif; ?>

            <div class="mt-[30px] md:mt-[40px] lg:mt-0 md:grid md:gap-x-[20px] md:grid-cols-[242px_1fr] 4xl:grid-cols-[258px_1fr] md:items-center lg:max-w-[722px] 4xl:max-w-[917px] lg:w-full">
                <div>
                    <div class="h4 uppercase text-light-primary">
                        <?= $footer_options['text_subscribe_title'] ?>
                    </div>
                    <div class="mt-[4px] text-sm text-light-primary-40">
                        <?= $footer_options['text_subscribe_sub_title'] ?>
                    </div>
                </div>
                <div class="mt-[16px] md:mt-0">
                    <?php include get_template_directory() . '/modules/subscribe-form/subscribe-form.php'; ?>
                </div>
            </div>
        </div>
        <div class="mt-[40px] md:mt-[30px] xl:mt-[40px]">
            <div class="md:pt-[30px] xl:pt-[40px] md:border-t md:border-dark-primary-80 xl:grid xl:grid-cols-[287px_1fr_220px] 4xl:grid-cols-[420px_1fr_244px] xl:gap-x-[50px] 4xl:gap-x-[100px]">
                <?php if (check($footer_options['text'])): ?>
                    <div class="hidden md:block text-dark-primary-60">
                        <?= $footer_options['text'] ?>
                    </div>
                <?php endif; ?>
                <div class="md:mt-[40px] xl:mt-0 grid gap-y-[30px] md:gap-y-[60px] md:gap-x-[58px] 4xl:gap-x-[120px] md:grid-cols-[auto_auto_auto]">
                    <?php foreach ($menus['Footer menu'] as $item): ?>
                        <div>
                            <div class="h4 uppercase text-dark-primary-60">
                                <?= $item->title ?>
                            </div>
                            <div class="mt-[16px] grid md-max:grid-cols-2 gap-y-[14px] xl:gap-y-[10px] gap-x-[10px]  [&>a]:min-h-[0.4em] md:[&>a]:min-h-[1.4em]">
                                <?php
                                if (check($item->children)) {
                                    foreach ($item->children as $item) {
                                        if ($item->url === '#empty') {
                                            echo '<a></a>';
                                        } else {
                                            render_menu_link($item);
                                        }
                                    }
                                }
                                ?>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>

                <?php if (check($socials_list)): ?>
                    <div class="mt-[40px] md:mt-[60px] xl:mt-0 md:flex md:justify-between md:gap-x-[30px] xl:flex-col">
                        <div>
                            <div class="h4">
                                <?= $footer_options['text_social_title'] ?>
                            </div>
                            <div class="mt-[20px] flex flex-wrap gap-[24px] xl:gap-[10px]">
                                <?php foreach ($socials_list as $key => $item): ?>
                                    <a
                                        class="social-item flex items-center justify-center h-[44px] xl:h-[36px] 4xl:h-[40px] w-[44px] xl:w-[36px] 4xl:w-[40px] rounded-full bg-accent-second-5 transition-colors"
                                        href="<?= $item['link'] ?>"
                                        target="_blank"
                                        rel="nofollow"
                                        aria-label="Show in social">

                                        <img
                                            class="h-[20px] w-auto accent-second-filter transition"
                                            src="<?= get_social_icon_by_url($item['link']); ?>"
                                            alt="<?= 'social-' . $key ?>">
                                    </a>
                                <?php endforeach; ?>
                            </div>
                        </div>
                        <div class="mt-[40px] md:mt-0 text-md text-white opacity-80 grid gap-[10px] md:gap-[14px] md:w-[206px] 4xl:w-[244px]">
                            <?php foreach ($menus['Footer sub menu'] as $item) {
                                render_menu_link($item);
                            } ?>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        </div>
        <div class="mt-[40px] md:mt-[60px] 4xl:mt-[20px] text-sm grid grid-cols-2 xl:grid-cols-[auto_1fr_auto] gap-x-[34px] md:gap-y-[40px] xl:items-end">
            <div class="opacity-80 xl:order-1 xl:pb-[20px]">
                <?= $footer_options['text_copyright'] ?>
            </div>
            <a href="https://dl.agency/" class="opacity-80 justify-self-end xl:order-3 xl:pb-[20px]">
                <?= $footer_options['text_create_by'] ?>
            </a>
            <div class="mx-[-16px] md:mx-0 col-span-2 md:-order-1 xl:order-2 xl:col-span-1">
                <picture>
                    <source srcset="<?= get_template_directory_uri() . '/assets/images/general/footer-img-desk.png' ?>" media="(min-width: 744px)" />
                    <img class="h-[155px] md:h-[164px] xl:h-[238px] w-full object-contain object-center-bottom" src="<?= get_template_directory_uri() . '/assets/images/general/footer-img-mob.png' ?>" alt="footer-img" />
                </picture>
            </div>
        </div>
    </div>
</footer>