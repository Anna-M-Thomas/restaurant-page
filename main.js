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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"\\nbody {\\n    background-color: lightblue;\\n}\\n\\nh1{\\n    display: inline;\\n    padding: 10px;\\n}\\n\\nh1, h2, h3 {\\n    font-family: Palatino, serif;\\n}\\n\\n.menu {\\n    display: flex;\\n    min-width: 750px;\\n    height: 48px;\\n    align-items: center;\\n}\\n\\n.menu-item {\\n    padding: 14px 25px;\\n    margin-right: 5px;\\n    text-decoration: none;\\n    font-weight: bold;\\n    font-size: 14px;\\n    border: 2px solid #4EC6DE;\\n    border-bottom-width: 0;\\n    color: #333;\\n    background-color: aliceblue;\\n    outline: none;\\n    cursor: pointer;\\n    transition: background-color .3s; \\n}\\n\\n.active-menu {\\n\\tcolor: #fff;\\n    background-color: #4EC6DE; \\n}\\n\\n#fishie-pic {\\n    width: 70px;\\n}\\n\\n#container{\\n    width: 100%;\\n    max-width: 800px;\\n    margin: 2rem auto;\\n}\\n\\n#content {\\n\\tbackground-color: aliceblue;\\n    width: 800px;\\n\\tpadding: 10px 20px;\\n\\tborder: 2px solid #4EC6DE;\\n    text-align: center; \\n}\\n\\n#menu-div {\\n    display: grid;\\n    grid-template-columns: 33% 33% 33%;\\n}\\n\\n.fish-div {\\n    text-align: center;\\n    margin: 20px;\\n    background-color: #d2e3fd;\\n}\\n\\n.menu-pic {\\n    height:100px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: contactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactPage\", function() { return contactPage; });\n\nconst contactPage = () =>{\n\n\tconst div = document.getElementById(\"content\");\n\n\tconst header = document.createElement('h2');\n\theader.textContent = \"Contact\";\n\n\tconst img1 = document.createElement('img');\n\timg1.src = \"/img/satsuki2.jpg\";\n\timg1.width = 300;\n\n\tconst img2 = document.createElement('img');\n\timg2.src = \"/img/building_sakanaya.png\";\n\n\tconst contactInfo = document.createElement('p');\n\tcontactInfo.textContent = \"Address: 2-1 Suzukocho, Kamaishi, Iwate 026-0031 Phone: 0555-55-5555 Email: meow@fishie.com\";\n\n\tdiv.appendChild(header);\n\tdiv.appendChild(img2);\n\tdiv.appendChild(img1);\n\tdiv.appendChild(contactInfo);\n\n}\n\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/*! exports provided: homePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homePage\", function() { return homePage; });\n\nconst homePage = () =>{\n\nconst div = document.getElementById(\"content\");\nconst header = document.createElement('h2');\nconst img = document.createElement('img');\nconst para = document.createElement('p'); \n\nheader.textContent = \"Fresh Fish, Friendly Cat\";\nimg.src = \"../src/img/satsuki.png\";\npara.textContent = \"Saury? Salmon? Mackerel? Tuna? You name it, we've got it! Plus, every customer will be greeted by one (1) spoiled black cat demanding pets and a bite of whatever you order.\";\n\ndiv.appendChild(header);\ndiv.appendChild(img);\ndiv.appendChild(para);\n\t\n}\n\n\n\n//# sourceURL=webpack:///./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menupage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menupage */ \"./src/menupage.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _navmaker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navmaker */ \"./src/navmaker.js\");\n\n\n\n\n\n\n\nObject(_navmaker__WEBPACK_IMPORTED_MODULE_4__[\"navMaker\"])();\nObject(_homepage__WEBPACK_IMPORTED_MODULE_1__[\"homePage\"])();\n\nconst menuItems = document.getElementsByClassName(\"menu-item\");\nconst contentsDiv = document.getElementById(\"content\");\n\nfor(let item of menuItems){\n\titem.addEventListener(\"click\", switchContent);\n}\n\nfunction switchContent()\n\t{\n\t\tcontentsDiv.innerHTML = \"\";\n\t\tlet previousMenu = document.querySelector(\".active-menu\");\n\t\tconsole.log(previousMenu);\n\t\tpreviousMenu.classList.remove(\"active-menu\");\n\n\t\tevent.target.classList.add(\"class\", \"active-menu\");\n\t\tif(event.target.id===\"home\"){\n\t\t\tObject(_homepage__WEBPACK_IMPORTED_MODULE_1__[\"homePage\"])();\n\t\t}else if(event.target.id===\"contact\"){\n\t\t\tObject(_contact__WEBPACK_IMPORTED_MODULE_3__[\"contactPage\"])();\n\t\t}else if(event.target.id===\"menu\"){\n\t\t\tObject(_menupage__WEBPACK_IMPORTED_MODULE_2__[\"menuPage\"])();\n\t\t}\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menuitems.js":
/*!**************************!*\
  !*** ./src/menuitems.js ***!
  \**************************/
/*! exports provided: menuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuItems\", function() { return menuItems; });\n\nconst randomPrice = () => {return Math.floor(Math.random() * Math.floor(25))};\n\nlet menuItems = [\n\t\t{\tname: \"Dark Sleeper\", img: \"../src/img/fish_donko.png\", price: randomPrice()},\n\t\t{\tname: \"Sweeper\", img: \"../src/img/fish_hatanpo.png\", price: randomPrice()},\n\t\t{\tname: \"Rainbow Trout\", img: \"../src/img/fish_nijimasu.png\", price: randomPrice()},\n\t\t{\tname: \"Flying Squid\", img: \"../src/img/fish_tobiika.png\", price: randomPrice()},\n\t\t{\tname: \"Deep Sea Angler\", img: \"../src/img/fish_biwaankou.png\", price: randomPrice()},\n\t\t{\tname: \"Electric Eel\", img: \"../src/img/fish_denki_unagi.png\", price: randomPrice()},\n\t\t{\tname: \"Pufferfish (mid-depuff)\", img: \"../src/img/fish_fugu_haku.png\", price: randomPrice()},\n\t\t{\tname: \"Lamprey\", img: \"../src/img/fish_yatsume_unagi.png\", price: randomPrice()},\n\t\t{\tname: \"Magnapinna Squid\", img: \"../src/img/shinkai_mizuhikiika.png\", price: randomPrice()},\n\t\t{\tname: \"Wolftrap Angler\", img: \"../src/img/shinkai_fish_bikkuri_ankou.png\", price: randomPrice()},\n\t\t{\tname: \"Sockeye Salmon\", img: \"../src/img/fish_benizake.png\", price: randomPrice()},\n\t\t{\tname: \"Japanese Anchovy\", img: \"../src/img/fish_katakuchi_iwashi.png\", price: randomPrice()},\n\n\t];\n\n\n\n//# sourceURL=webpack:///./src/menuitems.js?");

/***/ }),

/***/ "./src/menupage.js":
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
/*! exports provided: menuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuPage\", function() { return menuPage; });\n/* harmony import */ var _menuitems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuitems */ \"./src/menuitems.js\");\n\n\n\nconst menuPage = () =>{\n\n\tconst div = document.getElementById(\"content\");\n\n\tconst menuDiv = document.createElement(\"div\");\n\tmenuDiv.setAttribute(\"id\", \"menu-div\");\n\n\tconst header = document.createElement('h2');\n\theader.textContent = \"Menu\";\n\n\tdiv.appendChild(header);\n\tdiv.appendChild(menuDiv);\n\n\n\n\tfor(let fishie of _menuitems__WEBPACK_IMPORTED_MODULE_0__[\"menuItems\"]){\n\t\tlet fishDiv = document.createElement(\"div\");\n\t\tfishDiv.classList.add(\"fish-div\");\n\n\t\tmenuDiv.appendChild(fishDiv);\n\n\t\tlet name = document.createElement(\"h3\");\n\t\tname.textContent = fishie.name;\n\n\t\tlet img = document.createElement(\"img\");\n\t\timg.classList.add(\"id\", \"menu-pic\");\n\t\timg.src = fishie.img;\n\n\t\tlet price = document.createElement(\"p\");\n\t\tprice.textContent = `Price: $${fishie.price}.00`;\n\n\t\tfishDiv.appendChild(name);\n\t\tfishDiv.appendChild(img);\n\t\tfishDiv.appendChild(price);\n\n\t}\n\n}\n\n\n\n//# sourceURL=webpack:///./src/menupage.js?");

/***/ }),

/***/ "./src/navmaker.js":
/*!*************************!*\
  !*** ./src/navmaker.js ***!
  \*************************/
/*! exports provided: navMaker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navMaker\", function() { return navMaker; });\n\nconst navMaker = () =>{\n\nconst container = document.getElementById(\"container\");\nconst navDiv = document.createElement(\"div\");\nnavDiv.classList.add(\"menu\");\ncontainer.prepend(navDiv);\n\nconst img = document.createElement(\"img\");\nimg.src = \"../src/img/fish2_blue.png\";\nimg.setAttribute(\"id\", \"fishie-pic\");\n\nconst header = document.createElement(\"h1\");\nheader.innerText = \"Satsuki's Fish Emporium\";\n\nconst homeButton = document.createElement(\"button\");\nhomeButton.innerText = \"Home\";\nhomeButton.classList.add(\"menu-item\", \"active-menu\");\nhomeButton.setAttribute(\"id\", \"home\");\n\nconst contactButton = document.createElement(\"button\");\ncontactButton.innerText = \"Contact\";\ncontactButton.classList.add(\"menu-item\");\ncontactButton.setAttribute(\"id\", \"contact\");\n\nconst menuButton = document.createElement(\"button\");\nmenuButton.innerText = \"Menu\";\nmenuButton.classList.add(\"menu-item\");\nmenuButton.setAttribute(\"id\", \"menu\");\n\nnavDiv.appendChild(homeButton);\nnavDiv.appendChild(contactButton);\nnavDiv.appendChild(menuButton);\nnavDiv.appendChild(header);\nnavDiv.appendChild(img);\n}\n\n\n\n//# sourceURL=webpack:///./src/navmaker.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });