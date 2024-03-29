/**
 * @param {number[][]} rooms
 * @param {number[][]} queries
 * @return {number[]}
 */
var closestRoom = function (rooms, queries) {

};

// [[1,4],[2,3],[3,5],[4,1],[5,2]]    [[2,3],[2,4],[2,5]]
// [[4,1],[5,2],[2,3],[1,4],[3,5]]

// 输入：rooms = [[1,4],[2,3],[3,5],[4,1],[5,2]], queries = [[2,3],[2,4],[2,5]]
// 输出：[2,1,3]
// 解释：查询的答案如下：
// 查询 [2,3] ：房间 2 的面积为 3 ，大于等于 3 ，且号码是最接近的，为 abs(2 - 2) = 0 ，所以答案为 2 。
// 查询 [2,4] ：房间 1 和 3 的面积都至少为 4 ，答案为 1 因为它房间编号更小。
// 查询 [2,5] ：房间 3 是唯一面积大于等于 5 的，所以答案为 3 。