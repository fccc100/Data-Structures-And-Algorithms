// 2046. 给按照绝对值排序的链表排序
// 给你一个链表的头结点 head ，这个链表是根据结点的绝对值进行升序排序, 返回重新根据节点的值进行升序排序的链表。
 
// 示例 1:

// 输入: head = [0,2,-5,5,10,-10]
// 输出: [-10,-5,0,2,5,10]
// 解释:
// 根据结点的值的绝对值排序的链表是 [0,2,-5,5,10,-10].
// 根据结点的值排序的链表是 [-10,-5,0,2,5,10].
// 示例 2：

// 输入: head = [0,1,2]
// 输出: [0,1,2]
// 解释:
// 这个链表已经是升序的了。
// 示例 3：

// 输入: head = [1]
// 输出: [1]
// 解释:
// 这个链表已经是升序的了。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortLinkedList = function(head) {

  let node = new ListNode(head.val);
  let newHead = node;
  let tail = node;

  let cur = head.next;
  while(cur != null) {
    if (cur.val >= 0) {
      // 大于等于0往链表尾部增加
      tail.next = new ListNode(cur.val);
      tail = tail.next;
    } else {
      // 小于0往链表头部增加
      newHead = new ListNode(cur.val, newHead);
    }
    cur = cur.next;
  }
  return newHead;
};