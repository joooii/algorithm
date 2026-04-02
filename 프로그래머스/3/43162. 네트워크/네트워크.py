# visited 배열 생성
# 모든 노드 돌기
# 방문 안 한 노드 발견
# 같은 네트워크 묶기(연결된 애들 전부 방문 -> 카운트 +1)


def solution(n, computers):
    visited = [False] * n
    answer = 0
    
    def dfs(v):
        visited[v] = True
        
        for i in range(n):
            # 연결되어 있고, 아직 방문하지 않았으면 dfs돌리기
            if computers[v][i] == 1 and not visited[i]:
                dfs(i)
                
    for i in range(n):
        if not visited[i]:
            dfs(i)
            answer += 1
    
    return answer
    