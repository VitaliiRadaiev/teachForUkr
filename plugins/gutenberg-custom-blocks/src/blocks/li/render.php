<?php
if (check($attributes['text'])):
   $classes = combine_classes(
      $attributes['classes'],
      ($attributes['className'] ?? '')
   );
?>
   <li class="<?= $classes ?>">
      <?= $attributes['text'] ?>
   </li>
<?php endif; ?>