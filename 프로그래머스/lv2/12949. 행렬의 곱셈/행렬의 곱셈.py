def solution(arr1, arr2):
    row1, col1 = len(arr1), len(arr1[0])
    row2, col2 = len(arr2), len(arr2[0])
    
    # 행렬 결과 값은 2번째 행렬의 열만큼 크기 생성. 이거를 1번째 행렬의 행만큼 반복
    answer = [[0] * col2 for _ in range(row1)]
    
    # arr1의 행과 arr2의 열을 곱해서 answer 리스트에 더하기
    for i in range(row1):
        for j in range(col2):
            for k in range(col1):
                answer[i][j] += arr1[i][k] * arr2[k][j]
    return answer
            