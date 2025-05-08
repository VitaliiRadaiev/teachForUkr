<?php
$text_subscribe_placeholder = get_field('text_subscribe_placeholder', 'options');
$text_subscribe = get_field('text_subscribe', 'options');
?>

<div class="subscribe-form flex items-center bg-background">
   <input type="text" class="subscribe-form-input w-full flex items-center placeholder:text-dark-primary-60 text-dark-primary outline-none" placeholder="<?= $text_subscribe_placeholder; ?>">
   <button class="subscribe-form-submit btn-secondary btn-secondary-sm accent-first">
      <span data-text="<?= $text_subscribe ?>"></span>
   </button>
</div>