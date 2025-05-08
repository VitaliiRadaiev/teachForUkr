<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
?>
   <section <?= ($attributes['id'] ?? null) ? 'id="' . $attributes['id'] . '"' : '' ?> data-aos="rotate-child" class="subscribe-section rounded-[20px] md:rounded-[30px] relative <?= $classes ?>">
      <?= render_section_decor($attributes['decor']); ?>
      <div class="container relative z-2">
         <div class="<?= $attributes['colorBackground'] ?> rounded-[20px] md:rounded-[30px] py-[40px] xl:py-[32px] px-[16px] xl:px-[30px] flex flex-col xl:flex-row xl:justify-between gap-[30px] xl:gap-[40px] min-h-[160px] overflow-hidden">
            <?= $content; ?>
         </div>
      </div>
   </section>
<?php endif; ?>