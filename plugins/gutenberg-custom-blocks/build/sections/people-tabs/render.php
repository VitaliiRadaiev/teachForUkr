<?php
if (!($attributes['isHide']) && ($attributes['selectedCategory'] !== 0)):
   $classes = combine_classes(get_default_section_classes($attributes));

   $sub_categories = get_people_sub_categories($attributes['selectedCategory']);

   $initialCategory = $attributes['selectedCategory'];

   if (check($sub_categories)) {
      $initialCategory = $sub_categories[0]->term_id;
   }

   $query = get_people([
      'category' => $initialCategory,
      'posts_per_page' => 12
   ]);

   if ($query->have_posts()):
?>
      <section <?= ($attributes['id'] ?? null) ? 'id="'.$attributes['id'].'"' : '' ?> data-aos="rotate-child" data-people-tabs data-initial-category="<?= $initialCategory ?>" class="people-tabs-section rounded-[20px] md:rounded-[30px] overflow-hidden relative <?= $classes ?> <?= $query->max_num_pages != 1 ?: '[&_.show-more-btn]:!hidden' ?>">
         <?= render_section_decor($attributes['decor']); ?>
         <div class="container flex flex-col relative z-2">
            <?= $content; ?>

            <div class="t4u-content first-child-no-margin order-2 flex flex-col">

               <?php if (check($sub_categories)): ?>
                  <div class="self-center max-w-full">
                     <div class="mx-[-16px] md:mx-[-40px] lg-max:overflow-y-hidden lg-max:h-[60px]">
                        <div class="px-[16px] md:px-[40px] lg-max:pb-[20px] lg-max:overflow-x-auto">
                           <div class="flex bg-[var(--nested-bg)] p-[5px] rounded-[12px] lg-max:w-max lg:flex-wrap lg:justify-center">
                              <?php foreach ($sub_categories as $key => $category): ?>
                                 <button data-category-id="<?= $category->term_id ?>" class="<?= $key !== 0 ?: 'active' ?> btn btn-secondary accent-second btn-secondary-sm grow-0 shrink-0 font-medium [&.btn]:min-h-[44px] lg:min-h-[50px] [&.btn]:px-[20px] [&.btn]:bg-transparent [&.btn]:text-dark-primary [&.btn.active]:bg-[var(--accent)] [&.btn.active]:text-white [&.btn.active]:pointer-events-none [&.btn]:hover:bg-transparent">
                                    <span data-text="<?= $category->name ?>"></span>
                                 </button>
                              <?php
                              endforeach;
                              ?>
                           </div>
                        </div>
                     </div>
                  </div>
               <?php endif; ?>

               <div data-posts-container class="mt-[20px] md:mt-[30px] 4xl:mt-[40px] first-child-no-margin grid gap-[20px] lg:gap-[24px] 4xl:gap-[30px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <?php while ($query->have_posts()): $query->the_post(); ?>
                     <?= render_card_people(); ?>
                  <?php endwhile; ?>
               </div>
               
            </div>
         </div>
      </section>
<?php
   endif;
endif;
?>