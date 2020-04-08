function Node (val) {
  this.key = val
  this.left = null
  this.right = null
}

export default class BinaryTree {
  constructor () {
    this.root = null

    return this.root
  }

  insert (key) {
    var newNode = new Node(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      this._insertNode(this.root, newNode)
    }
  };

  _insertNode (node, newNode) {
    if (node.key > newNode.key) {
      if (node.left === null) { node.left = newNode } else {
        this._insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this._insertNode(node.right, newNode)
      }
    }
  }

  qianxu (data) {
    if (data) {
      console.log(data.key)
      this.qianxu(data.left)
      this.qianxu(data.right)
    }
  }

  zhongxu (data) {
    if (data) {
      this.zhongxu(data.left)
      console.log(data.key)
      this.zhongxu(data.right)
    }
  }

  houxu (data) {
    if (data) {
      this.houxu(data.left)
      console.log(data.key)
      this.houxu(data.right)
    }
  }

  minNode (data) {
    if (data) {
      while (data.left !== null) {
        return this.minNode(data.left)
      }

      return data.key
    }

    return null
  }

  maxNode (data) {
    if (data) {
      while (data.right !== null) {
        return this.maxNode(data.right)
      }

      return data.key
    }

    return null
  }
}
