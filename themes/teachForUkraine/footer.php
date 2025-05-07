<?php include_once get_template_directory() . '/sections/footer/footer.php'; ?>

<?php wp_footer(); ?>


<?php
$popap_success = get_field('popap_success', 'options');
$popap_unsuccess = get_field('popap_unsuccess', 'options');
?>
<div id="popup-success" class="popup">
    <div class="popup__body">
        <div class="popup__content bg-white rounded-[12px] relative w-full max-w-[450px] 4xl:max-w-[560px] py-[40px] md:p-[60px] px-[34px]">
            <button data-action="close-popup" type="button" class="absolute top-[10px] md:top-[20px] right-[10px] md:right-[20px] icon-x-mark h-[24px] w-[24px] rounded-[6px] flex items-center justify-center text-dark-primary text-[14px] cursor-pointer transition-colors hover:bg-dark-primary hover:text-white"></button>
            <img class="mx-auto h-[85px] w-auto" src="<?= get_template_directory_uri() . '/assets/images/general/feedback-form-image.svg' ?>" alt="">
            <?php if (check($popap_success['text_first_level'])): ?>
                <div class="mt-[40px] md:mt-[50px] h2 text-accent-second text-center">
                    <?= $popap_success['text_first_level'] ?>
                </div>
            <?php endif; ?>

            <?php if (check($popap_success['text_second_level'])): ?>
                <div class="mt-[10px] h3 text-dark-primary text-center">
                    <?= $popap_success['text_second_level'] ?>
                </div>
            <?php endif; ?>

            <?php if (check($popap_success['text_third_level'])): ?>
                <div class="mt-[20px] text-center text-md font-bold text-dark-primary-80">
                    <?= $popap_success['text_third_level'] ?>
                </div>
            <?php endif; ?>
        </div>
    </div>
</div>

<div id="popup-unsuccess" class="popup">
    <div class="popup__body">
        <div class="popup__content bg-white rounded-[12px] relative w-full max-w-[450px] 4xl:max-w-[560px] py-[40px] md:p-[60px] px-[34px]">
            <button data-action="close-popup" type="button" class="absolute top-[10px] md:top-[20px] right-[10px] md:right-[20px] icon-x-mark h-[24px] w-[24px] rounded-[6px] flex items-center justify-center text-dark-primary text-[14px] cursor-pointer transition-colors hover:bg-dark-primary hover:text-white"></button>
            <img class="mx-auto h-[85px] w-auto" src="<?= get_template_directory_uri() . '/assets/images/general/feedback-form-image-unsacsess.svg' ?>" alt="">
            <?php if (check($popap_unsuccess['text_first_level'])): ?>
                <div class="mt-[40px] md:mt-[50px] h2 text-accent-second text-center">
                    <?= $popap_unsuccess['text_first_level'] ?>
                </div>
            <?php endif; ?>

            <?php if (check($popap_unsuccess['text_second_level'])): ?>
                <div class="mt-[10px] h3 text-dark-primary text-center">
                    <?= $popap_unsuccess['text_second_level'] ?>
                </div>
            <?php endif; ?>

            <?php if (check($popap_unsuccess['text_third_level'])): ?>
                <div class="mt-[20px] text-center text-md font-bold text-dark-primary-80">
                    <?= $popap_unsuccess['text_third_level'] ?>
                </div>
            <?php endif; ?>
        </div>
    </div>
</div>

</body>
</html>