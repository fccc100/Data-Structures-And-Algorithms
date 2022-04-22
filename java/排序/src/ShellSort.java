public class ShellSort {
    public int[] shellSort(int[] nums) {
        int h = nums.length >> 1;
        while(h >= 1) {
            for (int i = h; i < nums.length; i++) {
                for (int j = i; j - h >= 0; j -= h) {
                    if (nums[j - h] > nums[j]) {
                        swap(nums, j - h, j);
                    } else {
                        break;
                    }
                }
            }
            h = h >> 1;
        }
        return nums;
    }
    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}
