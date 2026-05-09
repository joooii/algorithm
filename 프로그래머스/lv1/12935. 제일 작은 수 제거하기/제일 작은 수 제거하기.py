def solution(arr):
    minV = min(arr)
    arr.remove(minV)
    
    if len(arr) == 0:
        return [-1]
    else:
        return arr
    