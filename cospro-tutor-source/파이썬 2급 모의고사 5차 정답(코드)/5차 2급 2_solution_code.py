def solution(time_table):
    answer = 0
    first_class, last_class = 0, 0
    for i in time_table:
        if i == 1:
            first_class = i
            break
    for i in reversed(time_table):
        if i == 1:
            last_class = i
            break
    for i in range(first_class, last_class):
        if time_table[i] == 0:
            answer += 1
    return answer

#아래는 테스트케이스 출력을 해보기 위한 코드입니다.
time_table = [1, 1, 0, 0, 1, 0, 1, 0, 0, 0]
ret = solution(time_table)

#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
print("solution 함수의 반환 값은", ret, "입니다.")