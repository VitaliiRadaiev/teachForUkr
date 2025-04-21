<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(
      get_sections_margin_classes($attributes['margin']),
      ($attributes['className'] ?? '')
   );

   $partners_posts = get_partners_for_block_slider();

   if (check($partners_posts)):
?>
      <div class="flex flex-col my-[30px] md:my-[40px] lg:my-[50px] first-child-no-margin last-child-no-margin mx-[-16px] px-[16px] md:mx-[-40px] md:px-[40px] py-[1px] lg-max:overflow-hidden <?= $classes ?>">
         <?= $content; ?>
         <div data-slider="partners-block" class="relative order-2">
            <div class="swiper lg-max:[&.swiper]:overflow-visible [&:not(.swiper-initialized)_.swiper-wrapper]:gap-[10px] md:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[24px] 4xl:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[32px] [&:not(.swiper-initialized)_.swiper-slide]:w-[calc(50%-5px)] md:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(33.3333%-(24px*2/3))] lg:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(16.666%-(24px*5/6))] 4xl:[&:not(.swiper-initialized)_.swiper-slide]:w-[calc(16.666%-(32px*5/6))]">
               <div class="swiper-wrapper">
                  <?php
                  foreach ($partners_posts as $partner_post):
                     $logo = get_image(get_post_thumbnail_id($partner_post->ID), 'w-auto h-auto max-w-full max-h-full grayscale transition', false);
                     $url = get_field('url_partner', $partner_post->ID);
                  ?>
                     <div class="swiper-slide">
                        <a href="<?= $url ?>" class="nested-bg-item h-[70px] md:h-[84px] 4xl:h-[112px] flex items-center justify-center rounded-[12px] p-[20px] px-[30px] 4xl:p-[25px] [&_img]:hover:grayscale-0">
                           <?= $logo ?>
                        </a>
                     </div>
                  <?php endforeach; ?>
               </div>
            </div>
            <div class="mt-[30px] flex items-center justify-center gap-[40px] [&:has(.swiper-pagination-lock)]:hidden">
               <button class="nav-btn prev icon-arrow-left-long flex items-center justify-center h-[50px] w-[60px] text-[20px] text-dark-primary bg-light-primary-60 rounded-[8px] transition-colors cursor-pointer hover:text-white hover:bg-dark-primary-60"></button>
               <div class="slider-bullets !mx-0 "></div>
               <button class="nav-btn next icon-arrow-right-long flex items-center justify-center h-[50px] w-[60px] text-[20px] text-dark-primary bg-light-primary-60 rounded-[8px] transition-colors cursor-pointer hover:text-white hover:bg-dark-primary-60"></button>
            </div>
         </div>
      </div>
<?php
   endif;
endif;
?>