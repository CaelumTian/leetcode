public class SubSet {
    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 4};
        int tag[] = {0, 0, 0, 0};
        subSet(arr, tag, 0);
    }
    public static void subSet(int[] arr, int[] tag, int k) {
        if(k == arr.length) {
            for(int i = 0; i < tag.length; i++) {
                if(tag[i] == 1) {
                    System.out.print(arr[i]);
                }
            }
            System.out.println();
        }else {
            tag[k] = 0;
            subSet(arr, tag, k + 1);
            tag[k] = 1;
            subSet(arr, tag, k + 1);
        }
    }
}