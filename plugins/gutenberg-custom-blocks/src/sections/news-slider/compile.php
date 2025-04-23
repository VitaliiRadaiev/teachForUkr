<?php 
$tailwind = 'max-h-[400px] text-[14px]  cursor-pointer p-[5px] uppercase transition-opacity hover:bg-light-primary-80 bg-light-primary-60 bg-light-primary-40 hover:[&.bg-light-primary-60]:bg-light-primary-40';
?>

<section class="news-slider-section rounded-[20px] md:rounded-[30px] overflow-hidden <?= $classes ?>">
    <div class="container flex flex-col md:justify-center lg:justify-center">
        <?php //$content; 
        ?>
        <div data-slider="news-slider" class="mt-[30px] md:mt-[40px] lg:mt-[50px] relative order-2 first-child-no-margin">
            <div class="swiper md-max:[&.swiper]:overflow-visible [&:not(.swiper-initialized)_.swiper-wrapper]:gap-[10px] md:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[20px] lg:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[24px] 4xl:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[30px] md-max:[&_.swiper-slide]:w-[323px] md:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(50%-10px)] lg:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(33.333333%-(24px*2/3))] 4xl:[calc(33.333333%-(30px*2/3))]">
                <div class="swiper-wrapper">
                    <?php while ($query->have_posts()): $query->the_post(); ?>
                        <div class="swiper-slide !h-auto">
                            <?= render_card_news_v1(); ?>
                        </div>
                    <?php endwhile; ?>
                </div>
            </div>
            <?= render_slider_nav() ?>
        </div>
    </div>
</section>