#다음과 같이 import를 사용할 수 있습니다.
#import math

def solution(board):
    min_avg = 100
    max_avg = 0

    for i in range(5):
        sum_x = 0
        sum_y = 0
        for j in range(5):
            sum_x += [[quiz]]
            sum_y += [[quiz]]

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
        sum_d1 += [[quiz]]
        sum_d2 += [[quiz]]

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

# 아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니 위의 코드만 수정하세요.
board1 = [[25,11,82,61,34],[87,98,91,76,95],[44,2,39,57,65],[69,32,51,16,41],[94,27,74,37,9]]
ret1 = solution(board1)
# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
print("solution 함수의 반환 값은", ret1, "입니다.")


