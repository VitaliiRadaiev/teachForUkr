<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
   $text_see_the_report = get_field('text_see_the_report', 'options');

   $query = get_reports();
   $posts = $query->posts;
   $first_post = !empty($posts) ? $posts[0] : null;
   $other_posts = array_slice($posts, 1);
?>
   <section <?= ($attributes['id'] ?? null) ? 'id="'.$attributes['id'].'"' : '' ?> data-aos="rotate-child" class="reports-section rounded-[20px] md:rounded-[30px] relative <?= $classes ?>">
      <?= render_section_decor($attributes['decor']); ?>
      <div class="container relative z-2">
         <?= $content; ?>
      </div>
   </section>
<?php endif; ?>