<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(
      get_margin_classes($attributes['margin']),
      $attributes['classes'],
      ($attributes['className'] ?? '')
   );
?>
   <div class="mx-[-16px] md:mx-[-40px] h-[3.6875rem] md:h-[5.4375rem] lg:h-auto lg-max:overflow-y-hidden <?= $classes ?>">
      <div class="px-[16px] md:px-[40px] pb-[20px] flex lg:flex-wrap gap-[10px] md:gap-[24px] lg-max:overflow-auto">
         <? echo $content; ?>
      </div>
   </div>
<?php endif; ?>