<div class="<?= $attributes['classes'] ?>">
   <div class="flex gap-[2px]">
      <div class="decor-btn decor-btn-1">
         <?= get_field('text_growth', 'options') ?>
      </div>
      <div class="decor-btn decor-btn-2 origin-bottom-right rotate-[30deg] translate-x-[-40px] md:translate-x-[-50px] translate-y-[6px] md:translate-y-[8px]">
         <?= get_field('text_team', 'options') ?>
      </div>
   </div>
   <div class="">
      <div class="ml-[40px] decor-btn decor-btn-3">
         <?= get_field('text_responsibility', 'options') ?>
      </div>
   </div>
</div>