<?php if (!($attributes['isHide'])): ?>
   <?php if (check($attributes['text'])): ?>
      <div class="hero-main-suptitle text-md uppercase text-dark-primary font-bold flex items-center gap-x-[10px] md:gap-x-[13px]">
         <img class="h-[20px] md:h-[24px] 4xl:h-[28px] 4 w-[20px] md:w-[24px] 4xl:w-[28px] shrink-0 grow-0" src="<?= get_template_directory_uri() . '/assets/images/icons/main-hero-suptitle-icon.svg' ?>" alt="icon">
         <span><?= $attributes['text'] ?></span>
      </div>
   <?php endif; ?>
<?php endif; ?>