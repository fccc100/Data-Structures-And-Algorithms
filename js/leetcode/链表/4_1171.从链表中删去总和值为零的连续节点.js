// 1171. 从链表中删去总和值为零的连续节点
// 给你一个链表的头节点 head，请你编写代码，反复删去链表中由 总和 值为 0 的连续节点组成的序列，直到不存在这样的序列为止。

// 删除完毕后，请你返回最终结果链表的头节点。

// 你可以返回任何满足题目要求的答案。

// （注意，下面示例中的所有序列，都是对 ListNode 对象序列化的表示。）

// 示例 1：

// 输入：head = [1,2,-3,3,1]
// 输出：[3,1]
// 提示：答案 [1,2,1] 也是正确的。

// 示例 2：

// 输入：head = [1,2,3,-3,4]
// 输出：[1,2,4]

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
var removeZeroSumSublists = function(head) {
  let map = new Map();
  let cur = head;
  let sum = 0;
  while(cur != null) {
    sum += cur.val;

    // 如果前n项和为0了，直接将头指向当前节点的下一个节点，map重新计算
    if (sum == 0) {
      head = cur.next;
      map.clear();
    } else {
      map.set(sum, cur);
    }
    cur = cur.next;
  }

  let dummyHead = new ListNode(-1, head);
  let cur1 = dummyHead.next;
  let sum1 = 0;
  while(cur1 != null) {
    sum1 += cur1.val;

    // 如果两个节点处的前n项和一样，说明这个区间内所有节点的和为0，可以直接跳过这段区间
    if (map.has(sum1)) {
      cur1.next = map.get(sum1).next;
    }
    cur1 = cur1.next;
  }
  return dummyHead.next;
};