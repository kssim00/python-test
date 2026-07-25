min_value = 10000
rooms = []
visited = []
length = 0


def patrol(now, e_sum):
    global min_value

    if e_sum < min_value:
        if 0 not in visited:
            min_value = min(min_value, e_sum + rooms[now][0])
            return

        for next_room in range(length):
            if next_room != now and visited[next_room] == 0:
                visited[next_room] = 1
                patrol(next_room, e_sum + rooms[now][next_room])
                visited[next_room] = 0


def solution(arr, N):
    global length, rooms, visited, min_value
    visited = [0] * N
    visited[0] = 1
    length = N
    rooms = arr
    min_value = 10000
    patrol(0, 0)

    return min_value