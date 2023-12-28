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

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_santostec' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

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
define( 'AUTH_KEY',         'h2XbaN:Yt!lSE?ucmg2k@&$ s0g>W)@?f!FsAtx_lXhRX.^EYmRD r1HAV8rSY0Q' );
define( 'SECURE_AUTH_KEY',  '~W~hpecPA,1r0ROK}@|v1=(_jd]KF?6G 6uJLV8)7~M47US*aIiU_wiITz64@b d' );
define( 'LOGGED_IN_KEY',    'Zch R<3$A3|Z6;o]C(|I,Hce7Fup/8BJ7aT^pf~rZoe&B.9XEm7o<!Ty!^HsAgN%' );
define( 'NONCE_KEY',        't<~vc}@f+O3jS_D1{Rq>*aoK>1V|#FRRM1!&UpRpuP!]GxE/.evu3:R@Gg51.A{I' );
define( 'AUTH_SALT',        'Gohoad41G2oJ@Ba3J4k&kPU>m0cVXTPQmJ?tlkT5jiH^QwSxJ.N6p=mnC4F9P{/w' );
define( 'SECURE_AUTH_SALT', 'FYA *}%9q1:6{|<k3Gb]q5`IX}l @D_n_,4(7PPK!NX~}Kaq<~!0q@bT_.&V|C6~' );
define( 'LOGGED_IN_SALT',   'sO3WbC$4WBZhKl[mkk20%P(q@t e,h~)K?Fs:zt!sDTHIISqOpC/suK8p>bUnW0g' );
define( 'NONCE_SALT',       '.Yo0T~{LttXkuYp~>F`+:9kERH),3;0}HL^]!ru4$z5I1lOc:vmK<9Z@~9zkow/I' );

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
