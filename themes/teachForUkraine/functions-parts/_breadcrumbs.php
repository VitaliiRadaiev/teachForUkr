<?php
# helpers
// function generate_link($path, $crumbs)
// {
//     // $parent_page_id = get_page_by_path($path)->ID;

//     $parent_page_id = 0; // Или какое-то другое значение по умолчанию

//     if (is_singular('news') || is_singular('cases') || is_singular('press') || is_singular('recommendations')) {
//         // В этом блоке кода, скорее всего, вы хотите что-то сделать с $parent_page_id, например, изменить его значение
//     } else {
//         $parent_page = get_page_by_path($path);

//         if ($parent_page instanceof WP_Post) {
//             $parent_page_id = $parent_page->ID;
//         } else {
//             // Обработка случая, когда страница не найдена
//         }
//     }


//     $page =  get_permalink($parent_page_id);

//     $temp_arr = [];
//     $bc_arr = $crumbs;

//     foreach($bc_arr as $key_1 => $value) {
//         if (is_singular('news') || is_singular('cases') || is_singular('press') || is_singular('recommendations')) {
//             // Убрать последнюю хлебную крошку
//             if ($key_1 === count($bc_arr) - 1) {
//                 continue;
//             }
//         }

//         if ($key_1 === 1) {
//             $bc_arr[$key_1][1] = $page;
//         }

//         $temp_arr[] = $bc_arr[$key_1];
//     }

//     return $temp_arr;
// }

// # hook
// add_filter( 'rank_math/frontend/breadcrumb/items', function($crumbs) {
//     $locale = get_locale();

//     // if (is_singular('recommendations')) {
//     //     $crumbs = generate_link('reports/systemni-rekomendacziyi', $crumbs);

//     //     $last_crumb = array_pop($crumbs); // Удаляем последнюю хлебную крошку

//     //     if ($locale == 'uk') {
//     //         $crumbs[] = array('Звіти', '/reports/');
//     //         $crumbs[] = $last_crumb; // Добавляем последнюю хлебную крошку в нужном порядке
//     //         $crumbs[2][0] = 'Системні рекомендації'; // Добавляем последнюю хлебную крошку в нужном порядке
//     //     } elseif ($locale == 'en_US') {
//     //         $crumbs[] = array('Reports', '/en/reports/');
//     //         $crumbs[] = $last_crumb; // Добавляем последнюю хлебную крошку в нужном порядке
//     //         $crumbs[2][0] = 'System recommendations'; // Добавляем последнюю хлебную крошку в нужном порядке
//     //     }
//     // }


//     // return $crumbs;
// }, 10, 2);
?>