<?php
$text_download = get_field('text_download', 'options');
$classes = combine_classes(
   ($attributes['className'] ?? '')
);
?>
<?php if (check($attributes['mediaURL'])): ?>
   <a href="<?= $attributes['mediaURL'] ?>" download class="<?= $classes ?> h-full shrink-0 grow-0 card-download-pdf htmlTeg nested-bg-item rounded-[12px] p-[16px] md:p-[20px] w-[calc(50%-(10px*1/2))] md:w-[calc(50%-(20px*1/2))] lg:w-[calc(25%-(24px*3/4))] 4xl:w-[calc(25%-(30px*3/4))] lg-max:[&:last-child:nth-child(odd)]:w-full transition-colors hover:bg-accent-second-50 [&_.letter]:hover:rotate-[360deg]">
      <?= $content; ?>

      <div class="mt-auto flex gap-[12px] items-center">
         <div class="bg-[--bg] h-[44px] w-[44px] grow-0 shrink-0 rounded-[6px] flex items-center justify-center">
            <img class="h-[30px] w-auto" src="<?= get_template_directory_uri() . '/assets/images/icons/pdf.svg' ?>" alt="">
         </div>
         <span class="text-accent-second text-[1.125rem] font-medium">
            <?= $text_download ?>
         </span>
      </div>
   </a>
<?php endif; ?>