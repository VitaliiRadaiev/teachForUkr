<div class="subscribe-form-input w-full flex items-center placeholder:text-dark-primary-60 !text-dark-primary !outline-none !bg-transparent !p-0 !border-none"></div>
<section <?= ($attributes['id'] ?? null) ? 'id="' . $attributes['id'] . '"' : '' ?> data-aos="rotate-child" class="subscribe-section rounded-[20px] md:rounded-[30px] relative <?= $classes ?>">
    <?= render_section_decor($attributes['decor']); ?>
    <div class="container relative z-2">
        <?php // $content; 
        ?>
        <div class="rounded-[20px] md:rounded-[30px] py-[40px] xl:py-[32px] px-[16px] xl:px-[30px] flex flex-col xl:flex-row xl:justify-between gap-[30px] xl:gap-[40px] min-h-[160px] bg-accent-second overflow-hidden">
            <div class="shrink-0 grow-0 xl:w-[646px] 4xl:w-[830px]">
                <h2 class="h2 text-dark-primary">
                    якщо хочете першими отримувати матеріали
                </h2>
            </div>
            <div class="shrink grow xl:w-full xl:max-w-[460px] 4xl:max-w-[600px]">
                <div class="h4 text-light-primary !font-normal">
                    Підписуйтеся на новини сайту
                </div>
                <div class="mt-[16px]">
                    <div class="subscribe-form flex items-center bg-background">
                        <input type="text" class="subscribe-form-input w-full flex items-center placeholder:text-dark-primary-60 text-dark-primary outline-none" placeholder="<?= $text_subscribe_placeholder; ?>">
                        <button class="subscribe-form-submit btn-secondary btn-secondary-sm accent-first">
                            <span data-text="<?= $text_subscribe ?>"></span>
                        </button>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</section>