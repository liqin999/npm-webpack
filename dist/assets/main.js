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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_nav_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_const_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_a_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_class_js__ = __webpack_require__(4);
/**
 * Created by liqin on 2017/9/15.
 */
// 引入模块



/*引入一个模块时候，名字要和导出模块名字相同*/




let p1 = new __WEBPACK_IMPORTED_MODULE_3__components_class_js__["a" /* Person */]("liqin",22);
console.log(p1.toString());

Object(__WEBPACK_IMPORTED_MODULE_0__components_nav_js__["a" /* default */])();//执行

function setName(){
    console.log(__WEBPACK_IMPORTED_MODULE_1__components_const_js__["a" /* firstName */]+","+__WEBPACK_IMPORTED_MODULE_1__components_const_js__["b" /* lastName */]+","+__WEBPACK_IMPORTED_MODULE_1__components_const_js__["c" /* year */]);
}
setName();

console.log(__WEBPACK_IMPORTED_MODULE_2__components_a_js__["b" /* city */]);//执行另一个模块里面声明的变量和函数
console.log(Object(__WEBPACK_IMPORTED_MODULE_2__components_a_js__["a" /* Counter */])())

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = nav;
/**
 * Created by liqin on 2017/9/15.
 */
function nav(){
    console.log("l am nav")
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firstName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lastName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return year; });

var firstName = 'Michael';
var lastName ="Jackson";
var year = 958;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return city; });
/* harmony export (immutable) */ __webpack_exports__["a"] = Counter;

let city = {
	"key1":"北京",
	"key2":"上海",
	"key3":"南京"
};

function Counter() {
  return "this is a page";
}

/*使用export 导出一个函数个一个变量的形式*/

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 定义一个类
 class Person{
	constructor(x,y){//构造函数
		this.x = x;
		this.y = y;
	}
	toString(){
		return (this.x+"的年龄是"+this.y)
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Person;



/***/ })
/******/ ]);