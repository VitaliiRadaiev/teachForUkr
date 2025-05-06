<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
   $container_classes = combine_classes(
      'container lg:flex lg:gap-x-[65px]',
      ($attributes['directions'] === 'left' ? 'lg:flex-row-reverse' : ''),
      ($attributes['directions'] === 'right' ? 'lg:flex-row' : ''),
   );
?>
   <section <?= ($attributes['id'] ?? null) ? 'id="'.$attributes['id'].'"' : '' ?> data-aos="rotate-child" class="numbers-text-image-section rounded-[20px] md:rounded-[30px] overflow-hidden <?= $classes ?>">
      <div class="<?= $container_classes ?>">
         <?= $content; ?>
      </div>
   </section>
<?php endif; ?>