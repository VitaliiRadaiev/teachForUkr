// (function () {
//   var currentDomain = window.location.protocol + "//" + window.location.host;

//   tinymce.create("tinymce.plugins.Wptuts", {
//     init: function (editor, url) {
     
//       editor.addButton("yellow", {
//         title: "White background, black text",
//         cmd: "whiteback",
//         image:
//           currentDomain + "/wp-content/themes/digests/build/static/images/tiny/yellow-text.jpeg",
//       });

//       editor.addCommand("whiteback", function () {
//         var selected_text = editor.selection.getContent({
//           format: "html",
//         });

//         var open_column =
//           '<span class="yellow">' + selected_text + "</span>";
//         var close_column = "";
//         var return_text = "";
//         return_text = open_column + close_column;
//         editor.execCommand("mceReplaceContent", false, return_text);
//       });
//     },
//   });
//   tinymce.PluginManager.add("wptuts", tinymce.plugins.Wptuts);
// })();
