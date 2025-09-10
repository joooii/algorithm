import java.util.Scanner;

public class Main { 
    public static long factorial(long i) { 
        if (i <= 1) return 1;
        return i * factorial(i-1);
    }

	public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
		long i = sc.nextLong();
		System.out.println(factorial(i));

	}
}
