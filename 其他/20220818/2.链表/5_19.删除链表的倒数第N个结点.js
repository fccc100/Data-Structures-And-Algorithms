// 19. 删除链表的倒数第 N 个结点
// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// 示例 1：

// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]
// 示例 2：

// 输入：head = [1], n = 1
// 输出：[]
// 示例 3：

// 输入：head = [1,2], n = 1
// 输出：[1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// dummy => 1 => 2 => 3 => 4 => 5

var removeNthFromEnd = function(head, n) {
  let dummyHead = new ListNode(-1, head);
  let slow = dummyHead;
  let fast = dummyHead;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast.next != null) {
    slow = slow.next;
    fast = fast.next;
  }

  let next = slow.next;
  slow.next = next.next;
  next.next = null;
  return dummyHead.next;
};