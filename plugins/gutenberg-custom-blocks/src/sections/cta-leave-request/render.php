<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
?>
   <section <?= ($attributes['id'] ?? null) ? 'id="' . $attributes['id'] . '"' : '' ?> data-aos="rotate-child" class="cta-leave-request-section rounded-[20px] md:rounded-[30px] relative <?= $classes ?>">
      <?= render_section_decor($attributes['decor']); ?>
      <div class="container relative z-2">
         <div class="<?= $attributes['colorBackground'] ?> rounded-[20px] md:rounded-[30px] relative overflow-hidden">
            <?= $content; ?>
         </div>
      </div>
   </section>
<?php endif; ?>