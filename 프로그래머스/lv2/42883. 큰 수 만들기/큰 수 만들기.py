def solution(number, k):
    stack = []
    
    for num in number:
        while k > 0 and stack and stack[-1] < num:
            stack.pop()
            k -= 1
        stack.append(num)
    
    if k > 0:
        stack = stack[:-k]
    
    return ''.join(stack)


## 알고리즘
# 조합으로 풀기엔 경우의 수 너무 많음 -> 시간 초과
# 큰 수 만들 때는 앞자리 숫자가 중요
# 다음 자릿수가 앞자리 수보다 크면 앞자리 수는 제거 -> stack이 유리함

## 풀이
# 1. 첫번째 문자를 stack에 넣기
# 2. for문을 돌려서 k가 남아있고(k>0), stack이 비어있지 않고, 다음번째 자리의 숫자(현재 숫자)가 stack의 마지막 숫자보다 크면, 마지막 숫자를 pop (작아질 때까지 반복) + k를 1 감소
# 3. 그다음 현재 숫자를 append
# 4. 만약 k가 남아있으면, stack의 마지막부터 k번째까지 pop -> 큰 수가 자동으로 나옴
# 5. stack의 값을 join