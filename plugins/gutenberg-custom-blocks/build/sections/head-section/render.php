<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
   $innet_classes = combine_classes(
      'flex flex-col',
      get_container_classes($attributes['container']),
      ($attributes['aligment'] === 'center' ? 'text-center ml-auto mr-auto items-center' : ''),
      ($attributes['aligment'] === 'right' ? 'text-right ml-auto items-end' : ''),
      ($attributes['aligment'] === 'left' ? 'items-start' : ''),
   );
?>
   <section <?= ($attributes['id'] ?? null) ? 'id="'.$attributes['id'].'"' : '' ?> class="head-section rounded-[20px] md:rounded-[30px] <?= $classes ?>">
      <div class="container">
         <div class="<?= $innet_classes; ?>">
            <?= $content; ?>
         </div>
      </div>
   </section>
<?php endif; ?>