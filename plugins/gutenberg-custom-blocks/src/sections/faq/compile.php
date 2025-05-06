<div class="container relative z-2 [&~.t4u-content]:mt-[30px] md:[&~.t4u-content]:mt-[40px] 4xl:[&~.t4u-content]:mt-[50px]">
    <div class="max-w-[872px] mx-auto">
        <?php // $content; 
        ?>
        <div class="text-center">
            <h2 class="h2">
                поширені питання
            </h2>
        </div>
        <div data-accordion="one" class="mt-[30px] md:mt-[40px] lg:mt-[50px] flex flex-col gap-[10px]">
            <?php while ($query->have_posts()): $query->the_post(); ?>
                <?= render_card_faq_item(); ?>
            <?php endwhile; ?>
        </div>
    </div>
</div>