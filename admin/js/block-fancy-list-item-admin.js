/******/ (function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
        /******/
        /******/ 		// Check if module is in cache
        /******/ 		if(installedModules[moduleId]) {
            /******/ 			return installedModules[moduleId].exports;
            /******/ 		}
        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		var module = installedModules[moduleId] = {
            /******/ 			i: moduleId,
            /******/ 			l: false,
            /******/ 			exports: {}
            /******/ 		};
        /******/
        /******/ 		// Execute the module function
        /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Flag the module as loaded
        /******/ 		module.l = true;
        /******/
        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/ 	}
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;
    /******/
    /******/ 	// define getter function for harmony exports
    /******/ 	__webpack_require__.d = function(exports, name, getter) {
        /******/ 		if(!__webpack_require__.o(exports, name)) {
            /******/ 			Object.defineProperty(exports, name, {
                /******/ 				configurable: false,
                /******/ 				enumerable: true,
                /******/ 				get: getter
                /******/ 			});
            /******/ 		}
        /******/ 	};
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/ 	__webpack_require__.n = function(module) {
        /******/ 		var getter = module && module.__esModule ?
            /******/ 			function getDefault() { return module['default']; } :
            /******/ 			function getModuleExports() { return module; };
        /******/ 		__webpack_require__.d(getter, 'a', getter);
        /******/ 		return getter;
        /******/ 	};
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "";
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(__webpack_require__.s = 17);
    /******/ })
/************************************************************************/
/******/ ([
    /* 0 */
    /***/ (function(module, exports, __webpack_require__) {

        var Symbol = __webpack_require__(9),
            getRawTag = __webpack_require__(22),
            objectToString = __webpack_require__(23);

        /** `Object#toString` result references. */
        var nullTag = '[object Null]',
            undefinedTag = '[object Undefined]';

        /** Built-in value references. */
        var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

        /**
         * The base implementation of `getTag` without fallbacks for buggy environments.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the `toStringTag`.
         */
        function baseGetTag(value) {
            if (value == null) {
                return value === undefined ? undefinedTag : nullTag;
            }
            return (symToStringTag && symToStringTag in Object(value))
                ? getRawTag(value)
                : objectToString(value);
        }

        module.exports = baseGetTag;


        /***/ }),
    /* 1 */
    /***/ (function(module, exports, __webpack_require__) {

        var freeGlobal = __webpack_require__(10);

        /** Detect free variable `self`. */
        var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

        /** Used as a reference to the global object. */
        var root = freeGlobal || freeSelf || Function('return this')();

        module.exports = root;


        /***/ }),
    /* 2 */
    /***/ (function(module, exports) {

        /**
         * Checks if `value` is the
         * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
         * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an object, else `false`.
         * @example
         *
         * _.isObject({});
         * // => true
         *
         * _.isObject([1, 2, 3]);
         * // => true
         *
         * _.isObject(_.noop);
         * // => true
         *
         * _.isObject(null);
         * // => false
         */
        function isObject(value) {
            var type = typeof value;
            return value != null && (type == 'object' || type == 'function');
        }

        module.exports = isObject;


        /***/ }),
    /* 3 */
    /***/ (function(module, exports, __webpack_require__) {

        var isFunction = __webpack_require__(8),
            isLength = __webpack_require__(13);

        /**
         * Checks if `value` is array-like. A value is considered array-like if it's
         * not a function and has a `value.length` that's an integer greater than or
         * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
         * @example
         *
         * _.isArrayLike([1, 2, 3]);
         * // => true
         *
         * _.isArrayLike(document.body.children);
         * // => true
         *
         * _.isArrayLike('abc');
         * // => true
         *
         * _.isArrayLike(_.noop);
         * // => false
         */
        function isArrayLike(value) {
            return value != null && isLength(value.length) && !isFunction(value);
        }

        module.exports = isArrayLike;


        /***/ }),
    /* 4 */
    /***/ (function(module, exports) {

        /**
         * Checks if `value` is object-like. A value is object-like if it's not `null`
         * and has a `typeof` result of "object".
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
         * @example
         *
         * _.isObjectLike({});
         * // => true
         *
         * _.isObjectLike([1, 2, 3]);
         * // => true
         *
         * _.isObjectLike(_.noop);
         * // => false
         *
         * _.isObjectLike(null);
         * // => false
         */
        function isObjectLike(value) {
            return value != null && typeof value == 'object';
        }

        module.exports = isObjectLike;


        /***/ }),
    /* 5 */
    /***/ (function(module, exports, __webpack_require__) {

        var baseAssignValue = __webpack_require__(6),
            eq = __webpack_require__(11);

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * Assigns `value` to `key` of `object` if the existing value is not equivalent
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * for equality comparisons.
         *
         * @private
         * @param {Object} object The object to modify.
         * @param {string} key The key of the property to assign.
         * @param {*} value The value to assign.
         */
        function assignValue(object, key, value) {
            var objValue = object[key];
            if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
                (value === undefined && !(key in object))) {
                baseAssignValue(object, key, value);
            }
        }

        module.exports = assignValue;


        /***/ }),
    /* 6 */
    /***/ (function(module, exports, __webpack_require__) {

        var defineProperty = __webpack_require__(7);

        /**
         * The base implementation of `assignValue` and `assignMergeValue` without
         * value checks.
         *
         * @private
         * @param {Object} object The object to modify.
         * @param {string} key The key of the property to assign.
         * @param {*} value The value to assign.
         */
        function baseAssignValue(object, key, value) {
            if (key == '__proto__' && defineProperty) {
                defineProperty(object, key, {
                    'configurable': true,
                    'enumerable': true,
                    'value': value,
                    'writable': true
                });
            } else {
                object[key] = value;
            }
        }

        module.exports = baseAssignValue;


        /***/ }),
    /* 7 */
    /***/ (function(module, exports, __webpack_require__) {

        var getNative = __webpack_require__(19);

        var defineProperty = (function() {
            try {
                var func = getNative(Object, 'defineProperty');
                func({}, '', {});
                return func;
            } catch (e) {}
        }());

        module.exports = defineProperty;


        /***/ }),
    /* 8 */
    /***/ (function(module, exports, __webpack_require__) {

        var baseGetTag = __webpack_require__(0),
            isObject = __webpack_require__(2);

        /** `Object#toString` result references. */
        var asyncTag = '[object AsyncFunction]',
            funcTag = '[object Function]',
            genTag = '[object GeneratorFunction]',
            proxyTag = '[object Proxy]';

        /**
         * Checks if `value` is classified as a `Function` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a function, else `false`.
         * @example
         *
         * _.isFunction(_);
         * // => true
         *
         * _.isFunction(/abc/);
         * // => false
         */
        function isFunction(value) {
            if (!isObject(value)) {
                return false;
            }
            // The use of `Object#toString` avoids issues with the `typeof` operator
            // in Safari 9 which returns 'object' for typed arrays and other constructors.
            var tag = baseGetTag(value);
            return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }

        module.exports = isFunction;


        /***/ }),
    /* 9 */
    /***/ (function(module, exports, __webpack_require__) {

        var root = __webpack_require__(1);

        /** Built-in value references. */
        var Symbol = root.Symbol;

        module.exports = Symbol;


        /***/ }),
    /* 10 */
    /***/ (function(module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
        var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

            module.exports = freeGlobal;

            /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

        /***/ }),
    /* 11 */
    /***/ (function(module, exports) {

        /**
         * Performs a
         * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * comparison between two values to determine if they are equivalent.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * var object = { 'a': 1 };
         * var other = { 'a': 1 };
         *
         * _.eq(object, object);
         * // => true
         *
         * _.eq(object, other);
         * // => false
         *
         * _.eq('a', 'a');
         * // => true
         *
         * _.eq('a', Object('a'));
         * // => false
         *
         * _.eq(NaN, NaN);
         * // => true
         */
        function eq(value, other) {
            return value === other || (value !== value && other !== other);
        }

        module.exports = eq;


        /***/ }),
    /* 12 */
    /***/ (function(module, exports) {

        /**
         * This method returns the first argument it receives.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Util
         * @param {*} value Any value.
         * @returns {*} Returns `value`.
         * @example
         *
         * var object = { 'a': 1 };
         *
         * console.log(_.identity(object) === object);
         * // => true
         */
        function identity(value) {
            return value;
        }

        module.exports = identity;


        /***/ }),
    /* 13 */
    /***/ (function(module, exports) {

        /** Used as references for various `Number` constants. */
        var MAX_SAFE_INTEGER = 9007199254740991;

        /**
         * Checks if `value` is a valid array-like length.
         *
         * **Note:** This method is loosely based on
         * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
         * @example
         *
         * _.isLength(3);
         * // => true
         *
         * _.isLength(Number.MIN_VALUE);
         * // => false
         *
         * _.isLength(Infinity);
         * // => false
         *
         * _.isLength('3');
         * // => false
         */
        function isLength(value) {
            return typeof value == 'number' &&
                value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }

        module.exports = isLength;


        /***/ }),
    /* 14 */
    /***/ (function(module, exports) {

        /** Used as references for various `Number` constants. */
        var MAX_SAFE_INTEGER = 9007199254740991;

        /** Used to detect unsigned integer values. */
        var reIsUint = /^(?:0|[1-9]\d*)$/;

        /**
         * Checks if `value` is a valid array-like index.
         *
         * @private
         * @param {*} value The value to check.
         * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
         * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
         */
        function isIndex(value, length) {
            var type = typeof value;
            length = length == null ? MAX_SAFE_INTEGER : length;

            return !!length &&
                (type == 'number' ||
                (type != 'symbol' && reIsUint.test(value))) &&
                (value > -1 && value % 1 == 0 && value < length);
        }

        module.exports = isIndex;


        /***/ }),
    /* 15 */
    /***/ (function(module, exports) {

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /**
         * Checks if `value` is likely a prototype object.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
         */
        function isPrototype(value) {
            var Ctor = value && value.constructor,
                proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

            return value === proto;
        }

        module.exports = isPrototype;


        /***/ }),
    /* 16 */
    /***/ (function(module, exports) {

        module.exports = function(module) {
            if(!module.webpackPolyfill) {
                module.deprecate = function() {};
                module.paths = [];
                // module.parent = undefined by default
                if(!module.children) module.children = [];
                Object.defineProperty(module, "loaded", {
                    enumerable: true,
                    get: function() {
                        return module.l;
                    }
                });
                Object.defineProperty(module, "id", {
                    enumerable: true,
                    get: function() {
                        return module.i;
                    }
                });
                module.webpackPolyfill = 1;
            }
            return module;
        };


        /***/ }),
    /* 17 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign__ = __webpack_require__(18);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_assign__);
        var _extends2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


//(function (blocks, i18n, element, editor, components) {
        var __ = wp.i18n.__;
        var registerBlockType = wp.blocks.registerBlockType;
        var Fragment = wp.element.Fragment;
        var addFilter = wp.hooks.addFilter;
        var _wp$editor = wp.editor,
            InspectorControls = _wp$editor.InspectorControls,
            ColorPalette = _wp$editor.ColorPalette,
            PanelColorSettings = _wp$editor.PanelColorSettings;
        var _wp$components = wp.components,
            PanelBody = _wp$components.PanelBody,
            RangeControl = _wp$components.RangeControl,
            BaseControl = _wp$components.BaseControl,
            Dashicon = _wp$components.Dashicon;

// Register text color attributes to all blocks

        var listIcons = [{ label: __('None'), value: '', content: '' }, { label: __('Pushpin'), value: 'admin-post', content: '\\f109' }, { label: __('Configuration'), value: 'admin-generic', content: '\\f111' }, { label: __('Flag'), value: 'flag', content: '\\f227' }, { label: __('Star'), value: 'star-filled', content: '\\f155' }, { label: __('Checkmark'), value: 'yes', content: '\\f147' }, { label: __('Minus'), value: 'minus', content: '\\f460' }, { label: __('Plus'), value: 'plus', content: '\\f132' }, { label: __('Play'), value: 'controls-play', content: '\\f522' }, { label: __('Arrow right'), value: 'arrow-right-alt', content: '\\f344' }, { label: __('X Cross'), value: 'dismiss', content: '\\f153' }, { label: __('Warning'), value: 'warning', content: '\\f534' }, { label: __('Help'), value: 'editor-help', content: '\\f223' }, { label: __('Info'), value: 'info', content: '\\f348' }, { label: __('Circle'), value: 'marker', content: '\\f159' }];
        addFilter('blocks.registerBlockType', 'advgb/registerExtraListAttrs', function (settings) {
            if (settings.name === 'core/list') {
                settings.attributes = Object.assign(settings.attributes, {
                    id: {
                        type: 'string'
                    },
                    icon: {
                        type: 'string'
                    },
                    iconSize: {
                        type: 'number',
                        default: 16
                    },
                    iconColor: {
                        type: 'string',
                        default: '#000'
                    },
                    fontSize: {
                        type: 'number',
                        default: 16
                    },
                    lineHeight: {
                        type: 'number',
                        default: 18
                    },
                    margin: {
                        type: 'number',
                        default: 2
                    },
                    padding: {
                        type: 'number',
                        default: 2
                    },
                    content: {
                        type: 'string'
                    },
                    changed: {
                        type: 'boolean',
                        default: false
                    },
                    blockID: {
                        type: 'string'
                    },
                    textColor: {
                        type: 'string',
                        default: '#000'
                    }
                });
            }
            return settings;
        });

// Add text color option to select for all blocks
        addFilter('editor.BlockEdit', 'advgb/customListStyles', function (BlockEdit) {
            return function (props) {
                if (props.name === 'core/list') {
                    var isSelected = props.isSelected,
                        attributes = props.attributes,
                        setAttributes = props.setAttributes,
                        clientId = props.clientId;
                    var fontSize = attributes.fontSize,
                        icon = attributes.icon,
                        iconSize = attributes.iconSize,
                        iconColor = attributes.iconColor,
                        lineHeight = attributes.lineHeight,
                        margin = attributes.margin,
                        padding = attributes.padding,
                        content = attributes.content,
                        textColor = attributes.textColor;

                    setAttributes({ blockID: 'block-' + clientId });
                    return [wp.element.createElement(BlockEdit, _extends2({ key: 'block-edit-custom-separator' }, props)), isSelected && wp.element.createElement(
                        InspectorControls,
                        null,
                        wp.element.createElement(
                            Fragment,
                            null,
                            wp.element.createElement(
                                PanelBody,
                                { title: __('Text Settings'), initialOpen: false },
                                wp.element.createElement(RangeControl, {
                                    label: __('Text size'),
                                    value: fontSize || '16',
                                    onChange: function onChange(size) {
                                        return setAttributes({ fontSize: size });
                                    },
                                    min: 10,
                                    max: 100,
                                    beforeIcon: 'editor-textcolor',
                                    allowReset: true
                                }),
                                wp.element.createElement(PanelColorSettings, {
                                    title: __('Text Color'),
                                    initialOpen: false,
                                    colorSettings: [{
                                        label: __('Text Color'),
                                        value: textColor,
                                        onChange: function onChange(value) {
                                            return setAttributes({ textColor: value });
                                        }
                                    }]
                                })
                            )
                        ),
                        wp.element.createElement(
                            PanelBody,
                            { title: __('Icon Settings') },
                            wp.element.createElement(
                                BaseControl,
                                { label: __('List icon') },
                                wp.element.createElement(
                                    'div',
                                    { className: 'advgb-icon-items-wrapper' },
                                    listIcons.map(function (item, index) {
                                        return wp.element.createElement(
                                            'div',
                                            { className: 'advgb-icon-item h20', key: index },
                                            wp.element.createElement(
                                                'span',
                                                { onClick: function onClick() {
                                                    return setAttributes({
                                                        icon: item.value,
                                                        content: item.content
                                                    });
                                                },
                                                    className: [item.value === icon && 'active', item.value === '' && 'remove-icon'].filter(Boolean).join(' ')
                                                },
                                                wp.element.createElement(Dashicon, { icon: item.value })
                                            )
                                        );
                                    })
                                )
                            ),
                            icon && wp.element.createElement(
                                Fragment,
                                null,
                                wp.element.createElement(
                                    PanelBody,
                                    {
                                        title: [__('Icon color'), wp.element.createElement('span', { className: 'dashicons dashicons-' + icon,
                                            style: { color: iconColor, marginLeft: '10px' } })],
                                        initialOpen: false
                                    },
                                    wp.element.createElement(ColorPalette, {
                                        value: iconColor,
                                        onChange: function onChange(color) {
                                            return setAttributes({ iconColor: color });
                                        }
                                    })
                                ),
                                wp.element.createElement(RangeControl, {
                                    label: __('Icon size'),
                                    value: iconSize || '',
                                    onChange: function onChange(size) {
                                        return setAttributes({ iconSize: size });
                                    },
                                    min: 10,
                                    max: 100,
                                    allowReset: true
                                }),
                                wp.element.createElement(RangeControl, {
                                    label: __('Line height'),
                                    value: lineHeight || '',
                                    onChange: function onChange(size) {
                                        return setAttributes({ lineHeight: size });
                                    },
                                    min: 0,
                                    max: 100,
                                    allowReset: true
                                }),
                                wp.element.createElement(RangeControl, {
                                    label: __('Margin'),
                                    value: margin || '',
                                    onChange: function onChange(size) {
                                        return setAttributes({ margin: size });
                                    },
                                    min: 0,
                                    max: 100,
                                    allowReset: true
                                }),
                                wp.element.createElement(RangeControl, {
                                    label: __('Padding'),
                                    value: padding || '',
                                    onChange: function onChange(size) {
                                        return setAttributes({ padding: size });
                                    },
                                    min: 0,
                                    max: 100,
                                    allowReset: true
                                })
                            )
                        )
                    ), wp.element.createElement(
                        'div',
                        null,
                        wp.element.createElement(
                            'style',
                            null,
                            '#block-' + clientId + ' li {\n                                font-size: ' + fontSize + 'px;\n                                list-style:none;\n                                color: ' + textColor + ';\n                            }'
                        ),
                        icon && icon !== '' && wp.element.createElement(
                            'style',
                            null,
                            '#block-' + clientId + ' li:before {\n                                content: "' + content + '";\n                                font-family: dashicons;\n                                font-size: ' + iconSize + 'px;\n                                color: ' + iconColor + ';\n                                line-height: ' + lineHeight + 'px;\n                                margin: ' + margin + 'px;\n                                padding: ' + padding + 'px;\n                            }'
                        )
                    )];
                }
                return wp.element.createElement(BlockEdit, props);
            };
        });

        var _extends = Object.assign || function (target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            };
// Apply text color on front-end
        addFilter('blocks.getSaveContent.extraProps', 'advgb/saveListStyles', function (extraProps, blockType, attributes) {
            if (blockType.name === 'core/list') {
                var blockID = attributes.blockID;

                extraProps = _extends(extraProps, {
                    id: blockID
                });
                return extraProps;
            }
        });

// Save option to show in frontend
        addFilter('blocks.getSaveElement', 'advgb/saveTextColumnsElm', function (SaveElm, blockType, attributes) {
            var fontSize = attributes.fontSize,
                icon = attributes.icon,
                iconSize = attributes.iconSize,
                iconColor = attributes.iconColor,
                lineHeight = attributes.lineHeight,
                margin = attributes.margin,
                padding = attributes.padding,
                content = attributes.content,
                blockID = attributes.blockID,
                textColor = attributes.textColor;

            if (blockType.name === 'core/list' && blockID) {
                return React.createElement(Fragment, null, SaveElm, React.createElement('style', null, '#' + blockID + ' li{font-size: ' + fontSize + 'px; list-style: none; color: ' + textColor + ';}'), icon && icon !== '' && React.createElement('style', null, '#' + blockID + ' li:before {' + 'content: "' + content + '";' + 'font-family: dashicons; font-size: ' + iconSize + 'px; color: ' + iconColor + '; line-height: ' + lineHeight + 'px; margin: ' + margin + 'px; padding: ' + padding + 'px;}'));
            }
            return SaveElm;
        });
//})(window.wp.blocks, window.wp.i18n, window.wp.element, window.wp.editor, window.wp.components);

        /***/ }),
    /* 18 */
    /***/ (function(module, exports, __webpack_require__) {

        var assignValue = __webpack_require__(5),
            copyObject = __webpack_require__(28),
            createAssigner = __webpack_require__(29),
            isArrayLike = __webpack_require__(3),
            isPrototype = __webpack_require__(15),
            keys = __webpack_require__(38);

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * Assigns own enumerable string keyed properties of source objects to the
         * destination object. Source objects are applied from left to right.
         * Subsequent sources overwrite property assignments of previous sources.
         *
         * **Note:** This method mutates `object` and is loosely based on
         * [`Object.assign`](https://mdn.io/Object/assign).
         *
         * @static
         * @memberOf _
         * @since 0.10.0
         * @category Object
         * @param {Object} object The destination object.
         * @param {...Object} [sources] The source objects.
         * @returns {Object} Returns `object`.
         * @see _.assignIn
         * @example
         *
         * function Foo() {
 *   this.a = 1;
 * }
         *
         * function Bar() {
 *   this.c = 3;
 * }
         *
         * Foo.prototype.b = 2;
         * Bar.prototype.d = 4;
         *
         * _.assign({ 'a': 0 }, new Foo, new Bar);
         * // => { 'a': 1, 'c': 3 }
         */
        var assign = createAssigner(function(object, source) {
            if (isPrototype(source) || isArrayLike(source)) {
                copyObject(source, keys(source), object);
                return;
            }
            for (var key in source) {
                if (hasOwnProperty.call(source, key)) {
                    assignValue(object, key, source[key]);
                }
            }
        });

        module.exports = assign;


        /***/ }),
    /* 19 */
    /***/ (function(module, exports, __webpack_require__) {

        var baseIsNative = __webpack_require__(20),
            getValue = __webpack_require__(27);

        /**
         * Gets the native function at `key` of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {string} key The key of the method to get.
         * @returns {*} Returns the function if it's native, else `undefined`.
         */
        function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : undefined;
        }

        module.exports = getNative;


        /***/ }),
    /* 20 */
    /***/ (function(module, exports, __webpack_require__) {

        var isFunction = __webpack_require__(8),
            isMasked = __webpack_require__(24),
            isObject = __webpack_require__(2),
            toSource = __webpack_require__(26);

        /**
         * Used to match `RegExp`
         * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
         */
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

        /** Used to detect host constructors (Safari). */
        var reIsHostCtor = /^\[object .+?Constructor\]$/;

        /** Used for built-in method references. */
        var funcProto = Function.prototype,
            objectProto = Object.prototype;

        /** Used to resolve the decompiled source of functions. */
        var funcToString = funcProto.toString;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /** Used to detect if a method is native. */
        var reIsNative = RegExp('^' +
            funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
        );

        /**
         * The base implementation of `_.isNative` without bad shim checks.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a native function,
         *  else `false`.
         */
        function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) {
                return false;
            }
            var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
        }

        module.exports = baseIsNative;


        /***/ }),
    /* 21 */
    /***/ (function(module, exports) {

        var g;

// This works in non-strict mode
        g = (function() {
            return this;
        })();

        try {
            // This works if eval is allowed (see CSP)
            g = g || Function("return this")() || (1,eval)("this");
        } catch(e) {
            // This works if the window reference is available
            if(typeof window === "object")
                g = window;
        }

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

        module.exports = g;


        /***/ }),
    /* 22 */
    /***/ (function(module, exports, __webpack_require__) {

        var Symbol = __webpack_require__(9);

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
         * of values.
         */
        var nativeObjectToString = objectProto.toString;

        /** Built-in value references. */
        var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

        /**
         * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the raw `toStringTag`.
         */
        function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag),
                tag = value[symToStringTag];

            try {
                value[symToStringTag] = undefined;
                var unmasked = true;
            } catch (e) {}

            var result = nativeObjectToString.call(value);
            if (unmasked) {
                if (isOwn) {
                    value[symToStringTag] = tag;
                } else {
                    delete value[symToStringTag];
                }
            }
            return result;
        }

        module.exports = getRawTag;


        /***/ }),
    /* 23 */
    /***/ (function(module, exports) {

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
         * of values.
         */
        var nativeObjectToString = objectProto.toString;

        /**
         * Converts `value` to a string using `Object.prototype.toString`.
         *
         * @private
         * @param {*} value The value to convert.
         * @returns {string} Returns the converted string.
         */
        function objectToString(value) {
            return nativeObjectToString.call(value);
        }

        module.exports = objectToString;


        /***/ }),
    /* 24 */
    /***/ (function(module, exports, __webpack_require__) {

        var coreJsData = __webpack_require__(25);

        /** Used to detect methods masquerading as native. */
        var maskSrcKey = (function() {
            var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
            return uid ? ('Symbol(src)_1.' + uid) : '';
        }());

        /**
         * Checks if `func` has its source masked.
         *
         * @private
         * @param {Function} func The function to check.
         * @returns {boolean} Returns `true` if `func` is masked, else `false`.
         */
        function isMasked(func) {
            return !!maskSrcKey && (maskSrcKey in func);
        }

        module.exports = isMasked;


        /***/ }),
    /* 25 */
    /***/ (function(module, exports, __webpack_require__) {

        var root = __webpack_require__(1);

        /** Used to detect overreaching core-js shims. */
        var coreJsData = root['__core-js_shared__'];

        module.exports = coreJsData;


        /***/ }),
    /* 26 */
    /***/ (function(module, exports) {

        /** Used for built-in method references. */
        var funcProto = Function.prototype;

        /** Used to resolve the decompiled source of functions. */
        var funcToString = funcProto.toString;

        /**
         * Converts `func` to its source code.
         *
         * @private
         * @param {Function} func The function to convert.
         * @returns {string} Returns the source code.
         */
        function toSource(func) {
            if (func != null) {
                try {
                    return funcToString.call(func);
                } catch (e) {}
                try {
                    return (func + '');
                } catch (e) {}
            }
            return '';
        }

        module.exports = toSource;


        /***/ }),
    /* 27 */
    /***/ (function(module, exports) {

        /**
         * Gets the value at `key` of `object`.
         *
         * @private
         * @param {Object} [object] The object to query.
         * @param {string} key The key of the property to get.
         * @returns {*} Returns the property value.
         */
        function getValue(object, key) {
            return object == null ? undefined : object[key];
        }

        module.exports = getValue;


        /***/ }),
    /* 28 */
    /***/ (function(module, exports, __webpack_require__) {

        var assignValue = __webpack_require__(5),
            baseAssignValue = __webpack_require__(6);

        /**
         * Copies properties of `source` to `object`.
         *
         * @private
         * @param {Object} source The object to copy properties from.
         * @param {Array} props The property identifiers to copy.
         * @param {Object} [object={}] The object to copy properties to.
         * @param {Function} [customizer] The function to customize copied values.
         * @returns {Object} Returns `object`.
         */
        function copyObject(source, props, object, customizer) {
            var isNew = !object;
            object || (object = {});

            var index = -1,
                length = props.length;

            while (++index < length) {
                var key = props[index];

                var newValue = customizer
                    ? customizer(object[key], source[key], key, object, source)
                    : undefined;

                if (newValue === undefined) {
                    newValue = source[key];
                }
                if (isNew) {
                    baseAssignValue(object, key, newValue);
                } else {
                    assignValue(object, key, newValue);
                }
            }
            return object;
        }

        module.exports = copyObject;


        /***/ }),
    /* 29 */
    /***/ (function(module, exports, __webpack_require__) {

        var baseRest = __webpack_require__(30),
            isIterateeCall = __webpack_require__(37);

        /**
         * Creates a function like `_.assign`.
         *
         * @private
         * @param {Function} assigner The function to assign values.
         * @returns {Function} Returns the new assigner function.
         */
        function createAssigner(assigner) {
            return baseRest(function(object, sources) {
                var index = -1,
                    length = sources.length,
                    customizer = length > 1 ? sources[length - 1] : undefined,
                    guard = length > 2 ? sources[2] : undefined;

                customizer = (assigner.length > 3 && typeof customizer == 'function')
                    ? (length--, customizer)
                    : undefined;

                if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                    customizer = length < 3 ? undefined : customizer;
                    length = 1;
                }
                object = Object(object);
                while (++index < length) {
                    var source = sources[index];
                    if (source) {
                        assigner(object, source, index, customizer);
                    }
                }
                return object;
            });
        }

        module.exports = createAssigner;


        /***/ }),
    /* 30 */
    /***/ (function(module, exports, __webpack_require__) {

        var identity = __webpack_require__(12),
            overRest = __webpack_require__(31),
            setToString = __webpack_require__(33);

        /**
         * The base implementation of `_.rest` which doesn't validate or coerce arguments.
         *
         * @private
         * @param {Function} func The function to apply a rest parameter to.
         * @param {number} [start=func.length-1] The start position of the rest parameter.
         * @returns {Function} Returns the new function.
         */
        function baseRest(func, start) {
            return setToString(overRest(func, start, identity), func + '');
        }

        module.exports = baseRest;


        /***/ }),
    /* 31 */
    /***/ (function(module, exports, __webpack_require__) {

        var apply = __webpack_require__(32);

        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeMax = Math.max;

        /**
         * A specialized version of `baseRest` which transforms the rest array.
         *
         * @private
         * @param {Function} func The function to apply a rest parameter to.
         * @param {number} [start=func.length-1] The start position of the rest parameter.
         * @param {Function} transform The rest array transform.
         * @returns {Function} Returns the new function.
         */
        function overRest(func, start, transform) {
            start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
            return function() {
                var args = arguments,
                    index = -1,
                    length = nativeMax(args.length - start, 0),
                    array = Array(length);

                while (++index < length) {
                    array[index] = args[start + index];
                }
                index = -1;
                var otherArgs = Array(start + 1);
                while (++index < start) {
                    otherArgs[index] = args[index];
                }
                otherArgs[start] = transform(array);
                return apply(func, this, otherArgs);
            };
        }

        module.exports = overRest;


        /***/ }),
    /* 32 */
    /***/ (function(module, exports) {

        /**
         * A faster alternative to `Function#apply`, this function invokes `func`
         * with the `this` binding of `thisArg` and the arguments of `args`.
         *
         * @private
         * @param {Function} func The function to invoke.
         * @param {*} thisArg The `this` binding of `func`.
         * @param {Array} args The arguments to invoke `func` with.
         * @returns {*} Returns the result of `func`.
         */
        function apply(func, thisArg, args) {
            switch (args.length) {
                case 0: return func.call(thisArg);
                case 1: return func.call(thisArg, args[0]);
                case 2: return func.call(thisArg, args[0], args[1]);
                case 3: return func.call(thisArg, args[0], args[1], args[2]);
            }
            return func.apply(thisArg, args);
        }

        module.exports = apply;


        /***/ }),
    /* 33 */
    /***/ (function(module, exports, __webpack_require__) {

        var baseSetToString = __webpack_require__(34),
            shortOut = __webpack_require__(36);

        /**
         * Sets the `toString` method of `func` to return `string`.
         *
         * @private
         * @param {Function} func The function to modify.
         * @param {Function} string The `toString` result.
         * @returns {Function} Returns `func`.
         */
        var setToString = shortOut(baseSetToString);

        module.exports = setToString;


        /***/ }),
    /* 34 */
    /***/ (function(module, exports, __webpack_require__) {

        var constant = __webpack_require__(35),
            defineProperty = __webpack_require__(7),
            identity = __webpack_require__(12);

        /**
         * The base implementation of `setToString` without support for hot loop shorting.
         *
         * @private
         * @param {Function} func The function to modify.
         * @param {Function} string The `toString` result.
         * @returns {Function} Returns `func`.
         */
        var baseSetToString = !defineProperty ? identity : function(func, string) {
                return defineProperty(func, 'toString', {
                    'configurable': true,
                    'enumerable': false,
                    'value': constant(string),
                    'writable': true
                });
            };

        module.exports = baseSetToString;


        /***/ }),
    /* 35 */
    /***/ (function(module, exports) {

        /**
         * Creates a function that returns `value`.
         *
         * @static
         * @memberOf _
         * @since 2.4.0
         * @category Util
         * @param {*} value The value to return from the new function.
         * @returns {Function} Returns the new constant function.
         * @example
         *
         * var objects = _.times(2, _.constant({ 'a': 1 }));
         *
         * console.log(objects);
         * // => [{ 'a': 1 }, { 'a': 1 }]
         *
         * console.log(objects[0] === objects[1]);
         * // => true
         */
        function constant(value) {
            return function() {
                return value;
            };
        }

        module.exports = constant;


        /***/ }),
    /* 36 */
    /***/ (function(module, exports) {

        /** Used to detect hot functions by number of calls within a span of milliseconds. */
        var HOT_COUNT = 800,
            HOT_SPAN = 16;

        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeNow = Date.now;

        /**
         * Creates a function that'll short out and invoke `identity` instead
         * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
         * milliseconds.
         *
         * @private
         * @param {Function} func The function to restrict.
         * @returns {Function} Returns the new shortable function.
         */
        function shortOut(func) {
            var count = 0,
                lastCalled = 0;

            return function() {
                var stamp = nativeNow(),
                    remaining = HOT_SPAN - (stamp - lastCalled);

                lastCalled = stamp;
                if (remaining > 0) {
                    if (++count >= HOT_COUNT) {
                        return arguments[0];
                    }
                } else {
                    count = 0;
                }
                return func.apply(undefined, arguments);
            };
        }

        module.exports = shortOut;


        /***/ }),
    /* 37 */
    /***/ (function(module, exports, __webpack_require__) {

        var eq = __webpack_require__(11),
            isArrayLike = __webpack_require__(3),
            isIndex = __webpack_require__(14),
            isObject = __webpack_require__(2);

        /**
         * Checks if the given arguments are from an iteratee call.
         *
         * @private
         * @param {*} value The potential iteratee value argument.
         * @param {*} index The potential iteratee index or key argument.
         * @param {*} object The potential iteratee object argument.
         * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
         *  else `false`.
         */
        function isIterateeCall(value, index, object) {
            if (!isObject(object)) {
                return false;
            }
            var type = typeof index;
            if (type == 'number'
                    ? (isArrayLike(object) && isIndex(index, object.length))
                    : (type == 'string' && index in object)
            ) {
                return eq(object[index], value);
            }
            return false;
        }

        module.exports = isIterateeCall;


        /***/ }),
    /* 38 */
    /***/ (function(module, exports, __webpack_require__) {

        var arrayLikeKeys = __webpack_require__(39),
            baseKeys = __webpack_require__(50),
            isArrayLike = __webpack_require__(3);

        /**
         * Creates an array of the own enumerable property names of `object`.
         *
         * **Note:** Non-object values are coerced to objects. See the
         * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
         * for more details.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Object
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         * @example
         *
         * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
         *
         * Foo.prototype.c = 3;
         *
         * _.keys(new Foo);
         * // => ['a', 'b'] (iteration order is not guaranteed)
         *
         * _.keys('hi');
         * // => ['0', '1']
         */
        function keys(object) {
            return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }

        module.exports = keys;


        /***/ }),
    /* 39 */
    /***/ (function(module, exports, __webpack_require__) {

        var baseTimes = __webpack_require__(40),
            isArguments = __webpack_require__(41),
            isArray = __webpack_require__(43),
            isBuffer = __webpack_require__(44),
            isIndex = __webpack_require__(14),
            isTypedArray = __webpack_require__(46);

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * Creates an array of the enumerable property names of the array-like `value`.
         *
         * @private
         * @param {*} value The value to query.
         * @param {boolean} inherited Specify returning inherited property names.
         * @returns {Array} Returns the array of property names.
         */
        function arrayLikeKeys(value, inherited) {
            var isArr = isArray(value),
                isArg = !isArr && isArguments(value),
                isBuff = !isArr && !isArg && isBuffer(value),
                isType = !isArr && !isArg && !isBuff && isTypedArray(value),
                skipIndexes = isArr || isArg || isBuff || isType,
                result = skipIndexes ? baseTimes(value.length, String) : [],
                length = result.length;

            for (var key in value) {
                if ((inherited || hasOwnProperty.call(value, key)) &&
                    !(skipIndexes && (
                        // Safari 9 has enumerable `arguments.length` in strict mode.
                        key == 'length' ||
                        // Node.js 0.10 has enumerable non-index properties on buffers.
                        (isBuff && (key == 'offset' || key == 'parent')) ||
                        // PhantomJS 2 has enumerable non-index properties on typed arrays.
                        (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
                        // Skip index properties.
                        isIndex(key, length)
                    ))) {
                    result.push(key);
                }
            }
            return result;
        }

        module.exports = arrayLikeKeys;


        /***/ }),
    /* 40 */
    /***/ (function(module, exports) {

        /**
         * The base implementation of `_.times` without support for iteratee shorthands
         * or max array length checks.
         *
         * @private
         * @param {number} n The number of times to invoke `iteratee`.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns the array of results.
         */
        function baseTimes(n, iteratee) {
            var index = -1,
                result = Array(n);

            while (++index < n) {
                result[index] = iteratee(index);
            }
            return result;
        }

        module.exports = baseTimes;


        /***/ }),
    /* 41 */
    /***/ (function(module, exports, __webpack_require__) {

        var baseIsArguments = __webpack_require__(42),
            isObjectLike = __webpack_require__(4);

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /** Built-in value references. */
        var propertyIsEnumerable = objectProto.propertyIsEnumerable;

        /**
         * Checks if `value` is likely an `arguments` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an `arguments` object,
         *  else `false`.
         * @example
         *
         * _.isArguments(function() { return arguments; }());
         * // => true
         *
         * _.isArguments([1, 2, 3]);
         * // => false
         */
        var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
                return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
                    !propertyIsEnumerable.call(value, 'callee');
            };

        module.exports = isArguments;


        /***/ }),
    /* 42 */
    /***/ (function(module, exports, __webpack_require__) {

        var baseGetTag = __webpack_require__(0),
            isObjectLike = __webpack_require__(4);

        /** `Object#toString` result references. */
        var argsTag = '[object Arguments]';

        /**
         * The base implementation of `_.isArguments`.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an `arguments` object,
         */
        function baseIsArguments(value) {
            return isObjectLike(value) && baseGetTag(value) == argsTag;
        }

        module.exports = baseIsArguments;


        /***/ }),
    /* 43 */
    /***/ (function(module, exports) {

        /**
         * Checks if `value` is classified as an `Array` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an array, else `false`.
         * @example
         *
         * _.isArray([1, 2, 3]);
         * // => true
         *
         * _.isArray(document.body.children);
         * // => false
         *
         * _.isArray('abc');
         * // => false
         *
         * _.isArray(_.noop);
         * // => false
         */
        var isArray = Array.isArray;

        module.exports = isArray;


        /***/ }),
    /* 44 */
    /***/ (function(module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(1),
            stubFalse = __webpack_require__(45);

            /** Detect free variable `exports`. */
            var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

            /** Detect free variable `module`. */
            var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

            /** Detect the popular CommonJS extension `module.exports`. */
            var moduleExports = freeModule && freeModule.exports === freeExports;

            /** Built-in value references. */
            var Buffer = moduleExports ? root.Buffer : undefined;

            /* Built-in method references for those with the same name as other `lodash` methods. */
            var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

            /**
             * Checks if `value` is a buffer.
             *
             * @static
             * @memberOf _
             * @since 4.3.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
             * @example
             *
             * _.isBuffer(new Buffer(2));
             * // => true
             *
             * _.isBuffer(new Uint8Array(2));
             * // => false
             */
            var isBuffer = nativeIsBuffer || stubFalse;

            module.exports = isBuffer;

            /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module)))

        /***/ }),
    /* 45 */
    /***/ (function(module, exports) {

        /**
         * This method returns `false`.
         *
         * @static
         * @memberOf _
         * @since 4.13.0
         * @category Util
         * @returns {boolean} Returns `false`.
         * @example
         *
         * _.times(2, _.stubFalse);
         * // => [false, false]
         */
        function stubFalse() {
            return false;
        }

        module.exports = stubFalse;


        /***/ }),
    /* 46 */
    /***/ (function(module, exports, __webpack_require__) {

        var baseIsTypedArray = __webpack_require__(47),
            baseUnary = __webpack_require__(48),
            nodeUtil = __webpack_require__(49);

        /* Node.js helper references. */
        var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

        /**
         * Checks if `value` is classified as a typed array.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
         * @example
         *
         * _.isTypedArray(new Uint8Array);
         * // => true
         *
         * _.isTypedArray([]);
         * // => false
         */
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

        module.exports = isTypedArray;


        /***/ }),
    /* 47 */
    /***/ (function(module, exports, __webpack_require__) {

        var baseGetTag = __webpack_require__(0),
            isLength = __webpack_require__(13),
            isObjectLike = __webpack_require__(4);

        /** `Object#toString` result references. */
        var argsTag = '[object Arguments]',
            arrayTag = '[object Array]',
            boolTag = '[object Boolean]',
            dateTag = '[object Date]',
            errorTag = '[object Error]',
            funcTag = '[object Function]',
            mapTag = '[object Map]',
            numberTag = '[object Number]',
            objectTag = '[object Object]',
            regexpTag = '[object RegExp]',
            setTag = '[object Set]',
            stringTag = '[object String]',
            weakMapTag = '[object WeakMap]';

        var arrayBufferTag = '[object ArrayBuffer]',
            dataViewTag = '[object DataView]',
            float32Tag = '[object Float32Array]',
            float64Tag = '[object Float64Array]',
            int8Tag = '[object Int8Array]',
            int16Tag = '[object Int16Array]',
            int32Tag = '[object Int32Array]',
            uint8Tag = '[object Uint8Array]',
            uint8ClampedTag = '[object Uint8ClampedArray]',
            uint16Tag = '[object Uint16Array]',
            uint32Tag = '[object Uint32Array]';

        /** Used to identify `toStringTag` values of typed arrays. */
        var typedArrayTags = {};
        typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
            typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
                typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
                    typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
                        typedArrayTags[uint32Tag] = true;
        typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
            typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
                typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
                    typedArrayTags[errorTag] = typedArrayTags[funcTag] =
                        typedArrayTags[mapTag] = typedArrayTags[numberTag] =
                            typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
                                typedArrayTags[setTag] = typedArrayTags[stringTag] =
                                    typedArrayTags[weakMapTag] = false;

        /**
         * The base implementation of `_.isTypedArray` without Node.js optimizations.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
         */
        function baseIsTypedArray(value) {
            return isObjectLike(value) &&
                isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }

        module.exports = baseIsTypedArray;


        /***/ }),
    /* 48 */
    /***/ (function(module, exports) {

        /**
         * The base implementation of `_.unary` without support for storing metadata.
         *
         * @private
         * @param {Function} func The function to cap arguments for.
         * @returns {Function} Returns the new capped function.
         */
        function baseUnary(func) {
            return function(value) {
                return func(value);
            };
        }

        module.exports = baseUnary;


        /***/ }),
    /* 49 */
    /***/ (function(module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(10);

            /** Detect free variable `exports`. */
            var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

            /** Detect free variable `module`. */
            var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

            /** Detect the popular CommonJS extension `module.exports`. */
            var moduleExports = freeModule && freeModule.exports === freeExports;

            /** Detect free variable `process` from Node.js. */
            var freeProcess = moduleExports && freeGlobal.process;

            /** Used to access faster Node.js helpers. */
            var nodeUtil = (function() {
                try {
                    // Use `util.types` for Node.js 10+.
                    var types = freeModule && freeModule.require && freeModule.require('util').types;

                    if (types) {
                        return types;
                    }

                    // Legacy `process.binding('util')` for Node.js < 10.
                    return freeProcess && freeProcess.binding && freeProcess.binding('util');
                } catch (e) {}
            }());

            module.exports = nodeUtil;

            /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module)))

        /***/ }),
    /* 50 */
    /***/ (function(module, exports, __webpack_require__) {

        var isPrototype = __webpack_require__(15),
            nativeKeys = __webpack_require__(51);

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         */
        function baseKeys(object) {
            if (!isPrototype(object)) {
                return nativeKeys(object);
            }
            var result = [];
            for (var key in Object(object)) {
                if (hasOwnProperty.call(object, key) && key != 'constructor') {
                    result.push(key);
                }
            }
            return result;
        }

        module.exports = baseKeys;


        /***/ }),
    /* 51 */
    /***/ (function(module, exports, __webpack_require__) {

        var overArg = __webpack_require__(52);

        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeKeys = overArg(Object.keys, Object);

        module.exports = nativeKeys;


        /***/ }),
    /* 52 */
    /***/ (function(module, exports) {

        /**
         * Creates a unary function that invokes `func` with its argument transformed.
         *
         * @private
         * @param {Function} func The function to wrap.
         * @param {Function} transform The argument transform.
         * @returns {Function} Returns the new function.
         */
        function overArg(func, transform) {
            return function(arg) {
                return func(transform(arg));
            };
        }

        module.exports = overArg;


        /***/ })
    /******/ ]);