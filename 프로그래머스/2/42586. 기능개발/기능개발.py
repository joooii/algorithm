    
# 수정 생각
# 각 작업의 완료일을 구한다.
    # 완료일 담을 배열
    # 기준
    # 카운트
# 기준 = 현 배포 기준 첫 번째 작업 완료일
# 순회하면서:
# - 다음 작업 완료일 <= 기준 → 같은 배포 그룹
# - 다음 작업 완료일 > 기준 → 새로운 배포 (기준 갱신)


import math

def solution(progresses, speeds):
    days = [] # 완료일 담을 배열
    # 완료일 계산
    for i in range(len(progresses)):
        day = math.ceil((100 - progresses[i]) / speeds[i])
        days.append(day)

    answer = [] # 정답 담을 배열
    standard = days[0] # 기준(현 배포 기준 첫번재 작업 완료일)
    count = 1 # 한 배포당 작업 갯수
    
    for i in range(1, len(days)):
        if standard < days[i]:
            answer.append(count)
            standard = days[i]
            count = 1
        else:
            count += 1
            
    answer.append(count)
    return answer

            
            
    
    
    