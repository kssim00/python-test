def solution(arr, N):
    answer = 0
    for i in range(N):
        a, b = arr[i]

        c = gcd(a, b)
        # print(c)
        if c > answer:
            answer = c

    return answer


def gcd(a, b):
    if b == 0:
        return a
    else:
        return gcd(b, a % b)