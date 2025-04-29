<section data-aos="rotate-child" class="reports-section rounded-[20px] md:rounded-[30px] relative <?= $classes ?>">
    <?= render_section_decor($attributes['decor']); ?>
    <div class="container relative z-2">
        <?php // $content; 
        ?>
        <h2 class="h2 text-center">
            річні квартальні звіти
        </h2>
        <div class="mt-[30px] md:mt-[40px] xl:mt-[50px] lg:grid lg:grid-cols-2 lg:gap-[24px] 4xl:gap-[30px] min-w-0">
            <?php
            if (check($first_post)):
                $excerpt = get_the_excerpt($first_post->ID);
                $file_url = get_field('report_file', $first_post->ID);
            ?>
                <a href="<?= $file_url ?>" target="_blank" class="block relative h-[314px] lg:h-[460px] 4xl:h-[600px] rounded-[12px] overflow-hidden">
                    <img class="ibg z-1" src="<?= get_template_directory_uri() . '/assets/images/temp/image 12.jpg' ?>" alt="">

                    <div class="absolute z-2 p-[16px] lg:p-[30px] left-0 right-0 bottom-0 bg-white/60 backdrop-blur lg:flex items-center justify-between gap-[20px]">
                        <div class="">
                            <div class="h3 text-dark-primary">
                                <?= get_the_title($first_post->ID); ?>
                            </div>
                            <?php if (check($excerpt)): ?>
                                <div class="mt-[2px] lg:mt-[5px] text-md">
                                    <?= $excerpt ?>
                                </div>
                            <?php endif; ?>
                        </div>
                        <div class="mt-[10px] flex gap-[10px] items-center">
                            <div class="bg-[--bg] h-[44px] w-[44px] grow-0 shrink-0 rounded-[6px] flex items-center justify-center">
                                <img class="h-[30px] w-auto" src="<?= get_template_directory_uri() . '/assets/images/icons/pdf.svg' ?>" alt="">
                            </div>
                            <span class="btn-with-arrow accent-first">
                                <span data-text="<?= $text_see_the_report ?>"></span>
                            </span>
                        </div>
                    </div>
                </a>
            <?php endif; ?>
            <div class="mt-[20px] lg:mt-0">
                <div data-scroll-container="desk" class="max-h-[334px] lg:max-h-[460px] 4xl:max-h-[600px] !pr-[10px] lg:!pr-[16px] lg-max:!mr-[-10px] lg:!mx-0 [&_.swiper-scrollbar]:right-[0px] lg-max:overflow-auto">
                    <div class="flex flex-col gap-[10px]">
                        <?php
                        if (check($other_posts)):
                            foreach ($other_posts as $post):
                                $file_url = get_field('report_file', $post->ID);
                        ?>
                                <a href="<?= $file_url ?>" class="flex items-center justify-between gap-[15px] nested-bg-item p-[16px] lg:p-[20px] 4xl:p-[24px] rounded-[12px]">
                                    <div class="flex gap-[10px] lg:gap-[30px] items-center">
                                        <div class="bg-[--bg] h-[44px] w-[44px] grow-0 shrink-0 rounded-[6px] flex items-center justify-center">
                                            <img class="h-[30px] w-auto" src="<?= get_template_directory_uri() . '/assets/images/icons/pdf.svg' ?>" alt="">
                                        </div>
                                        <div class="h4 text-dark-primary">
                                            <?= get_the_title($post->ID); ?>
                                        </div>
                                    </div>
                                    <span class="btn-with-arrow accent-first report-btn">
                                        <span data-text="<?= $text_see_the_report ?>"></span>
                                    </span>
                                </a>
                        <?php
                            endforeach;
                        endif;
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>