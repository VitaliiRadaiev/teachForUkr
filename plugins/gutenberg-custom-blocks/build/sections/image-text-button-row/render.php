<?php
if (!($attributes['isHide'])):
   $classes =  $classes = combine_classes(get_default_section_classes($attributes));
?>
   <section class="image-text-button-row rounded-[20px] md:rounded-[30px] relative overflow-hidden <?= $classes ?>">
      <div class="absolute z-3 pointer-events-none top-0 left-0 w-full h-full">
         <div class="container h-full relative">
            <img
               class="absolute top-[70px] md:top-[92px] lg:top-[134px] 4xl:top-[130px] h-[138px] md:h-[245px] w-auto left-[-64px] md:left-[-125px] lg:left-[-109px] 4xl:left-[-84px]"
               src="<?= get_template_directory_uri() . '/assets/images/general/row-sections-decor-1.svg' ?>"
               alt="decor">
         </div>
      </div>
      <div class="absolute z-1 pointer-events-none top-0 left-0 w-full h-full">
         <div class="container h-full relative">
            <img
               class="absolute bottom-[68px] md:bottom-[98px] lg:bottom-[122px] h-[106px] md:h-[168px] lg:h-[239px] w-auto right-[-97px] md:right-[-169px] lg:right-[-235px]"
               src="<?= get_template_directory_uri() . '/assets/images/general/row-sections-decor-2.svg' ?>"
               alt="decor">
         </div>
      </div>
      <div class="container flex flex-col lg:flex-row lg:items-center lg:gap-x-[40px] xl:gap-x-[65px] gap-y-[40px] md:gap-y-[50px] relative z-2">
         <?= $content ?>
      </div>
   </section>
<?php endif; ?>