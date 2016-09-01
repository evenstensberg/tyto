 module.exports = function(object, fn) {
   if(!object || typeof object !== 'object') {
     throw new Error(`First argument must be an object or array, instead returned: ${typeof object}`);
   }
   if(!fn || typeof fn !== 'function') {
     throw new Error(`Second argument must be a function, instead returned: ${typeof fn}`);
   }

   let result = [];

   if(Array.isArray(object)) {
     const newArr = object.slice(0);
     const updatedArr = [];
     newArr.forEach( (key) => {
        updatedArr.push(fn.call(this, key));
     });
    result.push(newArr, updatedArr);
    } else {
     let newObj = Object.assign({}, object);
     result.push(object, fn.call(this, newObj));
     }
     return result;
}
