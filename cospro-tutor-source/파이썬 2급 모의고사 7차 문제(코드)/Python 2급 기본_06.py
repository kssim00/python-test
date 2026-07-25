#다음과 같이 import를 사용할 수 있습니다.
#import math

def solution(arr, N):

    frequency = [0] * (101)

    for i in range(N):
        [[quiz]] += 1

    max = 0
    num = 0

    for i in range([[quiz]]):
        if max <= frequency[i]:
            max = frequency[i]
            if [[quiz]]:
                [[quiz]]

    return num

# 아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니 위의 코드만 수정하세요.
arr1 = [1,2,3,4,4,5,6,7,7,8,9,9,9,9,10]
N1 = 15
ret1 = solution(arr1, N1)
# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
print("solution 함수의 반환 값은", ret1, "입니다.")

arr2 = [1,1,4,4,8,8,8,8,9,9,9,9,1,4,4,4,5,3,2,2,1,4,8,7]
N2 = 24
ret2 = solution(arr2, N2)
# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
print("solution 함수의 반환 값은", ret2, "입니다.")

arr3 = [3,3,3,3,3,5,5,5,5,5,9,9,9,9,9,11,11,11,11,11]
N3 = 20
ret3 = solution(arr3, N3)
# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
print("solution 함수의 반환 값은", ret3, "입니다.")


