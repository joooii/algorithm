import sys
input = sys.stdin.readline

from collections import deque

n, m = map(int, input().split())
graph = [list(map(int, input().strip())) for _ in range(n)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def bfs(x,y):
    q = deque()
    q.append((x,y))
    
    while q:
        x, y = q.popleft() # 현재 위치 꺼내기
        # 4방향 탐색
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            
            # 범위 체크
            if nx < 0 or nx >=n or ny < 0 or ny >= m:
                continue
            # 벽이면 패스
            if graph[nx][ny] == 0:
                continue
        
            # 처음방문 -> 큐 삽입
            if graph[nx][ny] == 1:
                graph[nx][ny] = graph[x][y] + 1
                q.append((nx, ny))
bfs(0,0)
print(graph[n-1][m-1])
    