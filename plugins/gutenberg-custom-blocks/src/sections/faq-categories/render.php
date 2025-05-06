<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
   $terms = get_questions_categories();

   if (check($terms)):
?>
      <section <?= ($attributes['id'] ?? null) ? 'id="'.$attributes['id'].'"' : '' ?> data-aos="rotate-child" class="faq-categories-section rounded-[20px] md:rounded-[30px] relative <?= $classes ?>">
         <?= render_section_decor($attributes['decor']); ?>
         <div class="container relative z-2 flex flex-col">
            <?= $content; ?>
            <div class="t4u-content relative order-2 grid gap-[10px] md:gap-[20px] lg:gap-[24px] 4xl:gap-[30px] md:grid-cols-2 lg:grid-cols-3">
               <?php foreach($terms as $term) {
                  echo render_card_faq_category($term);
               }?>
            </div>
         </div>
      </section>
<?php
   endif;
endif;
?>