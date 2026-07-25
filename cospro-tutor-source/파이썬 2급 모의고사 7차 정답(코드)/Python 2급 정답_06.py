def solution(arr, N):


    frequency = [0] * (101)

    for i in range(N):
        frequency[arr[i]] += 1

    max = 0
    num = 0

    for i in range(101):
        if max <= frequency[i]:
            max = frequency[i]
            if num < i:
                num = i

    return num