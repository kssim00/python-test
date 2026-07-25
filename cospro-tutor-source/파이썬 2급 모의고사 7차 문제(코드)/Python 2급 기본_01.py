#다음과 같이 import를 사용할 수 있습니다.
#import math

def solution(arr, N, M):

    for i in range(N - 1):
        min_idx = i
        for j in range(i + 1, N):
            if arr[j] > arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

    sum = 0

    for i in range(1, N):
        if i % M == 0:
            sum += arr[i]

    return sum


# 아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니 위의 코드만 수정하세요.
arr1 = [4,2,1,3,9,5,6]
N1 = 7
M1 = 3
ret1 = solution(arr1, N1, M1)
# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
print("solution 함수의 반환 값은", ret1, "입니다.")

arr2 = [7,6,5,4,3,2,1]
N2 = 7
M2 = 3
ret2 = solution(arr2, N2, M2)
# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
print("solution 함수의 반환 값은", ret2, "입니다.")

arr3 = [8,6,3,3,4,1,5,7]
N3 = 8
M3 = 2
ret3 = solution(arr3, N3, M3)
# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
print("solution 함수의 반환 값은", ret3, "입니다.")


