

const returnValue = () => {
  return 42;
}

const processor = (arg) => {
  const doubleValue = 2 * arg;
  console.log('doubleValue', doubleValue);
};

// console.log('returnValue',returnValue());

const ref = setTimeout( () => {
  const rv = returnValue();
  processor(rv);
}, 3333 );
