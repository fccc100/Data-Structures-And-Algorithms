// 155. 最小栈
// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

// 实现 MinStack 类:

// MinStack() 初始化堆栈对象。
// void push(int val) 将元素val推入堆栈。
// void pop() 删除堆栈顶部的元素。
// int top() 获取堆栈顶部的元素。
// int getMin() 获取堆栈中的最小元素。
 
// 示例 1:
// 输入：
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// 输出：
// [null,null,null,null,-3,null,0,-2]

// 解释：
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.getMin();   --> 返回 -2.

var MinStack = function() {
  this.stack1 = [];
  this.stack2 = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack1.push(val);

  let temp = [];
  while(this.stack2.length && this.stack2[this.stack2.length - 1] < val) {
    temp.push(this.stack2.pop());
  }
  this.stack2.push(val);

  while(temp.length) {
    this.stack2.push(temp.pop())
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let val = this.stack1.pop();

  let temp = [];
  while(this.stack2[this.stack2.length - 1] != val) {
    temp.push(this.stack2.pop());
  }

  this.stack2.pop();
  while(temp.length) {
    this.stack2.push(temp.pop());
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack1[this.stack1.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.stack2[this.stack2.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// 方法二
// 保存最小值的栈不需要保存正确的值，需要使用一个额外的栈
var MinStack = function() {
  this.stack1 = [];
  this.stack2 = [Infinity];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack1.push(val);

  this.stack2.push(Math.min(this.stack2[this.stack2.length - 1], val));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack1.pop();
  this.stack2.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack1[this.stack1.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.stack2[this.stack2.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var MinStack = function() {
  this.x_stack = [];
  this.min_stack = [Infinity];
};

MinStack.prototype.push = function(x) {
  this.x_stack.push(x);
  this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));
};

MinStack.prototype.pop = function() {
  this.x_stack.pop();
  this.min_stack.pop();
};

MinStack.prototype.top = function() {
  return this.x_stack[this.x_stack.length - 1];
};

MinStack.prototype.getMin = function() {
  return this.min_stack[this.min_stack.length - 1];
};
