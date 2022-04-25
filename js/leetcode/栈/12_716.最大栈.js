// 716. 最大栈
// 设计一个最大栈数据结构，既支持栈操作，又支持查找栈中最大元素。

// 实现 MaxStack 类：

// MaxStack() 初始化栈对象
// void push(int x) 将元素 x 压入栈中。
// int pop() 移除栈顶元素并返回这个元素。
// int top() 返回栈顶元素，无需移除。
// int peekMax() 检索并返回栈中最大元素，无需移除。
// int popMax() 检索并返回栈中最大元素，并将其移除。如果有多个最大元素，只要移除 最靠近栈顶 的那个。
 
// 示例：
// 输入
// ["MaxStack", "push", "push", "push", "top", "popMax", "top", "peekMax", "pop", "top"]
// [[], [5], [1], [5], [], [], [], [], [], []]
// 输出
// [null, null, null, null, 5, 5, 1, 5, 1, 5]

// 解释
// MaxStack stk = new MaxStack();
// stk.push(5);   // [5] - 5 既是栈顶元素，也是最大元素
// stk.push(1);   // [5, 1] - 栈顶元素是 1，最大元素是 5
// stk.push(5);   // [5, 1, 5] - 5 既是栈顶元素，也是最大元素
// stk.top();     // 返回 5，[5, 1, 5] - 栈没有改变
// stk.popMax();  // 返回 5，[5, 1] - 栈发生改变，栈顶元素不再是最大元素
// stk.top();     // 返回 1，[5, 1] - 栈没有改变
// stk.peekMax(); // 返回 5，[5, 1] - 栈没有改变
// stk.pop();     // 返回 1，[5] - 此操作后，5 既是栈顶元素，也是最大元素
// stk.top();     // 返回 5，[5] - 栈没有改变

var MaxStack = function() {
  this.stack = [];
  this.max = [-Infinity];
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
  this.stack.push(x);
  this.max.push(Math.max(this.max[this.max.length - 1], x));
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
  this.max.pop();
  return this.stack.pop();
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
  return this.max[this.max.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
  // let max = this.max.pop();

  // let temp = [];
  // while(this.stack[this.stack.length - 1] != max) {
  //   temp.push(this.stack.pop());
  // }
  // this.stack.pop();
  // while(temp.length) {
  //   this.stack.push(temp.pop());
  // }

  // return max;
};

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */