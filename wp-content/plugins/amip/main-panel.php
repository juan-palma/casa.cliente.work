<?php
/*
 * Add my new menu to the Admin Control Panel
 */
defined( 'ABSPATH' ) || exit;

if (is_admin()) {

}

function hook_ida_my_admin_menu()
{
  add_menu_page(
    'AMIP Nucleo', 
    'AMIP Nucleo', 
    'manage_options',
    'main/index.php'
  );
}