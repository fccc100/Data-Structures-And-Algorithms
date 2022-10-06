// 剑指 Offer II 077. 链表排序
// 给定链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

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

// 归并排序
function sortList(head) {
  if (head == null || head.next == null) {
    return head;
  }

  let slow = head;
  let fast = head.next;
  while(fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let head2 = slow.next;
  slow.next = null;
  return merge(sortList(head), sortList(head2));
};

function merge(head1, head2) {
  let dummyHead = new ListNode(-1);
  let temp = dummyHead;
  while(head1 != null && head2 != null) {
    if (head1.val < head2.val) {
      temp.next = head1;
      head1 = head1.next;
    } else {
      temp.next = head2;
      head2 = head2.next;
    }
    temp = temp.next;
  }
  if (head1 != null) {
    temp.next = head1;
  }
  if (head2 != null) {
    temp.next = head2;
  }
  return dummyHead.next;
}