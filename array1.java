import java.util.*;
class array1 {
  public static void main(String args[]) {
    int[] arr = new int[] {10, 20, 30};
    System.out.println(arr[0]);
    int [] arr1 = new int[3];
    System.out.println(arr1[0]);

    int [] arr2, arr3 = {3, 9};   // change [] position and test
    System.out.println(arr3[0]);
    System.out.println(arr3[1]);

    String [] stra1 = {"hello", "world"};
    String [] stra2 = stra1;
    System.out.println(stra1.equals(stra2));
    System.out.println(stra1.toString());
    System.out.println(Arrays.toString(stra1));
    System.out.println(stra1[1]);
    String [] arr4 = new String[2];
    System.out.println(arr4[0]);
    System.out.println(arr4.length);
  }
}
