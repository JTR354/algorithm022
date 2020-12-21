const { filterRestaurants } = require("./001. 选择餐馆");
describe("1. 选择餐厅", () => {
  it(`
    输入：
restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]]
filter = [0, 40, 10]

输出：[3,2,0,4]
    `, () => {
    const restaurants = [
      [1, 4, 1, 40, 10],
      [2, 8, 0, 50, 5],
      [3, 8, 1, 30, 4],
      [4, 10, 0, 10, 3],
      [5, 1, 1, 15, 1],
    ];
    const filter = [0, 40, 10];
    expect(filterRestaurants(restaurants, filter)).toEqual([3, 2,0, 4]);
  });

  it(`
  输入：
restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]],
filter = [1, 40, 10]

输出：[2,0,4]
  `, () => {
    const restaurants = [
      [1, 4, 1, 40, 10],
      [2, 8, 0, 50, 5],
      [3, 8, 1, 30, 4],
      [4, 10, 0, 10, 3],
      [5, 1, 1, 15, 1],
    ];
    const filter = [1, 40, 10];
    expect(filterRestaurants(restaurants, filter)).toEqual([2, 0 , 4]);
  });
});
