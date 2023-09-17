import mergeSort from './mergesort.mjs';
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor(arr) {
    //too lazy to code an algo that allows for random order, so just using merge sort
    mergeSort(arr);
    this.root = buildTree(arr);
  }
}
function buildTree(arr) {
  let mid = Math.floor(arr.length / 2);
  if (!arr[mid] || mid == 0) {
    return null;
  }
  let root = new Node(arr[mid]);
  root.left = buildTree(arr.slice(0, mid))
  root.right = buildTree(arr.slice(mid))
  return root;
}

// need initial function to have the root run it on itself.
function callInsert(root, val) {
  root = insert(root, val);
}
function insert(root, val) {
  if (root === null) {
    root = new Node(val);
    return root;
  }
  if (val < root.data) {
    root.left = insert(root.left, val);
  } else if (val > root.data) {
    root.right = insert(root.right, val);
  }
  return root;
}

function del(root, val) {
  if (root === null) {
    return root;
  }
  if (root.data > val) {
    root.left = del(root.left, val);
    return root;
  } else if (root.data < val) {
    root.right = del(root.right, val);
    return root;
  }
  // reach here if root == val
  if (root.left === null) {
    return root.right;
  } else if (root.right === null) {
    return root.left;
  } else {
    let parent = root;
    // successor will always be the next highest #
    let succ = root.right;
    while (succ.left !== null) {
      parent = succ;
      succ = succ.left;
    }
    if (parent != root) {
      parent.left = succ.right;
    } else {
      parent.right = succ.right;
    }
    root.data = succ.data;
    return root;
  }
}

function find(root, val) {
  if (root == null) {
    return null;
  }
  if (root.data > val) {
    return find(root.left, val);
  } else if (root.data < val) {
    return find(root.right, val);
  } else if (root.data === val) {
    return root;
  }
}

function levelOrder(root) {
  if (root == null) {
    return
  }
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let curr = queue.shift();
    console.log(curr.data);
    if (curr.left !== null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }
}

function inOrder(root) {
  if (root === null) {
    return;
  }
  inOrder(root.left);
  console.log(root.data);
  inOrder(root.right);
}
function preOrder(root) {
  if (root === null) {
    return;
  }
  console.log(root.data);
  preOrder(root.left);
  preOrder(root.right);
}
function postOrder(root) {
  if (root === null) {
    return;
  }
  preOrder(root.left);
  preOrder(root.right);
  console.log(root.data);
}

function height(root) {
  if (root === null) {
    return 0;
  } else {
    let lDepth = height(root.left);
    let rDepth = height(root.right);

    return Math.max(lDepth, rDepth) + 1;
  }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

let arr1 = [1, 23, 8, 9, 4, 3, 5, 7, 67, 6345, 324];
let tree = new Tree(arr1);
tree.root = del(tree.root, 5);
prettyPrint(tree.root);
console.log(find(tree.root, 8).left)
console.log(height(tree.root));
