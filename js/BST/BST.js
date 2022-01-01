/**
 * 二分搜索树
 */
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
      this.size ++;
      return new Node(e);
    }

    if (e < node.e) {
      node.left = this._add(node.left, e);
    } else if (e > node.e) {
      node.right = this._add(node.right, e);
    }
    return node;
  }

  contains(e) {
    return this._contains(this.root, e);
  }

  _contains(root, e) {
    if (root == null) {
      return false;
    }

    if (root.val == e) {
      return true;
    } else if (root.val > e) {
      return this._contains(root.left, e);
    } else {
      return this._contains(root.right, e);
    }
  }
}