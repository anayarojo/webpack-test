webpackJsonp([1],{

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

var _message = __webpack_require__(9);

var _message2 = _interopRequireDefault(_message);

var _wmsIcono = __webpack_require__(23);

var _wmsIcono2 = _interopRequireDefault(_wmsIcono);

var _platzi = __webpack_require__(10);

var _platzi2 = _interopRequireDefault(_platzi);

var _teachers = __webpack_require__(11);

var _teachers2 = _interopRequireDefault(_teachers);

var _renderToDom = __webpack_require__(5);

var _renderToDom2 = _interopRequireDefault(_renderToDom);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

var _teachers3 = __webpack_require__(20);

var _teachers4 = _interopRequireDefault(_teachers3);

__webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_teachers4.default, { data: _teachers2.default }), document.getElementById("container"));

console.log(_teachers2.default);

_teachers2.default.teachers.forEach(function (teacher) {
    var element = document.createElement("li");
    element.textContent = teacher.name;
    (0, _renderToDom2.default)(element);
});

document.write("Probando Web Pack!");
document.write("<br/>");
document.write(_message2.default.firstMessage);
(0, _message.lastMessage)();

document.write("<br/>");

var img = document.createElement("img");
img.setAttribute("src", _wmsIcono2.default);
img.setAttribute("width", 60);
img.setAttribute("height", 60);
document.body.appendChild(img);

/*
const video = document.createElement("video");
video.setAttribute("src", platziVideo);
video.setAttribute("width", 480);
video.setAttribute("autoplay", true);
video.setAttribute("controls", true);
document.body.appendChild(video);
*/

console.log("Probando Webpack!");

/***/ })

},[39]);