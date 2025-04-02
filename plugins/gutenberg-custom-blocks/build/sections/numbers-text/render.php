<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
?>
   <div class="mt-[200px]"></div>

   <section class="numbers-text-section rounded-[20px] md:rounded-[30px] <?= $classes ?>">
      <div class="container md:grid lg:grid-rows-[auto_1fr] lg:grid-cols-[48%_1fr] lg:gap-x-[40px]">
         <? //echo $content; 
         ?>
         <div class="max-w-[500px] xl:max-w-[614px] md:order-1">
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
         <div class="mt-[30px] md:mt-[50px] lg:mt-0 grid gap-[10px] md:gap-[20px] lg:gap-[10px] md:order-3 lg:order-2 lg:row-span-2">

            <div class="nested-bg-item p-[16px] md:p-[20px] xl:p-[30px] min-h-[72px] md:min-h-[106px] xl:min-h-[126px] rounded-[12px] relative flex flex-col xl:flex-row xl:items-center gap-x-[20px] gap-y-[30px] text-dark-primary">
               <div class="absolute top-[16px] md:top-[30px] xl:top-1/2 xl:-translate-y-1/2 right-[16px] md:right-[20px] xl:right-[30px] h-[40px] md:h-[66px] 4xl:h-[75px] flex items-center [&_.figurines-sm]:h-[25px] [&_.figurines-sm]:md:h-[30px] [&_.figurines-sm]:xl:h-[35px] [&_.figurines-sm]:4xl:h-[40px]">
                  <img class="h-full w-auto" src="<?= get_template_directory_uri() . '/assets/images/icons/figurines-decor-11.svg' ?>" alt="">
               </div>
               <span class="h2">2.5</span>
               <div class="max-w-[435px]">
                  <strong>роки розрив у засвоєнні шкільної</strong> програми між учнями із сіл та великих міст
               </div>
            </div>

            <div class="nested-bg-item p-[16px] md:p-[20px] xl:p-[30px] min-h-[72px] md:min-h-[106px] xl:min-h-[126px] rounded-[12px] relative flex flex-col xl:flex-row xl:items-center gap-x-[20px] gap-y-[30px] text-dark-primary">
               <div class="absolute top-[16px] md:top-[30px] xl:top-1/2 xl:-translate-y-1/2 right-[16px] md:right-[20px] xl:right-[30px] h-[40px] md:h-[66px] 4xl:h-[75px] flex items-center [&_.figurines-sm]:h-[25px] [&_.figurines-sm]:md:h-[30px] [&_.figurines-sm]:xl:h-[35px] [&_.figurines-sm]:4xl:h-[40px]">
                  <img class="h-full w-auto" src="<?= get_template_directory_uri() . '/assets/images/icons/figurines-decor-12.svg' ?>" alt="">
               </div>
               <span class="h2">1.2</span>
               <div class="max-w-[435px]">
                  <strong>млн.</strong> дітей проживає у сільській місцевості України
               </div>
            </div>

            <div class="nested-bg-item p-[16px] md:p-[20px] xl:p-[30px] min-h-[72px] md:min-h-[106px] xl:min-h-[126px] rounded-[12px] relative flex flex-col xl:flex-row xl:items-center gap-x-[20px] gap-y-[30px] text-dark-primary">
               <div class="absolute top-[16px] md:top-[30px] xl:top-1/2 xl:-translate-y-1/2 right-[16px] md:right-[20px] xl:right-[30px] h-[40px] md:h-[66px] 4xl:h-[75px] flex items-center [&_.figurines-sm]:h-[25px] [&_.figurines-sm]:md:h-[30px] [&_.figurines-sm]:xl:h-[35px] [&_.figurines-sm]:4xl:h-[40px]">
                  <img class="h-full w-auto" src="<?= get_template_directory_uri() . '/assets/images/icons/figurines-decor-13.svg' ?>" alt="">
               </div>
               <span class="h2">10</span>
               <div class="max-w-[435px]">
                  <strong>менше 10 відсотків</strong> вчителів в Україні віком до 30 років
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

   <div class="mt-[200px]"></div>
<?php endif; ?>