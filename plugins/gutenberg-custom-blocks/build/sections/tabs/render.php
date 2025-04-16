<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
?>
   <div class="mt-[200px]"></div>
   <section class="tabs-section rounded-[20px] md:rounded-[30px] <?= $classes ?>">
      <div class="container">
         <?= $content; ?>
         <div class="grid md:grid-cols-2 lg:grid-cols-12 gap-[10px] md:gap-[20px] xl:gap-[24px] 4xl:gap-[30px]">

            <div class="card-with-icon nested-bg-item rounded-[12px] p-[16px] md:p-[20px] flex flex-col gap-y-[20px] md:gap-y-[40px] md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2 lg:col-span-4">
               <div class="grow-0 shrink-0 h-[44px] w-[44px] md:h-[60px] md:w-[60px] rounded-full bg-accent-first flex items-center justify-center">
                  <img class="h-[22px] w-[22px] md:h-[32px] md:w-[32px] object-cover color-light-primary-filter" src="<?= get_template_directory_uri() . '/assets/images/icons/decor-icon-1.svg' ?>" alt="decor-icon">
               </div>
               <div class="shrink grow flex flex-col first-no-margin last-no-margin sm-max:[&_.btn:not(.btn-with-arrow)]:w-full [&_.btn]:self-start">
                  <span class="h3 text-dark-primary mb-[10px]">
                     Програма Навчай
                  </span>
                  <div class="mb-[20px] text-dark-primary text-md shrink grow">
                     Безкоштовні заняття зі шкільних предметів та інструменти самоосвіти, які вони зможуть використовувати і надалі
                  </div>
                  <a href="#" class="mt-auto btn btn-with-arrow accent-first">
                     Переглянути
                  </a>
               </div>
            </div>

            
            <div class="card-with-icon nested-bg-item rounded-[12px] p-[16px] md:p-[20px] flex flex-row gap-y-[20px] md:gap-y-[40px] gap-x-[14px] md:gap-x-[20px] md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2 lg:col-span-6">
               <div class="grow-0 shrink-0 h-[44px] w-[44px] md:h-[60px] md:w-[60px] rounded-full bg-accent-first flex items-center justify-center">
                  <img class="h-[22px] w-[22px] md:h-[32px] md:w-[32px] object-cover color-light-primary-filter" src="<?= get_template_directory_uri() . '/assets/images/icons/decor-icon-1.svg' ?>" alt="decor-icon">
               </div>
               <div class="shrink grow flex flex-col first-no-margin last-no-margin sm-max:[&_.btn:not(.btn-with-arrow)]:w-full [&_.btn]:self-start">
                  <span class="h3 text-dark-primary mb-[10px]">
                     Програма Навчай
                  </span>
                  <div class="mb-[20px] text-dark-primary text-md shrink grow">
                     Безкоштовні заняття зі шкільних предметів та інструменти самоосвіти, які вони зможуть використовувати і надалі

                     <ul class="ul-square accent-first mt-[10px]">
                        <li>Досвід переїзду та життя у маленькому населеному пункті</li>
                        <li>Досвід вчителювання</li>
                        <li>Досвід розробки та реалізації проєкту</li>
                        <li>Досвід участі в великих онлайн та оффлайн освітніх подіях</li>
                        <li>Досвід роботи з молоддю</li>
                        <li>Досвід менторської підтримки</li>
                     </ul>
                  </div>
                  <a href="#" class="mt-auto btn btn-with-arrow accent-first">
                     Переглянути
                  </a>
               </div>
            </div>

         </div>
      </div>
   </section>
   <div class="mt-[200px]"></div>
<?php endif; ?>