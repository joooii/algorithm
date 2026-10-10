function solution(players, callings) {
    const map = new Map();
    
    players.forEach((player, index) => {
        map.set(player, index);
    });
    
    for (let i = 0; i < callings.length; i++) {
        const curIdx = map.get(callings[i]);
        const frontPlayer = players[curIdx - 1];
        
        [players[curIdx], players[curIdx-1]] = [players[curIdx-1], players[curIdx]];
        
        map.set(callings[i], curIdx-1);
        map.set(frontPlayer, curIdx);
    }
    return players;    
}
