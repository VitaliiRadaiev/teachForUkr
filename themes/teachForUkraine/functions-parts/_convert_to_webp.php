<?php

add_filter('wp_generate_attachment_metadata', 'replace_all_images_with_webp', 10, 2);

function replace_all_images_with_webp($metadata, $attachment_id)
{
    $file = get_attached_file($attachment_id);
    $mime = mime_content_type($file);

    if (!in_array($mime, ['image/jpeg', 'image/png'])) {
        return $metadata;
    }

    $upload_dir = wp_upload_dir();
    $base_dir = $upload_dir['basedir'];


    $webp_path = preg_replace('/\.(jpe?g|png)$/i', '.webp', $file);
    convert_to_webp($file, $webp_path);

    $editor = wp_get_image_editor($file);
    if (is_wp_error($editor)) {
        return $metadata;
    }

    $sizes = wp_get_registered_image_subsizes();
    $resized = $editor->multi_resize($sizes);

    $new_sizes = [];
    foreach ($resized as $size => $data) {
        if (!empty($data['file'])) {
            $original_thumb_path = dirname($file) . '/' . $data['file'];
            if (file_exists($original_thumb_path)) {
                unlink($original_thumb_path);
            }

            $webp_thumb_name = preg_replace('/\.(jpe?g|png)$/i', '.webp', $data['file']);

            unlink($editor->generate_filename($size));

            $new_sizes[$size] = [
                'file'      => $webp_thumb_name,
                'width'     => $data['width'],
                'height'    => $data['height'],
                'mime-type' => 'image/webp',
            ];
        }
    }

    unlink($file);

    $metadata['file'] = str_replace($base_dir . '/', '', $webp_path);
    $metadata['sizes'] = $new_sizes;

    update_attached_file($attachment_id, $webp_path);

    $metadata = wp_generate_attachment_metadata($attachment_id, $webp_path);

    if (!is_wp_error($metadata)) {
        wp_update_attachment_metadata($attachment_id, $metadata);
    }

    return $metadata;
}

function convert_to_webp($source, $destination, $quality = 95)
{
    $info = getimagesize($source);
    $mime = $info['mime'];

    switch ($mime) {
        case 'image/jpeg':
            $image = imagecreatefromjpeg($source);
            break;
        case 'image/png':
            $image = imagecreatefrompng($source);
            imagepalettetotruecolor($image);
            imagealphablending($image, true);
            imagesavealpha($image, true);
            break;
        case 'image/webp':
            return true;
        default:
            return false;
    }

    $result = imagewebp($image, $destination, $quality);
    imagedestroy($image);
    return $result;
}
