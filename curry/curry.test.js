const curry = require("./curry");

describe("Curry function generator", () => {
  test("should return a function", () => {
    const add = () => {};
    expect(curry(add)).toBeInstanceOf(Function);
  });

  test("should throw an error if there is no valid function provided as argument", () => {
    expect(() => {
      curry();
    }).toThrow();
  });
});

describe("Curry functions", () => {
  let add;

  beforeEach(() => {
    add = (a, b, c) => a + b + c;
  });

  test("should return the proper result if called with original number of arguments", () => {
    const curriedAdd = curry(add);
    expect(curriedAdd(1, 2, 3)).toBe(6);
  });

  test("should return a function when arguments count is less than the original number of arguments", () => {
    const curriedAdd = curry(add);
    expect(curriedAdd(1, 2)).toBeInstanceOf(Function);
  });

  test("should return the result whenever the total number of arguments is greater than or equal to the original number of arguments", () => {
    const curriedAdd = curry(add);
    expect(curriedAdd(1)(2)).toBeInstanceOf(Function);
    expect(curriedAdd(1)(2)(3)).toBe(6);
    expect(curriedAdd(1, 2)(3)).toBe(6);
    expect(curriedAdd(1)(2, 3)).toBe(6);
    expect(curriedAdd(1)(2)(3, 4, 5, 6)).toBe(6);
  });

  test("should support creating multiple curry function", () => {
    const curriedA = curry(add);
    const curriedB = curry(add);

    expect(curriedA(1, 2)(3)).toBe(6);
    expect(curriedA(1, 2)).toBeInstanceOf(Function);

    expect(curriedB(1, 2)(3)).toBe(6);
    expect(curriedB(1, 2)).toBeInstanceOf(Function);
  });
});
