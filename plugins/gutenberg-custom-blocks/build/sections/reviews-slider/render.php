<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));

   $query = get_reviews();
   if ($query->have_posts()):
?>
      <section <?= ($attributes['id'] ?? null) ? 'id="'.$attributes['id'].'"' : '' ?> data-aos="rotate-child" class="reviews-slider-section rounded-[20px] md:rounded-[30px] overflow-hidden relative <?= $classes ?>">
         <?= render_section_decor($attributes['decor']); ?>
         <div class="container relative z-2 flex flex-col">
            <?= $content; ?>
            <div data-slider="reviews-slider" class="mt-[30px] md:mt-[40px] lg:mt-[50px] relative order-2 first-child-no-margin">
               <div class="swiper [&.swiper]:overflow-visible [&:not(.swiper-initialized)_.swiper-wrapper]:gap-[10px] md:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[20px] lg:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[24px] 4xl:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[30px] [&_.swiper-slide]:w-[323px] md:[&_.swiper-slide]:w-[537px]">
                  <div class="swiper-wrapper">
                     <?php
                     while ($query->have_posts()):
                        $query->the_post();
                        $author_postition = get_field('review_position', get_the_ID());
                        $thumbnail_id = get_post_thumbnail_id();
                     ?>
                        <div class="swiper-slide !h-auto">
                           <div class="flex flex-col h-full nested-bg-item rounded-[12px] p-[16px] md:p-[30px]">
                              <div class="h-[16px] md:h-[20px] accent-second-filter">
                                 <img class="h-full w-auto" src="<?= get_template_directory_uri() . '/assets/images/icons/semi-circle-right-double.svg' ?>" alt="decor">
                              </div>
                              <div class="mt-[20px] md:mt-[30px] shrink grow text-md">
                                 <?= the_excerpt(); ?>
                              </div>

                              <div class="mt-[20px] md:mt-[30px] flex gap-[16px]">
                                 <?php if (check($thumbnail_id)): ?>
                                    <div class="grow-0 shrink-0 h-[56px] w-[56px] rounded-full overflow-hidden relative">
                                       <?= get_image($thumbnail_id, 'ibg', false); ?>
                                    </div>
                                 <?php else: ?>
                                    <div class="grow-0 shrink-0 h-[56px] w-[56px] rounded-full overflow-hidden relative bg-[--bg] flex items-center justify-center">
                                       <img class="color-light-primary-60-filter h-[26px] w-auto" src="<?= get_template_directory_uri() . '/assets/images/icons/user.svg' ?>" alt="placeholder">
                                    </div>
                                 <?php endif ?>
                                 <div class="self-center">
                                    <div class="h4 text-dark-primary">
                                       <?= the_title(); ?>
                                    </div>
                                    <?php if (check($author_postition)): ?>
                                       <div class="mt-[2px] text-sm">
                                          <?= $author_postition ?>
                                       </div>
                                    <?php endif; ?>
                                 </div>
                              </div>
                           </div>
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