<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://profiles.wordpress.org/jankimoradiya
 * @since      1.0.0
 *
 * @package    BFLI_Block_Fancy_List_Item
 * @subpackage BFLI_Block_Fancy_List_Item/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    BFLI_Block_Fancy_List_Item
 * @subpackage BFLI_Block_Fancy_List_Item/includes
 * @author     jankimoradiya <janki.moradiya@gmail.com>
 */
class BFLI_Block_Fancy_List_Item_i18n{


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'block-fancy-list-item',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
