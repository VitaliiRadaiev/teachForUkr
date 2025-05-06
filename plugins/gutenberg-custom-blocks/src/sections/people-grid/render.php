<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
   $query = new WP_Query();
   wp_reset_postdata();

   if (check($attributes['selectedPosts'])) {
      $query = get_people_by_ids($attributes['selectedPosts']);
   } else {
      $query = get_people([
         'category' => empty($attributes['selectedCategories']) ? 'all' : $attributes['selectedCategories'],
         'posts_per_page' => 12
      ]);
   }

   if ($query->have_posts()):
?>
      <section <?= ($attributes['id'] ?? null) ? 'id="'.$attributes['id'].'"' : '' ?> data-aos="rotate-child" data-people-grid data-selected-categories="<?= empty($attributes['selectedCategories']) ? 'all' : implode(',', $attributes['selectedCategories']) ?>" class="people-grid-section rounded-[20px] md:rounded-[30px] overflow-hidden relative <?= $classes ?> <?= $query->max_num_pages != 1 ?: '[&_.show-more-btn]:!hidden' ?>">
         <?= render_section_decor($attributes['decor']); ?>
         <div class="container flex flex-col relative z-2">
            <?= $content; ?>
            <div data-posts-container class="t4u-content relative order-2 first-child-no-margin grid gap-[20px] lg:gap-[24px] 4xl:gap-[30px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
               <?php while ($query->have_posts()): $query->the_post(); ?>
                  <?= render_card_people(); ?>
               <?php endwhile; ?>
            </div>
         </div>
      </section>
<?php
   endif;
endif;
?>