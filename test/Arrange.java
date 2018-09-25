import java.util.*;
public class Arrange {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4};
        arrange(arr, 0);
    }
    public static void swap(int[] arr, int i, int k) {
        int temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
    }
    public static void arrange(int[] arr, int k) {
        if(k == arr.length) {
            for(int i = 0; i < arr.length; i++) {
                System.out.print(arr[i]);
            }
            System.out.println();
        }else {
            for(int i = k; i < arr.length; i++) {
                swap(arr, i, k);
                arrange(arr, k + 1);
                swap(arr, i, k);
            }
        }
    }
}