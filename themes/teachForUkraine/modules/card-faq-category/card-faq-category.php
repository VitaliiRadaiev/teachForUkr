<?php
function render_card_faq_category($category)
{
    $text_review = get_field('text_review', 'options');
?>
    <div class="card-with-icon nested-bg-item rounded-[12px] p-[16px] md:p-[20px] flex flex-col gap-y-[20px] md:gap-y-[40px] gap-x-[14px] md:gap-x-[20px] md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2">
        <div class="grow-0 shrink-0 h-[44px] w-[44px] md:h-[60px] md:w-[60px] rounded-full bg-accent-first flex items-center justify-center">
            <img class="h-[22px] w-[22px] md:h-[32px] md:w-[32px] object-cover color-light-primary-filter" src="<?= get_template_directory_uri() . '/assets/images/icons/decor-icon-21.svg' ?>" alt="decor-icon">
        </div>
        <div class="shrink grow flex flex-col first-no-margin last-no-margin sm-max:[&_.btn:not(.btn-with-arrow)]:w-full [&_.btn]:self-start [&:not(:has(.btn)):not(:has(.title))]:self-center">
            <span class="h3 text-dark-primary title">
                <?= $category->name ?>
            </span>
            <div class="mt-[10px] shrink grow text-dark-primary-60">
                <?= $category->description ?>
            </div>

            <a href="/faq/<?= $category->slug ?>/" class="mt-[20px] btn btn-with-arrow accent-first">
                <?= $text_review ?>
            </a>
        </div>
    </div>
<?php
}
?>