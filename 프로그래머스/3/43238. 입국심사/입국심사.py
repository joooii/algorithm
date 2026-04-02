def solution(n, times):
    left = 1
    right = max(times) * n
    answer = right
    
    while left <= right:
        mid = (left + right) // 2
        
        # 처리 가능한 인원 계산
        people = 0
        for t in times:
            people += mid // t
        
        # 판단
        if people < n:
            left = mid + 1
        else:
            answer = mid
            right = mid - 1
    return answer