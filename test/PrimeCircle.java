public class PrimeCircle {
    // tag 用来标识有没有用过
    static int[] arr = {1, 2, 3, 4, 5, 6};
    static int[] tag = {1, 0, 0, 0, 0, 0};
    // 结果集
    static int[] result = {1, 0, 0, 0, 0, 0};
    public static void main(String[] args) {
        getCircle(1);
    }
    /**
     * curr 表示当前求到第几位了
     */
    public static void getCircle(int curr) {
        // 首尾闭合
        if(curr == arr.length && isPrime(arr[0] + arr[arr.length - 1])) {
            for(int i = 0; i < result.length; i++) {
                System.out.print(result[i]);
            }
            System.out.println();
        }else {
            for(int i = 0; i < arr.length; i++) {
                if(tag[i] == 0 && isPrime(result[curr - 1] + arr[i])) {
                    result[curr] = arr[i];
                    tag[i] = 1;
                    getCircle(curr + 1);
                    tag[i] = 0;
                }
            }
        }
    }
    public static boolean isPrime(int num) {
        for(int i = 2; i <= Math.sqrt(num); i++) {
            if(num % i == 0) {
                return false;
            }
        }
        return true;
    }
}