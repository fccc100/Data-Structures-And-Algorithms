// 207. 课程表
// 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

// 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
// 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

// 示例 1：

// 输入：numCourses = 2, prerequisites = [[1,0]]
// 输出：true
// 解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
// 示例 2：

// 输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
// 输出：false
// 解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

  // 邻接表建图
  let graph = Array(numCourses);
  for (let i = 0; i < graph.length; i++) {
    graph[i] = [];
  }

  // degree记录每个节点的入度
  let degree = Array(numCourses).fill(0);
  for (let i = 0; i < prerequisites.length; i++) {
    graph[prerequisites[i][1]].push(prerequisites[i][0]);
    degree[prerequisites[i][0]]++;
  }

  // BFS
  let queue = [];
  let res = [];
  for (let i = 0; i < degree.length; i++) {
    if (degree[i] == 0) {
      queue.push(i);
    }
  }

  while(queue.length) {
    let cur = queue.shift();

    res.push(cur);
    for (let i = 0; i < graph[cur].length; i++) {
      // 遍历到相邻节点，删边，入度减1
      degree[graph[cur][i]]--;

      // 入度为0了，加入队列
      if (degree[graph[cur][i]] == 0) {
        queue.push(graph[cur][i]);
      }
    }
  }

  return res.length == numCourses;
};

输入：
[[2,5],[4,3],[2,3]]
输出：
3
预期：
-1

输入：
[[0,3],[1,3],[4,0],[2,0],[2,4]]
输出：
3
预期：
-1

输入：
[[3,4],[2,4],[0,4],[1,4]]
输出：
-1
预期：
4

class Solution {
  public int transportationHub(int[][] path) {

      int n = 0;
      for (int i = 0; i < path.length; i++) {
          n = Math.max(n, Math.max(path[i][0], path[i][1]));
      }
      n = n + 1;

      ArrayList<HashSet<Integer>> graph = new ArrayList<>();
      for (int i = 0; i < n; i++) {
          graph.add(new HashSet());
      }

      int [] inDegree = new int[n];
      
      int [] outDegree = new int[n];
      

      for (int i = 0; i < path.length; i++) {

          graph.get(path[i][0]).add(path[i][1]);
          inDegree[path[i][1]]++;
          outDegree[path[i][0]]++;
      }
      
      
      
      int [] inDegree1 = new int[n];
      for (int i = 0; i < n; i++) {
          if (outDegree[i] == 0 && inDegree[i] == n - 1) {
              return i;
          }
          
      }
      return -1;

      int visitedCnt = 0;
      Queue<Integer> queue = new LinkedList<>();
      for (int i = 0; i < inDegree.length; i++) {
          if (inDegree[i] == 0) {
              queue.offer(i);
              visitedCnt++;
          }
      }
      if (queue.isEmpty()) return -1;



      int res = -1;
      boolean flag = false;
      while (!queue.isEmpty()) {
          int len = queue.size();

          for (int i = 0; i < len; i++) {
              int curV = queue.poll();

              HashSet<Integer> curSet = graph.get(curV);
              for (Integer key : curSet) {
                  inDegree[key]--;
                  if (inDegree[key] == 0) {
                      queue.offer(key);
                      visitedCnt++;
                      if (visitedCnt == n) {
                          flag = true;
                          res = key;
                      }
                      
                  }
              }
          }
      }

      boolean hasRes = true;
      for (int i = 0; i < inDegree.length; i++) {
          if (inDegree[i] > 0) {
              hasRes = false;
          }
      }
      System.out.print(hasRes);
      System.out.print(flag);
      if (hasRes && flag) {
          if (inDegree1[res] < n - 1) {
              System.out.print(1);
              return -1;
          }
          return res;
      } else {
          System.out.print(1);
          return -1;
      }
  }
}