
def func_a(time_table):
    answer = 0
    for i in range(len(time_table)-1,-1,-1):
        if time_table[i] == 1:
            answer = i
            break
    return answer

def func_b(time_table, class1, class2):
    answer= time_table[class1:class2].count(0)
    return answer

def func_c(time_table):
    answer = 0
    for i in range(len(time_table)):
        if time_table[i] == 1:
            answer = i
            break
    return answer

def solution(time_table):
    answer = 0
    first_class = func_c(time_table)
    last_class = func_a(time_table)
    answer = func_b(time_table,first_class,last_class)
    return answer

#아래는 테스트케이스 출력을 해보기 위한 코드입니다.
time_table = [1, 1, 0, 0, 1, 0, 1, 0, 0, 0]
ret = solution(time_table)

#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
print("solution 함수의 반환 값은", ret, "입니다.")