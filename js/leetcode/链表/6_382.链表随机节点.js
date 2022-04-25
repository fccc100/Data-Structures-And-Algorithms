// 382. 链表随机节点
// 给你一个单链表，随机选择链表的一个节点，并返回相应的节点值。每个节点 被选中的概率一样 。

// 实现 Solution 类：

// Solution(ListNode head) 使用整数数组初始化对象。
// int getRandom() 从链表中随机选择一个节点并返回该节点的值。链表中所有节点被选中的概率相等。
 
// 示例：
// 输入
// ["Solution", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"]
// [[[1, 2, 3]], [], [], [], [], []]
// 输出
// [null, 1, 3, 2, 2, 3]

// 解释
// Solution solution = new Solution([1, 2, 3]);
// solution.getRandom(); // 返回 1
// solution.getRandom(); // 返回 3
// solution.getRandom(); // 返回 2
// solution.getRandom(); // 返回 2
// solution.getRandom(); // 返回 3
// // getRandom() 方法应随机返回 1、2、3中的一个，每个元素被返回的概率相等。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.head = head;
  let cur = head;
  let size = 0;
  while(cur != null) {
    size++;
    cur = cur.next;
  }
  this.size = size;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  let randomIndex = 1 + Math.round(Math.random() * (this.size - 1));

  let cur = this.head;
  let index = 1;
  while(index < randomIndex) {
    index++;
    cur = cur.next;
  }
  return cur.val;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */