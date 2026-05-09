import itertools

def solution(number):
    answer = 0
    nPr = itertools.combinations(number, 3)
    for i,j,k in nPr:
        if i+j+k == 0:
            answer += 1
    return answer    

# 3개를 더해서 0이 되는 애들을 찾아야 함
# 1. 배열에서 3개 조합으로 뽑기 (순서 상관 x)
# 2. 3개의 합이 0이면 count+=1
# 3. 3개 합이 0이 아니면 return