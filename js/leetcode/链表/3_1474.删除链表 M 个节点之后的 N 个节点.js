// 1474. 删除链表 M 个节点之后的 N 个节点
// 给定链表 head 和两个整数 m 和 n. 遍历该链表并按照如下方式删除节点:

// 开始时以头节点作为当前节点.
// 保留以当前节点开始的前 m 个节点.
// 删除接下来的 n 个节点.
// 重复步骤 2 和 3, 直到到达链表结尾.
// 在删除了指定结点之后, 返回修改过后的链表的头节点.

// 示例 1:
// 输入: head = [1,2,3,4,5,6,7,8,9,10,11,12,13], m = 2, n = 3
// 输出: [1,2,6,7,11,12]
// 解析: 保留前(m = 2)个结点,  也就是以黑色节点表示的从链表头结点开始的结点(1 ->2).
// 删除接下来的(n = 3)个结点(3 -> 4 -> 5), 在图中以红色结点表示.
// 继续相同的操作, 直到链表的末尾.
// 返回删除结点之后的链表的头结点.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var deleteNodes = function(head, m, n) {
  let dummyHead = new ListNode(-1, head);

  let cur = dummyHead;

  // 记录当前遍历节点的index，用index % (m + n), 如果结果小于m说明该节点需要被保留，否则说明该节点需要删除
  let index = 0;
  while(cur.next != null) {
    if (index % (m + n) < m) {
      index ++;
      cur = cur.next;
    } else {
      let next = cur.next;
      cur.next = next.next;
      next.next = null;
      index++;
    }
  }

  return dummyHead.next;
};