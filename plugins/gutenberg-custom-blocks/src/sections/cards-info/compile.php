<section <?= ($attributes['id'] ?? null) ? 'id="' . $attributes['id'] . '"' : '' ?> data-aos="rotate-child" class="cards-info-section rounded-[20px] md:rounded-[30px] relative <?= $classes ?>">
      <?= render_section_decor($attributes['decor']); ?>
      <div class="container relative z-2">
         <?php // $content; 
         ?>
         <div class="text-center">
            <h2 class="h2">Навчальна складова програми</h2>
         </div>
         <div class="mt-[30px] md:mt-[40px] lg:mt-[50px] flex flex-col gap-[10px] md:gap-[20px] lg:gap-[24px] 4xl:gap-[30px] first-child-no-margin">

            <div class="card-info rounded-[12px] bg-accent-second-50 md:flex">
               <div class="p-[16px] md:p-[20px] 4xl:p-[24px] shrink grow">
                  <span class="h2 text-accent-first">
                     1 рік
                  </span>
                  <div class="mt-[10px] md:mt-[20px] text-dark-primary first-child-no-margin">
                     Фокус програми на розвитку учасників як педагогів та лідерів в умовах війни та післявоєнного часу.
                  </div>
               </div>
               <div class="rounded-[12px] border border-accent-first nested-bg-item p-[16px] md:p-[20px] 4xl:p-[24px] shrink-0 grow-0 md:w-[55%]">
                  <span class="h3 text-dark-primary">
                     В КІНЦІ ПЕРШОГО РОКУ
                  </span>
                  <div class="mt-[5px] 4xl:mt-[10px]">
                     Учасники стають впливовими вчителями та емпатійними лідерами, які беруть участь у житті школи та розширюють можливості для дітей; організовують навчання, враховуючи травматичний досвід суспільства спричинений війною.
                  </div>
               </div>
            </div>

            <div class="card-info rounded-[12px] bg-accent-second-50 md:flex">
               <div class="p-[16px] md:p-[20px] 4xl:p-[24px] shrink grow">
                  <span class="h2 text-accent-first">
                     2 рік
                  </span>
                  <div class="mt-[10px] md:mt-[20px] text-dark-primary first-child-no-margin">
                     Фокус програми на розвитку учасників як педагогів та лідерів в умовах війни та післявоєнного часу.
                  </div>
               </div>
               <div class="rounded-[12px] border border-accent-first nested-bg-item p-[16px] md:p-[20px] 4xl:p-[24px] shrink-0 grow-0 md:w-[55%]">
                  <span class="h3 text-dark-primary">
                     В КІНЦІ ПЕРШОГО РОКУ
                  </span>
                  <div class="mt-[5px] 4xl:mt-[10px]">
                     Учасники стають якісними спеціалістами у сфері освіти, з прокачаними лідерськими навичками, які беруть участь у житті громади
                  </div>
               </div>
            </div>

         </div>
         <div class="mt-[30px] md:mt-[40px] lg:mt-[50px] first-child-no-margin">
            <div class="h3 text-center text-dark-primary">
               МИ ПРАЦЮЄМО, ЩОБ ДАТИ НОВІ МОЖЛИВОСТІ учасникам, НЕЗАЛЕЖНО ВІД МІСЦЯ ЇХНЬОГО ПРОЖИВАННЯ.
            </div>
         </div>
      </div>
   </section>
   <div class="!ml-auto"></div>

