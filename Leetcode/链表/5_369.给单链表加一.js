// 369. 给单链表加一
// 给定一个用链表表示的非负整数， 然后将这个整数 再加上 1 。

// 这些数字的存储是这样的：最高位有效的数字位于链表的首位 head 。

// 示例 1:

// 输入: head = [1,2,3]
// 输出: [1,2,4]

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
var plusOne = function(head) {
  let carry = 0;
  function _plusOne(head) {
    if (head == null) {
      return null;
    }
    
    // 递归，从最后一个节点开始处理
    head.next = _plusOne(head.next);

    // 如果是最后一个节点，判断是否是9，是9就把值改为0，记录有1的进位
    if (head.next == null) {
      if (head.val != 9) {
        head.val = head.val + 1;
        return head;
      } else {
        head.val = 0;
        carry = 1;
        return head;
      }
    } else {

      // 不是最后一个节点，如果没有进位直接返回，如果有进位，再判断是否为9
      if (carry == 0) {
        return head;
      } else {
        if (head.val != 9) {
          head.val = head.val + 1;
          carry = 0;
          return head;
        } else {
          head.val = 0;
          carry = 1;
          return head;
        }
      }
    }
  }

  head = _plusOne(head);
  // 最后如果还有进位，新增一个值为1的节点放在头上
  if (carry == 1) {
    head = new ListNode(1, head);
  }
  return head;
};