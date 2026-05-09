def solution(players, callings):
    player_dict = {player: i for i, player in enumerate(players)}
    # print(player_dict)
    
    for name in callings:
        cur_idx = player_dict[name]
        # print(cur_idx)
        
        front_idx = cur_idx - 1
        front_player = players[front_idx]
        # print(front_idx)
        # print(front_player)
        
        players[cur_idx], players[front_idx] = players[front_idx], players[cur_idx]
        
        player_dict[name] = front_idx
        player_dict[front_player] = cur_idx

    return players
# 1. 선수 딕셔너리 생성 (enumerate) -> {선수: 등수} 형태
# 2. 호명된 선수의 현재 등수 확인
# 3. 앞사람 정보 파악
# 4. 앞사람과 현재 등수 교체
# 5. 딕셔너리 업데이트

