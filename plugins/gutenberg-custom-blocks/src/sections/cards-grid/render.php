<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
?>
   <section data-aos="rotate-child" class="cards-grid-section rounded-[20px] md:rounded-[30px] overflow-hidden relative <?= $classes ?>">
      <?= render_section_decor($attributes['decor']); ?>
      <div class="container relative z-2">
         <?= $content; ?>
      </div>
   </section>
<?php endif; ?>