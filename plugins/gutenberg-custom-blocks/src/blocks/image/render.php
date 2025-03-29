<?php
$image_exists = $attributes['imageId'] ?? null;
if($image_exists) {
  $image_html = wp_get_attachment_image($image_exists, 'full', false, array('class' => $attributes['classes']));
  
  echo $image_html;
}
?>