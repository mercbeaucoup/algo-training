//The code to create a binary tree:
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

let root = new TreeNode(4);
let a = new TreeNode(2);
let b = new TreeNode(7);
let c = new TreeNode(1);
let d = new TreeNode(3);
let e = new TreeNode(6);
let f = new TreeNode(9);

a.left = c;
a.right = d;
b.left = e;
b.right = f;
root.left = a;
root.right = b;
