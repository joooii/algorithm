import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
    	Scanner sc = new Scanner(System.in);
    	int n = sc.nextInt(); // 몇 단
    	
    	for (int i = 1; i <= 9; i++) {
    		int total = i * n;
        	System.out.printf("%d * %d = %d", n, i, total);
        	System.out.println();
    	}
    }
}