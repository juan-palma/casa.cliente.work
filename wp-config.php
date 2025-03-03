<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - Implemetar vlucas/phpdotenv para usar variables de entorno en el proyecto wordpress ** //
require_once __DIR__ . '/vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', getenv('DB_NAME') );

/** Database username */
define( 'DB_USER', getenv('DB_USER') );

/** Database password */
define( 'DB_PASSWORD', getenv('DB_PASSWORD') );

/** Database hostname */
define( 'DB_HOST', getenv('DB_HOST') );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '{eUXgJ~&LPjGcx7d7E,E%N6Gx.T&pxLLt4yYd~ a&+TDE?)a{=q<KZ5f>zrOpUq]' );
define( 'SECURE_AUTH_KEY',  'W&U~<H8gRxBGjmm5n_b_k<TAhSP7RUmpW#%A!NA5_Uo}7:g1dRMQtd8A?jJ@7~NA' );
define( 'LOGGED_IN_KEY',    'V:ShksY8UxLz/,sZc!6iY)L m+xJNPC/R:zR9SHa|rGq0StM?$z7/0]>Ff`lG7Wj' );
define( 'NONCE_KEY',        's-f9xGD-!Q[>?*7<puqnDjp7SHYtXLGiWv5!G0)Eu2/54VJ,Sum6{jY{lgFvyUI4' );
define( 'AUTH_SALT',        '{-Xj[+kb0hK:et5z`lduxv{9Ob)CDOhTLML%G4}=1-Eb>qy`rEB{4TeP.vwmRo7R' );
define( 'SECURE_AUTH_SALT', '`vL(1Y^h=RlCE=dA}<fftp5r>c#I/pYt[85C;%IP&]3CQH~ 2giPc (<a=t>?I.T' );
define( 'LOGGED_IN_SALT',   'mO?SWpP3]_LPR16JR-X3oMA#B|5!#=y^|344aT.[yCO1GHZC8<JmeL<4~QnsPe~:' );
define( 'NONCE_SALT',       'r63( o[7zME+<7p]l{j;*D42,N_24Hl@d3X&:Q<[vR4q6$inNhj[>NghMB0GQ;{b' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
