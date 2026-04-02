# 최소 이동 -> bfs
from collections import deque

import sys
input = sys.stdin.readline

n,m = map(int, input().split())
graph = [list(map(int, input().strip())) for _ in range(n)]

dx = [-1,1,0,0]
dy = [0,0,-1,1]

def bfs(x,y):
    q = deque()
    q.append((x,y))
    
    while q:
        x,y = q.popleft()
        # 4방향 탐색
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
        
            if nx<0 or nx>=n or ny<0 or ny>=m:
                continue
            if graph[nx][ny] == 0:
                continue
            if graph[nx][ny] == 1:
                graph[nx][ny] = graph[x][y]+1
                q.append((nx,ny))
            
bfs(0,0)
print(graph[n-1][m-1])