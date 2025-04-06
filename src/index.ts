import { isSameTree, TreeNode } from "./isSameTree";

const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  
const q = new TreeNode(1, new TreeNode(3), new TreeNode(2));

const result = isSameTree(p, q);
console.log(result);
