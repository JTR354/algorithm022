# Week03

## 泛型递归&树递归，分治&回溯

剪枝, 提前剪去一些不需要分支

[递归模板](https://shimo.im/docs/EICAr9lRPUIPHxsH/read)

- recursion terminator
- process current logic
- drill down
- reverse the current level status if needed

[分治代码模板](https://shimo.im/docs/zvlDqLLMFvcAF79A/read)
[Backtracking|Introduction](https://www.geeksforgeeks.org/backtracking-introduction/)

分治: 把大问题分解成小问题,再把小问题进行合并
回溯: 大问题分解成小问题,尝试每个小问题,如果不行再回退一步或者几步走其他路径

也就是每个子问题的参数可能不同罢了

解题目思路
if else for while recursion
找 最近 重复子问题 
数学归纳法