// 二分搜索树

class Node {
  constructor(e) {
    this.e = e;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  size() {
    return this.size;
  }

  isEmpty() {
    return this.size == 0;
  }

  add(e) {
    this.root = this._add(this.root, e);
  }

  _add(node, e) {
    if (node == null) {
      this.size++;
      return new Node(e);
    }

    if (node.e > e) {
      node.left = this._add(node.left, e);
    } else {
      node.right = this._add(node.right, e);
    }
    return node;
  }

  contains(e) {
    return this._contains(this.root, e);
  }

  _contains(node, e) {
    if (node == null) {
      return false;
    }

    if (node.e == e) {
      return true;
    } else if (node.e > e) {
      return this._contains(node.left, e);
    } else {
      return this._contains(node.right, e);
    }
  }

  preOrder() {
    this._preOrder(this.root);
  }

  _preOrder(node) {
    if (node == null) {
      return;
    }

    console.log(node.e);
    this._preOrder(node.left);
    this._preOrder(node.right);
  }

  preOrderNR() {
    if (!this.root) return;
    let stack = [];
    stack.push(this.root);

    while(stack.length) {
      let node = stack.pop();
      console.log(node.e);

      if (node.right) {
        stack.push(node.right);
      }
      if (node.left) {
        stack.push(node.left);
      }
    }
  }

  inOrder() {
    this._inOrder(this.root);
  }

  _inOrder(node) {
    if (node == null) {
      return;
    }

    this._inOrder(node.left);
    console.log(node.e);
    this._inOrder(node.right);
  }

  postOrder() {
    this._postOrder(this.root);
  }

  _postOrder(node) {
    if (node == null) {
      return;
    }

    this._postOrder(node.left);
    this._postOrder(node.right);
    console.log(node.e);
  }

  levelOrder() {
    if (!this.root) return;
    let queue = [];
    queue.push(this.root);

    while(queue.length) {
      let node = queue.shift();
      console.log(node.e);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
}