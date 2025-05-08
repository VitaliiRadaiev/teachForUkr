<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] md:gap-[20px] lg:gap-[24px] 4xl:gap-[30px]"></div>

<section <?= ($attributes['id'] ?? null) ? 'id="' . $attributes['id'] . '"' : '' ?> data-aos="rotate-child" class="gallery-slider-section rounded-[20px] md:rounded-[30px] relative overflow-hidden <?= $classes ?>">
      <?= render_section_decor($attributes['decor']); ?>
      <div class="container relative z-2">
         <?php // $content; 
         ?>
         <div data-slider="gallery-slider" class="mt-[30px] md:mt-[40px] lg:mt-[50px] relative order-2 first-child-no-margin">
            <div class="swiper lg-max:[&.swiper]:overflow-visible [&:not(.swiper-initialized)_.swiper-wrapper]:gap-[10px] md:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[20px] lg:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[24px] 4xl:[&:not(.swiper-initialized)_.swiper-wrapper]:gap-[30px] [&_.swiper-slide]:w-[323px] md:[&_.swiper-slide]:w-[440px] lg:[&_.swiper-slide]:w-auto">
               <div class="swiper-wrapper">
                  <div class="swiper-slide !h-auto">
                     <a href="#" data-fancybox class="block relative aspect-[1/0.752] rounded-[12px] overflow-hidden">
                        <img class="ibg" src="<?= get_template_directory_uri() . '/assets/images/temp/image 11.jpg' ?>" alt="gallery-img">
                     </a>
                  </div>
                  <div class="swiper-slide !h-auto">
                     <a href="#" data-fancybox class="block relative aspect-[1/0.752] rounded-[12px] overflow-hidden">
                        <img class="ibg" src="<?= get_template_directory_uri() . '/assets/images/temp/image 11.jpg' ?>" alt="gallery-img">
                     </a>
                  </div>
                  <div class="swiper-slide !h-auto">
                     <a href="#" data-fancybox class="block relative aspect-[1/0.752] rounded-[12px] overflow-hidden">
                        <img class="ibg" src="<?= get_template_directory_uri() . '/assets/images/temp/image 11.jpg' ?>" alt="gallery-img">
                     </a>
                  </div>
                  <div class="swiper-slide !h-auto">
                     <a href="#" data-fancybox class="block relative aspect-[1/0.752] rounded-[12px] overflow-hidden">
                        <img class="ibg" src="<?= get_template_directory_uri() . '/assets/images/temp/image 11.jpg' ?>" alt="gallery-img">
                     </a>
                  </div>
               </div>
            </div>
            <?= render_slider_nav() ?>
         </div>
      </div>
   </section>