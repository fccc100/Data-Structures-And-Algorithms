// 346. 数据流中的移动平均值
// 给定一个整数数据流和一个窗口大小，根据该滑动窗口的大小，计算其所有整数的移动平均值。

// 实现 MovingAverage 类：

// MovingAverage(int size) 用窗口大小 size 初始化对象。
// double next(int val) 计算并返回数据流中最后 size 个值的移动平均值。
 

// 示例：

// 输入：
// ["MovingAverage", "next", "next", "next", "next"]
// [[3], [1], [10], [3], [5]]
// 输出：
// [null, 1.0, 5.5, 4.66667, 6.0]

// 解释：
// MovingAverage movingAverage = new MovingAverage(3);
// movingAverage.next(1); // 返回 1.0 = 1 / 1
// movingAverage.next(10); // 返回 5.5 = (1 + 10) / 2
// movingAverage.next(3); // 返回 4.66667 = (1 + 10 + 3) / 3
// movingAverage.next(5); // 返回 6.0 = (10 + 3 + 5) / 3

/**
 * Initialize your data structure here.
 * @param {number} size
 */
 var MovingAverage = function(size) {
  this.data = [];
  this.sum = 0;
  this.size = size;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  if (this.data.length == this.size) {
    let delVal = this.data.shift();
    this.data.push(val);

    this.sum = this.sum + val - delVal;
  } else {
    this.data.push(val);
    this.sum += val;
  }

  return this.sum / this.data.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */