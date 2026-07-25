def solution(a,b):
    answer=0
    for i in range(1,a*b+1):
        if i%a==0 and i%b==0:
            answer=i
            print(answer)
    return answer

v=solution(4,6)
print(v)

