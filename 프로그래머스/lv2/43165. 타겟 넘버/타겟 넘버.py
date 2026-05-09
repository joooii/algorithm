def solution(numbers, target):
    def dfs(idx, total):
        if idx == len(numbers):
            if target == total:
                return 1 # 경우의 수 1 추가
            return 0
        plus = dfs(idx+1, total+numbers[idx])
        minus = dfs(idx+1, total-numbers[idx])
        return plus + minus
    return dfs(0,0)

# 모든 경우의 수 = dfs
# idx : 현재 몇번째 숫자 처리중인지
# total : 현재까지의 합
# dfs(0,0) 시작
# 종료 조건: idx가 리프 노드(len(numbers))일 때, total == target이면 경우의 수 += 1
# 재귀조건: +) dfs(idx+1, total+numbers[idx])
#         -) dfs(idx+1, total-numbers[idx])   