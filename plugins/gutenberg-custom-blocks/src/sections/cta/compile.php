<section <?= ($attributes['id'] ?? null) ? 'id="' . $attributes['id'] . '"' : '' ?> data-aos="rotate-child" class="cta-section rounded-[20px] md:rounded-[30px] relative <?= $classes ?>">
    <?= render_section_decor($attributes['decor']); ?>
    <div class="container relative z-2">
        <div class="rounded-[20px] md:rounded-[30px] relative bg-accent-second overflow-hidden xl:flex xl:justify-between xl:gap-[30px] xl:px-[60px]">
            <?php // $content; 
            ?>
            <div class="relative z-2 py-[40px] xl:py-[60px] px-[16px] xl:px-0 grow-0 shrink-0 xl:w-[610px] 4xl:w-[800px]">
                <div class="suptitle inline-flex items-center gap-[5px] uppercase h5 min-h-[32px] rounded-full pb-[5px] pt-[6px] px-[12px] bg-accent-second-20">
                    залучайся
                </div>
                <h2 class="h2 mt-[16px] md:mt-[20px] text-dark-primary">
                    ЗРОБІТЬ СВІЙ ВНЕСОК <br> У ТВОРЕННЯ СУСПІЛЬСТВА
                </h2>
                <div class="mt-[10px] md:mt-[20px] text-light-primary">
                    Для молодих людей, які прагнуть змінити <br>своє життя та суспільство на краще.
                </div>
                <div class="mt-[40px] md:mt-[50px] xl:mt-[60px] button-group">
                    <a href="#" class="btn-with-arrow accent-first">
                        Підтримати
                    </a>
                    <a href="#" class="btn-with-enter-arrow accent-first">
                        Стати партнером
                    </a>
                </div>
            </div>
            <div class="relative z-1 h-[230px] md:h-[409px] xl:h-[460px] 4xl:h-[560px] xl:mt-[50px] shrink grow xl:w-full xl:max-w-[560px] 4xl:max-w-[640px] xl:self-end">
                <img class="absolute z-1 top-[84px] xl:top-[100px] left-[60%] -translate-x-1/2 h-[242px] md:h-[431px] xl:h-[492px] w-auto max-w-none" src="<?= get_template_directory_uri() . '/assets/images/general/cta-decor.svg' ?>" alt="">
                <img class="absolute z-2 top-0 left-0 w-full h-full object-contain object-center-bottom" src="<?= get_template_directory_uri() . '/assets/images/temp/cta-girl.png' ?>" alt="">
            </div>
        </div>
    </div>
</section>

<section <?= ($attributes['id'] ?? null) ? 'id="' . $attributes['id'] . '"' : '' ?> data-aos="rotate-child" class="cta-section rounded-[20px] md:rounded-[30px] relative <?= $classes ?>">
    <?= render_section_decor($attributes['decor']); ?>
    <div class="container relative z-2">
        <div class="rounded-[20px] md:rounded-[30px] relative bg-accent-second overflow-hidden xl:flex xl:flex-row-reverse xl:justify-between xl:gap-[30px] xl:px-[60px] xl:[&.xl\:flex-row-reverse_.decor]:left-[40%]">
            <?php // $content; 
            ?>
            <div class="relative z-2 py-[40px] xl:py-[60px] px-[16px] xl:px-0 grow-0 shrink-0 xl:w-[610px] 4xl:w-[800px]">
                <div class="suptitle inline-flex items-center gap-[5px] uppercase h5 min-h-[32px] rounded-full pb-[5px] pt-[6px] px-[12px] bg-accent-second-20">
                    залучайся
                </div>
                <h2 class="h2 mt-[16px] md:mt-[20px] text-dark-primary">
                    ЗРОБІТЬ СВІЙ ВНЕСОК <br> У ТВОРЕННЯ СУСПІЛЬСТВА
                </h2>
                <div class="mt-[10px] md:mt-[20px] text-light-primary">
                    Для молодих людей, які прагнуть змінити <br>своє життя та суспільство на краще.
                </div>
                <div class="mt-[40px] md:mt-[50px] xl:mt-[60px] button-group">
                    <a href="#" class="btn-with-arrow accent-first">
                        Підтримати
                    </a>
                    <a href="#" class="btn-with-enter-arrow accent-first">
                        Стати партнером
                    </a>
                </div>
            </div>
            <div class="relative z-1 h-[230px] md:h-[409px] xl:h-[460px] 4xl:h-[560px] xl:mt-[50px] shrink grow xl:w-full xl:max-w-[560px] 4xl:max-w-[640px] xl:self-end">
                <img class="decor absolute z-1 top-[84px] xl:top-[100px] left-[60%] -translate-x-1/2 h-[242px] md:h-[431px] xl:h-[492px] w-auto max-w-none" src="<?= get_template_directory_uri() . '/assets/images/general/cta-decor.svg' ?>" alt="">
                <img class="absolute z-2 top-0 left-0 w-full h-full object-contain object-center-bottom" src="<?= get_template_directory_uri() . '/assets/images/temp/cta-girl.png' ?>" alt="">
            </div>
        </div>
    </div>
</section>