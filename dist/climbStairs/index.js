"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.climbStairs = climbStairs;
function climbStairs(n) {
    let memo = new Array(n + 1).fill(-1);
    function climb(step) {
        if (step > n)
            return 0;
        if (step === n)
            return 1;
        if (memo[step] !== -1)
            return memo[step];
        memo[step] = climb(step + 1) + climb(step + 2);
        return memo[step];
    }
    return climb(0);
}
