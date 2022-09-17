// LCP 09. 最小跳跃次数
// 为了给刷题的同学一些奖励，力扣团队引入了一个弹簧游戏机。游戏机由 N 个特殊弹簧排成一排，编号为 0 到 N-1。初始有一个小球在编号 0 的弹簧处。若小球在编号为 i 的弹簧处，通过按动弹簧，可以选择把小球向右弹射 jump[i] 的距离，或者向左弹射到任意左侧弹簧的位置。也就是说，在编号为 i 弹簧处按动弹簧，小球可以弹向 0 到 i-1 中任意弹簧或者 i+jump[i] 的弹簧（若 i+jump[i]>=N ，则表示小球弹出了机器）。小球位于编号 0 处的弹簧时不能再向左弹。

// 为了获得奖励，你需要将小球弹出机器。请求出最少需要按动多少次弹簧，可以将小球从编号 0 弹簧弹出整个机器，即向右越过编号 N-1 的弹簧。

// 示例 1：

// 输入：jump = [2, 5, 1, 1, 1, 1]

// 输出：3

// 解释：小 Z 最少需要按动 3 次弹簧，小球依次到达的顺序为 0 -> 2 -> 1 -> 6，最终小球弹出了机器。


/**
 * @param {number[]} jump
 * @return {number}
 */
// 超时
var minJump = function (jump) {
  let n = jump.length;

  let visited = Array(n).fill(false);
  let queue = [];
  queue.push(0);
  visited[0] = true;

  let res = 0;
  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let cur = queue.shift();

      if (cur + jump[cur] >= n) {
        return res + 1;
      }

      if (!visited[cur + jump[cur]]) {
        queue.push(cur + jump[cur]);
        visited[cur + jump[cur]] = true;
      }

      for (let j = cur - 1; j >= 0; j--) {
        if (!visited[j]) {
          queue.push(j);
          visited[j] = true;
        }
      }
    }
    res++;
  }
  return -1;
};

// 2.当到达某一个位置cur之后，会执行一遍从0到cur的遍历加入队列
// 因此记录遍历过的最大的cur，下次直接从最大cur开始遍历即可
/**
 * @param {number[]} jump
 * @return {number}
 */
var minJump = function (jump) {
  let n = jump.length;

  let visited = Array(n).fill(false);
  let queue = [];
  queue.push(0);
  visited[0] = true;
  let maxIndex = 0;

  let res = 0;
  while (queue.length) {
    let len = queue.length;
    let newQueue = [];

    for (let i = 0; i < len; i++) {
      let cur = queue[i];

      if (cur + jump[cur] >= n) {
        return res + 1;
      }

      if (!visited[cur + jump[cur]]) {
        newQueue.push(cur + jump[cur]);
        visited[cur + jump[cur]] = true;
      }

      for (let j = maxIndex; j < cur; j++) {
        if (!visited[j]) {
          newQueue.push(j);
          visited[j] = true;
        }
      }
      maxIndex = Math.max(maxIndex, cur);
    }
    queue = newQueue;
    res++;
  }
  return -1;
};