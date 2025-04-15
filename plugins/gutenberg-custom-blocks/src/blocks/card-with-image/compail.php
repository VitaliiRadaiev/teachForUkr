<?php 
$tailwind = 'lg:gap-y-[30px] 4xl:gap-y-[40px]';
?>

<div class="card-with-image card-rotate md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2 lg:col-span-3">
    <div class="card-rotate-front nested-bg-item h-full rounded-[12px] flex flex-col md-max:flex-row-reverse gap-y-[15px] 4xl:gap-y-[20px]">
        <div class="grow-0 shrink-0 md-max:pr-[16px] md:p-0">
            <div class="aspect-square md:aspect-[1/1.136] w-[144px] md:w-[61.49%] md:mx-auto relative">
                <div class="decor-icon absolute z-2 aspect-square w-[27%] md:w-[30.3%] top-[16px] md:top-[20px] 4xl:top-[30px] right-0 md:right-[-10%] flex items-center justify-center rounded-full bg-accent-first">
                    <img class="aspect-square w-[55%] object-cover color-light-primary-filter" src="<?= get_template_directory_uri() . '/assets/images/icons/decor-icon-1.svg' ?>" alt="decor-icon">
                </div>

                <img class="ibg card-image-mask card-image-mask-1 image-mask-bottom-center z-1" src="<?= get_template_directory_uri() . '/assets/images/temp/nambers-text-image.jpg' ?>" alt="">

                <img class="decor absolute z-2 accent-second-filter w-[13.88%] md:w-[15.15%] h-auto left-[13%] bottom-[10%]" src="<?= get_template_directory_uri() . '/assets/images/icons/rectangle-middle.svg' ?>" alt="">
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
    <div class="mb-[20px] card-rotate-back nested-bg-item rounded-[12px]"></div>
</div>

<div class="card-with-image card-rotate md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2 lg:col-span-4">
    <div class="card-rotate-front nested-bg-item h-full rounded-[12px] flex flex-col gap-y-[30px] md:gap-y-[40px]">
        <div class="grow-0 shrink-0">
            <div class="aspect-[1/1.136] w-[61.49%] mx-auto relative">
                <div class="decor-icon absolute z-2 aspect-square w-[18.95%] md:w-[30.3%] lg:w-[22.98%] top-[16px] md:top-[20px] 4xl:top-[30px] right-[10%] md:right-[-10%] lg:right-[6%] flex items-center justify-center rounded-full bg-accent-first">
                    <img class="aspect-square w-[55%] object-cover color-light-primary-filter" src="<?= get_template_directory_uri() . '/assets/images/icons/decor-icon-1.svg' ?>" alt="decor-icon">
                </div>

                <img class="ibg card-image-mask card-image-mask-1 image-mask-bottom-center z-1" src="<?= get_template_directory_uri() . '/assets/images/temp/nambers-text-image.jpg' ?>" alt="">

                <img class="decor absolute z-2 accent-second-filter w-[9.47%] md:w-[15.15%] lg:w-[11.49%] h-auto left-[15%] md:left-[13%] bottom-[13%] md:bottom-[10%]" src="<?= get_template_directory_uri() . '/assets/images/icons/rectangle-middle.svg' ?>" alt="">
            </div>
        </div>
        <div class="grow shrink p-[16px] pt-0 md:px-[20px] md:pb-[20px] md:pt-0 flex flex-col">
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

<div class="card-with-image card-rotate md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2 lg:col-span-6">
    <div class="card-rotate-front nested-bg-item h-full rounded-[12px] flex flex-col gap-y-[30px] md:gap-y-[40px]">
        <button data-action="show-details" class="absolute z-3 top-[16px] lg:top-[30px] right-[16px] lg:right-[30px] cursor-pointer hover:scale-105 transition-transform">
            <img class="h-[30px] w-[30px] object-contain" src="<?= get_template_directory_uri() . '/assets/images/icons/info.svg' ?>" alt="info">
        </button>
        <div class="grow-0 shrink-0">

            <div class="aspect-[1/1.136] w-[61.49%] mx-auto relative">
                <div class="decor-icon absolute z-2 aspect-square w-[18.95%] md:w-[30.3%] lg:w-[15.07%] top-[16px] md:top-[20px] 4xl:top-[30px] right-[10%] md:right-[-10%] lg:right-[16%] flex items-center justify-center rounded-full bg-accent-first">
                    <img class="aspect-square w-[55%] object-cover color-light-primary-filter" src="<?= get_template_directory_uri() . '/assets/images/icons/decor-icon-1.svg' ?>" alt="decor-icon">
                </div>

                <img class="ibg card-image-mask card-image-mask-1 image-mask-bottom-center z-1" src="<?= get_template_directory_uri() . '/assets/images/temp/nambers-text-image.jpg' ?>" alt="">

                <img class="decor absolute z-2 accent-second-filter w-[9.47%] md:w-[15.15%] lg:w-[7.53%] h-auto left-[15%] md:left-[13%] lg:left-[17%] bottom-[13%] md:bottom-[10%] lg:bottom-[13%]" src="<?= get_template_directory_uri() . '/assets/images/icons/rectangle-middle.svg' ?>" alt="">
            </div>
        </div>
        <div class="grow shrink p-[16px] pt-0 md:px-[20px] md:pb-[20px] md:pt-0 flex flex-col">
            <span class="h3 mb-[5px] text-dark-primary">
                Навчай
            </span>
            <a href="#" class="mt-auto btn-with-arrow accent-first self-start">
                Показати
            </a>
        </div>
    </div>
    <div class="card-rotate-back absolute top-0 left-0 h-full w-full nested-bg-item rounded-[12px] flex flex-col p-[20px] pt-[64px] lg:pt-[94px]">
        <button data-action="close-details" class="absolute top-[20px] right-[20px] icon-x-mark flex items-center justify-center h-[44px] w-[44px] rounded-[8px] bg-dark-primary text-light-primary text-sm transition-colors hover:bg-dark-primary-80"></button>
        <div class="h3 text-dark-primary">
            Ментор
        </div>
        <div class="mt-[10px] lg:mt-[20px] h-full overflow-auto">
            <div data-scroll-container class="max-h-full [&_.swiper-scrollbar]:right-0">
                <div class="text-dark-primary text-md pr-[10px]">
                    Участь у Програмі вимагає переїзду в маленький населений пункт, бо для нас важливим є вплив учасника безпосередньо на місцях. Якщо ви наразі за кордоном, то ви можете взяти участь у відборі на Програму.
                </div>
            </div>
        </div>
        <div class="mt-[20px]">
            <a href="#" class="btn-with-enter-arrow accent-first">
                Реєстрація на навчання
            </a>
        </div>
    </div>
</div>

<div class="card-with-image card-rotate md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2 lg:col-span-3">
    <div class="card-rotate-front nested-bg-item h-full rounded-[12px] flex flex-col md-max:flex-row-reverse gap-y-[15px] 4xl:gap-y-[20px]">
        <div class="grow-0 shrink-0 md-max:pr-[16px] md:p-0">

            <div class="aspect-square md:aspect-[1/0.7] w-[144px] md:w-[73%] md:mx-auto relative">
                <div class="decor-icon absolute z-2 aspect-square  w-[27%] md:w-[25.53%] top-[16px] md:top-[20px] 4xl:top-[30px] right-0 md:right-[-10%] flex items-center justify-center rounded-full bg-accent-first">
                    <img class="aspect-square w-[55%] object-cover color-light-primary-filter" src="<?= get_template_directory_uri() . '/assets/images/icons/decor-icon-1.svg' ?>" alt="decor-icon">
                </div>

                <img class="ibg card-image-mask card-image-mask-2 image-mask-center md:image-mask-bottom-center z-1" src="<?= get_template_directory_uri() . '/assets/images/temp/nambers-text-image.jpg' ?>" alt="">

                <img class="decor absolute z-2 accent-second-filter w-[13.88%] md:w-[12.76%] h-auto left-[13%] md:left-[6%] bottom-[10%] md:bottom-0" src="<?= get_template_directory_uri() . '/assets/images/icons/rectangle-middle.svg' ?>" alt="">
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
    <div class="card-rotate-front nested-bg-item h-full rounded-[12px] flex flex-col md-max:flex-row-reverse gap-y-[15px] 4xl:gap-y-[20px]">
        <div class="grow-0 shrink-0 md-max:pr-[16px] md:p-0">

            <div class="aspect-square md:aspect-[1/0.7] w-[144px] md:w-[73%] md:mx-auto relative">
                <div class="decor-icon absolute z-2 aspect-square  w-[27%] md:w-[25.53%] lg:w-[19.35%] top-[16px] md:top-[20px] 4xl:top-[30px] right-0 md:right-[-10%] lg:right-0 flex items-center justify-center rounded-full bg-accent-first">
                    <img class="aspect-square w-[55%] object-cover color-light-primary-filter" src="<?= get_template_directory_uri() . '/assets/images/icons/decor-icon-1.svg' ?>" alt="decor-icon">
                </div>

                <img class="ibg card-image-mask card-image-mask-2 image-mask-center md:image-mask-bottom-center z-1" src="<?= get_template_directory_uri() . '/assets/images/temp/nambers-text-image.jpg' ?>" alt="">

                <img class="decor absolute z-2 accent-second-filter w-[13.88%] md:w-[12.76%] lg:w-[9.67%] h-auto left-[13%] md:left-[6%] lg:left-[14%] bottom-[10%] md:bottom-0" src="<?= get_template_directory_uri() . '/assets/images/icons/rectangle-middle.svg' ?>" alt="">
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

<div class="card-with-image card-rotate md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2 lg:col-span-6">
    <div class="card-rotate-front nested-bg-item h-full rounded-[12px] flex flex-col gap-y-[30px] md:gap-y-[40px]">
        <div class="grow-0 shrink-0">
            <div class="aspect-[1/0.7] w-[73%] mx-auto relative">
                <div class="decor-icon absolute z-2 aspect-square  w-[16.39%] md:w-[25.53%] lg:w-[12.37%]  top-[16px] md:top-[20px] 4xl:top-[30px] right-0 md:right-[-10%] lg:right-[7%] flex items-center justify-center rounded-full bg-accent-first">
                    <img class="aspect-square w-[55%] object-cover color-light-primary-filter" src="<?= get_template_directory_uri() . '/assets/images/icons/decor-icon-1.svg' ?>" alt="decor-icon">
                </div>

                <img class="ibg card-image-mask card-image-mask-2 image-mask-bottom-center z-1" src="<?= get_template_directory_uri() . '/assets/images/temp/nambers-text-image.jpg' ?>" alt="">

                <img class="decor absolute z-2 accent-second-filter w-[8.19%] md:w-[12.76%] lg:w-[6.18%] h-auto left-[9%] md:left-[6%] lg:left-[16%] bottom-[6%] md:bottom-0 lg:bottom-[5%] " src="<?= get_template_directory_uri() . '/assets/images/icons/rectangle-middle.svg' ?>" alt="">
            </div>
        </div>
        <div class="grow shrink p-[16px] pt-0 md:px-[20px] md:pb-[20px] md:pt-0 flex flex-col sm-max:[&_.btn:not(.btn-with-arrow)]:w-full [&_.btn]:self-start">
            <span class="h3 mb-[20px] text-dark-primary">
                Навчай
            </span>
            <a href="#" class="btn mt-auto btn-with-enter-arrow accent-first self-start mb-[20px]">
                Реєстрація на навчання
            </a>
        </div>
    </div>
    <div class="card-rotate-back nested-bg-item rounded-[12px]"></div>
</div>

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa enim voluptas neque quas, quae incidunt?
