<?php
function render_section_decor($decor)
{
?>
    <div class="absolute z-1 top-0 left-0 w-full h-full pointer-events-none">
        <div class="container h-full relative">
            <?php if ($decor === 1): ?>
                <div class="absolute right-0 bottom-[70px] md:bottom-[80px] lg:bottom-[100px] h-[212px] md:h-[406px] w-auto z-1 pointer-events-none flex">
                    <img class="accent-second-50-filter h-1/2 w-auto mt-auto aos-rotate-right" src="<?= get_template_directory_uri() . '/assets/images/icons/semicircle-bottom.svg' ?>" alt="">
                    <img class="accent-second-50-filter h-full w-auto aos-rotate-left" src="<?= get_template_directory_uri() . '/assets/images/icons/semi-tours-left.svg' ?>" alt="">
                </div>
            <?php elseif ($decor === 2): ?>
                <div class="absolute left-0 bottom-[70px] md:bottom-[80px] lg:bottom-[100px] h-[212px] md:h-[406px] w-auto z-1 pointer-events-none flex -scale-x-100">
                    <img class="accent-second-50-filter h-1/2 w-auto mt-auto aos-rotate-right" src="<?= get_template_directory_uri() . '/assets/images/icons/semicircle-bottom.svg' ?>" alt="">
                    <img class="accent-second-50-filter h-full w-auto aos-rotate-left" src="<?= get_template_directory_uri() . '/assets/images/icons/semi-tours-left.svg' ?>" alt="">
                </div>
            <?php elseif ($decor === 3): ?>
                <div class="absolute left-0 bottom-0 h-[212px] md:h-[406px] w-auto z-1 pointer-events-none flex -translate-x-1/2">
                    <img class="accent-second-50-filter h-1/2 w-auto mt-auto aos-rotate-right" src="<?= get_template_directory_uri() . '/assets/images/icons/semi-torus-top.svg' ?>" alt="">
                </div>
            <?php elseif ($decor === 4): ?>
                <div class="absolute right-0 bottom-0 h-[212px] md:h-[406px] w-auto z-1 pointer-events-none flex translate-x-1/2 -scale-x-100">
                    <img class="accent-second-50-filter h-1/2 w-auto mt-auto aos-rotate-right" src="<?= get_template_directory_uri() . '/assets/images/icons/semi-torus-top.svg' ?>" alt="">
                </div>
            <?php elseif ($decor === 5): ?>
                <div class="absolute left-0 bottom-0 h-[212px] md:h-[406px] w-auto z-1 pointer-events-none flex -translate-x-1/2">
                    <img class="accent-second-50-filter h-1/2 w-auto mt-auto aos-rotate-right" src="<?= get_template_directory_uri() . '/assets/images/icons/semicircle-bottom.svg' ?>" alt="">
                </div>
            <?php elseif ($decor === 6): ?>
                <div class="absolute right-0 bottom-0 h-[212px] md:h-[406px] w-auto z-1 pointer-events-none flex translate-x-1/2 -scale-x-100">
                    <img class="accent-second-50-filter h-1/2 w-auto mt-auto aos-rotate-right" src="<?= get_template_directory_uri() . '/assets/images/icons/semicircle-bottom.svg' ?>" alt="">
                </div>
            <?php endif; ?>
        </div>
    </div>
<?php
}
?>