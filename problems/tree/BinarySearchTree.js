class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  //lookup searching for a specific value within the tree
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.lookup(1);
console.log(JSON.stringify(traverse(tree.root)));
//    9
// 4     20
//1  6 15  20

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

// ------------------------------------------------------------second methods with recursive-------------------------------------------------------------------
// # Optimized Binary Search Tree Implementation

// class Node {
//   constructor(value) {
//     this.left = null;
//     this.right = null;
//     this.value = value;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     this.root = this.insertNode(this.root, value);
//     return this;
//   }

//   insertNode(node, value) {
//     if (node === null) {
//       return new Node(value);
//     }

//     if (value < node.value) {
//       node.left = this.insertNode(node.left, value);
//     } else {
//       node.right = this.insertNode(node.right, value);
//     }

//     return node;
//   }

//   lookup(value) {
//     return this.lookupNode(this.root, value);
//   }

//   lookupNode(node, value) {
//     if (node === null || node.value === value) {
//       return node;
//     }

//     if (value < node.value) {
//       return this.lookupNode(node.left, value);
//     } else {
//       return this.lookupNode(node.right, value);
//     }
//   }
// }

// const tree = new BinarySearchTree();
// tree.insert(9).insert(4).insert(6).insert(20).insert(170).insert(15).insert(1);

// // Output the BST in JSON format
// console.log(JSON.stringify(traverse(tree.root)));

// // Function to traverse and represent the BST
// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }
