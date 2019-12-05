class Stream {
  constructor(first, computeRest = () => undefined) {
    this.first = first;
    this.computeRest = computeRest;
  }

  rest() {
    if (typeof this.computeRest === "function") {
      this.rest = this.computeRest();
      this.computeRest = undefined;
    }
    return this.rest;
  }
}

Stream.prototype.toString = function() {
  console.log("Stream");
  console.log("first", this.first);

  return this;
};

const intStream = number => {
  const computeRest = () => {
    return intStream(number + 1);
  };

  return new Stream(number, computeRest);
};

const filterStream = (fn, stream) => {
  console.log("filterStream runs ", stream.first);

  const computeRest = () => {
    console.log("run filterRest", stream.first, fn);
    return filterStream(fn, stream.rest());
  };

  console.log("indivible function runs");

  if (fn(stream.first)) {
    console.log("filter passed");
    return new Stream(stream.first, computeRest);
  }

  return computeRest();
};

const primes = stream => {
  console.log("primes function run");

  const indivible = x => {
    console.log("x is ", x, "stream number is ", stream.first);
    return x % stream.first !== 0;
  };

  const computeRest = () => {
    console.log("run primesRest", stream.first, stream.computeRest);
    const newStream = filterStream(indivible, stream.rest());
    console.log("new stream is ", stream.first);

    return primes(newStream);
  };

  console.log("return a new prime stream");

  return new Stream(stream.first, computeRest);
};

const i = intStream(2);
const p = primes(i);

p.rest()
  .toString()
  .rest();

// filterStream(x => x % 3 === 0, f)
//   .toString()
//   .rest()
//   .toString();
