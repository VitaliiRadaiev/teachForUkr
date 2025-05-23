<?php
$text_more_details = get_field('text_more_details', 'options');

function render_news_tags()
{

    $categories = get_the_terms(get_the_ID(), 'news-category');
    if (check($categories)):
?>
        <?php
        foreach ($categories as $category):
            $category_type = get_field('category_icons', 'category_' . $category->term_id);
        ?>
            <a href="/news/<?= $category->slug ?>/" class="pointer-events-auto category-tag category-colors-<?= $category_type ?>">
                <?= file_get_contents(get_template_directory() . '/assets/images/icons/category-icon-' . $category_type . '.svg', false) ?>
                <span>
                    <?= $category->name ?>
                </span>
            </a>
        <?php endforeach; ?>
    <?php endif; ?>

<?php
}

function render_card_news_v1()
{
    global $text_more_details;
?>
    <div class="card-news-v1 relative nested-bg-item rounded-[12px] p-[5px] h-full">
        <div class="absolute z-2 pointer-events-none top-0 left-0 w-full p-[5px]">
            <div class="aspect-[1/0.597] overflow-auto">
                <div class="flex flex-wrap gap-[5px] p-[10px]">
                    <?= render_news_tags(); ?>
                </div>
            </div>
        </div>
        <a href="<?= get_post_permalink(); ?>" class="flex flex-col h-full relative z-1 [&_.ibg]:hover:scale-110 [&_.title]:hover:text-accent-first">
            <div class="aspect-[1/0.597] grow-0 shrink-0 rounded-[8px] bg-dark-primary-80 overflow-hidden relative">
                <?= get_image(get_post_thumbnail_id(), 'ibg transition-transform duration-1000', false); ?>
            </div>
            <div class="grow shrink mt-[16px] md:mt-[20px] xl:mt-[30px] pb-[11px] px-[11px] md:pb-[15px] md:px-[15px] flex flex-col">
                <div class="text-sm text-dark-primary-60 lowercase">
                    <?= get_the_date('j F, Y'); ?>
                </div>
                <div style="--line: 3; --line-height: 1.2em;" class="title mt-[5px] h3 text-dark-primary mb-auto transition-colors truncate-text">
                    <?= the_title(); ?>
                </div>

                <span class="mt-[16px] xl:mt-[20px] btn-with-arrow accent-first self-start">
                    <span data-text="<?= $text_more_details ?>"></span>
                </span>
            </div>
        </a>
    </div>
<?php
}


function render_card_news_v2()
{
    global $text_more_details;
    $excerpt = get_the_excerpt();
?>
    <a href="<?= get_the_permalink() ?>" class="card-news-v2 nested-bg-item rounded-[12px] p-[5px] h-full flex flex-col xl:flex-row [&_.ibg]:hover:scale-110 [&_.title]:hover:text-accent-first">
        <div class="aspect-[1/0.597] xl:aspect-auto xl:min-h-[301px] 4xl:min-h-[394px] xl:w-[47.68%] grow-0 shrink-0 rounded-[8px] relative overflow-hidden">
            <?= get_image(get_post_thumbnail_id(), 'ibg transition-transform duration-1000', false); ?>
        </div>
        <div class="mt-[20px] lg:mt-[30px] xl:mt-0 px-[15px] pb-[15px] xl:pl-[20px] xl:py-[16px] xl:pr-[10px] grow shrink flex flex-col">
            <div class="text-sm text-dark-primary-60 lowercase">
                <?= get_the_date('j F, Y'); ?>
            </div>
            <div title="<?= the_title() ?>" style="--line: 3; --line-height: 1.2em;" class="title mt-[5px] xl:mt-[10px] h3 text-dark-primary transition-colors truncate-text">
                <?= the_title() ?>
            </div>
            <?php if (check($excerpt)): ?>
                <div style="--line: 4; --line-height: 1.4em;" class="mt-[5px] mb-[20px] text-md text-dark-primary-60 last-child-no-margin truncate-text">
                    <?= $excerpt ?>
                </div>
            <?php endif; ?>

            <span class="mt-auto btn-with-arrow accent-first self-start">
                <span data-text="<?= $text_more_details ?>"></span>
            </span>
        </div>
    </a>

<?php
}
?>