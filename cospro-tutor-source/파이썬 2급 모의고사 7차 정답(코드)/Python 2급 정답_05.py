def solution(board):
    min_avg = 100
    max_avg = 0

    for i in range(5):
        sum_x = 0
        sum_y = 0
        for j in range(5):
            sum_x += board[i][j]
            sum_y += board[j][i]

        sum_x = int(sum_x / 5)
        sum_y = int(sum_y / 5)

        if max_avg < sum_x:
            max_avg = sum_x
        if max_avg < sum_y:
            max_avg = sum_y
        if min_avg > sum_x:
            min_avg = sum_x
        if min_avg > sum_y:
            min_avg = sum_y

    sum_d1 = 0
    sum_d2 = 0
    for i in range(5):
        sum_d1 += board[i][i]
        sum_d2 += board[i][4-i]

    sum_d1 = int(sum_d1 / 5)
    sum_d2 = int(sum_d2 / 5)

    if max_avg < sum_d1:
        max_avg = sum_d1
    if max_avg < sum_d2:
        max_avg = sum_d2
    if min_avg > sum_d1:
        min_avg = sum_d1
    if min_avg > sum_d2:
        min_avg = sum_d2

    return min_avg + max_avg