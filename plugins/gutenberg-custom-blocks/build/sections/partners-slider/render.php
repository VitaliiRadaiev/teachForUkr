<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));

   $partners_posts = get_partners_for_block_slider();

   if (check($partners_posts)):
?>
      <section class="partners-slider-section rounded-[20px] md:rounded-[30px] overflow-hidden <?= $classes ?>">
         <div class="container flex flex-col">
            <? echo $content; ?>
            <div data-slider="partners" class="mt-[30px] md:mt-[40px] lg:mt-[50px] first-child-no-margin relative order-2">
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
               <?= render_slider_nav() ?>
            </div>
         </div>
      </section>
<?php
   endif;
endif;
?>