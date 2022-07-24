// 6130. 设计数字容器系统
// 设计一个数字容器系统，可以实现以下功能：

// 在系统中给定下标处 插入 或者 替换 一个数字。
// 返回 系统中给定数字的最小下标。
// 请你实现一个 NumberContainers 类：

// NumberContainers() 初始化数字容器系统。
// void change(int index, int number) 在下标 index 处填入 number 。如果该下标 index 处已经有数字了，那么用 number 替换该数字。
// int find(int number) 返回给定数字 number 在系统中的最小下标。如果系统中没有 number ，那么返回 -1 。


// 示例：

// 输入：
// ["NumberContainers", "find", "change", "change", "change", "change", "find", "change", "find"]
// [[], [10], [2, 10], [1, 10], [3, 10], [5, 10], [10], [1, 20], [10]]
// 输出：
// [null, -1, null, null, null, null, 1, null, 2]

// 解释：
// NumberContainers nc = new NumberContainers();
// nc.find(10); // 没有数字 10 ，所以返回 -1 。
// nc.change(2, 10); // 容器中下标为 2 处填入数字 10 。
// nc.change(1, 10); // 容器中下标为 1 处填入数字 10 。
// nc.change(3, 10); // 容器中下标为 3 处填入数字 10 。
// nc.change(5, 10); // 容器中下标为 5 处填入数字 10 。
// nc.find(10); // 数字 10 所在的下标为 1 ，2 ，3 和 5 。因为最小下标为 1 ，所以返回 1 。
// nc.change(1, 20); // 容器中下标为 1 处填入数字 20 。注意，下标 1 处之前为 10 ，现在被替换为 20 。
// nc.find(10); // 数字 10 所在下标为 2 ，3 和 5 。最小下标为 2 ，所以返回 2 。

// 周赛时的答案，时间复杂度高勉强通过
var NumberContainers = function () {
  this.map = new Map();
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function (index, number) {
  this.map.set(index, number);
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function (number) {
  let res = Infinity;
  for (let entry of this.map) {
    if (entry[1] == number) {
      if (entry[0] < res) {
        res = entry[0];
      }
    }
  }
  return res == Infinity ? -1 : res;
};

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */