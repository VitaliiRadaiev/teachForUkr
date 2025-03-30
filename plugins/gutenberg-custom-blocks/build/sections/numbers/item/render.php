<div class="nested-bg-item p-[16px] md:p-[20px] xl:p-[30px] rounded-[12px] flex flex-col gap-[20px] xl:gap-[30px] relative text-dark-primary">
   <div class="absolute top-[16px] md:top-[20px] xl:top-[30px] right-[16px] md:right-[20px] xl:right-[30px] [&_svg]:h-full [&_svg]:w-auto h-[25px] md:h-[30px] xl:h-[35px] 4xl:h-[40px]">
      <?= file_get_contents(get_template_directory() . '/assets/images/icons/figurines-decor-'.$attributes['decor'].'.svg', false) ?>
   </div>
   <? echo $content; ?>
</div>