import java.util.Scanner;
import java.util.Arrays;

public class Main {
	static int n, r;
	static int[] numbers;
	static int[] input;
	static int total;
	
 	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		input = new int[9];
		n = input.length;
		r = 7;

		numbers = new int[r];
		
		for (int i=0; i < n; i++) {
			input[i] = sc.nextInt();
		}
		combi(0,0);
		
	}

	private static void combi(int depth, int start) {
		if (depth == r) {
			if (total == 100) {
				Arrays.sort(numbers); // 정렬
				
				for (int num : numbers) {
					System.out.println(num);
				}
				System.exit(0);
			}
			return;
		}
		
		for (int i=start; i < n; i++) {
			numbers[depth] = input[i];
			total += input[i];
			combi(depth+1, i+1);
			total -= input[i];
		}
		
	}
}