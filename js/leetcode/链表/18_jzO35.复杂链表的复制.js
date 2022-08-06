// 剑指 Offer 35. 复杂链表的复制
// 请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

// 示例 1：

// 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// 输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
// 示例 2：

// 输入：head = [[1,1],[2,1]]
// 输出：[[1,1],[2,1]]
// 示例 3：

// 输入：head = [[3,null],[3,0],[3,null]]
// 输出：[[3,null],[3,0],[3,null]]
// 示例 4：

// 输入：head = []
// 输出：[]
// 解释：给定的链表为空（空指针），因此返回 null。

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let map = new Map();
  let dummyHead = new Node(-1);
  let cur = dummyHead;
  while (head != null) {
    if (!map.has(head)) {
      let newNode = new Node(head.val);
      map.set(head, newNode);
      cur.next = newNode;
    } else {
      cur.next = map.get(head);
    }
    if (head.random != null) {
      if (!map.has(head.random)) {
        let newNode = new Node(head.random.val);
        cur.next.random = newNode;
        map.set(head.random, newNode);
      } else {
        cur.next.random = map.get(head.random);
      }
    } else {
      cur.next.random = null;
    }
    head = head.next;
    cur = cur.next;
  }
  return dummyHead.next;
};