// 478. 在圆内随机生成点
// 给定圆的半径和圆心的位置，实现函数 randPoint ，在圆中产生均匀随机点。

// 实现 Solution 类:

// Solution(double radius, double x_center, double y_center) 用圆的半径 radius 和圆心的位置 (x_center, y_center) 初始化对象
// randPoint() 返回圆内的一个随机点。圆周上的一点被认为在圆内。答案作为数组返回 [x, y] 。
 

// 示例 1：

// 输入: 
// ["Solution","randPoint","randPoint","randPoint"]
// [[1.0, 0.0, 0.0], [], [], []]
// 输出: [null, [-0.02493, -0.38077], [0.82314, 0.38945], [0.36572, 0.17248]]
// 解释:
// Solution solution = new Solution(1.0, 0.0, 0.0);
// solution.randPoint ();//返回[-0.02493，-0.38077]
// solution.randPoint ();//返回[0.82314,0.38945]
// solution.randPoint ();//返回[0.36572,0.17248]

/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function(radius, x_center, y_center) {
  this.xCenter = x_center;
  this.yCenter = y_center;
  this.radius = radius;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
  while(true) {
    // 生成[-r, r]的随机数
    let x = Math.random() * (2 * this.radius) - this.radius;
    let y = Math.random() * (2 * this.radius) - this.radius;

    // [-r, r]的随机数是在圆的外接正方形中，如果落在圆外了，重新生成
    if (x * x + y * y <= this.radius * this.radius) {
      return [this.xCenter + x, this.yCenter + y];
    }
  }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */