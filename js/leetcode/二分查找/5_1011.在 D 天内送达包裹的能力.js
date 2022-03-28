// 1011. 在 D 天内送达包裹的能力
// 传送带上的包裹必须在 days 天内从一个港口运送到另一个港口。

// 传送带上的第 i 个包裹的重量为 weights[i]。每一天，我们都会按给出重量（weights）的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。

// 返回能在 days 天内将传送带上的所有包裹送达的船的最低运载能力。

// 示例 1：
// 输入：weights = [1,2,3,4,5,6,7,8,9,10], days = 5
// 输出：15
// 解释：
// 船舶最低载重 15 就能够在 5 天内送达所有包裹，如下所示：
// 第 1 天：1, 2, 3, 4, 5
// 第 2 天：6, 7
// 第 3 天：8
// 第 4 天：9
// 第 5 天：10

// 请注意，货物必须按照给定的顺序装运，因此使用载重能力为 14 的船舶并将包装分成 (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) 是不允许的。 

function shipWithinDays(weights, days) {
  let l = weights[0];
  let r = 0;
  for (let i = 0; i < weights.length; i++) {
    l = Math.max(l, weights[i]);
    r += weights[i];
  }

  while(l < r) {
    let mid = l + (r - l >> 1);
    if (useDays(weights, mid) === days) {
      r = mid;
    } else if (useDays(weights, mid) > days) {
      l = mid + 1;
    } else if (useDays(weights, mid) < days) {
      r = mid;
    }
  }

  return l;
}

function useDays(weights, k) {
  let res = 0;
  let weight = 0;
  for (let i = 0; i < weights.length; i++) {
    if (weight + weights[i] <= k) {
      weight += weights[i];
    } else {
      res++;
      weight = weights[i];
    }
  }
  res++;
  return res;
}