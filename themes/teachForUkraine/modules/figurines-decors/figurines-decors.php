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

function get_figurines_v2_decor_icon($num) {
    $map = [
        [
            'icon-1' => 'semicircle-bottom',
            'icon-2' => 'semicircle-top',
            'icon-3' => 'circle',
        ],
        [
            'icon-1' => 'circle',
            'icon-2' => 'circle',
            'icon-3' => 'circle',
        ],
        [
            'icon-1' => 'circle',
            'icon-2' => 'square',
            'icon-3' => 'semicircle-top',
        ],
        [
            'icon-1' => 'circle',
            'icon-2' => 'circle',
            'icon-3' => 'square',
        ],
        [
            'icon-1' => 'square-rounded-right-top',
            'icon-2' => 'square-rounded-right-top',
            'icon-3' => 'square-rounded-right-top',
            'icon-4' => 'square-rounded-right-top',
        ],
        [
            'icon-1' => 'circle',
            'icon-2' => 'circle',
            'icon-3' => 'circle',
        ],
        [
            'icon-1' => 'square-rounded-right',
            'icon-2' => 'circle',
            'icon-3' => 'square-rounded-top',
        ],
        [
            'icon-1' => 'triangle-top-right',
            'icon-2' => 'triangle-top-right',
            'icon-3' => 'triangle-top-right',
        ],
        [
            'icon-1' => 'nested-circles',
        ],
        [
            'icon-1' => 'triangle-top-right',
            'icon-2' => 'triangle-top-right',
            'icon-3' => 'square',
            'icon-4' => 'triangle-top-right',
        ],
        [
            'icon-1' => 'circle',
            'icon-2' => 'circle',
            'icon-3' => 'square',
        ],
    ];
    ob_start();
    ?>
        <div class="figurines-v2-decor-<?= $num ?>">
            <?php if($map[$num-1]['icon-1'] ?? null) echo '<img src="' . ( get_template_directory_uri() . '/assets/images/icons/' . $map[$num-1]['icon-1'] . '.svg') . '" alt="">';?>
            <?php if($map[$num-1]['icon-2'] ?? null) echo '<img src="' . ( get_template_directory_uri() . '/assets/images/icons/' . $map[$num-1]['icon-2'] . '.svg') . '" alt="">';?>
            <?php if($map[$num-1]['icon-3'] ?? null) echo '<img src="' . ( get_template_directory_uri() . '/assets/images/icons/' . $map[$num-1]['icon-3'] . '.svg') . '" alt="">';?>
            <?php if($map[$num-1]['icon-4'] ?? null) echo '<img src="' . ( get_template_directory_uri() . '/assets/images/icons/' . $map[$num-1]['icon-4'] . '.svg') . '" alt="">';?>
        </div>
    <?php
    return ob_get_clean();
}
?>