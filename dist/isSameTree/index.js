"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
exports.isSameTree = isSameTree;
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
exports.TreeNode = TreeNode;
function isSameTree(p, q) {
    if (p === null && q === null)
        return true;
    if (p === null || q === null)
        return false;
    if (p.val !== q.val)
        return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
