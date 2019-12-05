const curry = (fn, arr = []) => {
  if (typeof fn !== "function") throw Error("No function provided");

  return (...args) =>
    (argsAll =>
      argsAll.length >= fn.length ? fn(...argsAll) : curry(fn, argsAll))([
      ...arr,
      ...args
    ]);
};

module.exports = curry;
