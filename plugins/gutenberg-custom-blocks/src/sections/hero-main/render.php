<?php if (!($attributes['isHide'])): ?>
  <section <?= ($attributes['id'] ?? null) ? 'id="'.$attributes['id'].'"' : '' ?> class="main-hero pt-[112px] md:pt-[127px] xl:pt-[102px] overflow-hidden">
    <div class="container xl:flex xl:gap-x-[30px] xl:justify-between">
      <?= $content; ?>
    </div>
  </section>
<?php endif; ?>