def solution(arr, N, M):
    min_sum = 50000
    max_sum = 0

    for i in range(N-M+1):
        temp_max = 0
        for j in range(i, i+M):
            temp_max += arr[j]
        if temp_max > max_sum:
            max_sum = temp_max
        if temp_max < min_sum:
            min_sum = temp_max

    return max_sum - min_sum