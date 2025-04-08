<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(
      get_sections_margin_classes($attributes['margin']),
      ($attributes['className'] ?? '')
   );
?>

   <section class="hero-v1-section pt-[100px] md:pt-[127px] xl:pt-[112px] overflow-hidden <?= $classes ?>">
      <div class="container pb-[30px] md:pb-[40px]">
         <? echo $content; ?>
      </div>
   </section>

<?php endif; ?>