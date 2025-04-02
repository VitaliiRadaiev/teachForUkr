<?php
if (!($attributes['isHide'])):
   $classes =  $classes = combine_classes(get_default_section_classes($attributes));
   $decor_1_classes = combine_classes(
      'absolute h-[138px] md:h-[245px] w-auto left-[-64px] md:left-[-125px] lg:left-[-109px] 4xl:left-[-84px] lg:top-[134px] 4xl:top-[130px] aos-rotate-left',
      ($attributes['directions'] === 'left' ? 'top-[70px] md:top-[92px]' : ''),
      ($attributes['directions'] === 'right' ? 'bottom-[calc(var(--image-height)-68px)] md:bottom-[calc(var(--image-height)-145px)] lg:bottom-auto' : ''),
   );
   $decor_2_classes = combine_classes(
      'absolute h-[106px] md:h-[168px] lg:h-[239px] w-auto right-[-97px] md:right-[-169px] lg:right-[-235px] lg:bottom-[122px] aos-rotate-right',
      ($attributes['directions'] === 'left' ? 'bottom-[68px] md:bottom-[98px]' : ''),
      ($attributes['directions'] === 'right' ? 'top-[31.5%] md:top-[22.5%] lg:top-auto' : ''),
      ($attributes['decor'] === 2 ? 'lg:!bottom-0' : ''),
   );
   $container_classes = combine_classes(
      'container flex lg:items-center lg:gap-x-[40px] xl:gap-x-[65px] gap-y-[40px] md:gap-y-[50px] relative z-2',
      ($attributes['directions'] === 'left' ? 'flex-col lg:flex-row' : ''),
      ($attributes['directions'] === 'right' ? 'flex-col-reverse lg:flex-row-reverse' : ''),
   );
?>
   <section data-aos="rotate-child" class="image-text-button-row rounded-[20px] md:rounded-[30px] relative overflow-hidden <?= $classes ?>">
      <?php if ($attributes['decor'] !== 0): ?>
         <div class="<?= combine_classes('absolute z-3 pointer-events-none top-0 left-0 w-full h-full', ($attributes['directions'] === 'right' ? '-scale-x-100' : '')) ?>">
            <div class="container h-full relative">
               <img
                  class="<?= $decor_1_classes ?>"
                  src="<?= get_template_directory_uri() . '/assets/images/general/rectangle-turn-left.svg' ?>"
                  alt="decor">
            </div>
         </div>
         <div class="<?= combine_classes('absolute z-1 pointer-events-none top-0 left-0 w-full h-full', ($attributes['directions'] === 'right' ? '-scale-x-100' : '')) ?>">
            <div class="container h-full relative">
               <img
                  class="<?= $decor_2_classes ?>"
                  src="<?= get_template_directory_uri() . '/assets/images/general/semi-torus-'. ($attributes['decor'] === 1 ? 'down' : 'top') .'.svg' ?>"
                  alt="decor">
            </div>
         </div>
      <?php endif; ?>

      <div class="<?= $container_classes ?>">
         <?= $content ?>
      </div>
   </section>
<?php endif; ?>