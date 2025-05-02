<div class="nested-bg-item min-h-[75px] md:min-h-[130px] xl:min-h-[165px] 4xl:min-h-[190px] p-[16px] md:p-[20px] xl:p-[30px] rounded-[12px] relative text-dark-primary md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2 <?= $attributes['columns'] ?>">
   <div class="absolute top-[2px] md:top-[-10px] xl:top-[-5px] 4xl:[-10px] right-[16px] md:right-[20px] xl:right-[30px] [&_svg]:h-full [&_svg]:w-auto h-[14px] md:h-[30px] xl:h-[35px] 4xl:h-[40px] -rotate-90 origin-bottom-right">
      <?= get_figurines_decor_icon($attributes['decor']) ?>
   </div>

   <?= $content; ?>
</div>