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
        property_name: propKey,
        change_type: type,
        change_to_object: target
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
        property_name: propKey,
        change_type: 'delete',
        change_to_object: target,
        old_value: target[propKey]
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
