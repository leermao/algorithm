/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 面试题54. 二叉搜索树的第k大节点
 *
 * https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  const res = []
  const dfs = (root) => {
    if (!root) return
    dfs(root.left)
    res.push(root.val)
    dfs(root.right)
  }
  dfs(root)

  return res.reverse()[k]
}
