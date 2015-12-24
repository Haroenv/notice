# Notice

Give a simple notice at the top of a page, dismissable with a click. Makes use of the `-webkit-appearance: searchfield-cancel-button` on Chrome and Safari, a `✕` on other browsers.

![](https://i.imgur.com/grRUtGU.png)

Demo: [haroen.me/notice](https://haroen.me/notice).

# Usage

Link both `notice.css` and `notice.js` in your html file. Then in a script you can make a new notice by doing

```js
notice('the text inside the notice');
notice('this text will show with a webkit close button',true);
```

# Used by

Haroen Viaene in [haroenv/maps-checker](https://github.com/haroenv/maps-checker).

Haroen Viaene in [haroenv/movies](https://github.com/haroenv/movies).


# License

[![Creative Commons Licence](https://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)

Notice is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/). No warranty whatsoever.