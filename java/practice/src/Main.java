import models.Square;
import com.MyMath;

public class Main {
    public static void main(String[] args) {
        Square square = new Square(4);

        System.out.println(square.area());
        System.out.println(square.perimeter());
        System.out.println(MyMath.add(1, 2));
    }

    public int add(int a, int b) {
        return a + b;
    }
}