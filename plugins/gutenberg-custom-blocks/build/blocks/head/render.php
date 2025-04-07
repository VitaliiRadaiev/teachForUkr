<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(
      get_sections_margin_classes($attributes['margin']),
      ($attributes['className'] ?? '')
    );
   $innet_classes = combine_classes(
      'flex flex-col',
      get_container_classes($attributes['container']),
      ($attributes['aligment'] === 'center' ? 'text-center ml-auto mr-auto items-center' : ''),
      ($attributes['aligment'] === 'right' ? 'text-right ml-auto items-end' : ''),
      ($attributes['aligment'] === 'left' ? 'items-start' : ''),
   );
?>
   <section class="head-block <?= $classes ?>">
      <div class="<?= $innet_classes; ?>">
         <? echo $content; ?>
      </div>
   </section>
<?php endif; ?>