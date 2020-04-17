/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 面试题07. 重建二叉树
 *
 * https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/
 */

function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

var buildTree = function (preorder, inorder) {
  const createTree = (preorder, inorder) => {
    if (preorder.length && inorder.length) {
      const headVal = preorder.shift()
      const head = new TreeNode(headVal)

      // 这部分可以优化查找 比较耗时
      const findHeadIndex = inorder.findIndex(item => item === headVal)
      if (findHeadIndex > -1) {
        const leftPreorder = preorder.splice(0, findHeadIndex)
        const leftInorder = inorder.splice(0, findHeadIndex)

        const rightPreorder = preorder.length ? preorder : []
        const rightInorder = inorder.length ? inorder.splice(1) : []

        head.left = createTree(leftPreorder, leftInorder)
        head.right = createTree(rightPreorder, rightInorder)
      }

      return head
    } else {
      return null
    }
  }

  return createTree(preorder, inorder)
}

export default buildTree
