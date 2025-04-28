<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
   $text_more_details = get_field('text_more_details', 'options');

   $cases_posts = get_cases_for_block_slider();

   if (check($cases_posts)):
?>
      <section class="cases-slider-section rounded-[20px] md:rounded-[30px] overflow-hidden relative <?= $classes ?>">
         <?= render_section_decor($attributes['decor']); ?>
         <div class="container flex flex-col relative z-2">
            <?= $content; ?>
            <div data-slider="cases-slider" class="mt-[30px] md:mt-[40px] lg:mt-[50px] relative order-2 first-child-no-margin">
               <div class="swiper lg-max:[&.swiper]:overflow-visible [&:not(.swiper-initialized)_.swiper-wrapper]:gap-[10px] md:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[20px] lg:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[24px] 4xl:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[30px] lg-max:[&_.swiper-slide]:w-[323px] lg:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(33.333333%-(24px*2/3))] xl:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(25%-(24px*3/4))] 4xl:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(25%-(30px*3/4))]">
                  <div class="swiper-wrapper">
                     <?php
                     foreach ($cases_posts as $cases_post):
                        $excerpt = get_the_excerpt($cases_post->ID);
                     ?>
                        <div class="swiper-slide !h-auto">

                           <a href="<?= get_the_permalink($cases_post->ID) ?>" class="card-cases nested-bg-item rounded-[12px] p-[5px] h-full flex flex-col [&_.ibg]:hover:scale-110 [&_.title]:hover:text-accent-first">
                              <div class="aspect-[1/0.575] lg:aspect-[1/0.596] grow-0 shrink-0 rounded-[8px] relative overflow-hidden">
                                 <?= get_image(get_post_thumbnail_id($cases_post->ID), 'ibg transition-transform duration-1000', false); ?>
                              </div>
                              <div class="mt-[20px] lg:mt-[30px] px-[15px] pb-[15px] grow shrink flex flex-col">
                                 <div title="<?= get_the_title() ?>" style="--line: 3; --line-height: 1.2em;" class="title h3 text-dark-primary transition-colors truncate-text">
                                    <?= get_the_title($cases_post->ID) ?>
                                 </div>
                                 <?php if (check($excerpt)): ?>
                                    <div style="--line: 4; --line-height: 1.4em;" class="mt-[5px] mb-[20px] text-md text-dark-primary-60 last-child-no-margin truncate-text">
                                       <?= $excerpt ?>
                                    </div>
                                 <?php endif; ?>

                                 <span class="mt-auto btn-with-arrow accent-first self-start">
                                    <span data-text="<?= $text_more_details ?>"></span>
                                 </span>
                              </div>
                           </a>

                        </div>
                     <?php endforeach; ?>
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