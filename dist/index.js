"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isSameTree_1 = require("./isSameTree");
const p = new isSameTree_1.TreeNode(1, new isSameTree_1.TreeNode(2), new isSameTree_1.TreeNode(3));
const q = new isSameTree_1.TreeNode(1, new isSameTree_1.TreeNode(3), new isSameTree_1.TreeNode(2));
const result = (0, isSameTree_1.isSameTree)(p, q);
console.log(result);
