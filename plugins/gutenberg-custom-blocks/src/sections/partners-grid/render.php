<?php
if (!($attributes['isHide'])):
   $text_all = get_field('text_all', 'options');
   $text_go_to = get_field('text_go_to', 'options');
   $categories = get_terms(array(
      'taxonomy' => 'post-category',
      'hide_empty' => true,
   ));
   $classes = combine_classes(get_default_section_classes($attributes));

   $args = array(
      'post_type' => 'partner',
      //'posts_per_page' => 3,
      'post_status' => 'publish',
      'paged' => 1,
      'order' => 'DESC',
      'tax_query' => array(
         array(
            'taxonomy' => 'post-category',
            'field'    => 'slug',
            'operator' => 'EXISTS'
         )
      )
   );

   $query = new WP_Query($args);

   if ($query->have_posts()):
?>
      <section data-partners-grid class="partners-grid-section <?= $classes ?>">
         <div class="container flex flex-col">
            <? //echo $content;
            ?>
            <div class="text-center order-1">
               <h2 class="h2 text-dark-primary">
                  Партнери
               </h2>
            </div>
            <div class="mt-[40px] md:mt-[50x] 4xl:mt-[60px] button-group order-3 flex justify-center">
               <button data-action="show-more-parnters" class="btn-primary accent-first">
                  <span data-text="Показати ще"></span>
               </button>
            </div>
            <div class="mt-[30px] md:mt-[50px] 4xl:mt-[60px] first-child-no-margin order-2 flex flex-col">

               <div class="self-center max-w-full">
                  <div class="mx-[-16px] md:mx-[-40px] lg-max:overflow-y-hidden lg-max:h-[60px]">
                     <div class="px-[16px] md:px-[40px] lg-max:pb-[20px] lg-max:overflow-x-auto">
                        <div class="flex bg-[var(--nested-bg)] p-[5px] rounded-[12px] lg-max:w-max lg:flex-wrap lg:justify-center">
                           <button data-category-slug="all" class="active btn btn-secondary accent-second btn-secondary-sm grow-0 shrink-0 font-medium [&.btn]:min-h-[44px] lg:min-h-[50px] [&.btn]:px-[20px] [&.btn]:bg-transparent [&.btn]:text-dark-primary [&.btn.active]:bg-[var(--accent)] [&.btn.active]:text-white [&.btn.active]:pointer-events-none [&.btn]:hover:bg-transparent">
                              <span data-text="<?= $text_all ?>"></span>
                           </button>
                           <?php
                           if (check($categories)):
                              foreach ($categories as $categoriey):
                           ?>
                                 <button data-category-slug="<?= $categoriey->slug ?>" class="btn btn-secondary accent-second btn-secondary-sm grow-0 shrink-0 font-medium [&.btn]:min-h-[44px] lg:min-h-[50px] [&.btn]:px-[20px] [&.btn]:bg-transparent [&.btn]:text-dark-primary [&.btn.active]:bg-[var(--accent)] [&.btn.active]:text-white [&.btn.active]:pointer-events-none [&.btn]:hover:bg-transparent">
                                    <span data-text="<?= $categoriey->name ?>"></span>
                                 </button>
                           <?php
                              endforeach;
                           endif;
                           ?>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="mt-[20px] md:mt-[30px] 4xl:mt-[40px] grid md:grid-cols-2 lg:grid-cols-3 gap-[10px] xl:gap-[24px]">
                  <?php while ($query->have_posts()):
                     $query->the_post();
                     $excerpt = get_the_excerpt();
                  ?>

                     <div class="partner-card relative md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2">
                        <div class="partner-card-front nested-bg-item p-[5px] rounded-[12px] h-full flex flex-col">
                           <div class="absolute top-[15px] left-0 right-0 pl-[15px] pr-[70px] flex flex-wrap gap-[5px]">
                              <?php
                              $categories = get_the_terms(get_the_ID(), 'post-category');
                              if (check($categories)):
                              ?>
                                 <?php
                                 foreach ($categories as $category):
                                    $category_type = get_field('category_icons', 'category_' . $category->term_id);
                                 ?>
                                    <div class="category-tag category-colors-<?= $category_type ?>">
                                       <img src="<?= get_template_directory_uri() . '/assets/images/icons/category-icon-' . $category_type . '.svg' ?>" alt="category-icon">
                                       <span>
                                          <?= $category->name ?>
                                       </span>
                                    </div>
                                 <?php endforeach; ?>
                              <?php endif; ?>
                           </div>

                           <?php if (check($excerpt)): ?>
                              <button data-action="show-details" class="absolute top-[15px] right-[15px] cursor-pointer hover:scale-105 transition-transform">
                                 <img class="h-[44px] lg:h-[30px] w-[44px] lg:w-[30px] object-contain" src="<?= get_template_directory_uri() . '/assets/images/icons/info.svg' ?>" alt="info">
                              </button>
                           <?php endif; ?>

                           <div class="h-[177px] rounded-[8px] bg-[var(--bg)] pt-[44px] pb-[20px] px-[20px] flex items-center justify-center">
                              <?= get_image(get_post_thumbnail_id(), 'w-auto h-auto max-w-full max-h-full'); ?>
                           </div>
                           <div class="mt-[5px] p-[15px] lg:pt-[25px] lg:pb-[20px] shrink grow">
                              <div class="h3 text-dark-primary">
                                 <?= get_the_title() ?>
                              </div>
                              <?php
                              $url = get_field('url_partner', get_the_ID());
                              if (check($url)):
                              ?>
                                 <div class="mt-[20px]">
                                    <a href="<?= $url ?>" class="btn-with-arrow accent-first">
                                       <span data-text="<?= $text_go_to ?>"></span>
                                    </a>
                                 </div>
                              <?php endif; ?>
                           </div>
                        </div>
                        <div class="partner-card-back nested-bg-item absolute top-0 left-0 h-full w-full hidden">
                           <?= $excerpt ?>
                        </div>
                     </div>

                  <?php endwhile; ?>
               </div>
            </div>
         </div>
      </section>

      <div class="mt-[200px]"></div>
   <?php endif; ?>
   <?php wp_reset_postdata(); ?>
<?php endif; ?>