// 315. 计算右侧小于当前元素的个数
// 给你一个整数数组 nums ，按要求返回一个新数组 counts 。数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。

// 示例 1：
// 输入：nums = [5,2,6,1]
// 输出：[2,1,1,0] 
// 解释：
// 5 的右侧有 2 个更小的元素 (2 和 1)
// 2 的右侧仅有 1 个更小的元素 (1)
// 6 的右侧有 1 个更小的元素 (1)
// 1 的右侧有 0 个更小的元素

function countSmaller(nums) {
  let n = nums.length;
  let res = Array(n).fill(0);

  let temp = Array(n);
  let indexs = Array(n);
  let tempIndex = Array(n);
  for (let i = 0; i < n; i++) {
    indexs[i] = i;
  }

  function mergeSort(nums, l, r) {
    if (l >= r) return;
    let mid = Math.floor(l + (r - l) / 2);
    mergeSort(nums, l, mid);
    mergeSort(nums, mid + 1, r);

    if (nums[mid] > nums[mid + 1]) {
      merge(nums, l, mid, r);
    }
  }
  function merge(nums, l, mid, r) {
    for (let i = l; i <= r; i++) {
      temp[i] = nums[i];
    }

    let i = l;
    let j = mid + 1;
    for (let k = l; k <= r; k++) {
      if (i > mid) {
        nums[k] = temp[j];
        tempIndex[k] = indexs[j];
        j++;
      } else if (j > r) {
        nums[k] = temp[i];
        res[indexs[i]] += j - mid - 1;
        tempIndex[k] = indexs[i];
        i++;
      } else if (temp[i] <= temp[j]) {
        nums[k] = temp[i];
        res[indexs[i]] += j - mid - 1;
        tempIndex[k] = indexs[i];
        i++;
      } else {
        nums[k] = temp[j];
        tempIndex[k] = indexs[j];
        j++;
      }
    }

    for (let i = l; i <= r; i++) {
      indexs[i] = tempIndex[i];
    }
  }

  mergeSort(nums, 0, nums.length - 1);
  return res;
}
