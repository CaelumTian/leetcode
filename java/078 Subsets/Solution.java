class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        int[] tag = new int[nums.length];
        List<List<Integer>> result = new ArrayList<>();
        getSet(nums, 0, tag, result);
        return result;
    }
    public static void getSet(int[] nums, int curr, int[] tag, List<List<Integer>> result) {
        if(curr == nums.length) {
            List<Integer> temp = new ArrayList<>();
            for(int i = 0; i < nums.length; i++) {
                if(tag[i] == 1) {
                    temp.add(nums[i]);
                }
            }
            result.add(temp);
        }else {
            tag[curr] = 0;
            getSet(nums, curr + 1, tag, result);
            tag[curr] = 1;
            getSet(nums, curr + 1, tag, result);   
        }
    }
}