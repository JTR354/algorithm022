/* 
小张和骑友小王在路上上不小心走散，小张通过定位仪找到小王的位置并且希望能快速找到小王。
小张最开始在 N 点位置 (0 ≤ N ≤ 100,000)，小王显示在 K 点位置 (0 ≤ K ≤ 100,000)，
小张有两种移动方式：
方式一：在任意点 X，向前走一步 X + 1 或向后走一步 X - 1 需要花费一分钟
方式二：在任意点 X，向前移动到 2 * X 位置需要花费一分钟

假设小王就在原地等待不发生移动，那么小张找到小王最少需要多少分钟？

test case 
input: 4,7
output: 2
*/

/**
 * input: number, number
 * output: number
 */
function findMinMinutes(n, k) {
    /* 
        4, 7
        k 为 偶数 8 = 7 + 1 / 9 - 1 / 4
        k 为 奇数 11 = 10 + 1 / 12 - 1
        f (8) = Math.min(f7, f9, f4)
    */
    return null
}


module.exports = {
    findMinMinutes
}