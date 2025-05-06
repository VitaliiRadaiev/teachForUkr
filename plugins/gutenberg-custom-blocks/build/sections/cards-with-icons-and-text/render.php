<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
?>
   <section <?= ($attributes['id'] ?? null) ? 'id="'.$attributes['id'].'"' : '' ?> class="cards-with-cions-and-text-section rounded-[20px] md:rounded-[30px] relative <?= $classes ?>">
      <?= render_section_decor($attributes['decor']); ?>
      <div class="<?= $attributes['directions'] === 'right' ? 'lg:grid-cols-[1fr_49%]' : 'lg:grid-cols-[49%_1fr]' ?>  container relative z-2 grid lg:items-start lg:grid-rows-[auto_1fr] lg:gap-x-[40px] 2xl:gap-x-[60px] 4xl:gap-x-[70px]">
         <?= $content; ?>
      </div>
   </section>
<?php endif; ?>