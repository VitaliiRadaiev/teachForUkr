<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
   if(check($attributes['selectedNews'])) {
      $query = get_news_by_ids($attributes['selectedNews']);
   } else {

      $query = get_news([
         'category' => empty($attributes['categorySlug']) ? 'all' : $attributes['categorySlug'],
      ]);
   }

   if ($query->have_posts()):
?>
      <section data-aos="rotate-child" class="news-slider-section rounded-[20px] md:rounded-[30px] overflow-hidden relative <?= $classes ?>">
         <?= render_section_decor($attributes['decor']); ?>
         <div class="container flex flex-col relative z-2">
            <?= $content; ?>
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
<?php
   endif;
endif;
?>