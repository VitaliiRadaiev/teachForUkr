<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
?>
   <section data-aos="rotate-child" class="numbers-text-image-section rounded-[20px] md:rounded-[30px] overflow-hidden <?= $classes ?>">
      <div class="container lg:flex lg:flex-row lg:gap-x-[40px] 4xl:gap-x-[65px]">
         <? echo $content; ?>
      </div>
   </section>
<?php endif; ?>