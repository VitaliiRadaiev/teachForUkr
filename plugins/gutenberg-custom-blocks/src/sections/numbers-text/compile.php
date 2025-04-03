<?php 
$tailwind = '!h-[40px]';
?>
<section class="numbers-text-section rounded-[20px] md:rounded-[30px] bg-lig  <?= $classes ?>">
   <div class="container md:grid lg:grid-rows-[auto_1fr] lg:grid-cols-[48%_1fr] lg:gap-x-[40px] 4xl:gap-x-[50px] lg:items-start">
      <div class="max-w-[500px] xl:max-w-[614px] 4xl:max-w-[810px] md:order-1">
         <div class="suptitle inline-flex items-center gap-[5px] uppercase h5 min-h-[32px] rounded-full pb-[5px] pt-[6px] px-[12px] bg-accent-second-20">
            проблематика
         </div>
         <h2 class="h2 mt-[16px] md:mt-[20px] text-dark-primary">
            РАЗОМ ПОДОЛАЄМО ОСВІТНЮ НЕРІВНІСТЬ
         </h2>
         <div class="mt-[20px] lg:mt-[30px] simple-text-content text-xl lg:max-w-[26.5rem] 4xl:max-w-[30.75rem]">
            <p>Місце народження та проживання значною мірою досі визначають можливості дитини реалізувати свій потенціал</p>
         </div>
      </div>
      <div class="mt-[30px] md:mt-[50px] lg:mt-0 grid gap-[10px] md:gap-[20px] lg:gap-[10px] md:order-3 lg:order-2 lg:row-span-2 xl:table xl:border-spacing-y-[10px] 4xl:border-spacing-y-[20px] xl:mt-[-10px] 4xl:mt-[-20px] xl:w-full">

         <div class="xl-max:bg-[var(--nested-bg)] p-[16px] md:p-[20px] xl:p-0 min-h-[72px] md:min-h-[106px] rounded-[12px] relative flex flex-col xl:flex-row xl:items-center gap-x-[20px] gap-y-[30px] text-dark-primary xl:table-row">

            <div class="xl:table-cell xl:align-middle xl:bg-[var(--nested-bg)] xl:max-w-[275px] 2xl:max-w-[330px] 4xl:max-w-[430px] td border-transparent xl:rounded-l-[12px] xl:h-[110px] 4xl:h-[126px] xl:p-[30px] 4xl:pr-[50px] break-words">
               <span class="h2 pr-[50px] md:pr-[80px] xl:pr-0">2.5</span>
            </div>

            <div class="max-w-[435px] md:max-w-[520px] xl:max-w-none xl:w-full md:pr-[85px] xl:pr-[30px] xl:py-[30px] xl:table-cell xl:align-middle xl:bg-[var(--nested-bg)] td xl:h-[110px] 4xl:h-[126px]">
               шкільної
            </div>

            <div class="xl-max:absolute top-[16px] md:top-[30px] right-[16px] md:right-[20px] xl:table-cell xl:align-middle xl:bg-[var(--nested-bg)] td xl:h-[110px] 4xl:h-[126px] xl:rounded-r-[12px] xl:pr-[30px] xl:min-w-[115px] xl:text-end">
               <div class="h-[40px] md:h-[66px] 4xl:h-[75px] inline-flex items-center">
                  <img class="h-full w-auto" src="<?= get_template_directory_uri() . '/assets/images/icons/figurines-v2-decor-1.svg' ?>" alt="">
               </div>
            </div>
         </div>

      </div>
      <div class="mt-[40px] xl:mt-[50px] 4xl:mt-[60px] button-group md:order-2 lg:order-3">
         <a href="#" class="btn-with-enter-arrow accent-first w-full sm:w-auto">
            Стати партнером
         </a>
      </div>
   </div>
</section>