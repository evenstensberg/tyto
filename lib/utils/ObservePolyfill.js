(function() {
'use strict';

// TODO: support 3rd param acceptList
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
var observe = function(obj, callback) {
  if (Object(obj) !== obj) {
    throw new TypeError('target must be an Object, given ' + obj);
  }
  if (typeof callback !== 'function') {
    throw 'observer must be a function, given ' + callback;
  }

  return new Proxy(obj, {

    set(target, propKey, value, receiver) {
      var oldVal = target[propKey];

      // Don't send change record if value didn't change.
      if (oldVal === value) {
        return;
      }

      let type = oldVal === undefined ? 'add' : 'update';

      var changeRecord = {
        name: propKey,
        type: type,
        object: target
      };

      if (type === 'update') {
        changeRecord.oldValue = oldVal;
      }

      target[propKey] = value; // set prop value on target.

      // TODO: handle multiple changes in a single callback.
      callback([changeRecord]);
    },

    deleteProperty(target, propKey, receiver) {
      // Don't send change record if prop doesn't exist.
      if (!(propKey in target)) {
        return;
      }
      var changeRecord = {
        name: propKey,
        type: 'delete',
        object: target,
        oldValue: target[propKey]
      };

      delete target[propKey]; // remove prop from target.

      // TODO: handle multiple changes in a single callback.
      callback([changeRecord]);
    }
  });
};

if (!Object.observe) {
  Object.observe = observe;
}

})();
