import java.io.PrintStream;
import models.MyMath;

public class Main {
  public static void main(String[] args) {
    PrintStream console = System.out;

    MyMath math = new MyMath();
    int[] nums = {1, 2, 3};
    int sum = math.add(nums);
    
    console.printf("Sum is %d", sum);

    int number = 23;

    String result = math.isPrime(number) ? "a" : "not a";
    console.printf("\n%d is %s Prime", number, result);
  }
}
