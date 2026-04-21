def solution(new_id):
    new_id = new_id.lower()
    print("1: ", new_id)
    
    filtered_id = ""
    for i in new_id:
        if i.isalnum() or i in '-_.':
            filtered_id += i
    print("2: ", filtered_id)
    
    while '..' in filtered_id:
        filtered_id = filtered_id.replace('..', '.')
    print("3: ", filtered_id)
    
    filtered_id = filtered_id.strip('.')
    print("4: ", filtered_id)
    
    if not filtered_id:
        filtered_id = "a"
    print("5: ", filtered_id)
    
    if len(filtered_id) >= 16:
        filtered_id = filtered_id[:15].rstrip('.')
    
    while len(filtered_id) <= 2:
        filtered_id += filtered_id[-1]
    
    return filtered_id
# 순서
# 1. lower()
# 2. isalnum() or for i in '-_.' -> 이외는 제거 (해당하는 애들만 새 문자열에 담기)
# 3. while '..' -> replace('..','.')
# 4. strip('.')
# 5. 빈 문자열 -> a 대입
# 6. 16자 이상 -> 15자까지만 살리기
#    제거 후 맨 끝 문자열이 '.' -> 제거 (rstrip('.'))
# 7. 2자 이하 -> 마지막 문자를 3이 될때까지 반복 ([-1])

