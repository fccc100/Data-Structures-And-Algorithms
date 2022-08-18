// 203. 移除链表元素
// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 
// 示例 1：

// 输入：head = [1,2,6,3,4,5,6], val = 6
// 输出：[1,2,3,4,5]
// 示例 2：

// 输入：head = [], val = 1
// 输出：[]
// 示例 3：

// 输入：head = [7,7,7,7], val = 7
// 输出：[]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let dummyHead = new ListNode(-1, head);

  let cur = dummyHead;
  while (cur.next != null) {
    if (cur.next.val == val) {
      let next = cur.next;
      cur.next = next.next;
      next.next = null;
    } else {
      cur = cur.next;
    }
  }
  return dummyHead.next;
};

// 递归
var removeElements = function(head, val) {
  if (head == null) {
    return null;
  }

  head.next = removeElements(head.next, val);
  if (head.val == val) {
    return head.next;
  }
  return head;
}