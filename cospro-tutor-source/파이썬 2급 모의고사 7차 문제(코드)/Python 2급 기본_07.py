#다음과 같이 import를 사용할 수 있습니다.
#import math

def solution(arr, N):
    answer = 0
    for i in range(N):
        a, b = arr[i]
        c = gcd(a, b)
        if c > answer:
            answer = c

    return answer


def gcd(a, b):
    if [[quiz]]:
        return [[quiz]]
    else:
        return [[quiz]]

# 아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니 위의 코드만 수정하세요.
arr1 = [[15,20],[36,48],[12,7],[121,44],[39,65]]
N1 = 5
ret1 = solution(arr1, N1)
# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
print("solution 함수의 반환 값은", ret1, "입니다.")

arr2 = [[356,78],[154,122],[38,190],[44,188],[365,245]]
N2 = 5
ret2 = solution(arr2, N2)
# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
print("solution 함수의 반환 값은", ret2, "입니다.")


