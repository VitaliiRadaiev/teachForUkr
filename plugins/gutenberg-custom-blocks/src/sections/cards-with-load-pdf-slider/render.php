<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
?>
   <div class="mt-[200px]"></div>
   <section data-aos="rotate-child" class="cards-with-load-pdf-section rounded-[20px] md:rounded-[30px] relative <?= $classes ?>">
      <?= render_section_decor($attributes['decor']); ?>
      <div class="container relative z-2">
         <?= $content; ?>
      </div>
   </section>
   <div class="mt-[200px]"></div>
<?php endif; ?>