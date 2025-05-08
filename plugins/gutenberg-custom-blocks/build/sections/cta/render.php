<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
   $subClasses = combine_classes(
      $attributes['colorBackground'],
      $attributes['directions'],
   );
?>
   <section <?= ($attributes['id'] ?? null) ? 'id="' . $attributes['id'] . '"' : '' ?> data-aos="rotate-child" class="cta-section rounded-[20px] md:rounded-[30px] relative <?= $classes ?>">
      <?= render_section_decor($attributes['decor']); ?>
      <div class="container relative z-2">
         <div class="<?= $subClasses ?> rounded-[20px] md:rounded-[30px] relative overflow-hidden xl:flex xl:justify-between xl:gap-[30px] xl:px-[60px]">
            <?= $content; ?>
         </div>
      </div>
   </section>
<?php endif; ?>