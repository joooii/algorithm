import sys
input = sys.stdin.readline

from collections import deque

n,m,v = map(int, input().split())
graph = [[] for _ in range(n+1)]

for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)
    
for i in range(1, n+1):
    graph[i].sort()
    
visited = [False] * (n+1)

# DFS
def dfs(v):
    visited[v] = True
    print(v, end=' ')
    
    for next in graph[v]:
        if not visited[next]:
            dfs(next)

# BFS
def bfs(v):
    visited = [False] * (n+1)
    q = deque([v])
    visited[v] = True
    
    while q:
        cur = q.popleft()
        print(cur, end=' ')
        
        for next in graph[cur]:
            if not visited[next]:
                visited[next] = True
                q.append(next)
                
dfs(v)
print()
bfs(v)