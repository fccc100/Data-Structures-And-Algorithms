// 1182. 与目标颜色间的最短距离
// 给你一个数组 colors，里面有  1、2、 3 三种颜色。

// 我们需要在 colors 上进行一些查询操作 queries，其中每个待查项都由两个整数 i 和 c 组成。

// 现在请你帮忙设计一个算法，查找从索引 i 到具有目标颜色 c 的元素之间的最短距离。

// 如果不存在解决方案，请返回 -1。

// 示例 1：

// 输入：colors = [1,1,2,1,3,2,2,3,3], queries = [[1,3],[2,2],[6,1]]
// 输出：[3,0,3]
// 解释： 
// 距离索引 1 最近的颜色 3 位于索引 4（距离为 3）。
// 距离索引 2 最近的颜色 2 就是它自己（距离为 0）。
// 距离索引 6 最近的颜色 1 位于索引 3（距离为 3）。
// 示例 2：

// 输入：colors = [1,2], queries = [[0,3]]
// 输出：[-1]
// 解释：colors 中没有颜色 3。

var shortestDistanceColor = function(colors, queries) {
  let map = new Map();
  map.set(1, []);
  map.set(2, []);
  map.set(3, []);
  for (let i = 0; i < colors.length; i++) {
    map.get(colors[i]).push(i);
  }

  let res = [];
  for (let i = 0; i < queries.length; i++) {
    let indexs = map.get(queries[i][1]);

    if (!indexs.length) {
      res.push(-1);
      continue  ;
    }
    let min = Infinity;
    for (let j = 0; j < indexs.length; j++) {
      min = Math.min(min, Math.abs(indexs[j] - queries[i][0]));
    }
    res.push(min);
  }
  return res;
};