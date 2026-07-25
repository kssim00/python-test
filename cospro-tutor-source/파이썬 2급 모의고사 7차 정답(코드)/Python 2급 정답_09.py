def solution(arr, N, J):
    now = 0

    while J > 0:
        eat = arr.pop(0)
        J -= eat
        arr.append(eat)
        now += 1

        if now > N:
            now = 1

    return now