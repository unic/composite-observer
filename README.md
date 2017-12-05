# Simple and minimal animation library

This is a small and minimalistic animation library.
You can only animate single value properties like opacity, width or height for example.
If you want to animate properties like margin, you have to use every property separately as margin-top, margin-right etc.

> If you find any issues or bugs with this package, feel free to open an issue on [github](https://github.com/christiansany/simple-animate/issues) and i will try to resolve it as fast as possible. Or simply fix the bugs yourself and open a pull request.


## Installation

```shell
$ npm install simple-animate --save
```

## Importing

```javascript
// ES6 Module
import { polyfill, animate, animateAsPromise } from 'simple-animate';

// CommomJS
const SimpleAnimate = require('simple-animate');
```

## API

* [animate(el, props [, duration [, easing] [, callback [, forceCallback] ] ] )](#animate) ⇒ <code>Function</code>
* [animateAsPromise(el, props [, duration [, easing] ])](#animateAsPromise) ⇒ <code>Promise</code>
* [polyfill([animatePropName [, animateAsPromisePropName] ])](#polyfill) ⇒ <code>undefined</code>

<a name="animate"></a>

### animate(el, props [, duration [, easing] [, callback [, forceCallback] ] ])

Animate an element to target props.

**Returns**: <code>Function</code> - Returns a function which cancels the animation if called

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el | <code>Element</code> |  | The Element to animate |
| props | <code>Object</code> | | The properties & values you want it to look like |
| [duration] | <code>Number</code> | <code>400</code> | Duration of the animation in ms
| [easing] | <code>String</code> | <code>linear</code> | Easing to be used
| [callback] | <code>function</code> |  | Callback function to execute when the animation finished |
| [forceCallback] | <code>boolean</code> | <code>false</code> | If true will force the callback to be executed even if the animation got canceled |

**Example**
```js
// ES6 Module
import { animate } from 'simple-animate';

// CommonJS
const animate = require('simple-animate').animate;

const div = document.querySelector('div');

// Animate div to target props without a callback
animate(div, { width: '200px', height: '100px' }, 500, 'easeInOutCubic');


// Animate div to target props with a callback
animate(div, { width: '300px', height: '200px' }, 500, 'easeInOutCubic', function () {
    console.log('Animation finished, YAY!');
});

// Animate div to target props with a callback, but animation gets canceled and callback will not be reached
const cancelAnimation = animate(div, { width: '200px', height: '100px' }, 500, 'easeInOutCubic', function () {
    console.log('This will not be logged');
});

// Cancel animation after 200ms
setTimeout(cancelAnimation, 200);

// Animate div to target props with a callback, animation will be canceled but callback will be executed anyway
const cancelAnimation = animate(div, { width: '200px', height: '100px' }, 500, 'easeInOutCubic', function () {
    console.log('Forced callback execution');
}, true);

// Cancel animation after 200ms
setTimeout(cancelAnimation, 200);
```

<a name="animateAsPromise"></a>

### animateAsPromise(el, props [, duration [, easing] ])

This is the same as animate, but returns a Promise. This looks nicer, but can't be canceled.

**Returns**: <code>Promise</code> - Returns a Promise which resolves when the animation ends.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| el | <code>Element</code> |  | The Element to animate |
| props | <code>Object</code> | | The properties & values you want it to look like |
| [duration] | <code>Number</code> | <code>400</code> | Duration of the animation in ms
| [easing] | <code>String</code> | <code>linear</code> | Easing to be used


**Example**
```js
// ES6 Module
import { animateAsPromise } from 'simple-animate';

// CommonJS
const animateAsPromise = require('simple-animate').animateAsPromise;

const div = document.querySelector('div');

// Animate div to target props without a callback
animateAsPromise(div, { width: '200px', height: '100px' }, 500, 'easeInOutCubic');

// Animate div to target props with a callback
animateAsPromise(div, { width: '300px', height: '200px' }, 500, 'easeInOutCubic')
    .then(function () {
        console.log('Animation finished, YAY!');
    });

// Animate div to target props with default duration & easing
animateAsPromise(div, { width: '300px', height: '200px' })
    .then(function () {
        console.log('Animation finished, YAY!');
    });
```

<a name="polyfill"></a>

### polyfill([animatePropName [, animateAsPromisePropName] ])

This function will add animate and animateAsPromise to the Element.prototype.
The functions animate and animateAsPromise can be used as shown above with one difference. There will be no need to use the el property, since that will be taken care of :)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| animatePropName | <code>String</code> | customAnimate | Propertyname you want to allocate on the Element.prototype for the animate function |
| animateAsPromisePropName | <code>String</code> | customAnimateAsPromise | Propertyname you want to allocate on the Element.prototype for the animateAsPromise function  |

**Example**
```javascript
// ES6 Module
import { polyfill } from 'simple-animate';

// CommonJS
const polyfill = require('simple-animate').polyfill;

// This adds customAnimate and customAnimateAsPromise to Element.prototype
polyfill();

// Fetching Element from DOM
const div = document.querySelector('div');

// Normal animation
div.customAnimate({ width: '200px', height: '100px' }, 500, 'easeInOutCubic');

// Animation which returns a promise
div.customAnimateAsPromise({ width: '300px', height: '200px' }, 500, 'easeInOutCubic')
    .then(function () {
        console.log('Animation finished, YAY!');
    });
```

## Easings

All credit for the easing function goes to  [gre](https://gist.github.com/gre/1650294)  
Available easings:
* linear
* easeInQuad
* easeOutQuad
* easeInOutQuad
* easeInCubic
* easeOutCubic
* easeInOutCubic
* easeInQuart
* easeOutQuart
* easeInOutQuart
* easeInQuint
* easeOutQuint
* easeInOutQuint

MIT © [Christian Sany](https://github.com/christiansany)
