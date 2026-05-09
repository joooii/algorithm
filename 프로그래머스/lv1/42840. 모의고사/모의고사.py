from itertools import cycle

def solution(answers):
    patterns = [
        cycle([1,2,3,4,5]),
        cycle([2, 1, 2, 3, 2, 4, 2, 5]),
        cycle([3,3,1,1,2,2,4,4,5,5])
    ]
    
    scores = [0,0,0 ]
    
    for answer in answers:
        for i in range(len(patterns)):
            if answer == next(patterns[i]):
                scores[i] += 1
    
    max_score = max(scores)
    
    return [i+1 for i, s in enumerate(scores) if s == max_score]
#     result = []
#     for i, s in enumerate(scores):
#         if s == max_score:
#             result.append(i + 1)
#     return result
