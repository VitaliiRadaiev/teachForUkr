<section <?= ($attributes['id'] ?? null) ? 'id="' . $attributes['id'] . '"' : '' ?> data-aos="rotate-child" class="cta-leave-request-section rounded-[20px] md:rounded-[30px] relative <?= $classes ?>">
   <?= render_section_decor($attributes['decor']); ?>
   <div class="container relative z-2">
      <?php // $content; 
      ?>
      <div class="rounded-[20px] md:rounded-[30px] relative bg-accent-second overflow-hidden">
         <div class="relative z-2 pt-[40px] px-[16px] md:px-[40px] xl:p-[20px] xl:flex xl:justify-between xl:gap-[50px] xl:pointer-events-none">
            <div class=" xl-max:mx-auto max-w-[584px] xl:max-w-[520px] 4xl:max-w-[645px] xl:pl-[40px] xl:py-[40px] xl:pointer-events-auto flex flex-col items-start xl:gap-[40px]">
               <div class="">
                  <div class="suptitle inline-flex items-center gap-[5px] uppercase h5 min-h-[32px] rounded-full pb-[5px] pt-[6px] px-[12px] bg-accent-second-20">
                     Зв’язок
                  </div>
                  <h2 class="h2 mt-[16px] md:mt-[20px] text-dark-primary without-break-word">
                     БУДЬТЕ <br class="md:hidden" /> ЧАСТИНОЮ ЗМІН У КРАЇНІ, — <span class="text-light-primary">НАПИШІТЬ НАМ</span>
                  </h2>
               </div>

               <div class="mt-auto cta-form-decor-buttons flex-col items-start gap-[2px] hidden xl:flex">
                  <div class="flex gap-[2px]">
                     <div class="decor-btn decor-btn-1">
                        <?= get_field('text_growth', 'options') ?>
                     </div>
                     <div class="decor-btn decor-btn-2 origin-bottom-right rotate-[30deg] translate-x-[-40px] md:translate-x-[-50px] translate-y-[6px] md:translate-y-[8px]">
                        <?= get_field('text_team', 'options') ?>
                     </div>
                  </div>
                  <div class="">
                     <div class="ml-[40px] decor-btn decor-btn-3">
                        <?= get_field('text_responsibility', 'options') ?>
                     </div>
                  </div>
               </div>
            </div>

            <div data-feedback-form class="mt-[30px] relative xl:mt-0 bg-light-primary rounded-[12px] py-[30px] px-[16px] md:p-[40px] w-full max-w-[470px] xl-max:mx-auto xl:w-[470px] xl:min-h-[565px] 4xl:min-h-[594px] xl:h-full xl:pointer-events-auto overflow-hidden">
               <div class="h3 text-center text-dark-primary">
                  Залиште заявку
               </div>
               <div class="mt-[5px] text-center font-bold">
                  і ми зв'яжемося з вами <br> найближчим часом
               </div>

               <div class="mt-[20px]">
                  <form action="/">
                     <div class="flex flex-col gap-[12px]">
                        <label class="block">
                           <div class="mb-[6px] text-md font-bold text-dark-primary">Ім’я</div>
                           <input type="text" class="input" placeholder="Напишіть ваше ім’я" required>
                        </label>
                        <label class="block">
                           <div class="mb-[6px] text-md font-bold text-dark-primary">E-mail</div>
                           <input type="mail" class="input" placeholder="Вкажіть вашу пошту" required>
                        </label>
                        <label class="block">
                           <div class="mb-[6px] text-md font-bold text-dark-primary">Повідомлення</div>
                           <textarea class="textarea" placeholder="Напишіть ваше повідомлення"></textarea>
                        </label>
                     </div>
                     <div class="mt-[30px]">
                        <button class="btn-with-enter-arrow accent-first w-full">
                           <span data-text="Зв’язатись"></span>
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <div class="mt-[24px] md:mt-[52px] xl:mt-0 relative h-[226px] md:h-[409px] xl:h-[550px] 4xl:h-[574px] xl:absolute xl:z-1 xl:left-1/2 xl:bottom-0 xl:-translate-x-1/2 xl:w-full">
            <img class="absolute z-1 top-[52px] md:top-[56px] xl:top-[120px] left-1/2 -translate-x-1/2 h-[242px] md:h-[431px] xl:h-[492px] w-auto max-w-none" src="<?= get_template_directory_uri() . '/assets/images/general/cta-decor.svg' ?>" alt="">
            <img class="absolute z-2 top-0 left-1/2 translate-x-[-30%] md:translate-x-[-50%] w-[282px] md:w-[513px] xl:w-[653px] h-auto max-w-none" src="<?= get_template_directory_uri() . '/assets/images/temp/cta-girl.png' ?>" alt="">
            <div class="cta-form-decor-buttons absolute z-3 left-1/2 translate-x-[-70%] md:translate-x-[-108%] bottom-[28px] md:bottom-[40px] flex flex-col items-start gap-[2px] xl:hidden">
               <div class="flex gap-[2px]">
                  <div class="decor-btn decor-btn-1">
                     <?= get_field('text_growth', 'options') ?>
                  </div>
                  <div class="decor-btn decor-btn-2 origin-bottom-right rotate-[30deg] translate-x-[-40px] md:translate-x-[-50px] translate-y-[6px] md:translate-y-[8px]">
                     <?= get_field('text_team', 'options') ?>
                  </div>
               </div>
               <div class="">
                  <div class="ml-[40px] decor-btn decor-btn-3">
                     <?= get_field('text_responsibility', 'options') ?>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>