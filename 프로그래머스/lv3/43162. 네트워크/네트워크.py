def solution(n, computers):
    visited = [False] * n
    count = 0
    
    def dfs(node):
        visited[node] = True
        for i in range(n):
            if computers[node][i] == 1 and not visited[i]:
                dfs(i)
                
    for i in range(n):
        if not visited[i]:
            dfs(i)
            count += 1
    return count
    
    
    
# 덩어리 개수 = dfs
# n만큼 노드 생성
# 컴퓨터 배열을 돌아가면서 노드 연결 

# visited 배열 생성
# 모든 노드 순회
    # 방문 안된 노드 -> dfs, 네트워크 개수 +1
# dfs에서는:
    # 현재 노드 방문 처리 (True)
    # 연결된 모든 노드 탐색