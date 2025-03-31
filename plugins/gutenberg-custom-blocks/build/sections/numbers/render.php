<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
?>
   <section class="numbers-section rounded-[20px] md:rounded-[30px] <?= $classes ?>">
      <div class="container">
         <? echo $content; ?>
      </div>
   </section>
<?php endif; ?>