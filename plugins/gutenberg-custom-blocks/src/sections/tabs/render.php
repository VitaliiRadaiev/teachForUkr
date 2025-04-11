<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
?>
   <div class="mt-[200px]"></div>
   <section class="tabs-section rounded-[20px] md:rounded-[30px] <?= $classes ?>">
      <div class="container">
         <? //echo $content; 
         ?>
         <div class="flex flex-col text-center items-center">
            <div class="suptitle inline-flex items-center gap-[5px] uppercase h5 min-h-[32px] rounded-full pb-[5px] pt-[6px] px-[12px] bg-accent-second-20">
               діяльність
            </div>
            <h2 class="h2 mt-[16px] md:mt-[20px] text-dark-primary">
               Долучайсядо нашої діяльності
            </h2>
         </div>
         <div class="mt-[30px] md:mt-[40px] lg:mt-[50px] first-child-no-margin flex flex-col">

            <div class="self-center max-w-full">
               <div class="mx-[-16px] md:mx-[-40px] lg-max:overflow-y-hidden lg-max:h-[60px]">
                  <div class="px-[16px] md:px-[40px] lg-max:pb-[20px] lg-max:overflow-x-auto">
                     <div class="flex bg-[var(--nested-bg)] p-[5px] rounded-[12px] lg-max:w-max lg:flex-wrap lg:justify-center">
                        <button class="active btn btn-secondary accent-second btn-secondary-sm grow-0 shrink-0 font-medium [&.btn]:min-h-[44px] lg:min-h-[50px] [&.btn]:px-[20px] [&.btn]:bg-transparent [&.btn]:text-dark-primary [&.btn.active]:bg-[var(--accent)] [&.btn.active]:text-white [&.btn.active]:pointer-events-none [&.btn]:hover:bg-transparent">
                           <span data-text="Хочу вчити"></span>
                        </button>
                        <button class="btn btn-secondary accent-second btn-secondary-sm grow-0 shrink-0 font-medium [&.btn]:min-h-[44px] lg:min-h-[50px] [&.btn]:px-[20px] [&.btn]:bg-transparent [&.btn]:text-dark-primary [&.btn.active]:bg-[var(--accent)] [&.btn.active]:text-white [&.btn.active]:pointer-events-none [&.btn]:hover:bg-transparent">
                           <span data-text="Хочу вчитися"></span>
                        </button>
                        <button class="btn btn-secondary accent-second btn-secondary-sm grow-0 shrink-0 font-medium [&.btn]:min-h-[44px] lg:min-h-[50px] [&.btn]:px-[20px] [&.btn]:bg-transparent [&.btn]:text-dark-primary [&.btn.active]:bg-[var(--accent)] [&.btn.active]:text-white [&.btn.active]:pointer-events-none [&.btn]:hover:bg-transparent">
                           <span data-text="Стати партнером"></span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            <div data-tab-content class="mt-[20px] md:mt-[30px] 4xl:mt-[40px]">

               <div class="grid md:grid-cols-2 lg:grid-cols-12 gap-[10px] md:gap-[20px] xl:gap-[24px] 4xl:gap-[30px]">

                  <div class="card-with-image card-rotate md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2 lg:col-span-3">
                     <div class="card-rotate-front nested-bg-item rounded-[12px] flex flex-col md-max:flex-row-reverse gap-y-[15px] 4xl:gap-y-[20px] transition-colors hover:bg-accent-second-50">
                        <div class="grow-0 shrink-0 md-max:pr-[16px] md:p-0">

                           <div class="aspect-square md:aspect-[1/1.136] w-[144px] md:w-[61.49%] md:mx-auto relative">
                              <div class="absolute z-2 aspect-square  w-[27.7%] top-[16px] md:top-[20px] 4xl:top-[30px] right-[0px] md:right-[-10%] flex items-center justify-center rounded-full bg-accent-first">
                                 <img class="aspect-square w-[55%] object-cover color-light-primary-filter" src="<?= get_template_directory_uri() . '/assets/images/icons/decor-icon-1.svg' ?>" alt="decor-icon">
                              </div>

                              <img class="ibg card-image-mask card-image-mask-1 image-mask-bottom-center z-1" src="<?= get_template_directory_uri() . '/assets/images/temp/nambers-text-image.jpg' ?>" alt="">
                              
                              <img class="absolute z-2 accent-second-filter w-[13.2%] h-auto left-[13%] bottom-[10%] rotate-[45deg]" src="<?= get_template_directory_uri() . '/assets/images/icons/rectangle-middle.svg' ?>" alt="">
                           </div>
                        </div>
                        <div class="grow shrink p-[16px] md:px-[20px] md:pb-[20px] md:pt-0 flex flex-col">
                           <span class="h3 mb-[5px] text-dark-primary">
                              Навчай
                           </span>
                           <a href="#" class="mt-auto btn-with-arrow accent-first self-start">
                              Показати
                           </a>
                        </div>
                     </div>
                     <div class="card-rotate-back nested-bg-item rounded-[12px]"></div>
                  </div>

                  <div class="card-with-image card-rotate md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2 lg:col-span-4">
                     <div class="card-rotate-front nested-bg-item rounded-[12px] flex flex-col md-max:flex-row-reverse gap-y-[15px] 4xl:gap-y-[20px]">
                        <div class="grow-0 shrink-0 pr-[16px] pb-[16px]">
                           <div class="aspect-square w-[144px] relative">
                              <div class="absolute z-2 aspect-square w-[27.7%] top-[8%] right-[0%] flex items-center justify-center rounded-full bg-accent-first">
                                 <img class="aspect-square w-[55%] object-cover color-light-primary-filter" src="<?= get_template_directory_uri() . '/assets/images/icons/decor-icon-1.svg' ?>" alt="decor-icon">
                              </div>
                              <img class="ibg card-image-mask card-image-mask-1 image-mask-bottom-center z-1" src="<?= get_template_directory_uri() . '/assets/images/temp/nambers-text-image.jpg' ?>" alt="">
                              <img class="absolute z-2 accent-second-filter w-[13.2%] h-auto left-[12%] bottom-[15%] rotate-[45deg]" src="<?= get_template_directory_uri() . '/assets/images/icons/rectangle-middle.svg' ?>" alt="">
                           </div>
                        </div>
                        <div class="grow shrink p-[16px] flex flex-col">
                           <span class="h3 mb-[5px] text-dark-primary">
                              Навчай
                           </span>
                           <a href="#" class="mt-auto btn-with-arrow accent-first self-start">
                              Показати
                           </a>
                        </div>
                     </div>
                     <div class="card-rotate-back nested-bg-item rounded-[12px]"></div>
                  </div>

               </div>

               <div class="mt-[40px] xl:mt-[50px] first-child-no-margin">
                  other content
               </div>
            </div>
         </div>
      </div>
   </section>
   <div class="mt-[200px]"></div>
<?php endif; ?>