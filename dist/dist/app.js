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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/components.js\");\n\nReactDOM.render(React.createElement(_components__WEBPACK_IMPORTED_MODULE_0__[\"WelcomeBox\"], null), document.getElementById('welcome-app')); //var g = G$('John', 'Doe', 'se').updateGreeting('#greeting');\n//console.log(g);\n\n/*$('#login').click(function(){\r\n    let firstname = $('#firstname').val();\r\n    let lastname = $('#lastname').val();\r\n    let language =$('#lang').val();\r\n    \r\n    let Greet = G$(firstname, lastname);\r\n    Greet.language = $('#lang').val();\r\n   // Greet.firstName = 'Joy';\r\n    Greet.updateGreeting('#greeting', true).log();\r\n    console.log(Greet.firstname);\r\n    console.log(Greet.language);\r\n    $('#greeting').after(`Chosen language: ${Greet.language}`);\r\n});*/\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/*! exports provided: WelcomeBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WelcomeBox\", function() { return WelcomeBox; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//assign variable to function that returns a new instance of the class.  Export variable so you can use G$ to access the class.\n//export const G$ = (firstName, lastName, language) => new GreetrInit(firstName, lastName, language);\n//set up data needed.  not exported, defined outside the class, and thus \"hidden\"\nvar validLangs = new Set(['en', 'es', 'se']);\nvar greetings = new Map([[\"en\", \"Hi\"], [\"es\", \"Hola\"], [\"se\", \"Hejsan\"]]);\nvar formalGreetings = new Map([[\"en\", \"Hello\"], [\"es\", \"Saludos\"], [\"se\", \"Hej\"]]);\nvar logMessages = new Map([[\"en\", \"Logged In\"], [\"es\", \"Indicio Session\"], [\"se\", \"Inloggad\"]]); //use symbol to protect these from being changed directly\n\nvar s_firstname = Symbol();\nvar s_lastname = Symbol();\nvar s_language = Symbol();\nvar WelcomeBox =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(WelcomeBox, _React$Component);\n\n  function WelcomeBox() {\n    var _this;\n\n    _classCallCheck(this, WelcomeBox);\n\n    //super() runs the function of the same name (here constructor()) inside the \"parent\" class (here React.Component)\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(WelcomeBox).call(this));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"state\", {\n      _firstname: 'First',\n      _lastname: 'Last',\n      _language: 'en' //before rendering, fetch info from API\n\n    });\n\n    return _this;\n  } //set default options.  can be set outside the constructor in which case you don't need to use \"this.\". Use setState to change these to trigger a new render\n\n\n  _createClass(WelcomeBox, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {// this._fetchInfo();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      //don't call setState inside any functions called inside render() because they are already rendering.\n      var greeting = this._greeting(true);\n\n      var languageText = this.language; //we have all the values, ready to render view. dont need a ref on the button because we are just toggling a boolean\n\n      return React.createElement(\"div\", null, React.createElement(\"div\", {\n        id: \"logindiv\"\n      }, React.createElement(\"label\", null, \"First Name\"), React.createElement(\"input\", {\n        type: \"text\",\n        id: \"firstname\"\n      }), React.createElement(\"br\", null), React.createElement(\"br\", null), React.createElement(\"label\", null, \"Last Name\"), React.createElement(\"input\", {\n        type: \"text\",\n        id: \"lastname\"\n      }), React.createElement(\"br\", null), React.createElement(\"br\", null), React.createElement(\"select\", {\n        id: \"lang\"\n      }, React.createElement(\"option\", {\n        value: \"en\"\n      }, \"English\"), React.createElement(\"option\", {\n        value: \"es\"\n      }, \"Spanish\"), React.createElement(\"option\", {\n        value: \"fr\"\n      }, \"French\"), React.createElement(\"option\", {\n        value: \"se\"\n      }, \"Swedish\")), React.createElement(\"input\", {\n        type: \"button\",\n        value: \"Login\",\n        id: \"login\",\n        onClick: this._handleClick.bind(this)\n      })), React.createElement(\"h1\", {\n        id: \"greeting\"\n      }, greeting), React.createElement(\"p\", null, \"Chosen Language: \", languageText));\n    } //after rendering, set interval to check for updates from API\n\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {} // this._timer = setInterval(() => this._fetchEvents(), 5000);\n    //before removing, clear any timers that are running\n\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {// clearInterval(this._timer);\n    }\n  }, {\n    key: \"_handleClick\",\n    value: function _handleClick() {} //sets up methods\n\n  }, {\n    key: \"_fullname\",\n    value: function _fullname() {\n      // use computed member access operator ([]) to access properties set up with Symbol()\n      return \"\".concat(_firstname, \" \").concat(_lastname);\n    }\n  }, {\n    key: \"_greeting\",\n    value: function _greeting(formal) {\n      var msg;\n\n      if (formal) {\n        msg = \"\".concat(formalGreetings.get(_language), \" \").concat(this.fullname());\n      } else {\n        msg = \"\".concat(greetings.get(_language), \" \").concat(_firstname);\n      }\n\n      return msg;\n    }\n  }, {\n    key: \"_validate\",\n    value: function _validate() {\n      if (!validLangs.has(_language)) {\n        throw \"invalid language\";\n      }\n\n      return this;\n    }\n  }, {\n    key: \"_log\",\n    value: function _log() {\n      if (console) {\n        console.log(\"\".concat(logMessages.get(_language), \": \").concat(this.fullname()));\n      }\n\n      return this;\n    }\n  }, {\n    key: \"language\",\n    // use getters and setters to handle any validation or changes you want to make before getting or setting property values\n    set: function set(language) {\n      _language = language;\n      this.validate();\n    },\n    get: function get() {\n      if (_language === 'en') {\n        return \"English\";\n      } else if (_language === 'se') {\n        return \"Swedish\";\n      } else if (_language === 'es') {\n        return \"Spanish\";\n      } else {\n        throw \"not valid language\";\n      }\n    }\n    /* _updateGreeting(selector, formal) {\r\n         if (!$) {\r\n             throw \"jQuery not loaded\";\r\n         }\r\n         if (!selector) {\r\n             throw \"HTML selector required\";\r\n         }\r\n         if ($(selector).length < 1) {\r\n             throw \"selector not found in HTML\";\r\n         }\r\n           $(selector).html(this.greeting(formal));\r\n         return this;\r\n     }*/\n\n  }, {\n    key: \"firstName\",\n    set: function set(firstname) {\n      _firstname = firstname;\n    }\n  }, {\n    key: \"lastName\",\n    set: function set(lastname) {\n      _lastname = lastname;\n    }\n  }, {\n    key: \"firstname\",\n    get: function get() {\n      return _firstname.toUpperCase();\n    }\n  }, {\n    key: \"lastname\",\n    get: function get() {\n      return _lastname.toUpperCase();\n    }\n  }]);\n\n  return WelcomeBox;\n}(React.Component); //sets up object\n\n/*class GreetrInit extends Greetr {\r\n    constructor(firstName = \"First\", lastName = \"Last\", language = \"en\") {\r\n        //needed to have access to Greetr methods\r\n       super();\r\n       this[s_firstname] = firstName;\r\n       this[s_lastname] = lastName;\r\n       this[s_language] = language;\r\n       this.validate();\r\n    } \r\n}*/\n\n//# sourceURL=webpack:///./src/components.js?");

/***/ })

/******/ });