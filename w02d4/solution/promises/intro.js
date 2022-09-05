const promiseGenerator = require('./promise-generator');
const returnPromise = promiseGenerator.returnPromise;

const promise = returnPromise('first promise', 4444);

console.log('promise:',promise);

console.log('first');
console.log('second');

// Not the best way to do this
// setTimeout(()=>{
//   console.log('promise 6 seconds later:',promise);
// },6000);

//
// The RIGHT way to do this
//

promise
  .then((data) => {
    console.log('typeof data:', typeof data);
    console.log('third');
    // const newData = 'another thing';
    // console.log("newData:",newData);
    console.log('data:', data);
    return 43;
  }) // <--- that is just a function call. no magic there!
  .then((data2) => {
    console.log('data2',data2);
    console.log('it is alive!');
  });
