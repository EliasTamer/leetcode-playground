export function climbStairs(n: number): number {
  let memo: number[] = new Array(n + 1).fill(-1);

  function climb(step: number): number {
    if (step > n) return 0;
    if (step === n) return 1;

    if (memo[step] !== -1) return memo[step];

    memo[step] = climb(step + 1) + climb(step + 2);
    return memo[step];
  }

  return climb(0);
}
