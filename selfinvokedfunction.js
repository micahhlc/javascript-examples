const add = (function () {
  let counter = 0;

  const innerFunction = function () {
    counter += 1;
    return counter;
  };

  innerFunction.getCounter = function () {
    return counter;
  };

  return innerFunction;
})();

console.log(add()); // Output: 1
console.log(add()); // Output: 2
console.log(add()); // Output: 3

console.log(add.getCounter()); // Output: 3

const getCounter = () => {
  let counter = 0;
  return {
    get: () => counter,
    add: () => ++counter,
    minus: () => --counter,
  };
};

let x = getCounter();
console.log(x.get());
