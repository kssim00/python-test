def solution(number):
    answer = 0
    convert_number=''
    digit=len(str(number))
    
    for i in range(digit-1,-1,-1):
        convert_number+=str(number)[i]
        
    answer=abs(number-int(convert_number))
    
    return answer

#아래는 테스트케이스 출력을 해보기 위한 코드입니다.
number1 = 120
ret1 = solution(number1)

#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
print("solution 함수의 반환 값은", ret1, "입니다.")

number2 = 23
ret2 = solution(number2)

#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
print("solution 함수의 반환 깂은", ret2, "입니다.")
