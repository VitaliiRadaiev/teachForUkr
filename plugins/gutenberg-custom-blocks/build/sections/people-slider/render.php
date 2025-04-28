<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
   $query = new WP_Query();
   wp_reset_postdata();

   if (check($attributes['selectedPosts'])) {
      $query = get_people_by_ids($attributes['selectedPosts']);
   } else {
      $query = get_people([
         'category' => empty($attributes['selectedCategories']) ? 'all' : $attributes['selectedCategories'],
      ]);
   }

   if ($query->have_posts()):
?>
      <section data-aos="rotate-child" class="people-slider-section rounded-[20px] md:rounded-[30px] overflow-hidden relative <?= $classes ?>">
         <?= render_section_decor($attributes['decor']); ?>
         <div class="container flex flex-col relative z-2">
            <?= $content; ?>
            <div data-slider="people-slider" class="mt-[30px] md:mt-[40px] lg:mt-[50px] relative order-2 first-child-no-margin">
               <div class="swiper lg-max:[&.swiper]:overflow-visible [&:not(.swiper-initialized)_.swiper-wrapper]:gap-[10px] md:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[20px] lg:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[24px] 4xl:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[30px] lg-max:[&_.swiper-slide]:w-[323px] lg:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(33.333333%-(24px*2/3))] xl:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(25%-(24px*3/4))] 4xl:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(25%-(30px*3/4))]">
                  <div class="swiper-wrapper">
                     <?php while ($query->have_posts()): $query->the_post(); ?>
                        <div class="swiper-slide !h-auto">
                           <?= render_card_people(); ?>
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