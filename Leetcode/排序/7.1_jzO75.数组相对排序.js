// 剑指 Offer II 075. 数组相对排序
// 给定两个数组，arr1 和 arr2，

// arr2 中的元素各不相同
// arr2 中的每个元素都出现在 arr1 中
// 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

// 示例：
// 输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// 输出：[2,2,2,1,4,3,3,9,6,7,19]

// 计数排序
function relativeSortArray(arr1, arr2) {
  // 求数组1中的最大值
  let max = 0;
  for (let i = 0; i < arr1.length; i++) {
    max = Math.max(max, arr1[i]);
  }

  // 统计每个元素的个数
  let count = Array(max + 1).fill(0);
  for (let i = 0; i < arr1.length; i++) {
    count[arr1[i]] ++;
  }

  // 先将arr2中的元素根据频次放入结果数组
  let res = Array(arr1.length);
  let index = 0;
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < count[arr2[i]]; j++) {
      res[index] = arr2[i];
      index++;
    }
    count[arr2[i]] = 0;
  }

  // 再将剩余的数放入结果数组
  for (let i = 0; i <= max; i++) {
    for (let j = 0; j < count[i]; j++) {
      res[index] = i;
      index++;
    }
  }
  return res;
}


