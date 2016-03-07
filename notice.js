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
