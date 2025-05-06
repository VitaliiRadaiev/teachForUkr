<?php
function render_card_faq_item()
{
?>
    <div class="nested-bg-item rounded-[12px] border border-dark-primary-10 transition-colors [&.active]:border-accent-first hover:border-accent-first">
        <div data-accordion-trigger class="flex items-center justify-between gap-[24px] py-[16px] md:py-[10px] 4xl:py-[16px] pl-[16px] md:pl-[30px] pr-[10px] min-h-[82px] md:min-h-[70px] cursor-pointer [&.active_.plus-icon-square]:bg-accent-first [&.active_.item-2]:bg-white [&.active_.item-1]:scale-y-0 [&:not(.active)_.plus-icon-square]:hover:bg-accent-first-10 [&_.title]:hover:text-accent-first">
            <div class="title text-xl font-medium text-dark-primary transition-colors">
                <?= the_title() ?>
            </div>
            <div class="plus-icon-square ml-auto grow-0 shrink-0 w-[50px] h-[50px] border-[2px] border-accent-first rounded-[8px] bg-accent-first-5 relative transition-colors">
                <span class="item-1 absolute block bg-accent-first transition-colors top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[16px] w-[2px]"></span>
                <span class="item-2 absolute block bg-accent-first transition top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[2px] w-[16px]"></span>
            </div>
        </div>
        <div class="hidden mt-[-4px] md:mt-0 pb-[16px] md:pb-[30px] pl-[32px] md:pl-[50px] pr-[26px] md:pr-[134px] text-dark-primary-60">
            <?= the_content() ?>
        </div>
    </div>
<?php
}
?>