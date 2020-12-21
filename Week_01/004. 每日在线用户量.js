/* 
4. 每日在线用户量
请根据 x 公司的每日在线用户数量列表，重新生成一个列表。
新列表中对应位置的输出为：距离下次出现比当前更多的在线用户数所需要等待的天数。
如果每日用户在这之后都不会再升高，请用 0 来替代。

示例

输入：
[13, 14, 15, 11, 9, 12, 16, 13]

输出：
[1, 1, 4, 2, 1, 1, 0, 0]

提示：
在线用户数量列表的范围是 [1, 30000]
在线用户的量单位是万，具体是 [1, 100] 的整数。
*/


/**
 * input: number[]
 * output: number[]
 */
function dailyTemperatures(T) {
  /* 
  1. 迭代 两层循环 O(n)
  2. 栈
  */
//  const result = []
//  for (let i = 0; i < T.length - 1; i++) {
//    for (let j = i + 1; j < T.length; j++) {
//      if (T[j] > T[i]) {
//        result.push(j - i)
//        break
//      } else if (j === T.length - 1){
//        result.push(0)
//      }
//    }
//  }
//  result.push(0)
//  return result
  const stack = []
  const result = []
  let j = 0
  for (let i = 0 ; i < T.length; i ++) {
    while(stack.length && stack[stack.length - 1] < T[i]) {
      stack.pop()
      result.push(j)
      j = 0
    }
    stack.push(T[i])
    j++
  }
  return result.concat(new Array(stack.length).fill(0))
}

module.exports = {
  dailyTemperatures
}