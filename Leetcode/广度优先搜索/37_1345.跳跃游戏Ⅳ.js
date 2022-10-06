// 1345. 跳跃游戏 IV
// 给你一个整数数组 arr ，你一开始在数组的第一个元素处（下标为 0）。

// 每一步，你可以从下标 i 跳到下标 i + 1 、i - 1 或者 j ：

// i + 1 需满足：i + 1 < arr.length
// i - 1 需满足：i - 1 >= 0
// j 需满足：arr[i] == arr[j] 且 i != j
// 请你返回到达数组最后一个元素的下标处所需的 最少操作次数 。

// 注意：任何时候你都不能跳到数组外面。

// 示例 1：

// 输入：arr = [100,-23,-23,404,100,23,23,23,3,404]
// 输出：3
// 解释：那你需要跳跃 3 次，下标依次为 0 --> 4 --> 3 --> 9 。下标 9 为数组的最后一个元素的下标。
// 示例 2：

// 输入：arr = [7]
// 输出：0
// 解释：一开始就在最后一个元素处，所以你不需要跳跃。
// 示例 3：

// 输入：arr = [7,6,9,6,9,6,9,7]
// 输出：1
// 解释：你可以直接从下标 0 处跳到下标 7 处，也就是数组的最后一个元素处。

/**
 * @param {number[]} arr
 * @return {number}
 */
// 超时
var minJumps = function (arr) {
  let n = arr.length;

  let map = new Map();
  for (let i = 0; i < n; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], []);
    }
    map.get(arr[i]).push(i);
  }

  let visited = Array(n).fill(false);
  let queue = [];
  queue.push(0);
  visited[0] = true;

  let res = 0;
  while (queue.length) {
    let len = queue.length;

    let newQueue = [];
    for (let i = 0; i < len; i++) {
      let cur = queue[i];

      if (cur == n - 1) {
        return res;
      }

      if (cur - 1 >= 0 && !visited[cur - 1]) {
        newQueue.push(cur - 1);
        visited[cur - 1] = true;
      }
      if (cur + 1 < n && !visited[cur + 1]) {
        newQueue.push(cur + 1);
        visited[cur + 1] = true;
      }

      let path = map.get(arr[cur]);
      for (let j = 0; j < path.length; j++) {
        if (path[j] == cur) {
          continue;
        }

        if (!visited[path[j]]) {
          newQueue.push(path[j]);
          visited[path[j]] = true;
        }
      }
    }
    queue = newQueue;
    res++;
  }
  return -1;
};

/**
 * @param {number[]} arr
 * @return {number}
 */
// 访问过后清空map
var minJumps = function (arr) {
  let n = arr.length;

  let map = new Map();
  for (let i = 0; i < n; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], []);
    }
    map.get(arr[i]).push(i);
  }

  let visited = Array(n).fill(false);
  let queue = [];
  queue.push(0);
  visited[0] = true;

  let res = 0;
  while (queue.length) {
    let len = queue.length;

    let newQueue = [];
    for (let i = 0; i < len; i++) {
      let cur = queue[i];

      if (cur == n - 1) {
        return res;
      }

      if (cur - 1 >= 0 && !visited[cur - 1]) {
        newQueue.push(cur - 1);
        visited[cur - 1] = true;
      }
      if (cur + 1 < n && !visited[cur + 1]) {
        newQueue.push(cur + 1);
        visited[cur + 1] = true;
      }

      let path = map.get(arr[cur]);
      for (let j = 0; j < path.length; j++) {
        if (path[j] == cur) {
          continue;
        }

        if (!visited[path[j]]) {
          newQueue.push(path[j]);
          visited[path[j]] = true;
        }
      }
      map.get(arr[cur]).length = 0;
    }
    queue = newQueue;
    res++;
  }
  return -1;
};