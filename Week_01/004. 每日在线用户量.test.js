const {dailyTemperatures} = require('./004. 每日在线用户量')

describe(`4. 每日在线用户量`, () => {
  const t1 = [13, 14, 15, 11, 9, 12, 16, 13]
  it.only(`test1 ==> ${t1}`, () => {
    expect(dailyTemperatures(t1)).toEqual([1, 1, 4, 2, 1, 1, 0, 0])
  })

  const t2 = [73,74,75,71,69,72,76,73]
  it (`test2 ==> ${t2}`, () => {
    expect(dailyTemperatures(t2)).toEqual([1,1,4,2,1,1,0,0])
  })
})