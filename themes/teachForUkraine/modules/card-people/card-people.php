<?php
function render_card_people()
{
    $excerpt = get_the_excerpt();
    $socila = get_field('people_social', get_the_ID());
?>
    <div class="card-people nested-bg-item rounded-[12px] p-[5px] h-full flex flex-col">
        <div class="aspect-[1/0.833] lg:aspect-[1/0.864] grow-0 shrink-0 rounded-[8px] relative overflow-hidden">
            <?= get_image(get_post_thumbnail_id(), 'ibg', false); ?>
        </div>
        <div class="mt-[20px] lg:mt-[30px] px-[15px] pb-[15px] grow shrink flex flex-col">
            <div class="h3 text-dark-primary">
                <?= the_title() ?>
            </div>
            <?php if (check($excerpt)): ?>
                <div class="mt-[5px] mb-[20px] text-md text-dark-primary-60 last-child-no-margin">
                    <?= $excerpt ?>
                </div>
            <?php endif; ?>

            <?php if (check($socila)): ?>
                <div class="mt-auto flex flex-wrap gap-[12px]">
                    <?php foreach ($socila as $key => $item): ?>
                        <a
                            class="flex items-center justify-center h-[44px] xl:h-[36px] 4xl:h-[40px] w-[44px] xl:w-[36px] 4xl:w-[40px] rounded-full bg-accent-first transition-colors hover:bg-accent-first-50"
                            href="<?= $item['link'] ?>"
                            target="_blank"
                            rel="nofollow"
                            aria-label="Show in social">

                            <img
                                class="h-[20px] w-auto color-light-primary-filter"
                                src="<?= get_social_icon_by_url($item['link']); ?>"
                                alt="<?= 'social-' . $key ?>">
                        </a>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>
        </div>
    </div>
<?php
}
?>