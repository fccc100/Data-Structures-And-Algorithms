// 478.在圆内随机生成点
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