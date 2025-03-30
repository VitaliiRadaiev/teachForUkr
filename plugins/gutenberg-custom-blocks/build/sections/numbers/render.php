<?php
if (!($attributes['isHide'])):
   $classes = get_sections_margin_classes($attributes['margin']) . ' ' . get_sections_padding_classes($attributes['padding']) . ' ' . $attributes['background'];
?>
   <section class="numbers-section rounded-[20px] md:rounded-[30px] <?= $classes ?>">
      <div class="container">
         <? echo $content; ?>
      </div>
   </section>
<?php endif; ?>