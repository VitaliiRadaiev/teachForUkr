<?php
$image_id = null;

if ($attributes['acfField'] ?? null) {
  $image = get_field($attributes['acfField'], 'options');
  if(check($image)) {
    $image_id = $image['id'];
  }
}

if($attributes['imageId'] ?? null) {
  $image_id = $attributes['imageId'];
}


if($image_id) {
  echo wp_get_attachment_image($image_id, 'full', true, array('class' => $attributes['classes']));
}
?>