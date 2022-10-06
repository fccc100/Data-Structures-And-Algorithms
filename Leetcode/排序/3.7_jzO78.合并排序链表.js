// 剑指 Offer II 078. 合并排序链表
// 给定一个链表数组，每个链表都已经按升序排列。

// 请将所有链表合并到一个升序链表中，返回合并后的链表。

// 示例 1：
// 输入：lists = [[1,4,5],[1,3,4],[2,6]]
// 输出：[1,1,2,3,4,4,5,6]
// 解释：链表数组如下：
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 将它们合并到一个有序链表中得到。
// 1->1->2->3->4->4->5->6

function mergeKLists(lists) {

  let dummyHead = new ListNode(-1);

  for (let i = 0; i < lists.length; i++) {
    dummyHead.next = merge(dummyHead.next, lists[i]);
  }
  
  return dummyHead.next;
}

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