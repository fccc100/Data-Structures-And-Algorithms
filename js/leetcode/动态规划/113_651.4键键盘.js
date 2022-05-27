// 651. 4键键盘
// 假设你有一个特殊的键盘包含下面的按键：

// A：在屏幕上打印一个 'A'。
// Ctrl-A：选中整个屏幕。
// Ctrl-C：复制选中区域到缓冲区。
// Ctrl-V：将缓冲区内容输出到上次输入的结束位置，并显示在屏幕上。
// 现在，你可以 最多 按键 n 次（使用上述四种按键），返回屏幕上最多可以显示 'A' 的个数 。

// 示例 1:

// 输入: n = 3
// 输出: 3
// 解释: 
// 我们最多可以在屏幕上显示三个'A'通过如下顺序按键：
// A, A, A
// 示例 2:

// 输入: n = 7
// 输出: 9
// 解释: 
// 我们最多可以在屏幕上显示九个'A'通过如下顺序按键：
// A, A, A, Ctrl A, Ctrl C, Ctrl V, Ctrl V
// 1  2  3   3
/**
 * @param {number} n
 * @return {number}
 */
var maxA = function (n) {
  // dp[i]表示按键i次最多可以显示 A 的个数
  let dp = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    // 遍历前面可能的Ctrl A后Ctrl V
    // 要在i位置按下Ctrl V，那最晚也是在i - 2的地方按下Ctrl A
    // 如果在j位置按下了Ctrl A，那在i位置可以产生A的个数是 j位置A的个数 * i - j - 1次粘贴 
    for (let j = 0; j < i - 1; j++) {
      dp[i] = Math.max(dp[i], dp[j] * (i - j - 1));
    }
  }
  return dp[n];
};
