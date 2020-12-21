const { findMinMinutes } = require("./002.追赶朋友");

describe(`002.追赶朋友`, () => {
  it(`t1 4`, () => {
    expect(findMinMinutes(4, 7)).toBe(2);
  });
});
