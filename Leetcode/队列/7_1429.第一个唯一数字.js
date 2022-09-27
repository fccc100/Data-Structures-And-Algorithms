// 1429. 第一个唯一数字
// 给定一系列整数，插入一个队列中，找出队列中第一个唯一整数。

// 实现 FirstUnique 类：

// FirstUnique(int[] nums) 用数组里的数字初始化队列。
// int showFirstUnique() 返回队列中的 第一个唯一 整数的值。如果没有唯一整数，返回 -1。（译者注：此方法不移除队列中的任何元素）
// void add(int value) 将 value 插入队列中。
 

// 示例 1：

// 输入：
// ["FirstUnique","showFirstUnique","add","showFirstUnique","add","showFirstUnique","add","showFirstUnique"]
// [[[2,3,5]],[],[5],[],[2],[],[3],[]]
// 输出：
// [null,2,null,2,null,3,null,-1]
// 解释：
// FirstUnique firstUnique = new FirstUnique([2,3,5]);
// firstUnique.showFirstUnique(); // 返回 2
// firstUnique.add(5);            // 此时队列为 [2,3,5,5]
// firstUnique.showFirstUnique(); // 返回 2
// firstUnique.add(2);            // 此时队列为 [2,3,5,5,2]
// firstUnique.showFirstUnique(); // 返回 3
// firstUnique.add(3);            // 此时队列为 [2,3,5,5,2,3]
// firstUnique.showFirstUnique(); // 返回 -1

/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {

};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {

};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {

};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */