<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));

   $query = new WP_Query();
   wp_reset_postdata();

   if (check($attributes['selectedPosts'])) {
      $query = get_questions_by_ids($attributes['selectedPosts']);
   } else {
      $query = get_questions([
         'category' => empty($attributes['selectedCategories']) ? 'all' : $attributes['selectedCategories'],
         'popular' => $attributes['popular']
      ]);
   }

   if ($query->have_posts()):
?>
      <section data-aos="rotate-child" data-faq data-selected-categories="<?= empty($attributes['selectedCategories']) ? 'all' : implode(',', $attributes['selectedCategories']) ?>" data-popular="<?= $attributes['popular'] ?>" class="faq-section rounded-[20px] md:rounded-[30px] relative <?= $classes ?> <?= $query->max_num_pages > 1 ?: '[&_.show-more-btn]:!hidden' ?>">
         <?= render_section_decor($attributes['decor']); ?>
         <div class="container relative z-2 flex flex-col">
            <?= $content; ?>
            <div class="t4u-content max-w-[872px] w-full mx-auto order-2">
               <div data-accordion="one" data-posts-container class="flex flex-col gap-[10px]">
                  <?php while ($query->have_posts()): $query->the_post(); ?>
                     <?= render_card_faq_item(); ?>
                  <?php endwhile; ?>
               </div>
            </div>
         </div>
      </section>
<?php
   endif;
endif;
?>