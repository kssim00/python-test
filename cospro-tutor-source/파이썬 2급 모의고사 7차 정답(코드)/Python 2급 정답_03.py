RED = 1
BLUE = 2
GRAY = 3

def solution(N, M, area, C):
    paper = [[0] * N for _ in range(N)]

    for i in range(M):
        target = area[i]
        from_r, from_c = target[0], target[1]
        to_r, to_c = target[2], target[3]
        color = target[4]

        for r in range(from_r, to_r + 1):
            for c in range(from_c, to_c + 1):
                if paper[r][c] == 0 or paper[r][c] == color:
                    paper[r][c] = color
                elif (paper[r][c] != color):
                    paper[r][c] = GRAY

    answer = 0

    for r in range(N):
        for c in range(N):
            if C == paper[r][c]:
                answer += 1

    return answer

