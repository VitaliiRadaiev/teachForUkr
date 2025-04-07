<div class="hero-main-decor-buttons flex gap-[2px] absolute z-3 left-1/2 md:left-[53%] xl:left-[55%] -translate-x-1/2 bottom-[62px] md:bottom-[56px] xl:bottom-[115px]">
   <div class="hero-main-decor-buttons-left flex flex-col gap-[2px] items-end">
      <div class="decor-btn decor-btn-1">
         <?= get_field('text_participants', 'options') ?>
      </div>
      <div class="decor-btn decor-btn-2">
         <?= get_field('text_children', 'options') ?>
      </div>
   </div>
   <div class="hero-main-decor-buttons-center">
      <div class="decor-btn decor-btn-3">
         <?= get_field('text_teach', 'options') ?>
      </div>
   </div>
   <div class="hero-main-decor-buttons-right flex flex-col items-start gap-[2px]">
      <div class="decor-btn decor-btn-4">
         <?= get_field('text_teachers', 'options') ?>
      </div>
      <div class="decor-btn decor-btn-5">
         <?= get_field('text_schools', 'options') ?>
      </div>
   </div>
</div>