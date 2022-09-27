// 379. 电话目录管理系统
// 设计一个电话目录管理系统，让它支持以下功能：

// get: 分配给用户一个未被使用的电话号码，获取失败请返回 -1
// check: 检查指定的电话号码是否被使用
// release: 释放掉一个电话号码，使其能够重新被分配
 
// 示例：

// // 初始化电话目录，包括 3 个电话号码：0，1 和 2。
// PhoneDirectory directory = new PhoneDirectory(3);

// // 可以返回任意未分配的号码，这里我们假设它返回 0。
// directory.get();

// // 假设，函数返回 1。
// directory.get();

// // 号码 2 未分配，所以返回为 true。
// directory.check(2);

// // 返回 2，分配后，只剩一个号码未被分配。
// directory.get();

// // 此时，号码 2 已经被分配，所以返回 false。
// directory.check(2);

// // 释放号码 2，将该号码变回未分配状态。
// directory.release(2);

// // 号码 2 现在是未分配状态，所以返回 true。
// directory.check(2);

/**
 * @param {number} maxNumbers
 */
var PhoneDirectory = function(maxNumbers) {
  this.nums = Array(maxNumbers);
  for (let i = 0; i < maxNumbers; i++) {
    this.nums[i] = i;
  }
};

/**
 * @return {number}
 */
PhoneDirectory.prototype.get = function() {
  if (!this.nums.length) {
    return -1;
  }
  return this.nums.pop();
};

/** 
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function(number) {
  return this.nums.includes(number);
};

/** 
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function(number) {
  if (this.nums.includes(number)) {
    return;
  }
  this.nums.push(number);
};

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */

//  ["PhoneDirectory","get","release","check","check","get","get","check","get","get","get"]
//  [[2],[],[0],[0],[0],[],[],[0],[],[],[]]

//  输出：
// [null,1,null,true,true,0,0,false,-1,-1,-1]

// 预期结果：
// [null,0,null,true,true,1,0,false,-1,-1,-1]