<?php 
function get_figurines_decor_icon($num) {
    $map = [
        [
            'icon-1' => 'square',
            'icon-2' => 'circle',
            'icon-3' => 'triangle-top-left',
        ],
        [
            'icon-1' => 'semicircle-left',
            'icon-2' => 'circle',
            'icon-3' => 'square',
        ],
        [
            'icon-1' => 'semicircle-left',
            'icon-2' => 'circle',
            'icon-3' => 'semicircle-right',
        ],
        [
            'icon-1' => 'square',
            'icon-2' => 'circle',
        ],
        [
            'icon-1' => 'circle',
            'icon-2' => 'triangle-top-left',
        ],
        [
            'icon-1' => 'semicircle-left',
            'icon-2' => 'circle',
        ],
        [
            'icon-1' => 'square',
            'icon-2' => 'triangle-top-right',
        ],
        [
            'icon-1' => 'square',
        ],
        [
            'icon-1' => 'triangle',
        ],
        [
            'icon-1' => 'circle',
        ],
    ];
    ob_start();
    ?>
        <div class="figurines-decor-<?= $num ?>">
            <?php if($map[$num-1]['icon-1'] ?? null) echo '<img src="' . ( get_template_directory_uri() . '/assets/images/icons/' . $map[$num-1]['icon-1'] . '.svg') . '" alt="">';?>
            <?php if($map[$num-1]['icon-2'] ?? null) echo '<img src="' . ( get_template_directory_uri() . '/assets/images/icons/' . $map[$num-1]['icon-2'] . '.svg') . '" alt="">';?>
            <?php if($map[$num-1]['icon-3'] ?? null) echo '<img src="' . ( get_template_directory_uri() . '/assets/images/icons/' . $map[$num-1]['icon-3'] . '.svg') . '" alt="">';?>
        </div>
    <?php
    return ob_get_clean();
}
?>