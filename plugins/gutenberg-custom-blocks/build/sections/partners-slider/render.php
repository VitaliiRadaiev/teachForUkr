<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));

   $args = array(
      'post_type' => 'partner',
      'posts_per_page' => 15,
      'post_status' => 'publish',
      'paged' => 1,
      'order' => 'DESC',
      'tax_query' => array(
         array(
            'taxonomy' => 'post-category',
            'field'    => 'slug',
            'operator' => 'EXISTS'
         )
      )
   );

   $query = new WP_Query($args);
   wp_reset_postdata();
   
   if ($query->have_posts()):
?>
      <div class="mt-[200px]"></div>
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

            <div data-slider="partners" class="mt-[30px] md:mt-[40px] xl:mt-[50px] relative order-2">
               <div class="swiper lg-max:[&.swiper]:overflow-visible">
                  <div class="swiper-wrapper">
                     <?php while ($query->have_posts()):
                        $query->the_post();
                        $logo = get_image(get_post_thumbnail_id(), 'w-auto h-auto max-w-full max-h-full grayscale transition', false);
                        $url = get_field('url_partner', get_the_ID());
                     ?>
                        <div class="swiper-slide">
                           <a href="<?= $url ?>" class="nested-bg-item h-[70px] md:h-[84px] 4xl:h-[112px] flex items-center justify-center rounded-[12px] p-[20px] 4xl:p-[25px] [&_img]:hover:grayscale-0">
                              <?= $logo ?>
                           </a>
                        </div>
                     <?php endwhile; ?>
                  </div>
               </div>
               <div class="mt-[20px] md:mt-[30px] flex justify-center">
                  <div class="slider-bullets"></div>
               </div>
               <div class="hidden">
                  buttns
               </div>
            </div>

         </div>
      </section>
      <div class="mt-[200px]"></div>
<?php
   endif;
endif;
?>