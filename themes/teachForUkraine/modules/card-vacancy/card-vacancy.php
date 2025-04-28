<?php
$text_more_details = get_field('text_more_details', 'options');

function render_card_vacancy()
{
    global $text_more_details;
?>
    <a href="<?= get_the_permalink(); ?>" class="card-vacancy h-full flex flex-col nested-bg-item rounded-[12px] p-[16px] md:p-[20px] [&_.title]:hover:text-accent-first">
        <?php
        $terms = get_the_terms(get_the_ID(), 'vacancy-city');
        if (check($terms)):
        ?>
            <div class="flex flex-wrap gap-[5px]">
                <?php foreach ($terms as $term): ?>
                    <div class="flex items-center justify-center min-h-[26px] rounded-full border border-accent-first-10 bg-[--bg] px-[14px] py-[3px] text-sm text-dark-primary">
                        <?= $term->name ?>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
        <div class="mt-[10px] title h4 text-dark-primary transition-colors first-child-no-margin">
            <?= get_the_title() ?>
        </div>
        <div style="--line: 5; --line-height: 1.4em;" class="mt-[5px] mb-[20px] md:mb-[24px] text-md text-dark-primary-60 shrink grow truncate-text">
            <?= get_the_excerpt() ?>
        </div>
        <span class="mt-auto btn-with-arrow accent-first self-start">
            <span data-text="<?= $text_more_details ?>"></span>
        </span>
    </a>
<?php
}
?>