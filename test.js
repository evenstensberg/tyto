const test = require('ava');
const compare = require('./lib/compare')

test('it should compare two values', t => {
   const a = [2,4,6,8,10]
   const fun = (num) => (num*num)
   const count = compare(a,fun)

   t.deepEqual(count[0], [2,4,6,8,10]);
});

test('function should be flexible about composition', t => {
  const a = { prox: 'oo' }
  const fun = (obj) => ('hello')
  const count = compare(a,fun)

  t.deepEqual(count[1], 'hello')
})
