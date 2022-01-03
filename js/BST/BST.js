/**
 * 二分搜索树
 */
class Node {
  constructor(val) {
    this.val = val;
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

  add(val) {
    this.root = this._add(this.root, val);
  }

  _add(node, val) {
    if (node == null) {
      this.size ++;
      return new Node(val);
    }

    if (val < node.val) {
      node.left = this._add(node.left, val);
    } else if (val > node.val) {
      node.right = this._add(node.right, val);
    }
    return node;
  }

  contains(val) {
    return this._contains(this.root, val);
  }

  _contains(root, val) {
    if (root == null) {
      return false;
    }

    if (root.val == val) {
      return true;
    } else if (root.val > val) {
      return this._contains(root.left, val);
    } else {
      return this._contains(root.right, val);
    }
  }

  preorder() {
    this._preorder(this.root);
  }

  _preorder(root) {
    if (root == null) {
      return;
    }
    console.log(root.val);
    this._preorder(root.left);
    this._preorder(root.right);
  }

  inorder() {
    this._inorder(root);
  }

  _inorder(root) {
    if (root == null) {
      return;
    }

    this._inorder(root.left);
    console.log(root.val);
    this._inorder(root.right);
  }

  postorder() {
    this._postorder(root);
  }

  _postorder(root) {
    if (root == null) {
      return;
    }

    this._postorder(root.left);
    this._postorder(root.right);
    console.log(root.val);
  }

  minimum() {
    return this._minimum(this.root);
  }

  _minimum(node) {
    if (node == null) return null;
    if (node.left == null) {
      return node;
    }
    return this._minimum(node.left);
  }
}