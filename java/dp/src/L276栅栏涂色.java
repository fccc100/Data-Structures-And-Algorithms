public class L276栅栏涂色 {
}

class Solution {
    public int numWays(int n, int k) {
        int[] dp = new int[n + 1];
        dp[0] = 0;
        dp[1] = k;
        if (n == 1) return dp[1];
        dp[2] = k * k;

        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] * (k - 1) + dp[i - 2] * 1 * (k - 1);
        }
        return dp[n];
    }
}
