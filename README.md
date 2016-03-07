# Notice

Give a simple notice at the top of a page, dismissable with a click. Makes use of the `-webkit-appearance: searchfield-cancel-button` on Chrome and Safari, a `✕` on other browsers.

![](https://i.imgur.com/grRUtGU.png)

Demo: [haroen.me/notice](https://haroen.me/notice).

# Usage

## manual way

Link both `style.css` and `notice.js` in your html file. Then in a script you can make a new notice by doing

```js
notice('with text');
notice('with webkit close button',webit);
```

## browserify
You need to install this via npm first like this:

```sh
npm install --save git+https://github.com/haroenv/notice.git
```

Just require notice as any other CommonJS module after installing it via npm:

```javascript
var notice = require('notice');
```

In terms of CSS you have to decide whether you reference the CSS file, which is in the `node_modules` folder or use a tool like [parcelify](https://www.npmjs.com/package/parcelify) to bundle the CSS. 

# Used by

Haroen Viaene in [haroenv/maps-checker](https://github.com/haroenv/maps-checker).

Haroen Viaene in [haroenv/movies](https://github.com/haroenv/movies).


# License

[![Creative Commons Licence](https://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)

Notice is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/). No warranty whatsoever.
