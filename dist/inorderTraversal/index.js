"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
exports.inorderTraversal = inorderTraversal;
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
exports.TreeNode = TreeNode;
function inorderTraversal(root) {
    if (root === null)
        return [];
    let result = [];
    function readTree(node) {
        if (node === null)
            return;
        readTree(node.left);
        result.push(node.val);
        readTree(node.right);
    }
    readTree(root);
    console.log(result);
    return result;
}
