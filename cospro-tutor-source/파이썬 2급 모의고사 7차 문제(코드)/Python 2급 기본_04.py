#다음과 같이 import를 사용할 수 있습니다.
#import math

def solution(arr, N, M):
    min_sum = 50000
    max_sum = 0

    for i in range(N-M+1):
        temp_max = 0
        for j in range(i, i+M):
            temp_max += arr[j]
        if temp_max > [[quiz]]:
            [[quiz]] = temp_max
        if temp_max < [[quiz]]:
            [[quiz]] = temp_max

    return max_sum - min_sum

# 아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니 위의 코드만 수정하세요.
arr1 = [3,1,1,4,5,9]
N1 = 6
M1 = 3
ret1 = solution(arr1, N1, M1)
# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
print("solution 함수의 반환 값은", ret1, "입니다.")

arr2 = [3,1,1,4,5,9]
N2 = 6
M2 = 2
ret2 = solution(arr2, N2, M2)
# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
print("solution 함수의 반환 값은", ret2, "입니다.")

arr3 = [1,2,3,4,5,6]
N3 = 6
M3 = 4
ret3 = solution(arr3, N3, M3)
# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
print("solution 함수의 반환 값은", ret3, "입니다.")


