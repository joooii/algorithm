import sys
input = sys.stdin.readline

input() # N
arr_set = set(map(int, input().split()))
input()
targets = map(int, input().split())

for t in targets:
    print(1 if t in arr_set else 0)