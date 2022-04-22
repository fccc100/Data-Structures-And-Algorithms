// 225. 用队列实现栈
// 请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。

// 实现 MyStack 类：

// void push(int x) 将元素 x 压入栈顶。
// int pop() 移除并返回栈顶元素。
// int top() 返回栈顶元素。
// boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。
 
// 注意：

// 你只能使用队列的基本操作 —— 也就是 push to back、peek/pop from front、size 和 is empty 这些操作。
// 你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
 
// 示例：

// 输入：
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// 输出：
// [null, null, null, 2, 2, false]

// 解释：
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // 返回 2
// myStack.pop(); // 返回 2
// myStack.empty(); // 返回 False

var MyStack = function() {
  this.queue1 = [];
  this.queue2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue1.push(x);
  return null;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  if (!this.queue1.length) return -1;
  while(this.queue1.length > 1) {
    this.queue2.push(this.queue1.shift());
  }
  let ret = this.queue1.shift();
  while(this.queue2.length) {
    this.queue1.push(this.queue2.shift());
  }
  return ret;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  if (!this.queue1.length) return null;
  while(this.queue1.length > 1) {
    this.queue2.push(this.queue1.shift());
  }
  let ret = this.queue1.shift();
  this.queue2.push(ret);
  while(this.queue2.length) {
    this.queue1.push(this.queue2.shift());
  }
  return ret;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queue1.length == 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */


//  1700. 无法吃午餐的学生数量
//  学校的自助午餐提供圆形和方形的三明治，分别用数字 0 和 1 表示。所有学生站在一个队列里，每个学生要么喜欢圆形的要么喜欢方形的。
//  餐厅里三明治的数量与学生的数量相同。所有三明治都放在一个 栈 里，每一轮：
 
//  如果队列最前面的学生 喜欢 栈顶的三明治，那么会 拿走它 并离开队列。
//  否则，这名学生会 放弃这个三明治 并回到队列的尾部。
//  这个过程会一直持续到队列里所有学生都不喜欢栈顶的三明治为止。
 
//  给你两个整数数组 students 和 sandwiches ，其中 sandwiches[i] 是栈里面第 i​​​​​​ 个三明治的类型（i = 0 是栈的顶部）， students[j] 是初始队列里第 j​​​​​​ 名学生对三明治的喜好（j = 0 是队列的最开始位置）。请你返回无法吃午餐的学生数量。
 
  
 
//  示例 1：
 
//  输入：students = [1,1,0,0], sandwiches = [0,1,0,1]
//  输出：0 
//  解释：
//  - 最前面的学生放弃最顶上的三明治，并回到队列的末尾，学生队列变为 students = [1,0,0,1]。
//  - 最前面的学生放弃最顶上的三明治，并回到队列的末尾，学生队列变为 students = [0,0,1,1]。
//  - 最前面的学生拿走最顶上的三明治，剩余学生队列为 students = [0,1,1]，三明治栈为 sandwiches = [1,0,1]。
//  - 最前面的学生放弃最顶上的三明治，并回到队列的末尾，学生队列变为 students = [1,1,0]。
//  - 最前面的学生拿走最顶上的三明治，剩余学生队列为 students = [1,0]，三明治栈为 sandwiches = [0,1]。
//  - 最前面的学生放弃最顶上的三明治，并回到队列的末尾，学生队列变为 students = [0,1]。
//  - 最前面的学生拿走最顶上的三明治，剩余学生队列为 students = [1]，三明治栈为 sandwiches = [1]。
//  - 最前面的学生拿走最顶上的三明治，剩余学生队列为 students = []，三明治栈为 sandwiches = []。
//  所以所有学生都有三明治吃。