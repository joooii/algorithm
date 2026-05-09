from collections import deque

def solution(maps):
    # 좌표 길이 체크 (지금은 4*5)
    n = len(maps)
    m = len(maps[0])
    
    # 이동방향 설정
    dx = [-1, 1, 0 , 0]
    dy = [0,0,-1,1]
    
    # bfs 시작
    def bfs(x,y):
        # q 설정 후, x,y 값 append
        q = deque()
        q.append((x,y))
        
        # q 돌리는 동안은 무조건 실행
        while q:
            # 현재 위치 popleft
            x, y = q.popleft()
            
            # 4방향 탐색
            for i in range(4):
                # 다음 위치 설정
                nx = x + dx[i]
                ny = y + dy[i]
                
                # 범위 체크
                if nx < 0 or nx >= n or ny < 0 or ny >= m:
                    continue
                # 벽 -> 무시
                if maps[nx][ny] == 0:
                    continue
                # 처음 방문 -> q에 새 좌표 추가
                if maps[nx][ny] == 1:
                    maps[nx][ny] = maps[x][y] + 1
                    q.append((nx, ny))

    bfs(0,0)
    
    # 1이면 방문하지 않은 것! -> 그래서 아직 도착 못했다고 판단 -> -1 출력
    if maps[n-1][m-1] == 1:
        return -1
    else:
        return maps[n-1][m-1]

# 못지나가면 -1 , 지나가면 좌표 (nx, ny)