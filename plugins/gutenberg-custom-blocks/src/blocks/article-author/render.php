<?php
if (!($attributes['isHide']) && ($attributes['authorId'] ?? null)):
   $classes = combine_classes(
      $attributes['classes'],
      ($attributes['className'] ?? ''),
   );

   $author = get_user_by('ID', $attributes['authorId']);
   if (check($author)):
?>
      <div class="<?= $classes ?> article-author flex items-center justify-center gap-[10px]">
         <?= get_avatar($author->ID, 96, '', '', [
            'class' => 'h-[44px] w-[44px] object-contain rounded-full shrink-0 grow-0'
         ]) ?>
         <div class="text-sm text-dark-primary">
           <?= $author->data->display_name ?>
         </div>
      </div>
<?php
   endif;
endif;
?>