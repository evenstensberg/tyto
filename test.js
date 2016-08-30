var test = require('ava');
var compare = require('./src/compare')

test('it should compare two values', t => {
   const a = [2,4,6,8,10]
   const fun = (num) => (num*num)
   const count = compare(a,fun)

   t.deepEqual(count[0], [2,4,6,8,10]);
});
