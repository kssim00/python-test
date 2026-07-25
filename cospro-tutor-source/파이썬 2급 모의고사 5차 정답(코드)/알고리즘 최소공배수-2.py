def solution(a,b):
    answer=0
    for i in range(1,a+1):
        if (b*i)%a==0:
            answer=b*i
            break
    return answer

v=solution(4,6)
print(v)



