
def solution(scores, n):
    ranking=[]

    for i in range(len(scores)):
        rank=1
        for s in scores:
            if scores[i] < s:
                rank+=1
        ranking.append(rank)
    print(ranking)
    answer=ranking[n]
    return answer



#아래는 테스트케이스 출력을 해보기 위한 코드입니다.
scores = [20, 60, 98, 59]
n = 3
ret = solution(scores, n)

#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
print("solution 함수의 반환 값은", ret, "입니다.")
