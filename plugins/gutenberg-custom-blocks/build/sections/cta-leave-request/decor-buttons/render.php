<div class="<?= $attributes['classes'] ?>">
   <div class="relative w-[205px] xl:w-[232px] 4xl:w-[245px] h-[74px] xl:h-[92px] 4xl:h-[100px] flex flex-col items-start">
      <div class="!absolute right-[82px] md:right-[96px] 4xl:right-[106px] bottom-[37px] md:bottom-[47px] 4xl:bottom-[52px] decor-btn decor-btn-1">
         <?= get_field('text_growth', 'options') ?>
      </div>
      <div class="!absolute right-[17px] md:right-[16px] 4xl:right-[15px] bottom-[31px] md:bottom-[39px] 4xl:bottom-[43px] decor-btn decor-btn-2 origin-bottom-right rotate-[30deg]">
         <?= get_field('text_team', 'options') ?>
      </div>

      <div class="!absolute bottom-0 right-0 decor-btn decor-btn-3">
         <?= get_field('text_responsibility', 'options') ?>
      </div>
   </div>
</div>