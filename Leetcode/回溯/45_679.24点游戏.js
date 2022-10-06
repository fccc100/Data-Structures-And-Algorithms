// 679. 24 点游戏
// 给定一个长度为4的整数数组 cards 。你有 4 张卡片，每张卡片上都包含一个范围在 [1,9] 的数字。您应该使用运算符 ['+', '-', '*', '/'] 和括号 '(' 和 ')' 将这些卡片上的数字排列成数学表达式，以获得值24。

// 你须遵守以下规则:

// 除法运算符 '/' 表示实数除法，而不是整数除法。
// 例如， 4 /(1 - 2 / 3)= 4 /(1 / 3)= 12 。
// 每个运算都在两个数字之间。特别是，不能使用 “-” 作为一元运算符。
// 例如，如果 cards =[1,1,1,1] ，则表达式 “-1 -1 -1 -1” 是 不允许 的。
// 你不能把数字串在一起
// 例如，如果 cards =[1,2,1,2] ，则表达式 “12 + 12” 无效。
// 如果可以得到这样的表达式，其计算结果为 24 ，则返回 true ，否则返回 false 。

// 示例 1:

// 输入: cards = [4, 1, 8, 7]
// 输出: true
// 解释: (8-4) * (7-1) = 24
// 示例 2:

// 输入: cards = [1, 2, 1, 2]
// 输出: false

/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function (cards) {
  const TARGET = 24;
  const ADD = 0, MULTIPLY = 1, SUBTRACT = 2, DIVIDE = 3;

  function judge(nums) {
    if (nums.length == 0) {
      return false;
    }

    if (nums.length == 1) {
      return Math.abs(nums[0] - TARGET) < 1e-6;
    }

    let n = nums.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // 选两个数，不选一样的， i != j;
        if (i != j) {
          let nums2 = [];
          // 把选的两个数之外的数加到新数组中，备下一轮使用
          for (let k = 0; k < n; k++) {
            if (k != i && k != j) {
              nums2.push(nums[k]);
            }
          }

          // 选择四种运算
          for (let k = 0; k < 4; k++) {
            // 加法和乘法满足交换律，可以跳过
            if (k < 2 && i > j) {
              continue;
            }

            // 把计算结果加入到上面两个数之外的数组中，组成一个长度小1的新数组
            if (k == ADD) {
              nums2.push(nums[i] + nums[j]);
            } else if (k == MULTIPLY) {
              nums2.push(nums[i] * nums[j]);
            } else if (k == SUBTRACT) {
              nums2.push(nums[i] - nums[j]);
            } else if (k == DIVIDE) {
              nums2.push(nums[i] / nums[j]);
            }

            // 新数组继续算
            if (judge(nums2)) {
              return true;
            }

            // 算完当前这个要把刚刚加进去的数字弹出来，回溯
            nums2.pop();
          }
        }
      }
    }
    return false;
  }

  return judge(cards);
};
