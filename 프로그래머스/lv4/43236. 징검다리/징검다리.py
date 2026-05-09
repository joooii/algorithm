# rocks 정렬
# mid = 거리
# left, right = 최소 거리가 가질 수 있는 최소값, 최댓값 설정
# 각 바위 순회 (prev, count 사용)
# 
# 각 바위(rock) - prev < mid: (거리 부족)
#   count += 1
#   else: 거리 충분 -> 바위 유지
#       prev = rock
#   distance - prev < mid: (거리부족)
#       count += 1
#   판단시작
#   if count <= n: (더 해도 됨)
#       answer = mid
#       left = mid + 1
#   else: (count > n) => 제거를 너무 많이함 (mid가 큼 -> right 줄여)
#       right = mid - 1
# return answer

def solution (distance, rocks, n):
    rocks.sort()
    left = 1
    right = distance
    answer = 0
    
    while left <= right:
        mid = (left + right) // 2
        
        prev = 0
        count = 0
        
        for rock in rocks:
            if rock - prev < mid:
                count += 1
            else: # 거리 충분!!
                prev = rock
        
        if distance - prev < mid:
            count += 1
                
        # 판단
        if count > n:
            right = mid - 1
        else:
            answer = mid
            left = mid + 1
            
    return answer
    