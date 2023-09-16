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
  if (root == null) {
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

let arr1 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let tree = new Tree(arr1);

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

prettyPrint(tree.root);
callInsert(tree.root, 10);
prettyPrint(tree.root);
