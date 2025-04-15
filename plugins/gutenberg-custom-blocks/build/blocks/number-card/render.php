<div class="xl-max:bg-[var(--nested-bg)] p-[16px] md:p-[20px] xl:p-0 min-h-[72px] md:min-h-[106px] rounded-[12px] relative flex flex-col xl:flex-row xl:items-center gap-x-[20px] gap-y-[30px] text-dark-primary xl:table-row">
   <?= $content; ?>
   <div class="xl-max:absolute top-[16px] md:top-[30px] right-[16px] md:right-[20px] xl:table-cell xl:align-middle xl:bg-[var(--nested-bg)] td xl:h-[110px] 4xl:h-[126px] xl:rounded-r-[12px] xl:pr-[30px] xl:min-w-[115px] xl:text-end">
      <div class="h-[40px] md:h-[66px] 4xl:h-[75px] inline-flex items-center">
         <?= get_figurines_v2_decor_icon($attributes['decor']) ?>
      </div>
   </div>
</div>