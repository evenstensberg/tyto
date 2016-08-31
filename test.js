const test = require('ava');
const compare = require('./main').compare;
const flap = require('./main').flap;
const fly = require('./main').fly;

test('it should compare two values', t => {
   const a = [2,4,6,8,10];
   const fun = (num) => (num*num)
   const count = compare(a,fun);

   t.deepEqual(count[0], [2,4,6,8,10]);
});

test('function should be flexible about composition', t => {
  const a = { prox: 'oo' };
  const fun = (obj) => ('hello');
  const flex = compare(a,fun);

  t.deepEqual(flex[1], 'hello');
});

test('it should have a custom composition', t => {
  const a = { prox: 'boo' };
  const fun = (obj) => {
    let arr = [];
    Object.keys(obj).forEach( (key) => {
       arr.push(obj[key]);
    });
    return arr;
  };
  const customFlex = compare(a,fun);

  t.deepEqual(customFlex[1], ['boo']);
});

test('it should provide the first obj', t => {
  const flexFirst = flap([2,4,6,8,10], (num) => (num*num));

  t.deepEqual(flexFirst, [2,4,6,8,10]);
});

test('it should provide the second obj', t => {
  const flexSecond = fly([2,4,6,8,10], (num) => (num*num));

  t.deepEqual(flexSecond, [4,16,36,64,100]);
});
