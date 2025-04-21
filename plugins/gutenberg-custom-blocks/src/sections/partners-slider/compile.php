<?php 
$tailwind = 'my-[30px] md:my-[40px] lg:my-[50px]';
?>
<section class="partners-slider-section rounded-[20px] md:rounded-[30px] overflow-hidden <?= $classes ?>">
         <div class="container flex flex-col">
            <? //echo $content;
            ?>
            <div class="order-1">
               <div class="suptitle inline-flex items-center gap-[5px] uppercase h5 min-h-[32px] rounded-full pb-[5px] pt-[6px] px-[12px] bg-accent-second-20">
                  партнери
               </div>
               <h2 class="h2 mt-[16px] md:mt-[20px] text-dark-primary">
                  СПІВПРАЦЮЄМО — <br> З ОДНОДУМЦЯМИ
               </h2>
            </div>
            <div class="mt-[40px] xl:mt-[50px] order-3 flex flex-wrap items-center justify-center button-group gap-[20px] md:gap-[24px] 4xl:gap-[30px]">
               <a href="#" class="btn-primary accent-first">
                  Більше партнерів
               </a>
               <a href="#" class="btn-with-enter-arrow accent-first">
                  Стати партнером
               </a>
            </div>

            <div data-slider="partners" class="mt-[30px] md:mt-[40px] lg:mt-[50px] relative order-2">
               <div class="swiper lg-max:[&.swiper]:overflow-visible">
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