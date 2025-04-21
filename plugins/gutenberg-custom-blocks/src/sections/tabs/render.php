<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
?>
   <section data-tabs class="tabs-section rounded-[20px] md:rounded-[30px] <?= $classes ?>">
      <div class="container">
         <?= $content; ?>
      </div>
   </section>
<?php endif; ?>