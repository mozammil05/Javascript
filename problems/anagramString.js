// conditions both strings length same
// anagram hello => llheo
// ajay => aajy

// function isAnagram(s1,s2) {
//     if (s1.length!==s2.length) {
//         return false
//     }
//     for (const letter of s1) {
//         counter[letter] = (counter[letter] || 0) +1
//         console.log( counter[letter])
//     }
// }

// isAnagram('hello',"liheo")

// function isAnagram(s1, s2) {
//     if (s1.length !== s2.length) {
//       return false;
//     }
//     let counter = {};
//     for (const letter of s1) {
//       counter[letter] = (counter[letter] || 0) + 1;
//     }
//     for (const letter of s2) {
//       if (!counter[letter]) {
//         return false;
//       }
//       counter[letter]--;
//     }
//     return true;
//   }

//   console.log(isAnagram("hello", "leloh")); // true
//   console.log(isAnagram("hello", "world")); // false

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[s[i]] = (obj2[s[i]] || 0) + 1;
  }
  for (let key of obj) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
};
