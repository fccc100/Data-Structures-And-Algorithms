// 1996. 游戏中弱角色的数量
// 你正在参加一个多角色游戏，每个角色都有两个主要属性：攻击 和 防御 。给你一个二维整数数组 properties ，其中 properties[i] = [attacki, defensei] 表示游戏中第 i 个角色的属性。

// 如果存在一个其他角色的攻击和防御等级 都严格高于 该角色的攻击和防御等级，则认为该角色为 弱角色 。更正式地，如果认为角色 i 弱于 存在的另一个角色 j ，那么 attackj > attacki 且 defensej > defensei 。

// 返回 弱角色 的数量。

// 示例 1：

// 输入：properties = [[5,5],[6,3],[3,6]]
// 输出：0
// 解释：不存在攻击和防御都严格高于其他角色的角色。
// 示例 2：

// 输入：properties = [[2,2],[3,3]]
// 输出：1
// 解释：第一个角色是弱角色，因为第二个角色的攻击和防御严格大于该角色。
// 示例 3：

// 输入：properties = [[1,5],[10,4],[4,3]]
// 输出：1
// 解释：第三个角色是弱角色，因为第二个角色的攻击和防御严格大于该角色。

/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function(properties) {
  let n = properties.length;

  // 先按攻击力从大到小排序，如果攻击力一样的，再按防御力从小到大排序
  properties.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    } else {
      return b[0] - a[0];
    }
  })

  // 从前往后遍历，同时记录最大防御力，如果遇到防御力比最大防御力小的，说明是弱角色
  // 因为相同攻击力的角色已经按防御力从小到大排序了，所以相同攻击力的角色不可能存在后遍历防御力却小于最大防御力的情况
  let res = 0;
  let maxDefense = properties[0][1];
  for (let i = 1; i < n; i++) {
    if (properties[i][1] < maxDefense) {
      res++;
    } 
    maxDefense = Math.max(maxDefense, properties[i][1]);
  }
  return res;
};

// [[1,1],[2,1],[2,2],[1,2]]

// 攻击力从大到小排序
// [[2, 1], [2, 2], [1, 1], [1, 2]]

//    [[1, 5], [10, 4], [4, 3]]
//    [[10, 4], [4, 3], [1, 5]]