/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualFreq = function (nums) {
  let n = nums.length

  let cnt = new Map()
  let freq = new Map()
  let max = 0
  let res = 0
  for (let i = 0; i < n; i++) {
    let x = nums[i]
    if (cnt.has(x) && cnt.get(x) > 0) {
      let x_cnt = cnt.get(x)
      freq.set(x_cnt, freq.get(x_cnt) - 1)
    }

    cnt.set(x, cnt.has(x) ? cnt.get(x) + 1 : 1)
    freq.set(cnt.get(x), (freq.get(cnt.get(x)) || 0) + 1)
    max = Math.max(max, cnt.get(x))

    // 最大出现次数为1
    let ok = max == 1
    // 正好多了个单独的元素
    ok = ok || max * freq.get(max) + 1 == i + 1
    // 最高频率的那个数多了一个
    ok = ok || (max - 1) * (freq.get(max - 1) + 1) + 1 == i + 1
    if (ok) {
      res = Math.max(res, i + 1)
    }
  }
  return res
};

// 输入：nums = [2,2,1,1,5,3,3,5]
// 输出：7
// 解释：对于长度为 7 的子数组 [2,2,1,1,5,3,3]，
// 如果我们从中删去 nums[4] = 5，就可以得到 [2,2,1,1,3,3]，里面每个数字都出现了两次。