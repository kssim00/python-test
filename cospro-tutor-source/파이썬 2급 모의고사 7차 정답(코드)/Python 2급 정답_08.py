def solution(arr):
    answer = 1
    N = 10

    for i in range(N):
        for j in range(N):
            if arr[i][j] == 1:
                length = 0
                for w in range(2, 11):
                    is_square = True
                    for di in range(i, i + w):
                        for dj in range(j, j + w):
                            if di >= N or dj >= N or arr[di][dj] == 0:
                                is_square = False
                                break
                        if not is_square:
                            break

                    if is_square:
                        length = w
                    else:
                        break

                if length > 1:
                    for di in range(i, i + length):
                        for dj in range(j, j + length):
                            arr[di][dj] = 0

    for i in range(N):
        for j in range(N):
            if arr[i][j] == 1:
                return 0

    return 1