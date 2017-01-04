'use strict';

const fallbackPreload = require('fallback-preload');

const domready = require('domready');

/**
 * draw icon for 16x16
 *
 * @param {HTMLCanvasElement} canvas
 * @param {String} color
 */
function drawIcon16(canvas, color) {
  const context = canvas.getContext('2d');

  context.fillStyle = 'white';

  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = color;

  context.fillRect( 0,  0,  1, 16);
  context.fillRect( 0,  0, 16,  1);
  context.fillRect(15,  0,  1, 16);
  context.fillRect( 0, 15, 16,  1);

  context.fillRect( 2,  2, 2, 2);
  context.fillRect(12, 12, 2, 2);
  context.fillRect( 2, 12, 2, 2);
}

/**
 * draw icon for 32x32
 *
 * @param {HTMLCanvasElement} canvas
 * @param {String} color
 */
function drawIcon32(canvas, color) {
  const context = canvas.getContext('2d');

  context.fillStyle = 'white';

  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = color;

  context.fillRect( 0,  0,  1, 32);
  context.fillRect( 0,  0, 32,  1);
  context.fillRect(31,  0,  1, 32);
  context.fillRect( 0, 31, 32,  1);

  context.fillRect( 3,  3, 3, 3);
  context.fillRect(26, 26, 3, 3);
  context.fillRect( 3, 26, 3, 3);
}

/**
 * draw icon for 48x48
 *
 * @param {HTMLCanvasElement} canvas
 * @param {String} color
 */
function drawIcon48(canvas, color) {
  const context = canvas.getContext('2d');

  context.fillStyle = 'white';

  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = color;

  context.fillRect(0,  0,  2, 48);
  context.fillRect(0,  0, 48,  2);
  context.fillRect(46, 0,  2, 48);
  context.fillRect(0, 46, 48,  2);

  context.fillRect( 5,  5, 5, 5);
  context.fillRect(38, 38, 5, 5);
  context.fillRect( 5, 38, 5, 5);
}

/**
 * draw icon for 64x64
 *
 * @param {HTMLCanvasElement} canvas
 * @param {String} color
 */
function drawIcon64(canvas, color) {
  const context = canvas.getContext('2d');

  context.fillStyle = 'white';

  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = color;

  context.fillRect(0,  0,  2, 64);
  context.fillRect(0,  0, 64,  2);
  context.fillRect(62, 0,  2, 64);
  context.fillRect(0, 62, 64,  2);

  context.fillRect( 6,  6, 6, 6);
  context.fillRect(52, 52, 6, 6);
  context.fillRect( 6, 52, 6, 6);
}

/**
 * draw icon for 96x96
 *
 * @param {HTMLCanvasElement} canvas
 * @param {String} color
 */
function drawIcon96(canvas, color) {
  const context = canvas.getContext('2d');

  context.fillStyle = 'white';

  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = color;

  context.fillRect(0,  0,  3, 96);
  context.fillRect(0,  0, 96,  3);
  context.fillRect(93, 0,  3, 96);
  context.fillRect(0, 93, 96,  3);

  context.fillRect( 8,  8, 8, 8);
  context.fillRect(80, 80, 8, 8);
  context.fillRect( 8, 80, 8, 8);
}

/**
 * draw icon for 128x128
 *
 * @param {HTMLCanvasElement} canvas
 * @param {String} color
 */
function drawIcon128(canvas, color) {
  const context = canvas.getContext('2d');

  context.fillStyle = 'white';

  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = color;

  context.fillRect(  0,   0,   4, 128);
  context.fillRect(  0,   0, 128,   4);
  context.fillRect(124,   0,   4, 128);
  context.fillRect(  0, 124, 128,   4);

  context.fillRect( 10,  10, 10, 10);
  context.fillRect(108, 108, 10, 10);
  context.fillRect( 10, 108, 10, 10);
}

/**
 * draw icon for 144x144
 *
 * @param {HTMLCanvasElement} canvas
 * @param {String} color
 */
function drawIcon144(canvas, color) {
  const context = canvas.getContext('2d');

  context.fillStyle = 'white';

  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = color;

  context.fillRect(  0,   0,   5, 144);
  context.fillRect(  0,   0, 144,   5);
  context.fillRect(139,   0,   5, 144);
  context.fillRect(  0, 139, 144,   5);

  context.fillRect( 12,  12, 15, 15);
  context.fillRect(117, 117, 15, 15);
  context.fillRect( 12, 117, 15, 15);
}

/**
 * draw icon for favicon
 *
 * @param {HTMLLinkElement} link
 * @param {HTMLCanvasElement} canvas
 */
function drawFavicon(link, canvas) {
  link.href = canvas.toDataURL();
}

/**
 * update icon canvases
 *
 * @param {String} color
 */
function updateIcons(color) {
  const code = document.querySelector('[data-code]');

  const canvas16 = document.querySelector('canvas[width="16"][height="16"]'),
        canvas32 = document.querySelector('canvas[width="32"][height="32"]'),
        canvas48 = document.querySelector('canvas[width="48"][height="48"]'),
        canvas64 = document.querySelector('canvas[width="64"][height="64"]'),
        canvas96 = document.querySelector('canvas[width="96"][height="96"]'),
        canvas128 = document.querySelector('canvas[width="128"][height="128"]'),
        canvas144 = document.querySelector('canvas[width="144"][height="144"]');

  const favicon = document.querySelector('link[rel="icon"]');

  code.innerHTML = color;

  drawIcon16(canvas16, color);
  drawIcon32(canvas32, color);
  drawIcon48(canvas48, color);
  drawIcon64(canvas64, color);
  drawIcon96(canvas96, color);
  drawIcon128(canvas128, color);
  drawIcon144(canvas144, color);

  drawFavicon(favicon, canvas16);
}

/**
 * handler for input of color input
 *
 * @param {Event} event
 */
function onInput(event) {
  updateIcons(event.target.value);
}

/**
 * handler for DOMContentLoaded
 */
function onDOMContentLoaded() {
  const input = document.querySelector('input[type="color"]');

  input.addEventListener('input', onInput, false);

  updateIcons(input.value);
}

fallbackPreload('[data-preload-webfonts]', 'stylesheet');

domready(onDOMContentLoaded);
