// 327. 区间和的个数
// 给你一个整数数组 nums 以及两个整数 lower 和 upper 。求数组中，值位于范围 [lower, upper] （包含 lower 和 upper）之内的 区间和的个数 。

// 区间和 S(i, j) 表示在 nums 中，位置从 i 到 j 的元素之和，包含 i 和 j (i ≤ j)。

// 示例 1：
// 输入：nums = [-2,5,-1], lower = -2, upper = 2
// 输出：3
// 解释：存在三个区间：[0,0]、[2,2] 和 [0,2] ，对应的区间和分别是：-2 、-1 、2 。

// 使用归并排序思想
function countRangeSum(nums, lower, upper) {
  let res = 0;
  function mergeSort(sums, l, r) {
    if (l >= r) return;

    let mid = Math.floor(l + (r - l) / 2);
    mergeSort(sums, l, mid);
    mergeSort(sums, mid + 1, r);
    merge(sums, l, mid, r);
  }

  function merge(sums, l, mid, r) {
    let temp = sums.slice(l, r + 1);

    // 统计区间和的个数
    let i = l;
    let r1 = mid + 1;
    let r2 = mid + 1;
    while(i <= mid) {
      while(r1 <= r && sums[r1] - sums[i] < lower) {
        r1++;
      }
      while(r2 <= r && sums[r2] - sums[i] <= upper) {
        r2++;
      }
      res += r2 - r1;
      i++;
    }

    i = l;
    j = mid + 1;
    for (let k = l; k <= r; k++) {
      if (i > mid) {
        sums[k] = temp[j - l];
        j++;
      } else if (j > r) {
        sums[k] = temp[i - l];
        i++;
      } else if (temp[i - l] <= temp[j - l]) {
        sums[k] = temp[i - l];
        i++;
      } else {
        sums[k] = temp[j - l];
        j++;
      }
    }
  }

  // 计算nums数组的前缀和数组
  let sums = [0];
  for (let i = 1; i <= nums.length; i++) {
    sums[i] = nums[i - 1] + sums[i - 1];
  }

  // 对前缀和数组进行归并排序
  mergeSort(sums, 0, sums.length - 1);
  return res;
}
