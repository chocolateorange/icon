/*!
 * @license Copyright(c) 2016 sasa+1
 * Released under the MIT license.
 */
!function(t){function e(i){if(l[i])return l[i].exports;var c=l[i]={exports:{},id:i,loaded:!1};return t[i].call(c.exports,c,c.exports,e),c.loaded=!0,c.exports}var l={};return e.m=t,e.c=l,e.p="./",e(0)}([function(t,e,l){"use strict";function i(t,e){var l=t.getContext("2d");l.fillStyle="white",l.fillRect(0,0,t.width,t.height),l.fillStyle=e,l.fillRect(0,0,1,16),l.fillRect(0,0,16,1),l.fillRect(15,0,1,16),l.fillRect(0,15,16,1),l.fillRect(2,2,2,2),l.fillRect(12,12,2,2),l.fillRect(2,12,2,2)}function c(t,e){var l=t.getContext("2d");l.fillStyle="white",l.fillRect(0,0,t.width,t.height),l.fillStyle=e,l.fillRect(0,0,1,32),l.fillRect(0,0,32,1),l.fillRect(31,0,1,32),l.fillRect(0,31,32,1),l.fillRect(3,3,3,3),l.fillRect(26,26,3,3),l.fillRect(3,26,3,3)}function n(t,e){var l=t.getContext("2d");l.fillStyle="white",l.fillRect(0,0,t.width,t.height),l.fillStyle=e,l.fillRect(0,0,2,48),l.fillRect(0,0,48,2),l.fillRect(46,0,2,48),l.fillRect(0,46,48,2),l.fillRect(5,5,5,5),l.fillRect(38,38,5,5),l.fillRect(5,38,5,5)}function f(t,e){var l=t.getContext("2d");l.fillStyle="white",l.fillRect(0,0,t.width,t.height),l.fillStyle=e,l.fillRect(0,0,2,64),l.fillRect(0,0,64,2),l.fillRect(62,0,2,64),l.fillRect(0,62,64,2),l.fillRect(6,6,6,6),l.fillRect(52,52,6,6),l.fillRect(6,52,6,6)}function r(t,e){var l=t.getContext("2d");l.fillStyle="white",l.fillRect(0,0,t.width,t.height),l.fillStyle=e,l.fillRect(0,0,3,96),l.fillRect(0,0,96,3),l.fillRect(93,0,3,96),l.fillRect(0,93,96,3),l.fillRect(8,8,8,8),l.fillRect(80,80,8,8),l.fillRect(8,80,8,8)}function o(t,e){var l=t.getContext("2d");l.fillStyle="white",l.fillRect(0,0,t.width,t.height),l.fillStyle=e,l.fillRect(0,0,4,128),l.fillRect(0,0,128,4),l.fillRect(124,0,4,128),l.fillRect(0,124,128,4),l.fillRect(10,10,10,10),l.fillRect(108,108,10,10),l.fillRect(10,108,10,10)}function u(t,e){var l=t.getContext("2d");l.fillStyle="white",l.fillRect(0,0,t.width,t.height),l.fillStyle=e,l.fillRect(0,0,5,144),l.fillRect(0,0,144,5),l.fillRect(139,0,5,144),l.fillRect(0,139,144,5),l.fillRect(12,12,15,15),l.fillRect(117,117,15,15),l.fillRect(12,117,15,15)}function d(t,e){t.href=e.toDataURL()}function a(t){var e=document.querySelector("[data-code]"),l=document.querySelector('canvas[width="16"][height="16"]'),a=document.querySelector('canvas[width="32"][height="32"]'),R=document.querySelector('canvas[width="48"][height="48"]'),h=document.querySelector('canvas[width="64"][height="64"]'),s=document.querySelector('canvas[width="96"][height="96"]'),y=document.querySelector('canvas[width="128"][height="128"]'),S=document.querySelector('canvas[width="144"][height="144"]'),v=document.querySelector('link[rel="icon"]');e.innerHTML=t,i(l,t),c(a,t),n(R,t),f(h,t),r(s,t),o(y,t),u(S,t),d(v,l)}function R(t){a(t.target.value)}function h(){var t=document.querySelector('input[type="color"]');t.addEventListener("input",R,!1),a(t.value)}var s=l(2),y=l(1);s("[data-preload-webfonts]","stylesheet"),y(h)},function(t,e,l){/*!
	  * domready (c) Dustin Diaz 2014 - License MIT
	  */
!function(e,l){t.exports=l()}("domready",function(){var t,e=[],l=document,i=l.documentElement.doScroll,c="DOMContentLoaded",n=(i?/^loaded|^c/:/^loaded|^i|^c/).test(l.readyState);return n||l.addEventListener(c,t=function(){for(l.removeEventListener(c,t),n=1;t=e.shift();)t()}),function(t){n?setTimeout(t,0):e.push(t)}})},function(t,e,l){"use strict";function i(t,e){var l,i,f;if(!n){if(!c(t))throw new TypeError("selector must be a String");if(!c(e))throw new TypeError("rel must be a String");for(l=document.querySelectorAll(t),i=0,f=l.length;i<f;++i)l[i].rel=e}}var c=l(3),n=function(){var t=document.createElement("link");return t.relList&&t.relList.supports&&t.relList.supports("preload")}();t.exports=i},function(t,e){"use strict";var l=Object.prototype.toString;t.exports=function(t){return"string"==typeof t||"[object String]"===l.call(t)}}]);