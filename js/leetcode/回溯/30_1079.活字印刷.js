// 1079. 活字印刷
// 你有一套活字字模 tiles，其中每个字模上都刻有一个字母 tiles[i]。返回你可以印出的非空字母序列的数目。

// 注意：本题中，每个活字字模只能使用一次。

// 示例 1：
// 输入："AAB"
// 输出：8
// 解释：可能的序列为 "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA"。

function numTilePossibilities(tiles) {
  let count = Array(26).fill(0);
  for (let i = 0; i < tiles.length; i++) {
    count[tiles[i].charCodeAt() - 'A'.charCodeAt()] ++;
  }

  function dfs(count) {
    let sum = 0;
    for (let i = 0; i < 26; i++) {
      if (count[i] == 0) continue;
      count[i]--;
      sum++;
      sum += dfs(count);
      count[i]++;
    }
    return sum;
  }

  return dfs(count);

  // let res = [];
  // let visited = [];

  // function dfs(words, index, s) {
  //   if (s.length) {
  //     res.push(s);
  //   }
  //   if (index == words.length) return;

  //   let set = new Set();
  //   for (let i = index; i < words.length; i++) {
  //     if (set.has(tiles[i])) continue;
  //       set.add(tiles[i]);
  //       dfs(words, i, s + words[i]);      
  //   }
  // }
  
  // dfs(tiles, 0, '');
  // return res.length;


  // let words = [];
  // let res = [];
  // let visited = [];
  // for (let i = 0; i < tiles.length; i++) {
  //   words.push(tiles[i]);
  // }

  // function dfs(words, index, s) {
  //   if (s.length) {
  //     res.push(s);
  //   }

  //   for (let i = 0; i < words.length; i++) {
  //     if (i > 0 && words[i].charCodeAt() == words[i - 1].charCodeAt()) continue;
  //     if (!visited[i]) {
  //       visited[i] = true;
  //       dfs(words, i, s + words[i]);
  //       visited[i] = false;
  //     }
  //   }
  // }

  // words.sort((a, b) => a.charCodeAt() - b.charCodeAt())
  // dfs(words, 0, '');
  // return res.length;
}