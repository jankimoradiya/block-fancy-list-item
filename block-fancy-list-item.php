<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://profiles.wordpress.org/jankimoradiya
 * @since             1.0.0
 * @package           BFLI_Block_Fancy_List_Item
 *
 * @wordpress-plugin
 * Plugin Name:       Block Fancy List Item
 * Plugin URI:        https://wordpress.org/plugins/block-fancy-list-item
 * Description:       This Plugin is use for extend gutenberg core listing block.
 * Version:           1.0.0
 * Author:            jankimoradiya
 * Author URI:        https://profiles.wordpress.org/jankimoradiya
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       block-fancy-list-item
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'BFLI_BLOCK_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-block-fancy-list-item-activator.php
 */
function bfli_activate_block_fancy_list_item() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-block-fancy-list-item-activator.php';
	BFLI_Block_Fancy_List_Item_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-block-fancy-list-item-deactivator.php
 */
function bfli_deactivate_block_fancy_list_item() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-block-fancy-list-item-deactivator.php';
	BFLI_Block_Fancy_List_Item_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'bfli_activate_block_fancy_list_item' );
register_deactivation_hook( __FILE__, 'bfli_deactivate_block_fancy_list_item' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-block-fancy-list-item.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function bfli_run_block_fancy_list_item() {

	$plugin = new BFLI_Block_Fancy_List_Item();
	$plugin->run();

}
bfli_run_block_fancy_list_item();
