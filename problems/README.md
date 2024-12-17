# LeetCode Problem Solutions in JavaScript

This repository contains solutions to various LeetCode problems implemented in JavaScript. Each problem is solved with an efficient approach and includes examples for better understanding.

---

## Problem List

1. Two Sum
   Problem:
   Find two numbers in an array that sum up to a target.

Naive Approach:
Use two nested loops to check all pairs.
Time Complexity:
𝑂
(
𝑛
2
)
O(n
2
)
javascript
Copy code
function twoSum(nums, target) {
for (let i = 0; i < nums.length; i++) {
for (let j = i + 1; j < nums.length; j++) {
if (nums[i] + nums[j] === target) {
return [i, j];
}
}
}
}
Efficient Approach:
Use a hash map to store the complement.
Time Complexity:
𝑂
(
𝑛
)
O(n)
javascript
Copy code
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






2. Move Zeroes
Question: Move all zeroes in an array to the end while maintaining the relative order of other elements.

Solution:

javascript
Copy code
function moveZeroes(nums) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
            index++;
        }
    }
}

// Example:
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]
3. Remove Duplicates from Sorted Array
Question: Remove duplicates from a sorted array in-place, returning the new length.

Solution:

javascript
Copy code
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let index = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
}

// Example:
let nums = [1, 1, 2];
const length = removeDuplicates(nums);
console.log(length); // Output: 2
console.log(nums.slice(0, length)); // Output: [1, 2]
4. Merge Sorted Array
Question: Merge two sorted arrays into one sorted array.

Solution:

javascript
Copy code
function merge(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
}

// Example:
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
5. Majority Element
Question: Find the element that appears more than ⌊n / 2⌋ times in an array.

Solution:

javascript
Copy code
function majorityElement(nums) {
    let count = 0, candidate = null;
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    return candidate;
}

// Example:
const nums = [3, 2, 3];
console.log(majorityElement(nums)); // Output: 3
6. Reverse Linked List
Question: Reverse a singly linked list.

Solution:

javascript
Copy code
function reverseList(head) {
    let prev = null, current = head;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

// Example:
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

let head = new ListNode(1, new ListNode(2, new ListNode(3)));
let reversed = reverseList(head);
// Output: 3 -> 2 -> 1
7. Middle of the Linked List
Question: Find the middle node of a singly linked list.

Solution:

javascript
Copy code
function middleNode(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

// Example:
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let middle = middleNode(head);
// Output: 3 -> 4 -> 5
8. Merge Two Sorted Lists
Question: Merge two sorted linked lists into a single sorted list.

Solution:

javascript
Copy code
function mergeTwoLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}

// Example:
let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let merged = mergeTwoLists(l1, l2);
// Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4