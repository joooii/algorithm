from collections import deque

def solution(maps):
    n = len(maps)
    m = len(maps[0])
    
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    
    def bfs(x,y):
        q = deque()
        q.append((x,y))
        
        while q:
            x,y = q.popleft()
            
            for i in range(4): # 4방향 탐색
                # 이동 위치 설정
                nx = x + dx[i]
                ny = y + dy[i]
                
                # 범위 
                if nx < 0 or nx >= n or ny < 0 or ny >= m:
                    continue
                if maps[nx][ny] == 0:
                    continue
                if maps[nx][ny] == 1:
                    maps[nx][ny] = maps[x][y] + 1
                    q.append((nx,ny))
                    
    bfs(0,0)
    
    if maps[n-1][m-1] == 1:
        return -1
    else:
        return maps[n-1][m-1]