<?php if (check($attributes['supTitle'])): ?>
   <div class="text-md uppercase text-dark-primary font-bold flex items-center gap-x-[10px] md:gap-x-[13px]">
      <img class="h-[20px] md:h-[24px] 4xl:h-[28px] 4 w-[20px] md:w-[24px] 4xl:w-[28px] shrink-0 grow-0" src="<?= get_template_directory_uri() . '/assets/images/icons/main-hero-suptitle-icon.svg' ?>" alt="icon">
      <span><?= $attributes['supTitle'] ?></span>
   </div>
<?php endif; ?>

<?php if (check($attributes['title'])): ?>
   <h1 class="h1 mt-[15px] md:mt-[20px]">
      <?= $attributes['title'] ?>
   </h1>
<?php endif; ?>

<?php if (check($attributes['text'])): ?>
   <div class="mt-[20px] xl:mt-[25px] 4xl:mt-[35px] last-no-margin text-lg text-dark-primary max-w-[308px] md:max-w-[406px] 4xl:max-w-[475px]">
      <?= $attributes['text'] ?>
   </div>
<?php endif; ?>