
def solution(scores, n):
    s_n=scores[n]
    scores.sort(reverse=True)

    for i in range(len(scores)):
        if s_n == scores[i]:
            rank=i+1
            return rank
    return 0


#아래는 테스트케이스 출력을 해보기 위한 코드입니다.
scores = [20, 60, 98, 59]
n = 3
ret = solution(scores, 2)

#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
print("solution 함수의 반환 값은", ret, "입니다.")
