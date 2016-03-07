(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var notice = require('notice');

var noticeText = document.getElementById('noticeText');
var noticeButton = document.getElementById('noticeButton');
noticeButton.addEventListener('click',function() {
    notice(noticeText.value);
});

},{"notice":2}],2:[function(require,module,exports){
/**
 * add a notice, removeable by clicking the 'close button'
 * Creates <p class="notice"><span class="notice--close"></span>text</p>
 * @param  {string}       text               the notice text
 * @param  {boolean}      webkit             if true, the searchfield cancel button will be used on webkti
 * @author Haroen Viaene  <hello@haroen.me>
 * @version 0.2
 */
(function(root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function() {
      return (root.notice = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals
    root.notice = factory();
  }
})(this, function() {
  // UMD Definition above, do not remove this line

  // To get to know more about the Universal Module Definition
  // visit: https://github.com/umdjs/umd

  'use strict';

  var notice = function(text, webkit) {
    var notice = document.createElement('p');
    var close = document.createElement('span');
    var content = document.createTextNode(text);

    notice.setAttribute('role', 'alert');

    notice.appendChild(close);
    notice.appendChild(content);

    close.className += 'notice--close';
    notice.className += 'notice';

    if (webkit && "webkitAppearance" in document.body.style) {
      if ("webkitAppearance" in document.body.style) {
        close.style.webkitAppearance = "searchfield-cancel-button";
      }
    } else {
      close.appendChild(document.createTextNode('✕'));
    }

    document.body.insertBefore(notice, document.body.firstChild);

    close.addEventListener('click', function() {
      document.body.removeChild(notice);
    });
  };

  return notice;

});

},{}]},{},[1]);
