<?php
/*
 * Add my new menu to the Admin Control Panel
 */
defined( 'ABSPATH' ) || exit;


// agregar y controlar hojas de estilo CSS al sitio
/**
 * Registers a stylesheet.
 */
function amip_register_plugin_styles() {
	wp_register_style( 'amip', plugins_url( 'amip/css/main.css' ) );
	wp_enqueue_style( 'amip' );
}
// Register style sheet.
//add_action( 'wp_enqueue_scripts', 'amip_register_plugin_styles', 10 );
add_action( 'wp_footer', 'amip_register_plugin_styles', 10 );
add_action( 'admin_print_footer_scripts', 'amip_register_plugin_styles', 10 );






/**
 * Registers a Javascript.
 */
function amip_register_plugin_js() {
  wp_register_script( 'amip-gsap', plugins_url( 'amip/js/gsap.min.js' ), "", '1.0.0', array( 'strategy'  => 'defer' ));
  wp_register_script( 'amip-lenis', plugins_url( 'amip/js/lenis.min.js' ), "", '1.0.0', array( 'strategy'  => 'defer' ));
  wp_register_script( 'amip-scrollTrigger', plugins_url( 'amip/js/ScrollTrigger.min.js' ), "", '1.0.0', array( 'strategy'  => 'defer' ));
  wp_register_script( 'amip-particulas', plugins_url( 'amip/js/particles.min.js' ), "", '1.0.0', array( 'strategy'  => 'defer' ));
	wp_register_script( 'amip-js', plugins_url( 'amip/js/main.js' ), array('amip-gsap', 'amip-scrollTrigger', 'amip-lenis', 'amip-particulas'), '1.0.0', array( 'strategy'  => 'defer' ));

	wp_enqueue_script( 'amip-gsap' );
  wp_enqueue_script( 'amip-lenis' );
  wp_enqueue_script( 'amip-scrollTrigger' );
  wp_enqueue_script( 'amip-particulas' );
  wp_enqueue_script( 'amip-js' );
}
// Register style sheet.
add_action( 'wp_footer', 'amip_register_plugin_js' );





