// 102.层序遍历
var levelOrder = function(root) {
  if (root == null) return [];
  let queue = [];
  queue.push(root);

  let res = [];
  while(queue.length) {
    let len = queue.length;
    
    let curLevel = [];
    for (let i = 0; i < len; i++) {
      let curNode = queue.shift();
      curLevel.push(curNode.val);

      if (curNode.left) {
        queue.push(curNode.left);
      }
      if (curNode.right) {
        queue.push(curNode.right);
      }
    }
    res.push(curLevel);
  }
  return res;
};

// 144.前序遍历 递归
var preorderTraversal = function(root) {
  let res = [];
  function preorder(node) {
    if (node == null) {
      return;
    }

    res.push(node.val);
    preorder(node.left);
    preorder(node.right);
  }

  preorder(root);
  return res;
};

// 前序遍历 非递归 使用栈
var preorderTraversal = function(root) {
  if (root == null) return [];
  let stack = [];
  stack.push(root);

  let res = [];
  while(stack.length) {
    let curNode = stack.pop();
    res.push(curNode.val);

    if (curNode.right) {
      stack.push(curNode.right);
    }
    if (curNode.left) {
      stack.push(curNode.left);
    }
  }
  return res;
}

// 中序遍历 递归
var inorderTraversal = function(root) {
  let res = [];
  function inorder(node) {
    if (node == null) {
      return;
    }

    inorder(node.left);
    res.push(node.val);
    inorder(node.right);
  }

  inorder(root);
  return res;
};

// 中序遍历 非递归
var inorderTraversal = function(root) {
  if (root == null) return [];

  let stack = [];
  let res = [];
  while(stack.length || root != null) {
    if (root != null) {
      stack.push(root);
      root = root.left;
    } else {
      let curNode = stack.pop();
      res.push(curNode.val);
      root = curNode.right;
    }
  }
  return res;
}

// 后序遍历 递归
var postorderTraversal = function(root) {
  let res = [];
  function postorder(node) {
    if (node == null) {
      return;
    }

    postorder(node.left);
    postorder(node.right);
    res.push(node.val);
  }

  postorder(root);
  return res;
};

// 后序遍历 非递归 第一种：前序遍历逆序
// 仅可以拿到后序遍历的结果，但真正的遍历过程并非后序
var postorderTraversal = function(root) {
  if (root == null) return [];
  let stack = [];

  stack.push(root);
  let res = [];
  while(stack.length) {
    let curNode = stack.pop();

    res.push(curNode.val);
    if (curNode.left) {
      stack.push(curNode.left);
    }
    if (curNode.right) {
      stack.push(curNode.right);
    }
  }
  return res.reverse();
}

// 后序遍历非递归及Morris遍历