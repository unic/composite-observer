# Composite - Observer

Small and simple observer pattern as a composite for your factories

## Installation

```shell
$ npm install @unic/composite-observer
```

## Importing

```javascript
// ES6 Module
import observer from '@unic/composite-observer';

// CommomJS
const observer = require('@unic/composite-observer');
```

## Usage

A composite can be used in a factory function or in fact for alot of almost anything you want an observer pattern on. This composite is a function which returns an object with three entries on it (on, off & trigger). You can assign the returned obejct to anything you want or you can use it jsut as is.

**Important** in further examples and the API will just infer that you've already generated your new object with the observer pattern on it and will not give any more examples on how to do this.

**Examples**
```js
// Applying the composite to a new object literal
const obj = Object.assign({}, observer());

// Equivalent with lodash.merge
const obj = _.merge({}, observer());

// Just use it as a
const obj = observer();
```

## API

* [on(event, callback[, once = false])](#on)
* TODO: [once(event, callback)](#once)
* [off(identifier)](#off)
* [trigger(event[, params...])](#trigger)

<a name="on"></a>

### on(event, callback[, once = false])

Subscribe to an event

**Returns**: <code>Integer</code> - Returns an identifyer to unsubscribe

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| event | <code>String</code> |  | Eventname to subscribe to |
| callback | <code>function</code> |  | Callback function to execute when the event is triggered |
| [once] | <code>boolean</code> | <code>false</code> | When true, will unsubscribe automatically after first execution |

**Example**
```js
// Subscribe to the 'eventName' event
obj.on('eventName', () => {
  console.log('eventName was called');
});

// Subscribe to the 'eventName' event btu unsubscribe automatically after first call
obj.on('eventName', () => {
  console.log('eventName was called');
  console.log('This handler unsubscribes automatically');
}, true);
```

<a name="once(event, callback)"></a>

### once(identifier)

Unfortunately, this feature is not implemented yet, but will shortly.

<a name="off"></a>

### off(identifier)

Unsubscribe a single handler by the identifier returned by .on() or unsubscribe a whole event group by providing an eventname you want to unsubscribe all listeners from

**Returns**: <code>String/Number</code> - For now... lets jsut say the return doesn't matter

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| identifier | <code>String/Number</code> |  | Either the eventname or the identifiers returned by .on() |


**Example**
```js
// Subscribe to the 'eventName' event
const uid = obj.on('eventName', () => {
  console.log('eventName was called');
});

// Unsubscribe by uid
obj.off(uid);

// Unsubscribe by eventname, this unsubscribes all listeners for this event
obj.off('eventName');
```

<a name="trigger"></a>

### trigger(event[, params...])

Trigger all listeners by eventname

**Returns**: <code>undefined</code>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| event | <code>String</code> |  | Eventname to trigger |
| [params...] | <code>Any</code> |  | Pass any number of arguments you want to receive in the listener |


**Example**
```js
// Subscribe to the 'eventName' event
obj.on('eventName', () => {
  console.log('eventName was called');
});

// Trigger the event 'eventName'
obj.trigger('eventName');

// Subscribe and output all the params you get in the callback
obj.on('eventName', (param1, param2, ...rest) => {
  console.log(param1, param2, rest);
});

// Trigger the event 'eventName' adn add custom parameters for this trigger
obj.trigger('eventName', 'Hello', 'World', '!!!');
```

MIT © [Christian Sany](https://github.com/christiansany)
