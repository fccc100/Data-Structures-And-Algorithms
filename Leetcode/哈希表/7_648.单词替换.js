// 648. 单词替换
// 在英语中，我们有一个叫做 词根(root) 的概念，可以词根后面添加其他一些词组成另一个较长的单词——我们称这个词为 继承词(successor)。
// 例如，词根an，跟随着单词 other(其他)，可以形成新的单词 another(另一个)。

// 现在，给定一个由许多词根组成的词典 dictionary 和一个用空格分隔单词形成的句子 sentence。你需要将句子中的所有继承词用词根替换掉。
// 如果继承词有许多可以形成它的词根，则用最短的词根替换它。

// 你需要输出替换之后的句子。

// 示例 1：

// 输入：dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
// 输出："the cat was rat by the bat"
// 示例 2：

// 输入：dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
// 输出："a a b c"

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
// 常规方法,更高效可以使用字典树
var replaceWords = function(dictionary, sentence) {
  let set = new Set();
  for (let i = 0; i < dictionary.length; i++) {
    set.add(dictionary[i]);
  }

  let sentences = sentence.split(' ');
  for (let i = 0; i < sentences.length; i++) {
    for (let j = 0; j < sentences[i].length; j++) {
      if (set.has(sentences[i].substring(0, j + 1))) {
        sentences[i] = sentences[i].substring(0, j + 1);
        break;
      }
    }
  }

  return sentences.join(' ');
};