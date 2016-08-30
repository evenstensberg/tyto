 module.exports = function(object, fn) {
   if(!object || typeof object !== 'object') {
     throw new Error(`First argument must be an object, instead returned: ${object}`);
   }
   if(!fn || typeof fn !== 'function') {
     throw new Error(`Second argument must be a function, instead returned: ${fn}`);
   }

   let result = [];

   if(Array.isArray(object)) {
     const newArr = object.slice(0);
     const updatedArr = []
     newArr.forEach( (key) => {
        updatedArr.push(fn.call(this, key))
     });

    result.push(newArr, updatedArr);

   } else {

     const newObj = Object.assign({}, object)

     try {
       fn.call(this, newObj)
       result.push(object, newObj)
     } catch(err) {
       console.error(err)
     }
   }
   return result
}
