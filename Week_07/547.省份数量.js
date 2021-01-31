/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  const visited = []
  let count = 0
  for (let i = 0; i < isConnected.length; i++) {
    if (!visited[i]) {
      dfs(i)
      count++
    }
  }
  return count

  function dfs(i) {
    for (let j = 0; j < isConnected.length; j++) {
      if (isConnected[i][j] === 1 && !visited[j]) {
        visited[j] = true
        dfs(j)
      }
    }
  }
};

class UnionFind {
  constructor(n) {
    this.count = n
    this.parent = []
    for (let i = 0; i < n; i++) {
      this.parent[i] = i
    }
  }
  find(p) {
    let root = p
    while(this.parent[root] !== root) {
      root = this.parent[root]
    }
    while(this.parent[p] !== p) {
      let x = p
      p = this.parent[p]
      this.parent[x] = root
    }
    return root
  }
  union(p, q) {
    const rootP = this.find(p), rootQ = this.find(q)
    if (rootP === rootQ) return
    this.parent[rootP] = rootQ
    this.count--
  }
}

var findCircleNum = function(isConnected) {
  const n = isConnected.length
  const uf = new UnionFind(n)
  uf.union(-3, -4)
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j] === 1) uf.union(i, j)
    }
  }
  return uf.count
};

class UnionFind2 {
  constructor(n) {
    this.count = n
    this.parent = new Array(n).fill(0).map((_, i) => i)
  }
  find(i) {
    if (this.parent[i] !== i) {
      this.parent[i] = this.find(this.parent[i])
    }
    return this.parent[i]
  }
  union(i, j) {
    i = this.find(i), j = this.find(j)
    if (i === j) return false
    this.parent[j] = i
    return --this.count
  }
}

var findCircleNum = function(isConnected) { 
  const n = isConnected.length
  const uf = new UnionFind2(n)
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j] === 1) uf.union(i, j)
    }
  }
  return uf.count
}

// @lc code=end

// @after-stub-for-debug-begin
module.exports = findCircleNum;
// @after-stub-for-debug-end