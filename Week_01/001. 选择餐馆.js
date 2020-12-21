/* 
由于 x 公司内部没有餐厅，每个小组中午周边吃饭已经成为这家公司的习惯，可是到底选择哪家餐馆成为一大难题，小张决定写一个餐馆选择器来帮助小组解决选择餐馆的问题；

通过爬取以及分析大众点评的数据，可以拿到餐馆的口味，价格，距离，以及大众点评的评分，用一个数组 restaurants 表示收集到的信息，其中 restaurants[i] = [idi, ratingi, flavori, pricei, distancei]

每天可以给餐馆选择器输入以下 filter = [Flavor, MaxPrice, MaxDistance] 来做出选择：
在第一版中，口味 Flavor 主要分为辣和不辣两种，相应取值为 true 和 false, 为 true 时表示选择辣的餐厅，为 false 则意味任意餐厅；
此外，还有最大价格 MaxPrice 和最大距离 MaxDistance 两个，分别表示选择餐厅的价格因素和距离因素的最大值。

经过餐馆选择器的选择后返回餐馆的 id，按照 rating 从高到低排序。如果 rating 相同，那么按 id 从高到低排序。
简单起见，flavori 和 Flavor 为 true 时取值为 1，为 false 时，取值为 0。

示例 1：

输入：
restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]],
filter = [1, 40, 10]

输出：[2,0,4]

解释：

这些餐馆为：
餐馆 0 [id=1, rating=4, flavor=1, price=40, distance=10]
餐馆 1 [id=2, rating=8, flavor=0, price=50, distance=5]
餐馆 2 [id=3, rating=8, flavor=1, price=30, distance=4]
餐馆 3 [id=4, rating=10, flavor=0, price=10, distance=3]
餐馆 4 [id=5, rating=1, flavor=1, price=15, distance=1]
在按照 Flavor = 1, MaxPrice = 40 和 MaxDistance = 10
进行过滤后，可以得到了餐馆 2, 餐馆 0 和 餐馆 4（按评分从高到低排序）

示例 2：

输入：

restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]]
filter = [0, 40, 10]

输出：[3,2,0,4]

解释：
餐馆与示例 1 相同，但在 Flavor = 0 的过滤条件下，应该考虑所有餐馆。
*/

/**
 * input: number[][], number[]
 * output: number[]
 */
function filterRestaurants(restaurants, filters) {
  /* 
    1. loop & sort
   */
  // flavor, price, distance
  const [f,p,d] = [2,3,4]
  const map = {
    [f]: filters[0],
    [p]: filters[1],
    [d]: filters[2]
  }
  const result = []
  
  // filter O(n)
  for (let i = 0; i < restaurants.length; i++) {
    const canteen = restaurants[i]
    if (canteen[p] <= map[p] && canteen[d] <= map[d]) {
      if (map[f] === 0) {
        result.push(canteen.concat(i))
      } else if (map[f] === 1 && map[f] === canteen[f]) {
        result.push(canteen.concat(i))
      }
    }
  }
  
  // sort O(n*log n)
  result.sort((a,b) => {
    return b[1] - a[1] || (b[1] === a[1] || b[0] - a[0]) 
  })
  return result.map(item => item.pop())
}

module.exports = {
  filterRestaurants,
};
