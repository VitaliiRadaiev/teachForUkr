<?php
$text_see_the_report = get_field('text_see_the_report', 'options');
$query = get_reports();
$posts = $query->posts;
$first_post = !empty($posts) ? $posts[0] : null;

if (check($first_post)):
   $excerpt = get_the_excerpt($first_post->ID);
   $file_url = get_field('report_file', $first_post->ID);
?>
   <a href="<?= $file_url ?>" target="_blank" class="block relative h-[314px] lg:h-[460px] 4xl:h-[600px] rounded-[12px] overflow-hidden">
      <?= $content; ?>

      <div class="absolute z-2 p-[16px] lg:p-[30px] left-0 right-0 bottom-0 bg-white/60 backdrop-blur lg:flex items-center justify-between gap-[20px]">
         <div class="">
            <div class="h3 text-dark-primary">
               <?= get_the_title($first_post->ID); ?>
            </div>
            <?php if (check($excerpt)): ?>
               <div class="mt-[2px] lg:mt-[5px] text-md">
                  <?= $excerpt ?>
               </div>
            <?php endif; ?>
         </div>
         <div class="mt-[10px] flex gap-[10px] items-center">
            <div class="bg-[--bg] h-[44px] w-[44px] grow-0 shrink-0 rounded-[6px] flex items-center justify-center">
               <img class="h-[30px] w-auto" src="<?= get_template_directory_uri() . '/assets/images/icons/pdf.svg' ?>" alt="">
            </div>
            <span class="btn-with-arrow accent-first">
               <span data-text="<?= $text_see_the_report ?>"></span>
            </span>
         </div>
      </div>
   </a>
<?php endif; ?>