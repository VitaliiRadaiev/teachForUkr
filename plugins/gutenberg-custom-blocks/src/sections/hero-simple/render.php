<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
   $innet_classes = combine_classes(
      'flex flex-col mt-[24px] md:mt-[60px]',
      get_container_classes($attributes['container']),
      ($attributes['aligment'] === 'center' ? 'text-center ml-auto mr-auto items-center' : ''),
      ($attributes['aligment'] === 'right' ? 'text-right ml-auto items-end' : ''),
      ($attributes['aligment'] === 'left' ? 'items-start' : ''),
   );
?>
   <section class="hero-simple hero-v1-section pt-[100px] md:pt-[127px] xl:pt-[112px] <?= $classes ?>">
      <div class="container">
         <div class="breadcrumbs text-sm">
            <?php if (function_exists('rank_math_the_breadcrumbs')) rank_math_the_breadcrumbs(); ?>
         </div>
         <div class="<?= $innet_classes; ?>">
            <? echo $content; ?>
         </div>
      </div>
   </section>
<?php endif; ?>