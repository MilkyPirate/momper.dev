!function(n){function r(r){for(var t,a,s=r[0],u=r[1],l=r[2],c=0,p=[];c<s.length;c++)a=s[c],o[a]&&p.push(o[a][0]),o[a]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(n[t]=u[t]);for(f&&f(r);p.length;)p.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var n,r=0;r<i.length;r++){for(var e=i[r],t=!0,s=1;s<e.length;s++){var u=e[s];0!==o[u]&&(t=!1)}t&&(i.splice(r--,1),n=a(a.s=e[0]))}return n}var t={},o={0:0},i=[];function a(r){if(t[r])return t[r].exports;var e=t[r]={i:r,l:!1,exports:{}};return n[r].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=n,a.c=t,a.d=function(n,r,e){a.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,r){if(1&r&&(n=a(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var t in n)a.d(e,t,function(r){return n[r]}.bind(null,t));return e},a.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(r,"a",r),r},a.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=r,s=s.slice();for(var l=0;l<s.length;l++)r(s[l]);var f=u;i.push([10,1]),e()}([,,,function(n,r,e){var t=e(4);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(2)(t,o);t.locals&&(n.exports=t.locals)},function(n,r,e){(n.exports=e(1)(!1)).push([n.i,"#app {\n  display: grid;\n  grid-auto-rows: 100vh;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n",""])},,function(n,r,e){var t=e(7);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(2)(t,o);t.locals&&(n.exports=t.locals)},function(n,r,e){(n.exports=e(1)(!1)).push([n.i,"header {\n  position: fixed;\n  height: 2em;\n  width: 100%;\n}\n\nnav {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 100%;\n}\n\nnav a {\n  margin: 0 1em;\n  text-decoration: none;\n}\n",""])},function(n,r,e){var t=e(9);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(2)(t,o);t.locals&&(n.exports=t.locals)},function(n,r,e){(n.exports=e(1)(!1)).push([n.i,"",""])},function(n,r,e){"use strict";e.r(r);e(0),e(3),e(6),e(8);"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js")}]);