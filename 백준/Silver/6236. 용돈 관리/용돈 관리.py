import sys
input = sys.stdin.readline

N, M = map(int, input().split())
arr = [int(input()) for _ in range(N)]

left = max(arr)
right = sum(arr)
result = right

while (left <= right):
    mid = (left+right)//2
    money = mid
    count = 1
    
    for cost in arr:
        if money < cost:
            count+=1
            money = mid
        money -= cost

    if count > M:
        left = mid + 1
    else:
        result = mid
        right = mid - 1
print(result)