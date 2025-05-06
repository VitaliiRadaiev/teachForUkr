<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
?>
   <div class="mt-[200px]"></div>
   <section <?= ($attributes['id'] ?? null) ? 'id="' . $attributes['id'] . '"' : '' ?> data-aos="map" class="map-section rounded-[20px] md:rounded-[30px] relative overflow-hidden <?= $classes ?>">
      <div class="map-bg absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex justify-center w-full h-[229px] md:h-[442px] lg:h-[520px] 4xl:h-[636px]">
         <img class="level-1 item-left bg-nested-item-filter absolute z-1 right-[calc(50%-1px)] top-0 h-full w-auto" src="<?= get_template_directory_uri() . '/assets/images/icons/semi-circle-left.svg' ?>" alt="">
         <img class="level-1 item-right bg-nested-item-filter absolute z-1 left-[calc(50%-1px)] top-0 h-full w-auto" src="<?= get_template_directory_uri() . '/assets/images/icons/semi-circle-right.svg' ?>" alt="">

         <img class="map h-full w-auto max-w-none relative z-2 opacity-0" src="<?= get_template_directory_uri() . '/assets/images/general/map.svg' ?>" alt="">

         <img class="level-2 item-left bg-nested-item-filter absolute z-3 right-[calc(50%-1px)] top-0 h-full w-auto" src="<?= get_template_directory_uri() . '/assets/images/icons/semi-circle-left.svg' ?>" alt="">
         <img class="level-2 item-right bg-nested-item-filter absolute z-3 left-[calc(50%-1px)] top-0 h-full w-auto" src="<?= get_template_directory_uri() . '/assets/images/icons/semi-circle-right.svg' ?>" alt="">
      </div>
      <div class="container relative flex flex-col justify-center z-2 min-h-[229px] md:min-h-[442px] lg:min-h-[520px] 4xl:min-h-[636px]">
         <?php //$content; 
         ?>
         <div class="t4u-content opacity-0 translate-y-[-50px]">
            <h2 class="h2 text-center">
               Беруть участь 95 шкіл
            </h2>
         </div>
      </div>
   </section>
   <div class="mt-[200px]"></div>
<?php endif; ?>