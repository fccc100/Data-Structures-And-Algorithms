// 求图从start 到 target的一条路径，这里是从0到n - 1
var allPathsSourceTarget = function (graph) {
  let n = graph.length;

  let visited = Array(n).fill(false);
  let from = Array(n).fill(-1);

  function dfs(v) {
    visited[v] = true;

    for (let i = 0; i < graph[v].length; i++) {
      if (!visited[graph[v][i]]) {
        from[graph[v][i]] = v;
        dfs(graph[v][i]);
      }
    }
  }

  dfs(0);

  let p = n - 1;
  let stack = [];
  while (p != -1) {
    stack.push(p);
    p = from[p];
  }
  let res = [];
  res.push(stack.reverse());

  return res;
};