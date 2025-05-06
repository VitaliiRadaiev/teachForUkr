<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
?>
   <section <?= ($attributes['id'] ?? null) ? 'id="'.$attributes['id'].'"' : '' ?> data-aos="rotate-child" class="cards-with-image-slider-grid-section rounded-[20px] md:rounded-[30px] relative overflow-hidden <?= $classes ?>">
      <?= render_section_decor($attributes['decor']); ?>
      <div class="container relative z-2">
         <?= $content; ?>
      </div>
   </section>
<?php endif; ?>