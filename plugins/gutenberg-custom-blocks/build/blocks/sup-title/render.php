<?php

if (!($attributes['isHide'])):
   $classes = combine_classes(
      get_margin_classes($attributes['margin']),
      $attributes['classes'],
      ($attributes['className'] ?? '')
   );

   $text = '';

   if ($attributes['acfField'] ?? null) {
       $text = get_field($attributes['acfField'], 'options');
   }

   if (check($attributes['text'])) {
       $text = $attributes['text'];
   }
?>

   <?php if (check($text)): ?>
      <div class="<?= $classes ?> suptitle inline-flex items-center gap-[5px] uppercase h5 min-h-[32px] rounded-full pb-[5px] pt-[6px] px-[12px] bg-accent-second-20">
         <?= $text ?>
      </div>
   <?php endif; ?>
<?php endif; ?>