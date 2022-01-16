import java.util.Arrays;

public class MergeSort {
    public void sort(int[] nums) {
        sort(nums, 0, nums.length - 1);
    }
    private  void sort(int[] nums, int left, int right) {
        if (left >= right) return;
        int mid = left + (right - left) / 2;
        sort(nums, left, mid);
        sort(nums, mid + 1, right);
        merge(nums, left, mid, right);
    }
    private void merge(int[] nums, int left, int mid, int right) {
        int [] temp = Arrays.copyOfRange(nums, left, right + 1);
        int i = left;
        int j = mid + 1;
        for (int k = left; k <= right; k++) {
            if (i > mid) {
                nums[k] = temp[j - left];
                j ++;
            } else if (j > right) {
                nums[k] = temp[i - left];
                i ++;
            } else if (temp[i - left] < temp[j - left]) {
                nums[k] = temp[i - left];
                i ++;
            } else {
                nums[k] = temp[j - left];
                j ++;
            }
        }
    }
}
