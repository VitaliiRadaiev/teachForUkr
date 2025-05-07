
<section <?= ($attributes['id'] ?? null) ? 'id="' . $attributes['id'] . '"' : '' ?> data-aos="map" class="map-section rounded-[20px] md:rounded-[30px] relative overflow-hidden <?= $classes ?>">
   <div class="map-bg absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex justify-center w-full h-[229px] md:h-[442px] lg:h-[520px] 4xl:h-[636px]">
      <img class="level-1 item-left bg-nested-item-filter absolute z-1 right-[calc(50%-1px)] top-0 h-full w-auto" src="<?= get_template_directory_uri() . '/assets/images/icons/semi-circle-left.svg' ?>" alt="">
      <img class="level-1 item-right bg-nested-item-filter absolute z-1 left-[calc(50%-1px)] top-0 h-full w-auto" src="<?= get_template_directory_uri() . '/assets/images/icons/semi-circle-right.svg' ?>" alt="">

      <img class="map h-full w-auto max-w-none relative z-2 opacity-0" src="<?= get_template_directory_uri() . '/assets/images/' ?>" alt="">

      <img class="level-2 item-left bg-nested-item-filter absolute z-3 right-[calc(50%-1px)] top-0 h-full w-auto" src="<?= get_template_directory_uri() . '/assets/images/icons/semi-circle-left.svg' ?>" alt="">
      <img class="level-2 item-right bg-nested-item-filter absolute z-3 left-[calc(50%-1px)] top-0 h-full w-auto" src="<?= get_template_directory_uri() . '/assets/images/icons/semi-circle-right.svg' ?>" alt="">
   </div>
   <div class="md-max:t4u-content md-max:opacity-0 md-max:translate-y-[-50px] container relative flex flex-col justify-center z-2 min-h-[229px] md:min-h-[442px] lg:min-h-[520px] 4xl:min-h-[636px]">
      <?php //$content; 
      ?>
      <div class="map-anim-icon md:opacity-0 md:absolute md:top-[-20px] 2xl:top-[70px] md:right-[73px] 2xl:right-[160px] 4xl:right-[267px] mb-[20px] md-max:ml-auto md-max:mr-[34px] h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-full bg-dark-primary flex flex-col justify-center items-center">
         <div class="map-eay relative h-[25%]">
            <img class="h-full w-auto max-w-none color-light-primary-filter relative z-2" src="<?= get_template_directory_uri() . '/assets/images/icons/eay.svg' ?>" alt="">
            <img class="map-eay-dot h-[80%] w-auto max-w-none color-dark-primary-filter absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="<?= get_template_directory_uri() . '/assets/images/icons/dot.svg' ?>" alt="">
         </div>
         <div class="map-eay relative h-[25%]">
            <img class="h-full w-auto max-w-none color-light-primary-filter relative z-2" src="<?= get_template_directory_uri() . '/assets/images/icons/eay.svg' ?>" alt="">
            <img class="map-eay-dot h-[80%] w-auto max-w-none color-dark-primary-filter absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="<?= get_template_directory_uri() . '/assets/images/icons/dot.svg' ?>" alt="">
         </div>
      </div>

      <div class="md:t4u-content md:opacity-0 md:translate-y-[-50px]">
         <h2 class="h2 text-center text-dark-primary">
            Беруть участь <br> 95 шкіл
         </h2>
         <div class="mt-[20px] text-xl font-medium max-w-[35rem] 4xl:max-w-[40.625rem] mx-auto text-dark-primary text-center">
            Lorem Ipsum є псевдо- латинський текст використовується у веб - дизайні, типографіка, верстка, і друку замість англійської підкреслити елементи дизайну над змістом.
         </div>
         <div class="mt-[94px] md:mt-[40px] lg:mt-[50px] 4xl:mt-[60px] button-group text-center max-w-[1000px] mx-auto w-full">
            <a href="#" class="btn btn-with-enter-arrow accent-first">
               Дивитися мапу
            </a>
         </div>
      </div>

      <div class="map-anim-icon md:opacity-0 absolute left-[50px] md:left-[40px] 2xl:left-[160px] 4xl:left-[267px] bottom-[94px] md:bottom-0 2xl:bottom-[55px] h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-full bg-accent-second flex flex-col justify-center items-center">
         <img class="map-marker h-[40%] w-auto max-w-none color-light-primary-filter" src="<?= get_template_directory_uri() . '/assets/images/icons/map-anim-marker.svg' ?>" alt="">
         <img class="mt-[-7%] h-[13.75%] w-auto max-w-none color-light-primary-filter" src="<?= get_template_directory_uri() . '/assets/images/icons/map-anim-marker-place.svg' ?>" alt="">
      </div>
   </div>
</section>
<section class="map-section rounded-[20px] md:rounded-[30px] relative overflow-hidden <?= $classes ?>">
   <div class="map-bg absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex justify-center w-full h-[229px] md:h-[442px] lg:h-[520px] 4xl:h-[636px]">
      <img class="level-1 item-left bg-nested-item-filter absolute z-1 right-[calc(50%-1px)] top-0 h-full w-auto translate-x-[-82%]" src="<?= get_template_directory_uri() . '/assets/images/icons/semi-circle-left.svg' ?>" alt="">
      <img class="level-1 item-right bg-nested-item-filter absolute z-1 left-[calc(50%-1px)] top-0 h-full w-auto translate-x-[82%]" src="<?= get_template_directory_uri() . '/assets/images/icons/semi-circle-right.svg' ?>" alt="">

      <img class="map h-full w-auto max-w-none relative z-2" src="<?= get_template_directory_uri() . '/assets/images/general/map.svg' ?>" alt="">

      <img class="level-2 item-left bg-nested-item-filter absolute z-3 right-[calc(50%-1px)] top-0 h-full w-auto translate-x-[-182%]" src="<?= get_template_directory_uri() . '/assets/images/icons/semi-circle-left.svg' ?>" alt="">
      <img class="level-2 item-right bg-nested-item-filter absolute z-3 left-[calc(50%-1px)] top-0 h-full w-auto translate-x-[182%]" src="<?= get_template_directory_uri() . '/assets/images/icons/semi-circle-right.svg' ?>" alt="">
   </div>
   <div class="md-max:t4u-content container relative flex flex-col justify-center z-2 min-h-[229px] md:min-h-[442px] lg:min-h-[520px] 4xl:min-h-[636px]">
      <?php //$content; 
      ?>
      <div class="map-anim-icon md:absolute md:top-[-20px] 2xl:top-[70px] md:right-[73px] 2xl:right-[160px] 4xl:right-[267px] mb-[20px] md-max:ml-auto md-max:mr-[34px] h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-full bg-dark-primary flex flex-col justify-center items-center">
         <div class="map-eay relative h-[25%]">
            <img class="h-full w-auto max-w-none color-light-primary-filter relative z-2" src="<?= get_template_directory_uri() . '/assets/images/icons/eay.svg' ?>" alt="">
            <img class="map-eay-dot h-[80%] w-auto max-w-none color-dark-primary-filter absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="<?= get_template_directory_uri() . '/assets/images/icons/dot.svg' ?>" alt="">
         </div>
         <div class="map-eay relative h-[25%]">
            <img class="h-full w-auto max-w-none color-light-primary-filter relative z-2" src="<?= get_template_directory_uri() . '/assets/images/icons/eay.svg' ?>" alt="">
            <img class="map-eay-dot h-[80%] w-auto max-w-none color-dark-primary-filter absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="<?= get_template_directory_uri() . '/assets/images/icons/dot.svg' ?>" alt="">
         </div>
      </div>

      <div class="md:t4u-content">
         <h2 class="h2 text-center text-dark-primary">
            Беруть участь <br> 95 шкіл
         </h2>
         <div class="mt-[20px] text-xl font-medium max-w-[35rem] 4xl:max-w-[40.625rem] mx-auto text-dark-primary text-center">
            Lorem Ipsum є псевдо- латинський текст використовується у веб - дизайні, типографіка, верстка, і друку замість англійської підкреслити елементи дизайну над змістом.
         </div>
         <div class="mt-[94px] md:mt-[40px] lg:mt-[50px] 4xl:mt-[60px] button-group text-center">
            <a href="#" class="btn btn-with-enter-arrow accent-first">
               Дивитися мапу
            </a>
         </div>
      </div>

      <div class="map-anim-icon absolute left-[50px] md:left-[40px] 2xl:left-[160px] 4xl:left-[267px] bottom-[94px] md:bottom-0 2xl:bottom-[55px] h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-full bg-accent-second flex flex-col justify-center items-center">
         <img class="map-marker h-[40%] w-auto max-w-none color-light-primary-filter" src="<?= get_template_directory_uri() . '/assets/images/icons/map-anim-marker.svg' ?>" alt="">
         <img class="mt-[-7%] h-[13.75%] w-auto max-w-none color-light-primary-filter" src="<?= get_template_directory_uri() . '/assets/images/icons/map-anim-marker-place.svg' ?>" alt="">
      </div>
   </div>
</section>