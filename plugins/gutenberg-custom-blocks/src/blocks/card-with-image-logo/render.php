<?php
$classes = combine_classes(
   $attributes['classes'],
   ($attributes['className'] ?? ''),
   $attributes['columns']
);
$block = '
<!-- wp:t4u/card-with-image-logo -->
<!-- wp:t4u/inner-block {"options":{"template":[["t4u/image",{"classes":"ibg"}]],"allowedBlocks":[]},"classes":"aspect-[1/0.597] grow-0 shrink-0 rounded-[8px] bg-dark-primary-10 overflow-hidden relative","simpleWrapper":true} -->
<!-- wp:t4u/image {"imageId":259,"url":"http://teachforukr.loc/wp-content/uploads/2025/04/image-13.webp","classes":"ibg"} /-->
<!-- /wp:t4u/inner-block -->

<!-- wp:t4u/inner-block {"options":{"template":[["t4u/inner-block",{"classes":"h-[30px] flex items-center [\u0026_img:not([src])]:w-[140px]","options":{"template":[["t4u/image",{"classes":"h-auto w-auto max-h-full max-w-full"}]],"allowedBlocks":[]}}],["t4u/heading",{"classes":"mt-[16px] text-dark-primary","fontSize":"lg"}],["t4u/simple-text",{"classes":"mt-[5px] mb-[20px]","canAddItem":false}],["t4u/button",{"classes":"btn mt-auto","wrapperClasses":"btn mt-auto","variant":"btn-with-arrow","acfField":"text_more_details","acfFieldType":"text"}]],"allowedBlocks":[]},"classes":"grow shrink mt-[16px] md:mt-[20px] xl:mt-[30px] pb-[11px] px-[11px] md:pb-[15px] md:px-[15px] flex flex-col first-no-margin last-no-margin sm-max:[\u0026_.btn:not(.btn-with-arrow)]:w-full [\u0026_.btn]:self-start","simpleWrapper":true} -->
<!-- wp:t4u/inner-block {"options":{"template":[["t4u/image",{"classes":"h-auto w-auto max-h-full max-w-full"}]],"allowedBlocks":[]},"classes":"h-[30px] flex items-center [\u0026_img:not([src])]:w-[140px]"} -->
<!-- wp:t4u/image {"imageId":183,"url":"http://teachforukr.loc/wp-content/uploads/2025/04/henkel-logo-1.webp","classes":"h-auto w-auto max-h-full max-w-full"} /-->
<!-- /wp:t4u/inner-block -->

<!-- wp:t4u/heading {"classes":"mt-[16px] text-dark-primary","text":"ddddd","fontSize":"lg"} /-->

<!-- wp:t4u/simple-text {"isHide":true,"classes":"mt-[5px] mb-[20px]","canAddItem":false} -->
<!-- wp:t4u/paragraph /-->
<!-- /wp:t4u/simple-text -->

<!-- wp:t4u/button {"blockId":"efaa4db7-1a4a-406a-b6b1-1c880a155823","acfField":"link_vacancies","accent":"accent-second","classes":"btn mt-auto","wrapperClasses":"btn mt-auto"} /-->
<!-- /wp:t4u/inner-block -->
<!-- /wp:t4u/card-with-image-logo -->
';

$blocks = parse_blocks( $block );
?>
<script>
   console.log( <?= json_encode($blocks); ?> );
</script>
<div class="<?= $classes ?> card-with-image-logo shrink-0 grow-0 relative nested-bg-item rounded-[12px] p-[5px] flex flex-col">
   <?= $content; ?>
</div>
<div class="<?= $classes ?> card-with-image-logo shrink-0 grow-0 relative nested-bg-item rounded-[12px] p-[5px] flex flex-col">
   <?php 
      foreach ( $blocks as $b ) {
         if(check($b['blockName'])) {
            foreach($b['innerBlocks'] as $innerB) {
               echo render_block( $innerB );
            }
            //echo  print_r($b['innerBlocks'][0]);
         }
      }
   ?>
</div>
