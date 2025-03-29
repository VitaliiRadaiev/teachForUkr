<!DOCTYPE html>
<html <?php language_attributes(); ?> style="margin-top: 0 !important;">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <link rel="icon" href="<?=get_site_url()?>/favicon.ico" type="image/x-icon" />
  <link rel="shortcut icon" href="<?=get_site_url()?>/favicon.ico" type="image/x-icon" />
  <title><?php wp_title(); ?></title>

  <?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>

  <?php include_once get_template_directory() . '/sections/header/header.php';?>