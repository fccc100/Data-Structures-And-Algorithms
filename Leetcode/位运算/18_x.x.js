// 面试题 05.04. 下一个数
// 下一个数。给定一个正整数，找出与其二进制表达式中1的个数相同且大小最接近的那两个数（一个略大，一个略小）。

// 示例1:

//  输入：num = 2（或者0b10）
//  输出：[4, 1] 或者（[0b100, 0b1]）
// 示例2:

//  输入：num = 1
//  输出：[2, -1]

/**
 * @param {number} num
 * @return {number[]}
 */
var findClosedNumbers = function (num) {
  // if (num == 1) {
  //   return [2, -1];
  // }

  // let firstOne, rightZero, leftZero
  // for (let i = 0; i < 32; i++) {
  //   if ((num & (1 << i)) != 0) {
  //     if (rightZero !== undefined) {
  //       firstOne = i;
  //       break;
  //     }
  //   } else {
  //     rightZero = i;
  //   }
  // }

  // // for (let i = firstOne; i < 32; i++) {
  // //   if ((num & (1 << i)) == 0) {
  // //     leftZero = i;
  // //     break;
  // //   }
  // // }

  // let min = num;
  // if (rightZero !== undefined) {
  //   min |= (1 << rightZero);
  //   min &= ~(1 << firstOne);
  // } else {
  //   min = -1;
  // }

  // let max = num;
  // // if (leftZero !== undefined) {
  //   // max |= (1 << leftZero);
  //   max &= ~(1 << firstOne);
  //   max <<= 1;
  //   max |= 1;
  // // } else {
  // //   max = -1;
  // // }

  // return [max, min];
};