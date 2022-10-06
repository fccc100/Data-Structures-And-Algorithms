// 剑指 Offer 59 - II. 队列的最大值
// 请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

// 若队列为空，pop_front 和 max_value 需要返回 -1

// 示例 1：

// 输入: 
// ["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
// [[],[1],[2],[],[],[]]
// 输出: [null,null,null,2,1,2]

var MaxQueue = function() {
  this.queue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
  if (!this.queue.length) return -1;
  let max = this.queue[0];
  for (let i = 0; i < this.queue.length; i++) {
    max = Math.max(max, this.queue[i]);
  }
  return max;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  this.queue.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  if (!this.queue.length) return -1;
  return this.queue.shift();
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */