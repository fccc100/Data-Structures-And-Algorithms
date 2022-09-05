// 1438. 绝对差不超过限制的最长连续子数组
// 给你一个整数数组 nums ，和一个表示限制的整数 limit，请你返回最长连续子数组的长度，该子数组中的任意两个元素之间的绝对差必须小于或者等于 limit 。

// 如果不存在满足条件的子数组，则返回 0 。

// 示例 1：

// 输入：nums = [8,2,4,7], limit = 4
// 输出：2 
// 解释：所有子数组如下：
// [8] 最大绝对差 |8-8| = 0 <= 4.
// [8,2] 最大绝对差 |8-2| = 6 > 4. 
// [8,2,4] 最大绝对差 |8-2| = 6 > 4.
// [8,2,4,7] 最大绝对差 |8-2| = 6 > 4.
// [2] 最大绝对差 |2-2| = 0 <= 4.
// [2,4] 最大绝对差 |2-4| = 2 <= 4.
// [2,4,7] 最大绝对差 |2-7| = 5 > 4.
// [4] 最大绝对差 |4-4| = 0 <= 4.
// [4,7] 最大绝对差 |4-7| = 3 <= 4.
// [7] 最大绝对差 |7-7| = 0 <= 4. 
// 因此，满足题意的最长子数组的长度为 2 。
// 示例 2：

// 输入：nums = [10,1,2,4,7,2], limit = 5
// 输出：4 
// 解释：满足题意的最长子数组是 [2,4,7,2]，其最大绝对差 |2-7| = 5 <= 5 。
// 示例 3：

// 输入：nums = [4,2,2,2,4,4,2,2], limit = 0
// 输出：3

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
// 超时
var longestSubarray = function (nums, limit) {
  let n = nums.length;

  let queueMin = [];
  let queueMax = [];

  let l = 0;
  let r = 0;
  let res = 0;

  while (r < n) {
    while (queueMax.length && queueMax[queueMax.length - 1] < nums[r]) {
      queueMax.pop();
    }
    while (queueMin.length && queueMin[queueMin.length - 1] > nums[r]) {
      queueMin.pop();
    }

    queueMax.push(nums[r]);
    queueMin.push(nums[r]);

    while (queueMin.length && queueMax.length && queueMax[0] - queueMin[0] > limit) {
      if (nums[l] == queueMin[0]) {
        queueMin.shift();
      }
      if (nums[l] == queueMax[0]) {
        queueMax.shift();
      }
      l++;
    }
    res = Math.max(res, r - l + 1);
    r++;
  }
  return res;
};

// 2.自己实现队列，仍超时
var longestSubarray = function (nums, limit) {
  let n = nums.length;

  let queueMin = new MyCircularDeque(n);
  let queueMax = new MyCircularDeque(n);

  let l = 0;
  let r = 0;
  let res = 0;

  while (r < n) {
    while (!queueMax.isEmpty() && queueMax.getRear() < nums[r]) {
      queueMax.deleteLast();
    }
    while (!queueMin.isEmpty() && queueMin.getRear() > nums[r]) {
      queueMin.deleteLast();
    }

    queueMax.insertLast(nums[r]);
    queueMin.insertLast(nums[r]);

    while (!queueMin.isEmpty() && !queueMax.isEmpty() && queueMax.getFront() - queueMin.getFront() > limit) {
      if (nums[l] == queueMin.getFront()) {
        queueMin.deleteFront();
      }
      if (nums[l] == queueMax.getFront()) {
        queueMax.deleteFront();
      }
      l++;
    }
    res = Math.max(res, r - l + 1);
    r++;
  }
  return res;
};


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  addLast(val) {
    if (this.head == null) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      let newNode = new Node(val);
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  addFirst(val) {
    if (this.head == null) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      this.head = new Node(val, this.head);
    }
    this.size++;
  }

  getFirst() {
    return this.head.val;
  }

  getLast() {
    return this.tail.val;
  }

  removeFirst() {
    if (this.head == null || this.head.next == null) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
  }

  removeLast() {
    if (this.head == null || this.head.next == null) {
      this.head = null;
      this.tail = null;
    } else {
      let cur = this.head;
      while (cur.next.next != null) {
        cur = cur.next;
      }

      cur.next = null;
      this.tail = cur;
    }
    this.size--;
  }
}

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.size = k;
  this.linkedList = new LinkedList();
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) {
    return false;
  }
  this.linkedList.addFirst(value);
  return true;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) {
    return false;
  }
  this.linkedList.addLast(value);
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) {
    return false;
  }
  this.linkedList.removeFirst();
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) {
    return false;
  }
  this.linkedList.removeLast();
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.linkedList.getFirst();
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.linkedList.getLast();
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.linkedList.getSize() == 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.linkedList.getSize() == this.size;
};