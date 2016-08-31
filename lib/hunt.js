const chalk = require('chalk')
require('./utils/ObservePolyfill')

module.exports = function(object, fn) {
  if(!object || typeof object !== 'object') {
    throw new Error(`First argument must be an object or array, instead returned: ${object}`);
  }
  if(!fn || typeof fn !== 'function') {
    throw new Error(`Second argument must be a function, instead returned: ${fn}`);
  }

  let result = [];

  if(Array.isArray(object)) {
    throw new Error(`First argument must be an object, instead returned: ${typeof object}`)
  } else {
    let newObj = Object.assign({}, object);

    newObj = Object.observe(newObj, (changes) => {
    changes.forEach(function(c, i) {
      console.log(chalk.yellow('\nChanges were made:\n\n'), c, '\n\n')
      });
    });

    let callFunc = fn.call(this, newObj);
    result.push(object, callFunc);
    }
    return result;
}
