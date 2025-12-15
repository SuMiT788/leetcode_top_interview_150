/**
 * https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements
 * may be changed. Then return the number of elements in nums which are not equal to val.
 *
 * Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
 *
 * Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining
 * elements of nums are not important as well as the size of nums.
 *
 * Return k.
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;
  let i = 0;
  let j = nums.length - 1;

  while (true) {
    while (i <= j && nums[j] === val) {
      nums[j] = "_";
      j -= 1;
    }
    while (i <= j && nums[i] !== val) {
      k += 1;
      i += 1;
    }
    if (i > j) {
      break;
    } else if (nums[i] === val && i !== j) {
      nums[i] = nums[j];
      nums[j] = "_";
      k += 1;
    } else {
      nums[j] = "_";
    }
    j -= 1;
    i += 1;
  }

  return k;
};

//
// var removeElement = function(nums, val) {
//     let k = 0;
//
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }
//
//     return k;
// };
//

removeElement([3, 2, 3, 2, 3], 3);
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
