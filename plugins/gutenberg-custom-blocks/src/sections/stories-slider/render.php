<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
   $text_more_details = get_field('text_more_details', 'options');
   $query = new WP_Query();
   wp_reset_postdata();
   if(check($attributes['selectedPosts'])) {
      $query = get_stories_by_ids($attributes['selectedPosts']);
   } else {
      $query = get_stories([
         'category' => empty($attributes['selectedCategories']) ? 'all' : $attributes['selectedCategories'],
      ]);
   }

   if ($query->have_posts()):
?>
      <section data-aos="rotate-child" class="stories-slider-section rounded-[20px] md:rounded-[30px] overflow-hidden relative <?= $classes ?>">
         <?= render_section_decor($attributes['decor']); ?>
         <div class="container flex flex-col relative z-2">
            <?= $content; ?>
            <div data-slider="stories-slider" class="mt-[30px] md:mt-[40px] lg:mt-[50px] relative order-2 first-child-no-margin">
               <div class="swiper md-max:[&.swiper]:overflow-visible lg:[&.swiper]:overflow-visible [&:not(.swiper-initialized)_.swiper-wrapper]:gap-[10px] md:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[20px] lg:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[24px] 4xl:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[30px] md-max:[&_.swiper-slide]:w-[323px] md:[&:not(.swiper-initialized)_.swiper-slide]:w-full lg:[&_.swiper-slide]:w-[778px] xl:[&_.swiper-slide]:w-[1096px] 4xl:[&_.swiper-slide]:w-[1462px]">
                  <div class="swiper-wrapper">
                     <?php while ($query->have_posts()): $query->the_post(); ?>
                        <div class="swiper-slide !h-auto">
                           <a href="<?= get_the_permalink() ?>" class="flex flex-col lg:flex-row h-full nested-bg-item rounded-[12px] p-[5px] md:p-[10px] [&_.ibg]:hover:scale-110 [&_.title]:hover:text-accent-first">
                              <div class="aspect-[1/0.856] md:aspect-[1/0.712] lg:aspect-auto lg:w-[380px] xl:w-[536px] 4xl:w-[705px] lg:min-h-[325px] xl:min-h-[459px] 4xl:min-h-[523px] grow-0 shrink-0 relative overflow-hidden rounded-[8px]">
                                 <?= get_image(get_post_thumbnail_id(), 'ibg transition-transform duration-1000', false); ?>
                              </div>
                              <div class="mt-[16px] md:mt-[24px] lg:mt-0 px-[11px] md:px-[10px] lg:pl-[34px] lg:pr-[34px] pb-[11px] md:pb-0 lg:py-[20px] grow shrink flex flex-col relative">
                                 <img class="absolute top-0 md:top-[34px] lg:top-0 right-[11px] md:right-[10px] lg:right-0 w-[15px] md:w-[17px] h-auto" src="<?= get_template_directory_uri() . '/assets/images/icons/story-card-decor-icon-1.svg' ?>" alt="">
                                 <div class="text-sm text-dark-primary-60 lowercase lg-max:pr-[20px]">
                                    <?= get_the_date('j F, Y'); ?>
                                 </div>
                                 <div class="title mt-[5px] md:mt-[10px] h3 text-dark-primary transition-colors lg-max:pr-[20px]">
                                    <?= get_the_title(); ?>
                                 </div>
                                 <div style="--line: 5; --line-height: 1.4em;" class="mt-[5px] mb-[16px] md:mb-[30px] text-md md-max:truncate-text text-dark-primary-80">
                                    <?= get_the_excerpt(); ?>
                                 </div>
                                 <span class="mt-auto btn-with-arrow accent-first self-start">
                                    <span data-text="<?= $text_more_details ?>"></span>
                                 </span>
                              </div>
                           </a>
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