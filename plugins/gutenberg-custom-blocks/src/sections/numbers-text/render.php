<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
?>
   <section <?= ($attributes['id'] ?? null) ? 'id="'.$attributes['id'].'"' : '' ?> class="numbers-text-section rounded-[20px] md:rounded-[30px] <?= $classes ?>">
      <div class="container md:grid lg:grid-rows-[auto_1fr] lg:grid-cols-[48%_1fr] lg:gap-x-[40px] 4xl:gap-x-[50px] lg:items-start">
         <?= $content; ?>
      </div>
   </section>
<?php endif; ?>