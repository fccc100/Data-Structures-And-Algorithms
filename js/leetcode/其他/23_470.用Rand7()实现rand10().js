// 470. 用 Rand7() 实现 Rand10()
// 给定方法 rand7 可生成 [1,7] 范围内的均匀随机整数，试写一个方法 rand10 生成 [1,10] 范围内的均匀随机整数。

// 你只能调用 rand7() 且不能调用其他方法。请不要使用系统的 Math.random() 方法。

// 每个测试用例将有一个内部参数 n，即你实现的函数 rand10() 在测试时将被调用的次数。请注意，这不是传递给 rand10() 的参数。

// 示例 1:

// 输入: 1
// 输出: [2]
// 示例 2:

// 输入: 2
// 输出: [2,8]
// 示例 3:

// 输入: 3
// 输出: [3,8,10]

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
  return 1 + Math.floor(Math.random() * 10);
};


var rand10 = function () {
  let first, second;

  // 取[1, 6]的6个数
  while ((first = rand7()) > 6);

  // 取[1, 5]的5个数
  while ((second = rand7()) > 5);

  // [1, 6]的6个数判断奇偶行，概率是1/2
  // 用[1, 5]的数 加或者不加5 随机[1, 10]的数
  return (first & 1) == 1 ? second : 5 + second;
};