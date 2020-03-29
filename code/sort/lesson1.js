/**
 * @param {number[]} A
 * @return {number[]}
 * https://leetcode-cn.com/problems/sort-array-by-parity-ii/
 */
var sortArrayByParityII = function (A) {
  const sortA = A.sort()
  const arrOdd = sortA.filter(item => item % 2 === 0)
  const arrEven = sortA.filter(item => item % 2 === 1)
  let arr = []
  sortA.forEach((item, index) => {
    arr[index] =
      index % 2 === 0 ? arrOdd[index / 2] : arrEven[Math.ceil(index / 2) - 1]
  })

  return arr
}
console.log(sortArrayByParityII([1, 2, 3, 4, 5, 6, 7, 8]))

export default sortArrayByParityII
// var sortArrayByParityII = function(A) {
//   let j = 1;
//   for (let i = 0; i < A.length - 1; i = i + 2) {
//     if ((A[i] & 1) !== 0) {
//       // 当A[i]是奇数时
//       while ((A[j] & 1) !== 0) {
//         j += 2;
//       }
//       [A[i], A[j]] = [A[j], A[i]];
//     }
//   }
//   return A;
// };
