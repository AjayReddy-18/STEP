package models;

public class MyMath {
    public MyMath() {
        System.out.println("Created instance of Math class");
    }

    public int add(int[] nums) {
        int total = 0;
        for (int num : nums)
            total += num;
        return total;
    }

    public boolean isPrime(int candidate) {
        if (candidate < 2 || candidate % 2 == 0) return false;

        int factor = 3;
        double squareRoot = java.lang.Math.sqrt(candidate);

        while (factor < squareRoot) {
            if (candidate % factor == 0) return false;
            factor += 2;
        }

        return true;
    }
}
