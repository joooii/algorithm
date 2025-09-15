import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Stack;

public class Main {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader (new InputStreamReader(System.in));
		String line = br.readLine();
		int total = 0;
		
		Stack<Character> stack = new Stack<>();
		
		for (int i = 0; i < line.length(); i++) {
			char c = line.charAt(i);
			if (c == '(') {
				stack.push(c);
			} else if (c == ')') {
				stack.pop();
				
				if (line.charAt(i - 1) == '(') {
				total += stack.size();
				} else {
					total++;
				}
			} 
		}	
		System.out.println(total);
	}
}
