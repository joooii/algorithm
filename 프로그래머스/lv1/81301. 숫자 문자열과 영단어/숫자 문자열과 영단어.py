def solution(s):
    words = ["zero", "one", "two", "three","four","five","six","seven", "eight", "nine"]
    for i, word in enumerate(words):
        s = s.replace(word, str(i))
    return int(s)
     


# 1. word 배열에 각 영단어 담기
# 2. for문을 돌면서 enumerate를 사용해서 리스트에서의 인덱스, 값을 같이 꺼냄
# 3. word를 마주치면 인덱스 값인 숫자(str)로 치환
# 4. 현재 str 이니까 int로 변환