// 剑指 Offer 66. 构建乘积数组
// 给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B[i] 的值是数组 A 中除了下标 i 以外的元素的积, 即 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。

// 示例:

// 输入: [1,2,3,4,5]
// 输出: [120,60,40,30,24]

/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  let n = a.length;

  // preProduct[i]表示i前面所有元素的乘积
  let preProduct = Array(n);

  // nextProduct[i]表示i后面所有元素的乘积
  let nextProduct = Array(n);

  preProduct[0] = 1;
  for (let i = 1; i < n; i++) {
    preProduct[i] = a[i - 1] * preProduct[i - 1];
  }

  nextProduct[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    nextProduct[i] = a[i + 1] * nextProduct[i + 1];
  }

  for (let i = 0; i < n; i++) {
    a[i] = preProduct[i] * nextProduct[i];
  }
  return a;
};