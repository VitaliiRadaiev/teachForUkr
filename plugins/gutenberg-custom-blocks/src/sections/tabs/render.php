<?php
if (!($attributes['isHide'])):
   $classes = combine_classes(get_default_section_classes($attributes));
?>
   <div class="mt-[200px]"></div>
   <section class="tabs-section rounded-[20px] md:rounded-[30px] <?= $classes ?>">
      <div class="container">
         <? echo $content; ?>
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