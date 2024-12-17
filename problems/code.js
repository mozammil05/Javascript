// 1. Two Sum
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}
// Example
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

// 2. Move Zeroes
function moveZeroes(nums) {
  let lastNonZeroFoundAt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[lastNonZeroFoundAt], nums[i]] = [nums[i], nums[lastNonZeroFoundAt]];
      lastNonZeroFoundAt++;
    }
  }
}
// Example
let arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr); // Output: [1, 3, 12, 0, 0]

// 3. Remove Duplicates from Sorted Array
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let j = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
}
// Example
let arr2 = [1, 1, 2];
console.log(removeDuplicates(arr2)); // Output: 2

// 4. Merge Sorted Array
function merge(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
}
// Example
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]

// 5. Majority Element
function majorityElement(nums) {
  let count = 0;
  let candidate = null;
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }
  return candidate;
}
// Example
console.log(majorityElement([3, 2, 3])); // Output: 3

// 6. Roman to Integer
function romanToInt(s) {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < map[s[i + 1]]) {
      sum -= map[s[i]];
    } else {
      sum += map[s[i]];
    }
  }
  return sum;
}
// Example
console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("IV")); // Output: 4

// 7. Reverse Linked List
function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
// Example
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}
let head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
let reversedHead = reverseList(head);
while (reversedHead) {
  console.log(reversedHead.val);
  reversedHead = reversedHead.next;
}
// Output: 5 4 3 2 1

// 8. Middle of the Linked List
function middleNode(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
// Example
head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
console.log(middleNode(head).val); // Output: 3

// 9. Merge Two Sorted Lists
function mergeTwoLists(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  if (l1 !== null) current.next = l1;
  if (l2 !== null) current.next = l2;
  return dummy.next;
}
// Example
let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let mergedList = mergeTwoLists(l1, l2);
while (mergedList) {
  console.log(mergedList.val);
  mergedList = mergedList.next;
}
// Output: 1 1 2 3 4 4

// 10. Remove Nth Node from End of List
function removeNthFromEnd(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let first = dummy;
  let second = dummy;
  for (let i = 0; i <= n; i++) {
    first = first.next;
  }
  while (first !== null) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return dummy.next;
}
// Example
head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
let modifiedList = removeNthFromEnd(head, 2);
while (modifiedList) {
  console.log(modifiedList.val);
  modifiedList = modifiedList.next;
}
// Output: 1 2 3 5

// 11. Maximum Depth of Binary Tree
function maxDepth(root) {
  if (root === null) return 0;
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
}
// Example
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}
let tree = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(maxDepth(tree)); // Output: 3

// 12. Same Tree
function isSameTree(p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
// Example
let tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
let tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isSameTree(tree1, tree2)); // Output: true

// 13. Invert Binary Tree
function invertTree(root) {
  if (root === null) return null;
  let left = invertTree(root.left);
  let right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
}
// Example
let tree3 = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9))
);
let invertedTree = invertTree(tree3);
console.log(invertedTree); // Output: [4, 7, 2, 9, 6, 3, 1]

// 14. Symmetric Tree
function isSymmetric(root) {
  if (!root) return true;
  function isMirror(t1, t2) {
    if (t1 === null && t2 === null) return true;
    if (t1 === null || t2 === null) return false;
    return (
      t1.val === t2.val &&
      isMirror(t1.right, t2.left) &&
      isMirror(t1.left, t2.right)
    );
  }
  return isMirror(root.left, root.right);
}
// Example
let tree4 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3))
);
console.log(isSymmetric(tree4)); // Output: true

// 15. Subtree of Another Tree
function isSubtree(s, t) {
  if (!s) return false;
  if (isSameTree(s, t)) return true;
  return isSubtree(s.left, t) || isSubtree(s.right, t);
}
// Example
let tree5 = new TreeNode(
  3,
  new TreeNode(4, new TreeNode(1), new TreeNode(2)),
  new TreeNode(5)
);
let subtree = new TreeNode(4, new TreeNode(1), new TreeNode(2));
console.log(isSubtree(tree5, subtree)); // Output: true

// 16. Balanced Binary Tree
function isBalanced(root) {
  function height(node) {
    if (node === null) return 0;
    let leftHeight = height(node.left);
    let rightHeight = height(node.right);
    if (
      leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    )
      return -1;
    return Math.max(leftHeight, rightHeight) + 1;
  }
  return height(root) !== -1;
}
// Example
let tree6 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(isBalanced(tree6)); // Output: true

// 17. Diameter of Binary Tree
function diameterOfBinaryTree(root) {
  let diameter = 0;
  function depth(node) {
    if (node === null) return 0;
    let left = depth(node.left);
    let right = depth(node.right);
    diameter = Math.max(diameter, left + right);
    return Math.max(left, right) + 1;
  }
  depth(root);
  return diameter;
}
// Example
let tree7 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);
console.log(diameterOfBinaryTree(tree7)); // Output: 3

// 18. Merge Two Binary Trees
function mergeTrees(t1, t2) {
  if (t1 === null) return t2;
  if (t2 === null) return t1;
  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
}
// Example
let tree8 = new TreeNode(1, new TreeNode(3, new TreeNode(5)), new TreeNode(2));
let tree9 = new TreeNode(
  2,
  new TreeNode(1, null, new TreeNode(4)),
  new TreeNode(3, null, new TreeNode(7))
);
let mergedTree = mergeTrees(tree8, tree9);
console.log(mergedTree); // Output: [3, 4, 5, 5, 4, null, 7]

// 19. Path Sum
function hasPathSum(root, sum) {
  if (root === null) return false;
  if (root.left === null && root.right === null) return sum === root.val;
  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
}
// Example
let tree10 = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
);
console.log(hasPathSum(tree10, 22)); // Output: true

// 20. Minimum Distance Between BST Nodes
function minDiffInBST(root) {
  let prev = null;
  let minDiff = Infinity;
  function inOrder(node) {
    if (node === null) return;
    inOrder(node.left);
    if (prev !== null) {
      minDiff = Math.min(minDiff, node.val - prev);
    }
    prev = node.val;
    inOrder(node.right);
  }
  inOrder(root);
  return minDiff;
}
// Example
let tree11 = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(6)
);
console.log(minDiffInBST(tree11)); // Output: 1

// 21. Valid Parentheses
function isValid(s) {
  const stack = [];
  const map = { "(": ")", "{": "}", "[": "]" };
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(map[s[i]]);
    } else if (s[i] !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
}
// Example
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false

// 22. Implement Stack Using Queues
class MyStack {
  constructor() {
    this.queue = [];
  }
  push(x) {
    let size = this.queue.length;
    this.queue.push(x);
    while (size > 0) {
      this.queue.push(this.queue.shift());
      size--;
    }
  }
  pop() {
    return this.queue.shift();
  }
  top() {
    return this.queue[0];
  }
  empty() {
    return this.queue.length === 0;
  }
}
// Example
let stack = new MyStack();
stack.push(1);
stack.push(2);
console.log(stack.top()); // Output: 2
console.log(stack.pop()); // Output: 2
console.log(stack.empty()); // Output: false

// 23. Next Greater Element I
function nextGreaterElement(nums1, nums2) {
  let map = new Map();
  let stack = [];
  for (let num of nums2) {
    while (stack.length && stack[stack.length - 1] < num) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }
  return nums1.map((num) => map.get(num) || -1);
}
// Example
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // Output: [-1, 3, -1]

// 24. Min Stack
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(x) {
    this.stack.push(x);
    if (
      this.minStack.length === 0 ||
      x <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(x);
    }
  }
  pop() {
    if (this.stack.pop() === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
// Example
let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Output: -3
minStack.pop();
console.log(minStack.top()); // Output: 0
console.log(minStack.getMin()); // Output: -2

// 25. Valid Anagram
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let count = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++;
    count[t.charCodeAt(i) - 97]--;
  }
  return count.every((x) => x === 0);
}
// Example
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false

// 26. Isomorphic Strings
function isIsomorphic(s, t) {
  let mapS = new Map();
  let mapT = new Map();
  for (let i = 0; i < s.length; i++) {
    if (mapS.get(s[i]) !== mapT.get(t[i])) return false;
    mapS.set(s[i], i + 1);
    mapT.set(t[i], i + 1);
  }
  return true;
}
// Example
console.log(isIsomorphic("egg", "add")); // Output: true
console.log(isIsomorphic("foo", "bar")); // Output: false

// 27. Word Pattern
function wordPattern(pattern, s) {
  let words = s.split(" ");
  if (pattern.length !== words.length) return false;
  let mapP = new Map();
  let mapW = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (mapP.get(pattern[i]) !== mapW.get(words[i])) return false;
    mapP.set(pattern[i], i + 1);
    mapW.set(words[i], i + 1);
  }
  return true;
}
// Example
console.log(wordPattern("abba", "dog cat cat dog")); // Output: true
console.log(wordPattern("abba", "dog cat cat fish")); // Output: false

// 28. Valid Palindrome
function isPalindrome(s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}
// Example
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false

// 29. Ransom Note
function canConstruct(ransomNote, magazine) {
  let count = new Array(26).fill(0);
  for (let char of magazine) {
    count[char.charCodeAt() - 97]++;
  }
  for (let char of ransomNote) {
    if (--count[char.charCodeAt() - 97] < 0) return false;
  }
  return true;
}
// Example
console.log(canConstruct("a", "b")); // Output: false
console.log(canConstruct("aa", "ab")); // Output: false
console.log(canConstruct("aa", "aab")); // Output: true

// 30. Pascal’s Triangle
function generate(numRows) {
  let res = [];
  for (let i = 0; i < numRows; i++) {
    res[i] = [];
    res[i][0] = res[i][i] = 1;
    for (let j = 1; j < i; j++) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
    }
  }
  return res;
}
// Example
console.log(generate(5));
// Output:
// [
//   [1],
//   [1, 1],
//   [1, 2, 1],
//   [1, 3, 2, 1],
//   [1, 4, 3, 2, 1]
// ]

// 31. Counting Bits
function countBits(n) {
  let res = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    res[i] = res[i >> 1] + (i & 1);
  }
  return res;
}
// Example
console.log(countBits(5)); // Output: [0, 1, 1, 2, 1, 2]

// 32. Climbing Stairs
function climbStairs(n) {
  if (n <= 2) return n;
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
}
// Example
console.log(climbStairs(5)); // Output: 8

// 33. Best Time to Buy and Sell Stock
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }
  return maxProfit;
}
// Example
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5

// 34. Single Number
function singleNumber(nums) {
  return nums.reduce((acc, num) => acc ^ num, 0);
}
// Example
console.log(singleNumber([4, 1, 2, 1, 2])); // Output: 4

// 35. House Robber
function rob(nums) {
  let prevMax = 0;
  let currMax = 0;
  for (let num of nums) {
    let temp = currMax;
    currMax = Math.max(prevMax + num, currMax);
    prevMax = temp;
  }
  return currMax;
}
// Example
console.log(rob([1, 2, 3, 1])); // Output: 4

// 36. Plus One
function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
}
// Example
console.log(plusOne([1, 2, 3])); // Output: [1, 2, 4]

// 37. Add Binary
function addBinary(a, b) {
  let carry = 0;
  let result = "";
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) sum += a[i--] - "0";
    if (j >= 0) sum += b[j--] - "0";
    carry = sum >> 1;
    result = (sum & 1) + result;
  }
  if (carry) result = "1" + result;
  return result;
}
// Example
console.log(addBinary("11", "1")); // Output: '100'

// 38. Sqrt(x)
function mySqrt(x) {
  if (x < 2) return x;
  let left = 1,
    right = x,
    result = 0;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (mid * mid === x) return mid;
    if (mid * mid < x) {
      left = mid + 1;
      result = mid;
    } else {
      right = mid - 1;
    }
  }
  return result;
}
// Example
console.log(mySqrt(8)); // Output: 2

// 39. Guess Number Higher or Lower
function guessNumber(n) {
  let left = 1;
  let right = n;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let res = guess(mid); // Assume guess API is provided
    if (res === 0) return mid;
    if (res < 0) right = mid - 1;
    else left = mid + 1;
  }
}
// Example usage depends on the guess API provided in the problem

// 40. Excel Sheet Column Title
function convertToTitle(n) {
  let result = "";
  while (n > 0) {
    n--;
    result = String.fromCharCode((n % 26) + 65) + result;
    n = Math.floor(n / 26);
  }
  return result;
}
// Example
console.log(convertToTitle(28)); // Output: 'AB'

// 41. Excel Sheet Column Number
function titleToNumber(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result = result * 26 + (s.charCodeAt(i) - 64);
  }
  return result;
}
// Example
console.log(titleToNumber("AB")); // Output: 28

// 42. Factorial Trailing Zeroes
function trailingZeroes(n) {
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
}
// Example
console.log(trailingZeroes(25)); // Output: 6

// 43. Number of 1 Bits
function hammingWeight(n) {
  let count = 0;
  while (n !== 0) {
    count += n & 1;
    n >>>= 1;
  }
  return count;
}
// Example
console.log(hammingWeight(11)); // Output: 3

// 44. Reverse Bits
function reverseBits(n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1);
    n >>>= 1;
  }
  return result >>> 0;
}
// Example
console.log(reverseBits(43261596)); // Output: 964176192

// 45. Power of Two
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}
// Example
console.log(isPowerOfTwo(16)); // Output: true
console.log(isPowerOfTwo(18)); // Output: false

// 46. Missing Number
function missingNumber(nums) {
  let sum = (nums.length * (nums.length + 1)) / 2;
  for (let num of nums) {
    sum -= num;
  }
  return sum;
}
// Example
console.log(missingNumber([3, 0, 1])); // Output: 2

// 47. Sum of Two Integers
function getSum(a, b) {
  while (b !== 0) {
    let carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a;
}
// Example
console.log(getSum(1, 2)); // Output: 3

// 48. Reverse Integer
function reverse(x) {
  let result = 0;
  let sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  while (x > 0) {
    result = result * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  result *= sign;
  if (result < -(2 ** 31) || result > 2 ** 31 - 1) return 0;
  return result;
}
// Example
console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321

// 49. Contains Duplicate
function containsDuplicate(nums) {
  let set = new Set();
  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
}
// Example
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false

// 50. Find All Numbers Disappeared in an Array
function findDisappearedNumbers(nums) {
  for (let i = 0; i < nums.length; i++) {
    let val = Math.abs(nums[i]) - 1;
    if (nums[val] > 0) nums[val] = -nums[val];
  }
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) result.push(i + 1);
  }
  return result;
}
// Example
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [5, 6]

// 51. Find the Duplicate Number
function findDuplicate(nums) {
  let slow = nums[0];
  let fast = nums[0];
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}
// Example
console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2

// 52. Intersection of Two Arrays II
function intersect(nums1, nums2) {
  let map = new Map();
  let result = [];
  for (let num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (let num of nums2) {
    if (map.get(num) > 0) {
      result.push(num);
      map.set(num, map.get(num) - 1);
    }
  }
  return result;
}
// Example
console.log(intersect([1, 2, 2, 1], [2, 2])); // Output: [2, 2]

// 53. Linked List Cycle
function hasCycle(head) {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head.next;
  while (fast !== slow) {
    if (!fast || !fast.next) return false;
    fast = fast.next.next;
    slow = slow.next;
  }
  return true;
}
// Example usage depends on the ListNode class implementation

// 54. Min Stack
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    if (
      !this.minStack.length ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
  }

  pop() {
    let val = this.stack.pop();
    if (val === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
// Example
let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Output: -3
minStack.pop();
console.log(minStack.top()); // Output: 0
console.log(minStack.getMin()); // Output: -2

// 55. Palindrome Linked List
function isPalindrome(head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let prev = null;
  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }
  while (prev) {
    if (prev.val !== head.val) return false;
    prev = prev.next;
    head = head.next;
  }
  return true;
}
// Example usage depends on the ListNode class implementation

// 56. Path Sum III
function pathSum(root, sum) {
  let count = 0;
  let map = new Map();
  map.set(0, 1);

  function dfs(node, currSum) {
    if (!node) return;
    currSum += node.val;
    count += map.get(currSum - sum) || 0;
    map.set(currSum, (map.get(currSum) || 0) + 1);
    dfs(node.left, currSum);
    dfs(node.right, currSum);
    map.set(currSum, map.get(currSum) - 1);
  }

  dfs(root, 0);
  return count;
}
// Example usage depends on the TreeNode class implementation

// 57. Linked List Cycle II
function detectCycle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      let start = head;
      while (start !== slow) {
        start = start.next;
        slow = slow.next;
      }
      return start;
    }
  }
  return null;
}
// Example usage depends on the ListNode class implementation

// 58. Happy Number
function isHappy(n) {
  let seen = new Set();
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = n
      .toString()
      .split("")
      .reduce((sum, num) => sum + Math.pow(num, 2), 0);
  }
  return n === 1;
}
// Example
console.log(isHappy(19)); // Output: true

// 59. Remove Linked List Elements
function removeElements(head, val) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;
  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return dummy.next;
}
// Example usage depends on the ListNode class implementation

// 60. Reverse String
function reverseString(s) {
  return s.split("").reverse().join("");
}
// Example
console.log(reverseString("hello")); // Output: 'olleh'

// 61. Reverse Vowels of a String
function reverseVowels(s) {
  let vowels = "aeiouAEIOU";
  let arr = s.split("");
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (!vowels.includes(arr[left])) {
      left++;
    } else if (!vowels.includes(arr[right])) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr.join("");
}
// Example
console.log(reverseVowels("hello")); // Output: 'holle'

// 62. Intersection of Two Linked Lists
function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;
  let a = headA;
  let b = headB;
  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
}
// Example usage depends on the ListNode class implementation

// 63. Move Zeroes
function moveZeroes(nums) {
  let lastNonZeroFoundAt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[lastNonZeroFoundAt], nums[i]] = [nums[i], nums[lastNonZeroFoundAt]];
      lastNonZeroFoundAt++;
    }
  }
}
// Example
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]

// 64. Two Sum II
function twoSumII(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    if (sum < target) left++;
    else right--;
  }
}
// Example
console.log(twoSumII([2, 7, 11, 15], 9)); // Output: [1, 2]

// 65. Majority Element II
function majorityElementII(nums) {
  let count1 = 0;
  let count2 = 0;
  let candidate1 = null;
  let candidate2 = null;

  for (let num of nums) {
    if (num === candidate1) {
      count1++;
    } else if (num === candidate2) {
      count2++;
    } else if (count1 === 0) {
      candidate1 = num;
      count1++;
    } else if (count2 === 0) {
      candidate2 = num;
      count2++;
    } else {
      count1--;
      count2--;
    }
  }

  let result = [];
  count1 = 0;
  count2 = 0;
  for (let num of nums) {
    if (num === candidate1) count1++;
    if (num === candidate2) count2++;
  }
  if (count1 > Math.floor(nums.length / 3)) result.push(candidate1);
  if (count2 > Math.floor(nums.length / 3)) result.push(candidate2);

  return result;
}
// Example
console.log(majorityElementII([3, 2, 3])); // Output: [3]
console.log(majorityElementII([1, 1, 1, 3, 3, 2, 2, 2])); // Output: [1, 2]

// 66. Find All Anagrams in a String
function findAnagrams(s, p) {
  let result = [];
  let pCount = new Array(26).fill(0);
  let sCount = new Array(26).fill(0);
  for (let i = 0; i < p.length; i++) {
    pCount[p.charCodeAt(i) - 97]++;
    sCount[s.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < s.length - p.length + 1; i++) {
    if (arraysAreEqual(pCount, sCount)) result.push(i);
    sCount[s.charCodeAt(i) - 97]--;
    sCount[s.charCodeAt(i + p.length) - 97]++;
  }
  return result;

  function arraysAreEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
}
// Example
console.log(findAnagrams("cbaebabacd", "abc")); // Output: [0, 6]

// 67. Subarray Sum Equals K
function subarraySum(nums, k) {
  let count = 0;
  let sum = 0;
  let map = new Map();
  map.set(0, 1);

  for (let num of nums) {
    sum += num;
    if (map.has(sum - k)) count += map.get(sum - k);
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}
// Example
console.log(subarraySum([1, 1, 1], 2)); // Output: 2

// 68. Product of Array Except Self
function productExceptSelf(nums) {
  let result = new Array(nums.length).fill(1);
  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] *= left;
    left *= nums[i];
  }
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }
  return result;
}
// Example
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]

// 69. Maximum Product Subarray
function maxProduct(nums) {
  let maxSoFar = nums[0];
  let minSoFar = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let tempMax = Math.max(nums[i], maxSoFar * nums[i], minSoFar * nums[i]);
    minSoFar = Math.min(nums[i], maxSoFar * nums[i], minSoFar * nums[i]);
    maxSoFar = tempMax;
    result = Math.max(result, maxSoFar);
  }

  return result;
}
// Example
console.log(maxProduct([2, 3, -2, 4])); // Output: 6

// 70. Find Peak Element
function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[mid + 1]) left = mid + 1;
    else right = mid;
  }
  return left;
}
// Example
console.log(findPeakElement([1, 2, 3, 1])); // Output: 2

// 71. First Missing Positive
function firstMissingPositive(nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }
  return n + 1;
}
// Example
console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 2

// 72. Jump Game
function canJump(nums) {
  let maxReach = 0;
  for (let i = 0; i <= maxReach; i++) {
    if (i === nums.length - 1) return true;
    maxReach = Math.max(maxReach, i + nums[i]);
  }
  return false;
}
// Example
console.log(canJump([2, 3, 1, 1, 4])); // Output: true
console.log(canJump([3, 2, 1, 0, 4])); // Output: false

// 73. Rotate Image
function rotate(matrix) {
  let n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}
// Example
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(matrix);
console.log(matrix); // Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

// 74. Search a 2D Matrix
function searchMatrix(matrix, target) {
  let m = matrix.length,
    n = matrix[0].length;
  let left = 0,
    right = m * n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midVal = matrix[Math.floor(mid / n)][mid % n];

    if (midVal === target) return true;
    else if (midVal < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
}
// Example
console.log(
  searchMatrix(
    [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ],
    5
  )
); // Output: true
console.log(
  searchMatrix(
    [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ],
    10
  )
); // Output: false

// 75. Sort Colors
function sortColors(nums) {
  let low = 0,
    high = nums.length - 1,
    i = 0;
  while (i <= high) {
    if (nums[i] === 0) {
      [nums[low], nums[i]] = [nums[i], nums[low]];
      low++;
      i++;
    } else if (nums[i] === 2) {
      [nums[i], nums[high]] = [nums[high], nums[i]];
      high--;
    } else {
      i++;
    }
  }
}
// Example
let nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums); // Output: [0, 0, 1, 1, 2, 2]

// 76. Minimum Window Substring
function minWindow(s, t) {
  let map = new Map();
  for (let char of t) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let left = 0,
    right = 0,
    count = t.length,
    minLength = Infinity,
    start = 0;

  while (right < s.length) {
    if (map.get(s[right]) > 0) count--;
    map.set(s[right], map.get(s[right]) - 1);
    right++;

    while (count === 0) {
      if (right - left < minLength) {
        minLength = right - left;
        start = left;
      }
      map.set(s[left], map.get(s[left]) + 1);
      if (map.get(s[left]) > 0) count++;
      left++;
    }
  }
  return minLength === Infinity ? "" : s.substring(start, start + minLength);
}
// Example
console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"

// 77. Combinations
function combine(n, k) {
  let result = [];

  function backtrack(start, path) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    for (let i = start; i <= n; i++) {
      path.push(i);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  backtrack(1, []);
  return result;
}
// Example
console.log(combine(4, 2)); // Output: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]

// 78. Subsets
function subsets(nums) {
  let result = [];

  function backtrack(start, path) {
    result.push([...path]);

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  backtrack(0, []);
  return result;
}
// Example
console.log(subsets([1, 2, 3])); // Output: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]

// 79. Word Search
function exist(board, word) {
  function dfs(i, j, index) {
    if (index === word.length) return true;
    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[0].length ||
      board[i][j] !== word[index]
    ) {
      return false;
    }

    let temp = board[i][j];
    board[i][j] = "#";
    let result =
      dfs(i - 1, j, index + 1) ||
      dfs(i + 1, j, index + 1) ||
      dfs(i, j - 1, index + 1) ||
      dfs(i, j + 1, index + 1);
    board[i][j] = temp;
    return result;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  return false;
}
// Example
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
); // Output: true

// 80. Remove Duplicates from Sorted Array II
function removeDuplicates(nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (index < 2 || nums[i] !== nums[index - 2]) {
      nums[index++] = nums[i];
    }
  }
  return index;
}
// Example
let nums2 = [1, 1, 1, 2, 2, 3];
let length = removeDuplicates(nums2);
console.log(nums2.slice(0, length)); // Output: [1, 1, 2, 2, 3]

// 81. Search in Rotated Sorted Array II
function search(nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return true;
    if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
      left++;
      right--;
    } else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      if (nums[mid] < target && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return false;
}
// Example
console.log(search([2, 5, 6, 0, 0, 1, 2], 0)); // Output: true
console.log(search([2, 5, 6, 0, 0, 1, 2], 3)); // Output: false

// 82. Remove Duplicates from Sorted List II
function deleteDuplicates(head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  while (head) {
    if (head.next && head.val === head.next.val) {
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }
      prev.next = head.next;
    } else {
      prev = prev.next;
    }
    head = head.next;
  }
  return dummy.next;
}
// Example usage depends on the ListNode class implementation

// 83. Remove Duplicates from Sorted List
function deleteDuplicates(head) {
  let current = head;
  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}
// Example usage depends on the ListNode class implementation

// 84. Largest Rectangle in Histogram
function largestRectangleArea(heights) {
  let stack = [-1];
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    while (
      stack[stack.length - 1] !== -1 &&
      heights[i] < heights[stack[stack.length - 1]]
    ) {
      let h = heights[stack.pop()];
      let w = i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, h * w);
    }
    stack.push(i);
  }
  while (stack[stack.length - 1] !== -1) {
    let h = heights[stack.pop()];
    let w = heights.length - stack[stack.length - 1] - 1;
    maxArea = Math.max(maxArea, h * w);
  }
  return maxArea;
}
// Example
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // Output: 10

// 85. Maximal Rectangle
function maximalRectangle(matrix) {
  if (matrix.length === 0) return 0;
  let n = matrix[0].length;
  let heights = Array(n).fill(0);
  let maxArea = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < n; j++) {
      heights[j] = matrix[i][j] === "1" ? heights[j] + 1 : 0;
    }
    maxArea = Math.max(maxArea, largestRectangleArea(heights));
  }
  return maxArea;
}
// Example
console.log(
  maximalRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ])
); // Output: 6

// 86. Partition List
function partition(head, x) {
  let beforeHead = new ListNode(0),
    afterHead = new ListNode(0);
  let before = beforeHead,
    after = afterHead;

  while (head) {
    if (head.val < x) {
      before.next = head;
      before = before.next;
    } else {
      after.next = head;
      after = after.next;
    }
    head = head.next;
  }

  after.next = null;
  before.next = afterHead.next;
  return beforeHead.next;
}
// Example usage depends on the ListNode class implementation

// 87. Scramble String
function isScramble(s1, s2) {
  if (s1.length !== s2.length) return false;
  if (s1 === s2) return true;

  let n = s1.length;
  let dp = Array(n)
    .fill(0)
    .map(() =>
      Array(n)
        .fill(0)
        .map(() => Array(n + 1).fill(false))
    );

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j][1] = s1[i] === s2[j];
    }
  }

  for (let length = 2; length <= n; length++) {
    for (let i = 0; i < n - length + 1; i++) {
      for (let j = 0; j < n - length + 1; j++) {
        for (let split = 1; split < length; split++) {
          if (
            (dp[i][j][split] && dp[i + split][j + split][length - split]) ||
            (dp[i][j + length - split][split] &&
              dp[i + split][j][length - split])
          ) {
            dp[i][j][length] = true;
            break;
          }
        }
      }
    }
  }
  return dp[0][0][n];
}
// Example
console.log(isScramble("great", "rgeat")); // Output: true
console.log(isScramble("abcde", "caebd")); // Output: false

// 88. Merge Sorted Array
function merge(nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
}
// Example
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]

// 89. Gray Code
function grayCode(n) {
  let result = [0];
  for (let i = 0; i < n; i++) {
    let currentLength = result.length;
    for (let j = currentLength - 1; j >= 0; j--) {
      result.push(result[j] + (1 << i));
    }
  }
  return result;
}
// Example
console.log(grayCode(2)); // Output: [0, 1, 3, 2]
console.log(grayCode(3)); // Output: [0, 1, 3, 2, 6, 7, 5, 4]

// 90. Subset II
function subsetsWithDup(nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  function backtrack(start, path) {
    result.push([...path]);

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue; // Skip duplicates
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  backtrack(0, []);
  return result;
}
// Example
console.log(subsetsWithDup([1, 2, 2])); // Output: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]

// 91. Decode Ways
function numDecodings(s) {
  if (s[0] === "0") return 0;

  let n = s.length;
  let dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    if (s[i - 1] !== "0") dp[i] += dp[i - 1];
    if (s[i - 2] === "1" || (s[i - 2] === "2" && s[i - 1] <= "6"))
      dp[i] += dp[i - 2];
  }

  return dp[n];
}
// Example
console.log(numDecodings("12")); // Output: 2
console.log(numDecodings("226")); // Output: 3

// 92. Reverse Linked List II
function reverseBetween(head, left, right) {
  if (!head || left === right) return head;

  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  for (let i = 0; i < left - 1; i++) {
    prev = prev.next;
  }

  let current = prev.next;
  let next = current.next;

  for (let i = 0; i < right - left; i++) {
    current.next = next.next;
    next.next = prev.next;
    prev.next = next;
    next = current.next;
  }

  return dummy.next;
}
// Example usage depends on the ListNode class implementation

// 93. Restore IP Addresses
function restoreIpAddresses(s) {
  let result = [];

  function backtrack(start, path) {
    if (path.length === 4 && start === s.length) {
      result.push(path.join("."));
      return;
    }
    for (let i = 1; i <= 3; i++) {
      if (start + i > s.length) break;
      let part = s.substring(start, start + i);
      if ((part[0] === "0" && part.length > 1) || parseInt(part) > 255)
        continue;
      path.push(part);
      backtrack(start + i, path);
      path.pop();
    }
  }

  backtrack(0, []);
  return result;
}
// Example
console.log(restoreIpAddresses("25525511135")); // Output: ["255.255.11.135", "255.255.111.35"]

// 94. Binary Tree Inorder Traversal
function inorderTraversal(root) {
  let result = [];
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }
  traverse(root);
  return result;
}
// Example
console.log(inorderTraversal(root)); // Output: Inorder traversal of a binary tree (Array of node values)

// 95. Unique Binary Search Trees II (Generate all unique BSTs)
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function generateTrees(n) {
  if (n === 0) return [];

  function buildTree(start, end) {
    let trees = [];
    if (start > end) {
      trees.push(null);
      return trees;
    }
    for (let i = start; i <= end; i++) {
      let leftTrees = buildTree(start, i - 1);
      let rightTrees = buildTree(i + 1, end);
      for (let left of leftTrees) {
        for (let right of rightTrees) {
          let root = new TreeNode(i);
          root.left = left;
          root.right = right;
          trees.push(root);
        }
      }
    }
    return trees;
  }

  return buildTree(1, n);
}

// Example usage for Unique Binary Search Trees II
const uniqueBSTs = generateTrees(3);
console.log("Generated Unique BSTs for 3 nodes:", uniqueBSTs);
// Output: Array of all unique BSTs for 3 nodes

// 96. Unique Binary Search Trees (Count the number of unique BSTs)
function numTrees(n) {
  let dp = Array(n + 1).fill(0);
  dp[0] = dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }
  return dp[n];
}

// Example usage for Unique Binary Search Trees
console.log("Number of Unique BSTs for 3 nodes:", numTrees(3));
// Output: 5

// 97. Interleaving String (Check if a string is an interleaving of two others)
function isInterleave(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;

  let dp = Array(s1.length + 1)
    .fill(false)
    .map(() => Array(s2.length + 1).fill(false));
  dp[0][0] = true;

  for (let i = 1; i <= s1.length; i++) {
    dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
  }

  for (let j = 1; j <= s2.length; j++) {
    dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
  }

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      dp[i][j] =
        (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
        (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
    }
  }

  return dp[s1.length][s2.length];
}

// Example usage for Interleaving String
console.log(
  "Is 'adbcef' interleaving of 'abc' and 'def'? ",
  isInterleave("abc", "def", "adbcef")
);
// Output: true

console.log(
  "Is 'abdecf' interleaving of 'abc' and 'def'? ",
  isInterleave("abc", "def", "abdecf")
);
// Output: false

// 98. Validate Binary Search Tree
function isValidBST(root) {
  function helper(node, min, max) {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return (
      helper(node.left, min, node.val) && helper(node.right, node.val, max)
    );
  }
  return helper(root, -Infinity, Infinity);
}

// Example usage depends on the TreeNode class implementation

// 99. Recover Binary Search Tree
function recoverTree(root) {
  let first = null,
    second = null,
    prev = null;

  function inorder(node) {
    if (!node) return;

    inorder(node.left);

    if (prev && prev.val > node.val) {
      if (!first) {
        first = prev;
      }
      second = node;
    }
    prev = node;

    inorder(node.right);
  }

  inorder(root);

  [first.val, second.val] = [second.val, first.val];
}

// 100. Same Tree
function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
}

// 101. Symmetric Tree
function isSymmetric(root) {
  if (!root) return true;

  function isMirror(t1, t2) {
    if (!t1 && !t2) return true;
    if (!t1 || !t2) return false;
    return (
      t1.val === t2.val &&
      isMirror(t1.left, t2.right) &&
      isMirror(t1.right, t2.left)
    );
  }

  return isMirror(root.left, root.right);
}

// 102. Binary Tree Level Order Traversal
function levelOrder(root) {
  if (!root) return [];

  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let level = [];
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }
  return result;
}

// 103. Binary Tree Zigzag Level Order Traversal
function zigzagLevelOrder(root) {
  if (!root) return [];

  let result = [];
  let queue = [root];
  let leftToRight = true;

  while (queue.length > 0) {
    let level = [];
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (!leftToRight) level.reverse();
    result.push(level);
    leftToRight = !leftToRight;
  }

  return result;
}

// 104. Maximum Depth of Binary Tree
function maxDepth(root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

// 105. Construct Binary Tree from Preorder and Inorder Traversal
function buildTree(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  let rootVal = preorder[0];
  let root = new TreeNode(rootVal);
  let rootIndex = inorder.indexOf(rootVal);

  root.left = buildTree(
    preorder.slice(1, rootIndex + 1),
    inorder.slice(0, rootIndex)
  );
  root.right = buildTree(
    preorder.slice(rootIndex + 1),
    inorder.slice(rootIndex + 1)
  );

  return root;
}

// 106. Construct Binary Tree from Inorder and Postorder Traversal
function buildTreePostIn(postorder, inorder) {
  if (!postorder.length || !inorder.length) return null;

  let rootVal = postorder[postorder.length - 1];
  let root = new TreeNode(rootVal);
  let rootIndex = inorder.indexOf(rootVal);

  root.left = buildTreePostIn(
    postorder.slice(0, rootIndex),
    inorder.slice(0, rootIndex)
  );
  root.right = buildTreePostIn(
    postorder.slice(rootIndex, postorder.length - 1),
    inorder.slice(rootIndex + 1)
  );

  return root;
}

// 107. Binary Tree Level Order Traversal II
function levelOrderBottom(root) {
  if (!root) return [];

  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let level = [];
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.unshift(level);
  }
  return result;
}

// 108. Convert Sorted Array to Binary Search Tree
function sortedArrayToBST(nums) {
  if (nums.length === 0) return null;

  let mid = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[mid]);

  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
}

// 109. Convert Sorted List to Binary Search Tree
function sortedListToBST(head) {
  let values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }

  function buildTree(start, end) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let node = new TreeNode(values[mid]);
    node.left = buildTree(start, mid - 1);
    node.right = buildTree(mid + 1, end);
    return node;
  }

  return buildTree(0, values.length - 1);
}

// Example usage for some of the functions
console.log("Number of Unique BSTs for 3 nodes:", numTrees(3)); // Output: 5
console.log(
  "Is 'adbcef' interleaving of 'abc' and 'def'? ",
  isInterleave("abc", "def", "adbcef")
); // Output: true
console.log(
  "Level Order Traversal:",
  levelOrder(new TreeNode(1, new TreeNode(2), new TreeNode(3)))
); // Output: [[1], [2, 3]]
