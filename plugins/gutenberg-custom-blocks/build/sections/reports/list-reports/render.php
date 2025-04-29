<?php
   $text_see_the_report = get_field('text_see_the_report', 'options');

   $query = get_reports();
   $posts = $query->posts;
   $other_posts = array_slice($posts, 1);
?>

<div class="mt-[20px] lg:mt-0">
   <div data-scroll-container="desk" class="max-h-[334px] lg:max-h-[460px] 4xl:max-h-[600px] !pr-[10px] lg:!pr-[16px] lg-max:!mr-[-10px] lg:!mx-0 [&_.swiper-scrollbar]:right-[0px] lg-max:overflow-auto">
      <div class="flex flex-col gap-[10px]">
         <?php
         if (check($other_posts)):
            foreach ($other_posts as $post):
               $file_url = get_field('report_file', $post->ID);
         ?>
               <a href="<?= $file_url ?>" class="flex items-center justify-between gap-[15px] nested-bg-item p-[16px] lg:p-[20px] 4xl:p-[24px] rounded-[12px]">
                  <div class="flex gap-[10px] lg:gap-[30px] items-center">
                     <div class="bg-[--bg] h-[44px] w-[44px] grow-0 shrink-0 rounded-[6px] flex items-center justify-center">
                        <img class="h-[30px] w-auto" src="<?= get_template_directory_uri() . '/assets/images/icons/pdf.svg' ?>" alt="">
                     </div>
                     <div class="h4 text-dark-primary">
                        <?= get_the_title($post->ID); ?>
                     </div>
                  </div>
                  <span class="btn-with-arrow accent-first report-btn">
                     <span data-text="<?= $text_see_the_report ?>"></span>
                  </span>
               </a>
         <?php
            endforeach;
         endif;
         ?>
      </div>
   </div>
</div>