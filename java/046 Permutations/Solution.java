class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        arrange(nums, 0, result);
        return result;
    }
    public static void swap(int[] arr, int i, int k) {
        int temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
    }
    public static void arrange(int[] arr, int k, List<List<Integer>> result) {
        if(k == arr.length) {
            List<Integer> temp = new ArrayList<>();
            for(int i = 0; i < arr.length; i++) {
                temp.add(arr[i]);
            }
            result.add(temp);
        }else {
            for(int i = k; i < arr.length; i++) {
                swap(arr, i, k);
                arrange(arr, k + 1, result);
                swap(arr, i, k);
            }
        }
    }
}