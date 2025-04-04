<?php
if ($attributes['url'] ?? null):
?>
   <img class="<?= $attributes['classes'] ?>" src="<?= get_template_directory_uri() . '/assets/images/' . $attributes['url'] ?>" alt="render">
<?php endif; ?>