parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"b/sC":[function(require,module,exports) {
"use strict";function e(){console.log("resize");var e=document.querySelectorAll(".g-artboard[data-min-width]");console.log(e);var t={};e.forEach(function(e){var n=e.parentNode;console.log(e.id);var l=window.innerWidth,o=e.getAttribute("data-min-width"),i=e.getAttribute("data-max-width");console.log(o),console.log(i),t[n.id]=l,o<=l&&(i>=l||null===i)?(e.style.display="block",console.log(e.style.display)):(e.style.display="none",console.log(e.style.display))})}function t(){document.documentElement.classList.add("g-resizer-v3-init"),e(),window.addEventListener("resize",n(e,200))}function n(e,t){var n,l,o,i,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=0,d=Date.now||function(){return(new Date).getTime()},s=function(){r=!1===a.leading?0:d(),n=null,i=e.apply(l,o),n||(l=o=null)};return function(){var u=d();r||!1!==a.leading||(r=u);var c=t-(u-r);return l=this,o=arguments,c<=0||c>t?(n&&(clearTimeout(n),n=null),r=u,i=e.apply(l,o),n||(l=o=null)):n||!1===a.trailing||(n=setTimeout(s,c)),i}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;
},{}]},{},["b/sC"], "script")
//# sourceMappingURL=https://spectator-static-assets.s3.amazonaws.com/native-remains/ai2html-resizer.156db1cd.js.map