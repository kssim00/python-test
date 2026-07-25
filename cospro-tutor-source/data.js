/* ============================================================
   COS Pro 문제 데이터 파일
   ------------------------------------------------------------
   새 문제를 추가할 때는 이 파일만 수정하면 됩니다.
   (앱 화면/스타일/채점 로직은 app.js 에 있고 건드릴 필요 없음)

   [SETS] 문제 세트(교재) 목록 — 세트 하나 = 화면의 버튼 하나
     key   : 세트 고유 알파벳 (A, B, C ... 새 세트는 다음 알파벳 사용)
     name  : 화면에 보일 세트 이름
     icon  : 세트 아이콘 이모지
     type  : "직접 작성형" | "빈칸 채우기형" | "함수 완성형" | "혼합형"
     level : "3"(3급) 또는 "2"(2급)

   [PROBLEMS] 문제 목록 — 새 문제는 배열 맨 끝에 { ... } 추가
     set     : 이 문제가 속한 세트 (SETS의 key)
     title   : 문제 제목
     desc    : 문제 설명. 줄바꿈은 \n 으로 표기
     func    : true면 "함수 완성형"(solution 함수 작성) 문제. 없으면 표준 입출력형
     label   : func:true 문제의 보조 표시 (예: "직접 작성", "빈칸 채우기 (@@)")
     ex      : 문제 화면에 보여줄 예시
                 표준입출력형: {"i": 입력, "o": 출력}
                 함수형     : {"i": "solution(...)" 호출 예시, "o": 결과, "note": 설명(선택)}
     starter : 학생에게 보여줄 시작 코드
     sol     : 정답 코드 (모범 답안)
     tests   : 채점용 테스트 케이스
                 표준입출력형: {"i": 입력, "o": 기대 출력}
                 함수형     : {"call": "solution(...)" 호출문, "o": 기대 결과}
   ============================================================ */

const SETS = {
  "A": {
    "name": "COS Pro 3급 기출",
    "icon": "📘",
    "type": "직접 작성형",
    "level": "3"
  },
  "B": {
    "name": "3급 기출 변형",
    "icon": "📗",
    "type": "직접 작성형",
    "level": "3"
  },
  "C": {
    "name": "기출변형 빈칸채우기",
    "icon": "📙",
    "type": "빈칸 채우기형",
    "level": "3"
  },
  "D": {
    "name": "파이썬 코딩 문제집",
    "icon": "📕",
    "type": "혼합형",
    "level": "3"
  },
  "E": {
    "name": "2급 모의고사 1차",
    "icon": "📓",
    "type": "함수 완성형",
    "level": "2"
  },
  "F": {
    "name": "2급 모의고사 2차",
    "icon": "📔",
    "type": "함수 완성형",
    "level": "2"
  },
  "G": {
    "name": "2급 모의고사 3차",
    "icon": "📒",
    "type": "함수 완성형",
    "level": "2"
  },
  "H": {
    "name": "2급 모의고사 4차",
    "icon": "📖",
    "type": "함수 완성형",
    "level": "2"
  },
  "I": {
    "name": "2급 모의고사 5차",
    "icon": "📚",
    "type": "함수 완성형",
    "level": "2"
  },
  "J": {
    "name": "2급 모의고사 6차",
    "icon": "📝",
    "type": "함수 완성형",
    "level": "2"
  },
  "K": {
    "name": "2급 모의고사 7차",
    "icon": "📑",
    "type": "함수 완성형",
    "level": "2"
  }
};

const PROBLEMS = [
  {
    "set": "A",
    "title": "두 수의 합",
    "desc": "표준 입력(input())으로 숫자 두 개를 한 줄에(공백 구분) 입력받아, 두 수의 합을 출력하세요.\n\n[입력설명] 두 수는 1 이상 100 이하인 자연수입니다.\n[출력설명] 두 수의 합을 출력해 주세요.",
    "ex": [
      {
        "i": "3 5",
        "o": "8"
      },
      {
        "i": "10 90",
        "o": "100"
      }
    ],
    "starter": "# 두 수를 입력받아 합을 출력하세요\na, b = map(int, input().split())\n",
    "sol": "a, b = map(int, input().split())\nprint(a + b)",
    "tests": [
      {
        "i": "3 5",
        "o": "8"
      },
      {
        "i": "10 90",
        "o": "100"
      },
      {
        "i": "7 2",
        "o": "9"
      }
    ]
  },
  {
    "set": "A",
    "title": "더 긴 문자열 찾기",
    "desc": "문자열 두 개를 각각 한 줄씩 입력받아, 두 문자열 중 더 긴 문자열을 출력하세요.\n\n[입력설명] 두 문자열의 길이는 1 이상 100 이하이며, 길이가 같은 경우는 없습니다.\n[출력설명] 더 긴 문자열을 출력해 주세요.",
    "ex": [
      {
        "i": "apple\nbanana",
        "o": "banana"
      }
    ],
    "starter": "a = input()\nb = input()\n# 더 긴 문자열을 출력하세요\n",
    "sol": "a = input()\nb = input()\nif len(a) > len(b):\n    print(a)\nelse:\n    print(b)",
    "tests": [
      {
        "i": "apple\nbanana",
        "o": "banana"
      },
      {
        "i": "elephant\ncat",
        "o": "elephant"
      }
    ]
  },
  {
    "set": "A",
    "title": "거꾸로 직각삼각형",
    "desc": "자연수 N을 입력받아 별(*)로 밑변과 높이가 N인 직각삼각형을 거꾸로 출력하세요.\n\n예) N=3이면\n***\n**\n*\n\n[입력설명] N은 1 이상 100 이하입니다.",
    "ex": [
      {
        "i": "3",
        "o": "***\n**\n*"
      }
    ],
    "starter": "N = int(input())\n# 거꾸로 삼각형을 출력하세요\n",
    "sol": "N = int(input())\nfor i in range(N):\n    print(\"*\" * (N - i))",
    "tests": [
      {
        "i": "3",
        "o": "***\n**\n*"
      },
      {
        "i": "5",
        "o": "*****\n****\n***\n**\n*"
      }
    ]
  },
  {
    "set": "A",
    "title": "양 옆에 큰따옴표 붙이기",
    "desc": "문자열 한 개를 입력받아, 문자열 양 옆에 큰따옴표(\")를 붙여 출력하세요.\n\n[입력설명] 문자열은 알파벳 대문자와 소문자로만 이루어지며, 길이는 1 이상 100 이하입니다.",
    "ex": [
      {
        "i": "python",
        "o": "\"python\""
      }
    ],
    "starter": "a = input()\n# 양 옆에 큰따옴표를 붙여 출력하세요\n",
    "sol": "a = input()\nprint('\"' + a + '\"')",
    "tests": [
      {
        "i": "python",
        "o": "\"python\""
      },
      {
        "i": "Cos",
        "o": "\"Cos\""
      }
    ]
  },
  {
    "set": "A",
    "title": "절댓값 구하기",
    "desc": "숫자 한 개를 입력받아 그 수의 절댓값을 출력하세요.\n\n[입력설명] 입력된 수는 -1000 이상 1000 이하인 정수입니다.",
    "ex": [
      {
        "i": "-7",
        "o": "7"
      }
    ],
    "starter": "a = int(input())\n# 절댓값을 출력하세요 (abs를 쓰지 않고 if로도 해보세요!)\n",
    "sol": "a = int(input())\nif a < 0:\n    print(a * -1)\nelse:\n    print(a)",
    "tests": [
      {
        "i": "-7",
        "o": "7"
      },
      {
        "i": "5",
        "o": "5"
      },
      {
        "i": "0",
        "o": "0"
      }
    ]
  },
  {
    "set": "A",
    "title": "같으면 합, 다르면 차",
    "desc": "숫자 두 개를 각각 한 줄씩 입력받아, 두 숫자가 같으면 합을, 다르면 차를 출력하세요.\n\n[입력설명] 두 숫자는 1 이상 100 이하인 자연수이며, 두 번째 숫자는 첫 번째 숫자와 같거나 큽니다.",
    "ex": [
      {
        "i": "5\n5",
        "o": "10"
      },
      {
        "i": "3\n9",
        "o": "6"
      }
    ],
    "starter": "a = int(input())\nb = int(input())\n# 같으면 합, 다르면 차를 출력하세요\n",
    "sol": "a = int(input())\nb = int(input())\nif a == b:\n    print(a + b)\nelse:\n    print(abs(a - b))",
    "tests": [
      {
        "i": "5\n5",
        "o": "10"
      },
      {
        "i": "3\n9",
        "o": "6"
      }
    ]
  },
  {
    "set": "A",
    "title": "1부터 n까지 출력",
    "desc": "자연수 n을 입력받아 1부터 n까지의 정수를 한 줄에 하나씩 출력하세요. (while문을 이용해 보세요)\n\n[입력설명] n은 1 이상 1000 이하입니다.",
    "ex": [
      {
        "i": "4",
        "o": "1\n2\n3\n4"
      }
    ],
    "starter": "n = int(input())\ncount = 1\n# while문으로 1부터 n까지 출력하세요\n",
    "sol": "n = int(input())\ncount = 1\nwhile count <= n:\n    print(count)\n    count += 1",
    "tests": [
      {
        "i": "4",
        "o": "1\n2\n3\n4"
      },
      {
        "i": "1",
        "o": "1"
      }
    ]
  },
  {
    "set": "A",
    "title": "인접한 두 수의 차",
    "desc": "자연수 n과 길이가 n인 배열 arr을 입력받아, 인접하는 두 숫자 중 첫 번째 숫자에서 두 번째 숫자를 뺀 값을 차례대로 한 줄에 하나씩 출력하세요.\n\n[입력설명] n은 2 이상 50 이하, arr의 원소는 -100 이상 100 이하인 정수입니다.",
    "ex": [
      {
        "i": "4\n5 2 9 1",
        "o": "3\n-7\n8"
      }
    ],
    "starter": "n = int(input())\narr = list(map(int, input().split()))\n# 인접한 두 수의 차를 차례로 출력하세요\n",
    "sol": "n = int(input())\narr = list(map(int, input().split()))\nfor i in range(n - 1):\n    print(arr[i] - arr[i + 1])",
    "tests": [
      {
        "i": "4\n5 2 9 1",
        "o": "3\n-7\n8"
      },
      {
        "i": "3\n10 20 5",
        "o": "-10\n15"
      }
    ]
  },
  {
    "set": "A",
    "title": "숫자 거꾸로 출력",
    "desc": "자연수 n을 입력받아 숫자를 거꾸로 출력하세요.\n예) 12345 → 54321\n\n[입력설명] n은 1 이상 100,000,000 이하이며 0으로 끝나지 않습니다.",
    "ex": [
      {
        "i": "12345",
        "o": "54321"
      }
    ],
    "starter": "a = input()\n# 문자열 슬라이싱을 활용해 보세요\n",
    "sol": "a = input()\nprint(a[::-1])",
    "tests": [
      {
        "i": "12345",
        "o": "54321"
      },
      {
        "i": "9",
        "o": "9"
      },
      {
        "i": "1234",
        "o": "4321"
      }
    ]
  },
  {
    "set": "A",
    "title": "문자열에서 '1'의 개수",
    "desc": "문자열 s를 입력받아 s에 포함된 '1'의 개수를 출력하세요.\n예) s가 \"4156721\"이면 '1'이 2개이므로 2를 출력합니다.\n\n[입력설명] s의 길이는 1 이상 1000 이하이며 '1'~'9'로 이루어집니다.",
    "ex": [
      {
        "i": "4156721",
        "o": "2"
      }
    ],
    "starter": "s = input()\ncount = 0\n# 반복문으로 '1'의 개수를 세어 보세요\n",
    "sol": "s = input()\ncount = 0\nfor i in range(len(s)):\n    if s[i] == \"1\":\n        count += 1\nprint(count)",
    "tests": [
      {
        "i": "4156721",
        "o": "2"
      },
      {
        "i": "111",
        "o": "3"
      },
      {
        "i": "234",
        "o": "0"
      }
    ]
  },
  {
    "set": "B",
    "title": "k부터 4씩 n개",
    "desc": "두 자연수 k와 n을 각각 한 줄씩 입력받아, k를 시작으로 4씩 증가하는 숫자를 총 n개 공백으로 구분해 출력하세요.",
    "ex": [
      {
        "i": "5\n3",
        "o": "5 9 13"
      }
    ],
    "starter": "k = int(input())\nn = int(input())\n# k부터 4씩 커지는 수 n개를 출력하세요\n",
    "sol": "k = int(input())\nn = int(input())\nresult = []\nfor i in range(n):\n    result.append(k + 4 * i)\nprint(*result)",
    "tests": [
      {
        "i": "5\n3",
        "o": "5 9 13"
      },
      {
        "i": "7\n5",
        "o": "7 11 15 19 23"
      }
    ]
  },
  {
    "set": "B",
    "title": "10을 만나면 중단",
    "desc": "숫자 리스트를 한 줄로 입력받아, 앞에서부터 차례로 더하다가 숫자 10을 만나면 즉시 중단하고 그때까지의 합계를 출력하세요. (10은 합계에 포함하지 않습니다)",
    "ex": [
      {
        "i": "2 5 8 10 3",
        "o": "15"
      }
    ],
    "starter": "arr = list(map(int, input().split()))\ntotal = 0\n# 10을 만나면 break!\n",
    "sol": "arr = list(map(int, input().split()))\ntotal = 0\nfor x in arr:\n    if x == 10:\n        break\n    total += x\nprint(total)",
    "tests": [
      {
        "i": "2 5 8 10 3",
        "o": "15"
      },
      {
        "i": "10 1 2",
        "o": "0"
      },
      {
        "i": "1 2 3 10",
        "o": "6"
      }
    ]
  },
  {
    "set": "B",
    "title": "세 수 중 최댓값",
    "desc": "세 개의 정수를 한 줄로 입력받아 그중 가장 큰 값을 출력하세요.",
    "ex": [
      {
        "i": "12 45 23",
        "o": "45"
      }
    ],
    "starter": "a, b, c = map(int, input().split())\n# 가장 큰 값을 찾아 출력하세요\n",
    "sol": "a, b, c = map(int, input().split())\nbig = a\nif b > big:\n    big = b\nif c > big:\n    big = c\nprint(big)",
    "tests": [
      {
        "i": "12 45 23",
        "o": "45"
      },
      {
        "i": "9 1 5",
        "o": "9"
      },
      {
        "i": "3 3 8",
        "o": "8"
      }
    ]
  },
  {
    "set": "B",
    "title": "인덱스가 3의 배수인 원소의 합",
    "desc": "리스트 크기 n과 n개의 정수를 입력받아, 인덱스 번호가 3의 배수(0, 3, 6, ...)인 위치의 숫자들만 더한 값을 출력하세요.",
    "ex": [
      {
        "i": "5\n10 20 30 40 50",
        "o": "50",
        "note": "인덱스 0의 10 + 인덱스 3의 40 = 50"
      }
    ],
    "starter": "n = int(input())\narr = list(map(int, input().split()))\n# 인덱스 0, 3, 6, ... 위치의 합을 구하세요\n",
    "sol": "n = int(input())\narr = list(map(int, input().split()))\ntotal = 0\nfor i in range(n):\n    if i % 3 == 0:\n        total += arr[i]\nprint(total)",
    "tests": [
      {
        "i": "5\n10 20 30 40 50",
        "o": "50"
      },
      {
        "i": "7\n1 2 3 4 5 6 7",
        "o": "12"
      }
    ]
  },
  {
    "set": "B",
    "title": "# 계단 출력",
    "desc": "자연수 n을 입력받아, 첫 줄에 '#' 1개, 둘째 줄에 2개, ... n번째 줄까지 하나씩 늘려가며 계단식으로 출력하세요.",
    "ex": [
      {
        "i": "3",
        "o": "#\n##\n###"
      }
    ],
    "starter": "n = int(input())\n# 계단을 출력하세요\n",
    "sol": "n = int(input())\nfor i in range(1, n + 1):\n    print(\"#\" * i)",
    "tests": [
      {
        "i": "3",
        "o": "#\n##\n###"
      },
      {
        "i": "5",
        "o": "#\n##\n###\n####\n#####"
      }
    ]
  },
  {
    "set": "B",
    "title": "대문자 개수 세기",
    "desc": "문자열을 입력받아 그 안에 포함된 알파벳 대문자가 총 몇 개인지 출력하세요.",
    "ex": [
      {
        "i": "PyThOn",
        "o": "3"
      }
    ],
    "starter": "s = input()\ncount = 0\n# 대문자('A'~'Z')의 개수를 세어 보세요\n",
    "sol": "s = input()\ncount = 0\nfor ch in s:\n    if \"A\" <= ch <= \"Z\":\n        count += 1\nprint(count)",
    "tests": [
      {
        "i": "PyThOn",
        "o": "3"
      },
      {
        "i": "HELLO",
        "o": "5"
      },
      {
        "i": "abc",
        "o": "0"
      }
    ]
  },
  {
    "set": "B",
    "title": "두 수의 차 — Even / Odd",
    "desc": "두 정수 a와 b를 한 줄로 입력받아 두 수의 차이(절댓값)를 구하고, 그 차이가 짝수면 \"Even\", 홀수면 \"Odd\"를 출력하세요.",
    "ex": [
      {
        "i": "10 3",
        "o": "Odd"
      }
    ],
    "starter": "a, b = map(int, input().split())\n# 차이의 절댓값이 짝수인지 홀수인지 판별하세요\n",
    "sol": "a, b = map(int, input().split())\ndiff = abs(a - b)\nif diff % 2 == 0:\n    print(\"Even\")\nelse:\n    print(\"Odd\")",
    "tests": [
      {
        "i": "10 3",
        "o": "Odd"
      },
      {
        "i": "10 4",
        "o": "Even"
      }
    ]
  },
  {
    "set": "B",
    "title": "4과목 평균 (소수점 버림)",
    "desc": "4과목의 점수를 한 줄로 입력받아 리스트에 저장한 뒤, 전체 평균 점수를 소수점을 버린 정수로 출력하세요.",
    "ex": [
      {
        "i": "80 85 90 82",
        "o": "84"
      }
    ],
    "starter": "scores = list(map(int, input().split()))\n# 평균을 정수로 출력하세요 (// 연산자 활용)\n",
    "sol": "scores = list(map(int, input().split()))\nprint(sum(scores) // 4)",
    "tests": [
      {
        "i": "80 85 90 82",
        "o": "84"
      },
      {
        "i": "100 90 80 71",
        "o": "85"
      }
    ]
  },
  {
    "set": "B",
    "title": "제곱이 더 큰 수",
    "desc": "두 정수 a와 b를 한 줄로 입력받아, 각각을 제곱한 결과값이 더 큰 쪽의 '원래 숫자'를 출력하세요.",
    "ex": [
      {
        "i": "-5 3",
        "o": "-5",
        "note": "(-5)²=25 > 3²=9 이므로 -5 출력"
      }
    ],
    "starter": "a, b = map(int, input().split())\n# 제곱해서 비교하고, 원래 수를 출력하세요\n",
    "sol": "a, b = map(int, input().split())\nif a * a > b * b:\n    print(a)\nelse:\n    print(b)",
    "tests": [
      {
        "i": "-5 3",
        "o": "-5"
      },
      {
        "i": "2 6",
        "o": "6"
      }
    ]
  },
  {
    "set": "B",
    "title": "원의 넓이",
    "desc": "원의 반지름 r을 입력받아 원의 넓이를 구하세요. 원주율은 3.14로 계산하고, 결과는 소수점 첫째 자리까지 출력합니다.",
    "ex": [
      {
        "i": "5",
        "o": "78.5"
      }
    ],
    "starter": "r = int(input())\n# 넓이 = r * r * 3.14, round()로 반올림하세요\n",
    "sol": "r = int(input())\nprint(round(r * r * 3.14, 1))",
    "tests": [
      {
        "i": "5",
        "o": "78.5"
      },
      {
        "i": "1",
        "o": "3.1"
      }
    ]
  },
  {
    "set": "B",
    "title": "2·3·5의 공배수 검사",
    "desc": "자연수 n이 2의 배수이면서 3의 배수이고 5의 배수이기도 하면 \"All Pass\", 아니면 \"Fail\"을 출력하세요.",
    "ex": [
      {
        "i": "30",
        "o": "All Pass"
      }
    ],
    "starter": "n = int(input())\n# and 연산자로 세 조건을 한 번에 검사해 보세요\n",
    "sol": "n = int(input())\nif n % 2 == 0 and n % 3 == 0 and n % 5 == 0:\n    print(\"All Pass\")\nelse:\n    print(\"Fail\")",
    "tests": [
      {
        "i": "30",
        "o": "All Pass"
      },
      {
        "i": "20",
        "o": "Fail"
      },
      {
        "i": "60",
        "o": "All Pass"
      }
    ]
  },
  {
    "set": "B",
    "title": "양수 개수 × 음수 개수",
    "desc": "10개의 정수가 들어있는 리스트에서 양수의 개수와 음수의 개수를 각각 구한 뒤, 두 개수를 곱한 결과를 출력하세요. (0은 양수도 음수도 아닙니다)",
    "ex": [
      {
        "i": "1 2 -1 -2 0 5 6 -3 -4 10",
        "o": "20",
        "note": "양수 5개 × 음수 4개 = 20"
      }
    ],
    "starter": "arr = list(map(int, input().split()))\npos = 0\nneg = 0\n# 양수와 음수를 각각 세어 곱하세요\n",
    "sol": "arr = list(map(int, input().split()))\npos = 0\nneg = 0\nfor x in arr:\n    if x > 0:\n        pos += 1\n    elif x < 0:\n        neg += 1\nprint(pos * neg)",
    "tests": [
      {
        "i": "1 2 -1 -2 0 5 6 -3 -4 10",
        "o": "20"
      },
      {
        "i": "1 1 1 1 1 -1 -1 -1 -1 -1",
        "o": "25"
      }
    ]
  },
  {
    "set": "B",
    "title": "공백 제거 + 대문자 변환",
    "desc": "문자열을 입력받아 앞뒤의 불필요한 공백을 제거하고, 모든 문자를 대문자로 변환하여 출력하세요.",
    "ex": [
      {
        "i": "  python  ",
        "o": "PYTHON"
      }
    ],
    "starter": "s = input()\n# strip()과 upper()를 활용하세요\n",
    "sol": "s = input()\nprint(s.strip().upper())",
    "tests": [
      {
        "i": "  python  ",
        "o": "PYTHON"
      },
      {
        "i": " cos pro ",
        "o": "COS PRO"
      }
    ]
  },
  {
    "set": "B",
    "title": "최대 키 - 최소 키",
    "desc": "5명의 학생 키 데이터(정수)를 한 줄로 입력받아, 가장 큰 키와 가장 작은 키의 차이(최댓값-최솟값)를 출력하세요.",
    "ex": [
      {
        "i": "170 160 180 155 175",
        "o": "25"
      }
    ],
    "starter": "heights = list(map(int, input().split()))\n# max()와 min()을 활용하세요\n",
    "sol": "heights = list(map(int, input().split()))\nprint(max(heights) - min(heights))",
    "tests": [
      {
        "i": "170 160 180 155 175",
        "o": "25"
      },
      {
        "i": "150 150 150 150 151",
        "o": "1"
      }
    ]
  },
  {
    "set": "B",
    "title": "'A' 또는 'a' 찾기",
    "desc": "영어 단어를 입력받아, 단어 안에 'A' 또는 'a'가 하나라도 있으면 \"Found\", 하나도 없으면 \"Not Found\"를 출력하세요.",
    "ex": [
      {
        "i": "Apple",
        "o": "Found"
      }
    ],
    "starter": "word = input()\n# in 연산자를 활용해 보세요\n",
    "sol": "word = input()\nif \"a\" in word or \"A\" in word:\n    print(\"Found\")\nelse:\n    print(\"Not Found\")",
    "tests": [
      {
        "i": "Apple",
        "o": "Found"
      },
      {
        "i": "Melon",
        "o": "Not Found"
      },
      {
        "i": "banana",
        "o": "Found"
      }
    ]
  },
  {
    "set": "B",
    "title": "슬래시로 단어 결합",
    "desc": "두 개의 단어를 각각 한 줄씩 입력받아, 두 단어 사이에 슬래시(/)를 넣어 하나로 결합하여 출력하세요.",
    "ex": [
      {
        "i": "apple\nbanana",
        "o": "apple/banana"
      }
    ],
    "starter": "w1 = input()\nw2 = input()\n# 문자열 덧셈(+)으로 결합하세요\n",
    "sol": "w1 = input()\nw2 = input()\nprint(w1 + \"/\" + w2)",
    "tests": [
      {
        "i": "apple\nbanana",
        "o": "apple/banana"
      },
      {
        "i": "cos\npro",
        "o": "cos/pro"
      }
    ]
  },
  {
    "set": "B",
    "title": "끝 글자 하나씩 지우기",
    "desc": "하나의 단어를 입력받아, 첫 줄엔 전체 단어부터 시작해 끝 글자를 하나씩 지워가며 한 줄에 하나씩 출력하세요.",
    "ex": [
      {
        "i": "Code",
        "o": "Code\nCod\nCo\nC"
      }
    ],
    "starter": "word = input()\n# 슬라이싱 word[:i]를 활용하세요\n",
    "sol": "word = input()\nfor i in range(len(word), 0, -1):\n    print(word[:i])",
    "tests": [
      {
        "i": "Code",
        "o": "Code\nCod\nCo\nC"
      },
      {
        "i": "Hi",
        "o": "Hi\nH"
      }
    ]
  },
  {
    "set": "B",
    "title": "리스트 뒤집기",
    "desc": "공백으로 구분된 숫자 리스트를 입력받아, 순서를 거꾸로 뒤집어 공백으로 구분해 출력하세요.",
    "ex": [
      {
        "i": "1 2 3 4 5",
        "o": "5 4 3 2 1"
      }
    ],
    "starter": "arr = input().split()\n# 슬라이싱 [::-1]을 활용하세요\n",
    "sol": "arr = input().split()\nprint(*arr[::-1])",
    "tests": [
      {
        "i": "1 2 3 4 5",
        "o": "5 4 3 2 1"
      },
      {
        "i": "10 20",
        "o": "20 10"
      }
    ]
  },
  {
    "set": "B",
    "title": "1~100 중 n의 배수",
    "desc": "자연수 n을 입력받아, 1부터 100 사이의 숫자 중 n의 배수만 골라 공백으로 구분해 출력하세요.",
    "ex": [
      {
        "i": "30",
        "o": "30 60 90"
      }
    ],
    "starter": "n = int(input())\nresult = []\n# 1~100 중 n의 배수를 result에 담아 출력하세요\n",
    "sol": "n = int(input())\nresult = []\nfor x in range(1, 101):\n    if x % n == 0:\n        result.append(x)\nprint(*result)",
    "tests": [
      {
        "i": "30",
        "o": "30 60 90"
      },
      {
        "i": "25",
        "o": "25 50 75 100"
      }
    ]
  },
  {
    "set": "B",
    "title": "내년 나이 계산",
    "desc": "사용자의 이름과 현재 나이를 각각 한 줄씩 입력받아, \"내년의 [이름]님은 [내년나이]살입니다.\" 형식으로 출력하세요.",
    "ex": [
      {
        "i": "홍길동\n15",
        "o": "내년의 홍길동님은 16살입니다."
      }
    ],
    "starter": "name = input()\nage = int(input())\n# f-string으로 형식에 맞게 출력하세요\n",
    "sol": "name = input()\nage = int(input())\nprint(f\"내년의 {name}님은 {age + 1}살입니다.\")",
    "tests": [
      {
        "i": "홍길동\n15",
        "o": "내년의 홍길동님은 16살입니다."
      },
      {
        "i": "김코딩\n29",
        "o": "내년의 김코딩님은 30살입니다."
      }
    ]
  },
  {
    "set": "C",
    "title": "두 수 비교 출력",
    "blank": true,
    "desc": "두 수 a, b를 입력받아 a<b면 a+b, a>b면 a-b, 같으면 a=b 형식으로 출력하세요.\n빈칸(____)을 채워 코드를 완성하세요.\n\n힌트: f-string으로 예) print(f\"{a}+{b}={a+b}\") 처럼 출력합니다.",
    "ex": [
      {
        "i": "5 3",
        "o": "5-3=2"
      },
      {
        "i": "2 9",
        "o": "2+9=11"
      },
      {
        "i": "5 5",
        "o": "5=5"
      }
    ],
    "starter": "a, b = map(int, input().split())\nif a < b:\n    print(____)\nelif a > b:\n    print(____)\nelse:\n    print(____)",
    "sol": "a, b = map(int, input().split())\nif a < b:\n    print(f\"{a}+{b}={a+b}\")\nelif a > b:\n    print(f\"{a}-{b}={a-b}\")\nelse:\n    print(f\"{a}={b}\")",
    "tests": [
      {
        "i": "5 3",
        "o": "5-3=2"
      },
      {
        "i": "2 9",
        "o": "2+9=11"
      },
      {
        "i": "5 5",
        "o": "5=5"
      }
    ]
  },
  {
    "set": "C",
    "title": "곱·나눗셈·제곱 출력",
    "blank": true,
    "desc": "두 수 a, b를 입력받아 a>b면 a×b, a<b면 a÷b(소수점 둘째 자리까지), 같으면 a²을 출력하세요.\n빈칸(____)을 채워 코드를 완성하세요.",
    "ex": [
      {
        "i": "6 3",
        "o": "6x3=18"
      },
      {
        "i": "2 8",
        "o": "2/8=0.25"
      },
      {
        "i": "5 5",
        "o": "5^2=25"
      }
    ],
    "starter": "a, b = map(int, input().split())\nif a > b:\n    print(f\"{a}x{b}={____}\")\nelif a < b:\n    print(f\"{a}/{b}={____:.2f}\")\nelse:\n    print(f\"{a}^2={____}\")",
    "sol": "a, b = map(int, input().split())\nif a > b:\n    print(f\"{a}x{b}={a*b}\")\nelif a < b:\n    print(f\"{a}/{b}={a/b:.2f}\")\nelse:\n    print(f\"{a}^2={a**2}\")",
    "tests": [
      {
        "i": "6 3",
        "o": "6x3=18"
      },
      {
        "i": "2 8",
        "o": "2/8=0.25"
      },
      {
        "i": "5 5",
        "o": "5^2=25"
      }
    ]
  },
  {
    "set": "C",
    "title": "세 수의 합 — 30 기준",
    "blank": true,
    "desc": "세 수 a, b, c를 입력받아 세 수의 합이 30보다 크면 \"초과\", 작으면 \"미만\", 30이면 \"정확히 30\"을 출력하세요.\n빈칸(____)을 채워 코드를 완성하세요.",
    "ex": [
      {
        "i": "10 15 8",
        "o": "초과"
      },
      {
        "i": "5 10 15",
        "o": "정확히 30"
      },
      {
        "i": "3 7 19",
        "o": "미만"
      }
    ],
    "starter": "a, b, c = map(int, input().split())\ntotal = ____\nif total > 30:\n    print(____)\nelif total < 30:\n    print(____)\nelse:\n    print(____)",
    "sol": "a, b, c = map(int, input().split())\ntotal = a + b + c\nif total > 30:\n    print(\"초과\")\nelif total < 30:\n    print(\"미만\")\nelse:\n    print(\"정확히 30\")",
    "tests": [
      {
        "i": "10 15 8",
        "o": "초과"
      },
      {
        "i": "5 10 15",
        "o": "정확히 30"
      },
      {
        "i": "3 7 19",
        "o": "미만"
      }
    ]
  },
  {
    "set": "C",
    "title": "두 수의 차이 분류",
    "blank": true,
    "desc": "두 수 a, b를 입력받아 큰 수에서 작은 수를 뺀 값이 10 이상이면 \"차이 큼\", 5 이상 10 미만이면 \"차이 중간\", 5 미만이면 \"차이 작음\"을 출력하세요.\n빈칸(____)을 채워 코드를 완성하세요. (절댓값 함수를 활용하세요)",
    "ex": [
      {
        "i": "3 18",
        "o": "차이 큼"
      },
      {
        "i": "7 13",
        "o": "차이 중간"
      },
      {
        "i": "9 6",
        "o": "차이 작음"
      }
    ],
    "starter": "a, b = map(int, input().split())\ndiff = ____(a - b)\nif diff >= ____:\n    print(\"차이 큼\")\nelif diff >= ____:\n    print(____)\nelse:\n    print(____)",
    "sol": "a, b = map(int, input().split())\ndiff = abs(a - b)\nif diff >= 10:\n    print(\"차이 큼\")\nelif diff >= 5:\n    print(\"차이 중간\")\nelse:\n    print(\"차이 작음\")",
    "tests": [
      {
        "i": "3 18",
        "o": "차이 큼"
      },
      {
        "i": "7 13",
        "o": "차이 중간"
      },
      {
        "i": "9 6",
        "o": "차이 작음"
      }
    ]
  },
  {
    "set": "C",
    "title": "홀수·짝수 분리와 합",
    "blank": true,
    "desc": "자연수 n과 배열 arr을 입력받아 첫 줄에 홀수들, 둘째 줄에 짝수들, 셋째 줄에 홀수의 합과 짝수의 합을 출력하세요.\n빈칸(____)을 채워 코드를 완성하세요.",
    "ex": [
      {
        "i": "5\n4 8 1 1 9",
        "o": "1 1 9\n4 8\n11 12"
      }
    ],
    "starter": "n = int(input())\narr = list(map(int, input().split()))\nodds = [x for x in arr if x % 2 == ____]\nevens = [x for x in arr if x % 2 == ____]\nprint(*____)\nprint(*____)\nprint(sum(____), sum(____))",
    "sol": "n = int(input())\narr = list(map(int, input().split()))\nodds = [x for x in arr if x % 2 == 1]\nevens = [x for x in arr if x % 2 == 0]\nprint(*odds)\nprint(*evens)\nprint(sum(odds), sum(evens))",
    "tests": [
      {
        "i": "5\n4 8 1 1 9",
        "o": "1 1 9\n4 8\n11 12"
      },
      {
        "i": "9\n2 5 1 7 9 9 4 1 2",
        "o": "5 1 7 9 9 1\n2 4 2\n32 8"
      }
    ]
  },
  {
    "set": "C",
    "title": "3의 배수 분리와 합",
    "blank": true,
    "desc": "자연수 n과 배열 arr을 입력받아 첫 줄에 3의 배수, 둘째 줄에 3의 배수가 아닌 수, 셋째 줄에 각각의 합을 출력하세요.\n빈칸(____)을 채워 코드를 완성하세요.",
    "ex": [
      {
        "i": "6\n3 6 7 2 9 1",
        "o": "3 6 9\n7 2 1\n18 10"
      }
    ],
    "starter": "n = int(input())\narr = list(map(int, input().split()))\nmul3 = [x for x in arr if x % 3 == ____]\nnot_mul3 = [x for x in arr if x % 3 != ____]\nprint(*____)\nprint(*____)\nprint(sum(____), sum(____))",
    "sol": "n = int(input())\narr = list(map(int, input().split()))\nmul3 = [x for x in arr if x % 3 == 0]\nnot_mul3 = [x for x in arr if x % 3 != 0]\nprint(*mul3)\nprint(*not_mul3)\nprint(sum(mul3), sum(not_mul3))",
    "tests": [
      {
        "i": "6\n3 6 7 2 9 1",
        "o": "3 6 9\n7 2 1\n18 10"
      },
      {
        "i": "8\n3 6 7 2 9 1 4 12",
        "o": "3 6 9 12\n7 2 1 4\n30 14"
      }
    ]
  },
  {
    "set": "C",
    "title": "평균 기준 분리와 합",
    "blank": true,
    "desc": "자연수 n과 배열 arr을 입력받아 첫 줄에 평균보다 큰 수, 둘째 줄에 평균 이하인 수, 셋째 줄에 각각의 합을 출력하세요.\n빈칸(____)을 채워 코드를 완성하세요.",
    "ex": [
      {
        "i": "5\n4 8 1 9 3",
        "o": "8 9\n4 1 3\n17 8"
      }
    ],
    "starter": "n = int(input())\narr = list(map(int, input().split()))\navg = sum(arr) / ____\nabove = [x for x in arr if x ____ avg]\nbelow = [x for x in arr if x ____ avg]\nprint(*____)\nprint(*____)\nprint(sum(____), sum(____))",
    "sol": "n = int(input())\narr = list(map(int, input().split()))\navg = sum(arr) / n\nabove = [x for x in arr if x > avg]\nbelow = [x for x in arr if x <= avg]\nprint(*above)\nprint(*below)\nprint(sum(above), sum(below))",
    "tests": [
      {
        "i": "5\n4 8 1 9 3",
        "o": "8 9\n4 1 3\n17 8"
      },
      {
        "i": "6\n10 2 6 8 4 12",
        "o": "10 8 12\n2 6 4\n30 12"
      }
    ]
  },
  {
    "set": "C",
    "title": "k부터 4씩 더해 n개 (while)",
    "blank": true,
    "desc": "두 자연수 k와 n을 한 줄로 입력받아, k에서부터 4씩 더해 크기가 작은 순으로 n개를 출력하세요.\n빈칸(____)을 채워 코드를 완성하세요.\n\n[입력설명] k는 2~1000, n은 1~100의 자연수입니다.",
    "ex": [
      {
        "i": "7 5",
        "o": "7 11 15 19 23"
      },
      {
        "i": "3 4",
        "o": "3 7 11 15"
      }
    ],
    "starter": "k, n = map(int, input().split())\nresult = []\nnum = ____\nwhile len(result) < ____:\n    result.append(num)\n    num += ____\nprint(*result)",
    "sol": "k, n = map(int, input().split())\nresult = []\nnum = k\nwhile len(result) < n:\n    result.append(num)\n    num += 4\nprint(*result)",
    "tests": [
      {
        "i": "7 5",
        "o": "7 11 15 19 23"
      },
      {
        "i": "3 4",
        "o": "3 7 11 15"
      }
    ]
  },
  {
    "set": "C",
    "title": "k보다 큰 3의 배수 n개",
    "blank": true,
    "desc": "두 자연수 k와 n을 한 줄로 입력받아, k보다 큰 수 중 3의 배수를 작은 순으로 n개 출력하세요.\n빈칸(____)을 채워 코드를 완성하세요.",
    "ex": [
      {
        "i": "5 4",
        "o": "6 9 12 15"
      },
      {
        "i": "10 3",
        "o": "12 15 18"
      }
    ],
    "starter": "k, n = map(int, input().split())\nresult = []\nnum = ____\nwhile len(result) < ____:\n    if num % ____ == 0:\n        result.append(num)\n    num += ____\nprint(*result)",
    "sol": "k, n = map(int, input().split())\nresult = []\nnum = k + 1\nwhile len(result) < n:\n    if num % 3 == 0:\n        result.append(num)\n    num += 1\nprint(*result)",
    "tests": [
      {
        "i": "5 4",
        "o": "6 9 12 15"
      },
      {
        "i": "10 3",
        "o": "12 15 18"
      }
    ]
  },
  {
    "set": "C",
    "title": "자릿수 합 비교 수열",
    "blank": true,
    "desc": "두 자연수 k와 n을 한 줄로 입력받아, k보다 큰 수 중 '자릿수의 합'이 k의 자릿수 합보다 큰 수를 작은 순으로 n개 출력하세요.\n빈칸(____)을 채워 코드를 완성하세요.\n\n예) k=19의 자릿수 합: 1+9=10 → 자릿수 합이 10보다 큰 수: 29(11), 38(11), 39(12), 47(11) ...",
    "ex": [
      {
        "i": "19 4",
        "o": "29 38 39 47"
      }
    ],
    "starter": "k, n = map(int, input().split())\ndef digit_sum(x):\n    return sum(int(d) for d in ____(x))\nk_sum = digit_sum(____)\nresult = []\nnum = ____ + 1\nwhile len(result) < ____:\n    if digit_sum(num) ____ k_sum:\n        result.append(num)\n    num += ____\nprint(*result)",
    "sol": "k, n = map(int, input().split())\ndef digit_sum(x):\n    return sum(int(d) for d in str(x))\nk_sum = digit_sum(k)\nresult = []\nnum = k + 1\nwhile len(result) < n:\n    if digit_sum(num) > k_sum:\n        result.append(num)\n    num += 1\nprint(*result)",
    "tests": [
      {
        "i": "19 4",
        "o": "29 38 39 47"
      }
    ]
  },
  {
    "set": "D",
    "title": "세 수의 합과 평균",
    "blank": true,
    "desc": "수 세 개를 한 줄로 입력받아 세 수의 합과 평균을 출력하세요. 평균은 소수 셋째 자리에서 반올림하여 둘째 자리까지 출력합니다.\n빈칸(____)을 채워 코드를 완성하세요.",
    "ex": [
      {
        "i": "12 15 20",
        "o": "47\n15.67"
      }
    ],
    "starter": "a, b, c = map(int, input().split())\nhap = a + b + c\nave = hap / 3\nprint(____)\nprint(____)",
    "sol": "a, b, c = map(int, input().split())\nhap = a + b + c\nave = hap / 3\nprint(hap)\nprint(round(ave, 2))",
    "tests": [
      {
        "i": "12 15 20",
        "o": "47\n15.67"
      },
      {
        "i": "3 3 3",
        "o": "9\n3.0"
      }
    ]
  },
  {
    "set": "D",
    "title": "특수문자(&)로 문자열 연결",
    "blank": true,
    "desc": "문자열 두 개를 각각 한 줄씩 입력받아, 첫 번째 문자열과 두 번째 문자열 사이에 특수문자(&)를 포함하여 출력하세요.\n빈칸(____)을 채워 코드를 완성하세요.\n\n[입력설명] 두 문자열은 알파벳 소문자로만 이루어지며 길이는 1 이상 100 이하입니다.",
    "ex": [
      {
        "i": "apple\nbanana",
        "o": "apple&banana"
      }
    ],
    "starter": "str1 = input()\nstr2 = input()\nprint(____)",
    "sol": "str1 = input()\nstr2 = input()\nprint(str1 + \"&\" + str2)",
    "tests": [
      {
        "i": "apple\nbanana",
        "o": "apple&banana"
      },
      {
        "i": "cos\npro",
        "o": "cos&pro"
      }
    ]
  },
  {
    "set": "D",
    "title": "사전 순으로 뒤에 오는 문자열",
    "blank": true,
    "desc": "문자열 두 개를 각각 한 줄씩 입력받아, 영어사전 순으로 뒤에 오는 문자열을 출력하세요.\n빈칸(____)을 채워 코드를 완성하세요.\n\n힌트: 문자열도 크기 비교와 max()가 가능합니다.",
    "ex": [
      {
        "i": "pink\nblue",
        "o": "pink"
      }
    ],
    "starter": "str1 = input()\nstr2 = input()\nprint(____)",
    "sol": "str1 = input()\nstr2 = input()\nprint(max(str1, str2))",
    "tests": [
      {
        "i": "pink\nblue",
        "o": "pink"
      },
      {
        "i": "apple\nzoo",
        "o": "zoo"
      }
    ]
  },
  {
    "set": "D",
    "title": "직각삼각형 출력",
    "desc": "자연수 n을 입력받아 별(*)로 밑변과 높이가 n인 직각삼각형을 출력하세요.",
    "ex": [
      {
        "i": "5",
        "o": "*\n**\n***\n****\n*****"
      }
    ],
    "starter": "n = int(input())\n# 첫 줄 * 1개부터 n개까지!\n",
    "sol": "n = int(input())\nfor i in range(1, n + 1):\n    print(\"*\" * i)",
    "tests": [
      {
        "i": "5",
        "o": "*\n**\n***\n****\n*****"
      },
      {
        "i": "2",
        "o": "*\n**"
      }
    ]
  },
  {
    "set": "D",
    "title": "1~n 중 3의 배수 합 (while)",
    "blank": true,
    "desc": "while문을 이용하여 1~n 사이에서 (n 포함) 3의 배수의 합을 구하는 프로그램입니다.\n빈칸(____)을 채워 코드를 완성하세요.",
    "ex": [
      {
        "i": "10",
        "o": "18"
      },
      {
        "i": "1000",
        "o": "166833"
      }
    ],
    "starter": "hap = 0\ni = 1\nn = int(input())\nwhile ____:\n    if ____:\n        hap += i\n    i += 1\nprint(hap)",
    "sol": "hap = 0\ni = 1\nn = int(input())\nwhile i <= n:\n    if i % 3 == 0:\n        hap += i\n    i += 1\nprint(hap)",
    "tests": [
      {
        "i": "10",
        "o": "18"
      },
      {
        "i": "1000",
        "o": "166833"
      }
    ]
  },
  {
    "set": "D",
    "title": "두 수 중 작은 수",
    "desc": "숫자 두 개를 한 줄로 입력받아, 두 수 중 더 작은 수를 출력하세요.\n\n[입력설명] 두 수는 -1000 이상 1000 이하인 정수이며, 같지 않습니다.",
    "ex": [
      {
        "i": "10 64",
        "o": "10"
      }
    ],
    "starter": "n1, n2 = map(int, input().split())\n# 더 작은 수를 출력하세요\n",
    "sol": "n1, n2 = map(int, input().split())\nif n1 < n2:\n    print(n1)\nelse:\n    print(n2)",
    "tests": [
      {
        "i": "10 64",
        "o": "10"
      },
      {
        "i": "5 -3",
        "o": "-3"
      }
    ]
  },
  {
    "set": "D",
    "title": "홀수 위치 원소의 합",
    "blank": true,
    "desc": "자연수 n과 리스트 arr을 입력받아, arr의 원소 중 홀수 번째 위치(1번째, 3번째, ... = 인덱스 0, 2, 4, ...)에 있는 숫자를 모두 더한 값을 출력하세요.\n빈칸(____)을 채워 코드를 완성하세요.",
    "ex": [
      {
        "i": "7\n41 23 27 0 12 36 30",
        "o": "110",
        "note": "41+27+12+30 = 110"
      }
    ],
    "starter": "n = int(input())\narr = list(map(int, input().split()))\ntotal = 0\nfor i in range(0, n, 2):\n    ____\nprint(total)",
    "sol": "n = int(input())\narr = list(map(int, input().split()))\ntotal = 0\nfor i in range(0, n, 2):\n    total += arr[i]\nprint(total)",
    "tests": [
      {
        "i": "7\n41 23 27 0 12 36 30",
        "o": "110"
      },
      {
        "i": "4\n1 2 3 4",
        "o": "4"
      }
    ]
  },
  {
    "set": "D",
    "title": "배열의 총합과 평균",
    "blank": true,
    "desc": "자연수 n과 길이가 n인 배열 arr을 입력받아 총합과 평균을 출력하세요. (평균은 소수 첫째 자리까지)\n빈칸(____)을 채워 코드를 완성하세요.",
    "ex": [
      {
        "i": "6\n12 1 9 17 31 7",
        "o": "77\n12.8"
      }
    ],
    "starter": "n = int(input())\narr = input().split()\nhap = 0\nfor i in range(n):\n    arr[i] = int(arr[i])\nfor i in ____:\n    hap += ____\nprint(hap)\nprint(____)",
    "sol": "n = int(input())\narr = input().split()\nhap = 0\nfor i in range(n):\n    arr[i] = int(arr[i])\nfor i in arr:\n    hap += i\nprint(hap)\nprint(round(hap / n, 1))",
    "tests": [
      {
        "i": "6\n12 1 9 17 31 7",
        "o": "77\n12.8"
      }
    ]
  },
  {
    "set": "D",
    "title": "하이픈과 별 교차 출력",
    "desc": "자연수 n을 입력받아 하이픈(-)은 0부터 n-1까지 1씩 커지고 별(*)은 n부터 1까지 1씩 작아지면서 교차하도록 한 줄로 출력하세요.\n\n예) n=5 → *****-****--***---**----*\n(별 5, 하이픈 1, 별 4, 하이픈 2, ... 별 1)",
    "ex": [
      {
        "i": "5",
        "o": "*****-****--***---**----*"
      }
    ],
    "starter": "n = int(input())\ns = \"\"\n# 하이픈 i개 + 별 (n-i)개를 이어 붙여 보세요\n",
    "sol": "n = int(input())\ns = \"\"\nfor i in range(n):\n    s += \"-\" * i + \"*\" * (n - i)\nprint(s)",
    "tests": [
      {
        "i": "5",
        "o": "*****-****--***---**----*"
      },
      {
        "i": "3",
        "o": "***-**--*"
      }
    ]
  },
  {
    "set": "D",
    "title": "알파벳 소문자 개수",
    "blank": true,
    "desc": "문자열을 입력받아 문자열에 포함된 알파벳 소문자의 개수를 출력하세요.\n빈칸(____)을 채워 코드를 완성하세요.\n\n예) COMPUter → 소문자는 t, e, r로 3개",
    "ex": [
      {
        "i": "COMPUter",
        "o": "3"
      }
    ],
    "starter": "counter = 0\ns = input()\nfor i in range(0, len(s)):\n    if ____:\n        counter += 1\nprint(counter)",
    "sol": "counter = 0\ns = input()\nfor i in range(0, len(s)):\n    if \"a\" <= s[i] <= \"z\":\n        counter += 1\nprint(counter)",
    "tests": [
      {
        "i": "COMPUter",
        "o": "3"
      },
      {
        "i": "abcDEF",
        "o": "3"
      }
    ]
  },
  {
    "set": "D",
    "title": "7보다 이전에 있는 숫자의 개수",
    "desc": "숫자 리스트를 한 줄로 입력받아, 숫자 7보다 이전(앞)에 있는 숫자의 개수를 출력하세요.\n\n[입력설명] 7은 한 번만 입력되어 있습니다.\n예) 14 45 50 3 7 11 ... → 7 앞의 숫자는 14, 45, 50, 3으로 4개",
    "ex": [
      {
        "i": "14 45 50 3 7 11 5 23 9 80",
        "o": "4"
      }
    ],
    "starter": "arr = list(map(int, input().split()))\n# 7의 위치(인덱스)를 찾아 보세요\n",
    "sol": "arr = list(map(int, input().split()))\nprint(arr.index(7))",
    "tests": [
      {
        "i": "14 45 50 3 7 11 5 23 9 80",
        "o": "4"
      },
      {
        "i": "7 1 2",
        "o": "0"
      }
    ]
  },
  {
    "set": "D",
    "title": "한 글자씩 증가하는 부분 문자열",
    "blank": true,
    "desc": "문자열 한 개를 입력받아 한 글자씩 증가하는 부분 문자열을 공백으로 구분하여 순서대로 출력하세요.\n빈칸(____)을 채워 코드를 완성하세요.\n\n예) PYTHON → P PY PYT PYTH PYTHO PYTHON",
    "ex": [
      {
        "i": "PYTHON",
        "o": "P PY PYT PYTH PYTHO PYTHON"
      }
    ],
    "starter": "s = input()\nfor i in range(0, len(s)):\n    for j in range(____):\n        print(s[j], end=\"\")\n    print(end=\" \")",
    "sol": "s = input()\nfor i in range(0, len(s)):\n    for j in range(i + 1):\n        print(s[j], end=\"\")\n    print(end=\" \")",
    "tests": [
      {
        "i": "PYTHON",
        "o": "P PY PYT PYTH PYTHO PYTHON"
      },
      {
        "i": "Cos",
        "o": "C Co Cos"
      }
    ]
  },
  {
    "set": "D",
    "title": "두 수 차이의 절댓값",
    "desc": "숫자 두 개를 한 줄로 입력받아 두 수의 차이 값의 절댓값을 출력하세요.\n\n예) 5와 11의 차는 -6, 절댓값은 6",
    "ex": [
      {
        "i": "5 11",
        "o": "6"
      }
    ],
    "starter": "n1, n2 = map(int, input().split())\n# abs() 함수를 활용하세요\n",
    "sol": "n1, n2 = map(int, input().split())\nprint(abs(n1 - n2))",
    "tests": [
      {
        "i": "5 11",
        "o": "6"
      },
      {
        "i": "10 3",
        "o": "7"
      }
    ]
  },
  {
    "set": "D",
    "title": "큰 수 - 작은 수",
    "desc": "두 수를 한 줄로 입력받아 큰 수에서 작은 수를 뺀 차를 출력하세요.",
    "ex": [
      {
        "i": "5 7",
        "o": "2"
      },
      {
        "i": "10 5",
        "o": "5"
      }
    ],
    "starter": "a, b = map(int, input().split())\n# 큰 수에서 작은 수를 빼 보세요\n",
    "sol": "a, b = map(int, input().split())\nif a > b:\n    print(a - b)\nelse:\n    print(b - a)",
    "tests": [
      {
        "i": "5 7",
        "o": "2"
      },
      {
        "i": "10 5",
        "o": "5"
      }
    ]
  },
  {
    "set": "D",
    "title": "'p'와 'P'의 개수",
    "blank": true,
    "desc": "문자열 s를 입력받아 s에서 'p'와 'P'의 개수(합계)를 출력하세요.\n빈칸(____)을 채워 코드를 완성하세요.",
    "ex": [
      {
        "i": "Happy",
        "o": "2"
      },
      {
        "i": "Programmingpython",
        "o": "2"
      }
    ],
    "starter": "s = input()\ncnt = 0\nfor i in ____:\n    if ____:\n        cnt += 1\nprint(cnt)",
    "sol": "s = input()\ncnt = 0\nfor i in s:\n    if i == \"p\" or i == \"P\":\n        cnt += 1\nprint(cnt)",
    "tests": [
      {
        "i": "Happy",
        "o": "2"
      },
      {
        "i": "Programmingpython",
        "o": "2"
      }
    ]
  },
  {
    "set": "D",
    "title": "짝수 혹은 홀수",
    "desc": "숫자 한 개를 입력받아, 입력한 숫자가 짝수면 \"짝수\", 홀수면 \"홀수\"를 출력하세요.",
    "ex": [
      {
        "i": "13",
        "o": "홀수"
      }
    ],
    "starter": "n = int(input())\n# % 연산자로 판별하세요\n",
    "sol": "n = int(input())\nif n % 2 == 0:\n    print(\"짝수\")\nelse:\n    print(\"홀수\")",
    "tests": [
      {
        "i": "13",
        "o": "홀수"
      },
      {
        "i": "8",
        "o": "짝수"
      }
    ]
  },
  {
    "set": "E",
    "title": "티셔츠 사이즈별 개수",
    "func": true,
    "label": "직접 작성",
    "desc": "A 학교에서 단체 티셔츠 주문을 위해 학생별 티셔츠 사이즈를 조사했습니다. 사이즈는 작은 순서대로 \"XS\", \"S\", \"M\", \"L\", \"XL\", \"XXL\" 총 6종류입니다.\n\n사이즈 조사 결과 리스트 shirt_size가 매개변수로 주어질 때, 사이즈별로 몇 벌씩 필요한지 [\"XS\"개수, \"S\"개수, \"M\"개수, \"L\"개수, \"XL\"개수, \"XXL\"개수] 순서의 리스트로 return 하도록 solution 함수를 완성하세요.\n\n[매개변수] shirt_size의 길이는 1~100, 원소는 위 6가지 문자열",
    "ex": [
      {
        "i": "shirt_size = [\"XS\", \"S\", \"L\", \"L\", \"XL\", \"S\"]",
        "o": "[1, 2, 0, 2, 1, 0]",
        "note": "\"XS\"와 \"XL\"은 1명, \"S\"와 \"L\"은 2명, \"M\"과 \"XXL\"은 0명"
      }
    ],
    "starter": "#You may use import as below.\n#import math\n\ndef solution(shirt_size):\n    answer = [0 for _ in range(6)]\n    # 여기에 코드를 작성해 주세요\n    return answer\n\n#The following is code to output testcase.\nshirt_size = [\"XS\", \"S\", \"L\", \"L\", \"XL\", \"S\"]\nret = solution(shirt_size)\n\n#Press Run button to receive output.\nprint(\"Solution: return value of the function is\", ret, \".\")",
    "sol": "def solution(shirt_size):\n    size_counter = [0 for _ in range(6)]\n    for ss in shirt_size:\n        if ss == \"XS\":\n            size_counter[0] += 1\n        elif ss == \"S\":\n            size_counter[1] += 1\n        elif ss == \"M\":\n            size_counter[2] += 1\n        elif ss == \"L\":\n            size_counter[3] += 1\n        elif ss == \"XL\":\n            size_counter[4] += 1\n        elif ss == \"XXL\":\n            size_counter[5] += 1\n    return size_counter",
    "tests": [
      {
        "call": "solution([\"XS\", \"S\", \"L\", \"L\", \"XL\", \"S\"])",
        "o": "[1, 2, 0, 2, 1, 0]"
      },
      {
        "call": "solution([\"XXL\", \"M\", \"M\"])",
        "o": "[0, 0, 2, 0, 0, 1]"
      }
    ]
  },
  {
    "set": "E",
    "title": "회원 등급별 할인 가격",
    "func": true,
    "label": "직접 작성",
    "desc": "A 쇼핑몰은 회원 등급에 따라 할인해 줍니다. \"S\"(실버)는 5%, \"G\"(골드)는 10%, \"V\"(VIP)는 15% 할인입니다.\n\n상품 가격 price와 회원 등급 grade가 매개변수로 주어질 때, 할인을 적용한 가격을 return 하도록 solution 함수를 완성하세요.\n\n[매개변수] price는 100 이상 100,000 이하의 100 단위 자연수, grade는 \"S\", \"G\", \"V\" 중 하나\n\n💡 힌트: 계산 결과에 소수점이 남지 않도록 처리가 필요해요. 지금 코드를 실행해서 결과가 예시와 어떻게 다른지 비교해 보세요.",
    "ex": [
      {
        "i": "price = 2500, grade = \"V\"",
        "o": "2125",
        "note": "2500의 15%는 375. 2500 - 375 = 2125"
      },
      {
        "i": "price = 96900, grade = \"S\"",
        "o": "92055",
        "note": "96900의 5%는 4845. 96900 - 4845 = 92055"
      }
    ],
    "starter": "#You may use import as below.\n#import math\n\ndef solution(price, grade):\n    answer = 0\n    if grade == \"S\":\n       answer=price*0.95\n    elif grade == \"G\":\n        answer=price*0.9\n    elif grade == \"V\":\n        answer=price*0.85\n    return answer\n\n#The following is code to output testcase.\nprice1 = 2500\ngrade1 = \"V\"\nret1 = solution(price1, grade1)\n\n#Press Run button to receive output.\nprint(\"Solution: return value of the function is\", ret1, \".\")\n\nprice2 = 96900\ngrade2 = \"S\"\nret2 = solution(price2, grade2)\n\n#Press Run button to receive output.\nprint(\"Solution: return value of the function is\", ret2, \".\")",
    "sol": "def solution(price, grade):\n    answer = 0\n    if grade == \"S\":\n        answer = int(price * 0.95)\n    if grade == \"G\":\n        answer = int(price * 0.9)\n    if grade == \"V\":\n        answer = int(price * 0.85)\n    return answer",
    "tests": [
      {
        "call": "solution(2500, \"V\")",
        "o": "2125"
      },
      {
        "call": "solution(96900, \"S\")",
        "o": "92055"
      },
      {
        "call": "solution(10000, \"G\")",
        "o": "9000"
      }
    ]
  },
  {
    "set": "E",
    "title": "두 날짜 사이의 일수 (D-day)",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "시작 날짜와 끝 날짜가 주어질 때 두 날짜가 며칠 떨어져 있는지(D-day)를 구합니다. (윤년 없음)\n\n1단계. 시작 날짜가 1월 1일로부터 며칠 떨어져 있는지 구한다\n2단계. 끝 날짜가 1월 1일로부터 며칠 떨어져 있는지 구한다\n3단계. (2단계 값) - (1단계 값)\n\n중복되는 부분은 func_a 함수로 작성했습니다. @@@ 빈칸을 채워 코드를 완성하세요.\n\n[매개변수] 끝 날짜는 항상 시작 날짜 이후이며 해를 넘기지 않습니다. 각 달의 날짜 수는 [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]",
    "ex": [
      {
        "i": "start 1월 2일, end 2월 2일",
        "o": "31",
        "note": "1월 2일은 1/1로부터 1일, 2월 2일은 32일 → 32-1=31"
      }
    ],
    "starter": "def func_a(month, day):\n    month_list = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\n    total = 0\n    for i in @@@:\n        total += @@@\n    total += @@@\n    return total - 1\n\ndef solution(start_month, start_day, end_month, end_day):\n    start_total = func_a(start_month, start_day)\n    end_total = func_a(end_month, end_day)\n    return end_total - start_total\n\n#The following is code to output testcase.\nstart_month = 1\nstart_day = 2\nend_month = 2\nend_day = 2\nret = solution(start_month, start_day, end_month, end_day)\n\n#Press Run button to receive output.\nprint(\"Solution: return value of the function is\", ret, \".\")",
    "sol": "def func_a(month, day):\n    month_list = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\n    total = 0\n    for i in range(month - 1):\n        total += month_list[i]\n    total += day\n    return total - 1\n\ndef solution(start_month, start_day, end_month, end_day):\n    start_total = func_a(start_month, start_day)\n    end_total = func_a(end_month, end_day)\n    return end_total - start_total",
    "tests": [
      {
        "call": "solution(1, 2, 2, 2)",
        "o": "31"
      },
      {
        "call": "solution(3, 1, 4, 1)",
        "o": "31"
      },
      {
        "call": "solution(1, 1, 12, 31)",
        "o": "364"
      }
    ]
  },
  {
    "set": "E",
    "title": "최다 빈도수는 최소 빈도수의 몇 배?",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "자연수 리스트에서 가장 많이 등장하는 숫자의 개수가 가장 적게 등장하는 숫자 개수의 몇 배인지 구합니다. (소수점은 버리고 정수만)\n\n1단계. 각 자연수의 개수를 센다 → 2단계. 최다 등장 개수 → 3단계. 최소 등장 개수 → 4단계. 몇 배인지 계산\n\n@@@ 빈칸에 주어진 func_a, func_b, func_c 함수와 매개변수를 알맞게 채우세요.\n\n[매개변수] arr의 길이는 3~1,000, 원소는 1~1,000의 자연수",
    "ex": [
      {
        "i": "arr = [1,2,3,3,1,3,3,2,3,2]",
        "o": "2",
        "note": "1이 2개(최소), 3이 5개(최다). 5÷2=2.5 → 소수점 버려서 2"
      }
    ],
    "starter": "def func_a(arr):\n    counter = [0 for _ in range(1001)]\n    for x in arr:\n        counter[x] += 1\n    return counter\n\ndef func_b(arr):\n    ret = 0\n    for x in arr:\n        if ret < x:\n            ret = x\n    return ret\n\ndef func_c(arr):\n    INF = 1001\n    ret = INF\n    for x in arr:\n        if x != 0 and ret > x:\n            ret = x\n    return ret\n\ndef solution(arr):\n    counter = func_@@@(@@@)\n    max_cnt = func_@@@(@@@)\n    min_cnt = func_@@@(@@@)\n    return max_cnt // min_cnt\n\n#The following is code to output testcase.\narr = [1, 2, 3, 3, 1, 3, 3, 2, 3, 2]\nret = solution(arr)\n\n#Press Run button to receive output.\nprint(\"Solution: return value of the function is\", ret, \".\")",
    "sol": "def func_a(arr):\n    counter = [0 for _ in range(1001)]\n    for x in arr:\n        counter[x] += 1\n    return counter\n\ndef func_b(arr):\n    ret = 0\n    for x in arr:\n        if ret < x:\n            ret = x\n    return ret\n\ndef func_c(arr):\n    INF = 1001\n    ret = INF\n    for x in arr:\n        if x != 0 and ret > x:\n            ret = x\n    return ret\n\ndef solution(arr):\n    counter = func_a(arr)\n    max_cnt = func_b(counter)\n    min_cnt = func_c(counter)\n    return max_cnt // min_cnt",
    "tests": [
      {
        "call": "solution([1, 2, 3, 3, 1, 3, 3, 2, 3, 2])",
        "o": "2"
      },
      {
        "call": "solution([1, 1, 2, 2])",
        "o": "1"
      }
    ]
  },
  {
    "set": "E",
    "title": "리스트 순서 뒤집기",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "주어진 리스트의 순서를 뒤집으려고 합니다. 예를 들어 [1, 4, 2, 3]이면 [3, 2, 4, 1]입니다.\n\n왼쪽(left)과 오른쪽(right) 인덱스의 값을 서로 교환하며 뒤집는 방식입니다. while문의 @@@ 조건을 채워 코드를 완성하세요.\n\n[매개변수] arr의 길이는 1~100, 원소는 -100~100의 정수",
    "ex": [
      {
        "i": "arr = [1, 4, 2, 3]",
        "o": "[3, 2, 4, 1]"
      }
    ],
    "starter": "def solution(arr):\n    left, right = 0, len(arr)-1\n    while @@@:\n        arr[left], arr[right] = arr[right], arr[left]\n        left += 1\n        right -= 1\n    return arr\n\n#The following is code to output testcase.\narr = [1, 4, 2, 3]\nret = solution(arr)\n\n#Press Run button to receive output.\nprint(\"Solution: return value of the function is \", ret, \" .\")",
    "sol": "def solution(arr):\n    left, right = 0, len(arr)-1\n    while left < right:\n        arr[left], arr[right] = arr[right], arr[left]\n        left += 1\n        right -= 1\n    return arr",
    "tests": [
      {
        "call": "solution([1, 4, 2, 3])",
        "o": "[3, 2, 4, 1]"
      },
      {
        "call": "solution([5])",
        "o": "[5]"
      },
      {
        "call": "solution([1, 2, 3, 4, 5])",
        "o": "[5, 4, 3, 2, 1]"
      }
    ]
  },
  {
    "set": "E",
    "title": "369 게임 박수 횟수",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "369 게임: 1부터 시작해 숫자를 1씩 더해가며 말하는데, 숫자에 3, 6, 9 중 하나라도 포함되어 있다면 포함된 3, 6, 9의 개수만큼 손뼉을 칩니다.\n\nnumber가 주어질 때 1부터 number까지 369 게임을 진행하면 박수를 총 몇 번 치는지 return 하도록, if문의 @@@ 조건을 채워 완성하세요.\n\n💡 힌트: current % 10은 일의 자리 숫자, current // 10은 한 자리를 지운 몫입니다.\n\n[매개변수] number는 10 이상 1,000 이하의 자연수",
    "ex": [
      {
        "i": "number = 40",
        "o": "22",
        "note": "3,6,9/13,16,19/23,26,29 각 +3, 30~39는 십의 자리 10번 + 일의 자리 3번 = +13 → 총 22"
      }
    ],
    "starter": "def solution(number):\n    count = 0\n    for i in range(1, number + 1):\n        current = i\n        temp = count\n        while current != 0:\n            if @@@:\n                count += 1\n                print(\"pair\", end = '')\n            current = current // 10\n        if temp == count:\n            print(i, end = '')\n        print(\" \", end = '')\n    print(\"\")\n    return count\n\n#The following is code to output testcase.\nnumber = 40\nret = solution(number)\n\n#Press Run button to receive output.\nprint(\"Solution: return value of the function is\", ret, \".\")",
    "sol": "def solution(number):\n    count = 0\n    for i in range(1, number + 1):\n        current = i\n        temp = count\n        while current != 0:\n            if current % 10 == 3 or current % 10 == 6 or current % 10 == 9:\n                count += 1\n                print(\"pair\", end = '')\n            current = current // 10\n        if temp == count:\n            print(i, end = '')\n        print(\" \", end = '')\n    print(\"\")\n    return count",
    "tests": [
      {
        "call": "solution(40)",
        "o": "22"
      },
      {
        "call": "solution(10)",
        "o": "3"
      }
    ]
  },
  {
    "set": "E",
    "title": "초급 영어 수강 대상자 수 (버그 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "초급 영어 강의는 토익 650점 이상 800점 미만인 학생만 수강 대상입니다. 수강신청자 10명의 점수 리스트 scores가 주어질 때 수강 대상 인원수를 return 하는 solution 함수를 작성했지만, 일부 입력에서 잘못 동작합니다.\n\n주어진 코드에서 딱 한 줄만 변경해서 모든 입력에 대해 올바르게 동작하도록 수정하세요.\n\n[매개변수] scores의 원소는 500~990의 정수, 길이는 10",
    "ex": [
      {
        "i": "scores = [650, 722, 914, 558, 714, 803, 650, 679, 669, 800]",
        "o": "6",
        "note": "650 이상 800 미만인 점수는 650, 722, 714, 650, 679, 669로 6명 (800은 미포함!)"
      }
    ],
    "starter": "def solution(scores):\n    count = 0\n    for s in scores:\n        if 650 <= s or s < 800:\n            count += 1\n    return count\n\n#The following is code to output testcase. The code below is correct and you shall correct solution function.\nscores = [650, 722, 914, 558, 714, 803, 650, 679, 669, 800]\nret = solution(scores)\n\n#Press Run button to receive output.\nprint(\"Solution: return value of the function is\", ret, \".\")",
    "sol": "def solution(scores):\n    count = 0\n    for s in scores:\n        if 650 <= s and s < 800:\n            count += 1\n    return count",
    "tests": [
      {
        "call": "solution([650, 722, 914, 558, 714, 803, 650, 679, 669, 800])",
        "o": "6"
      },
      {
        "call": "solution([500, 990, 650, 799, 800, 801, 700, 600, 650, 750])",
        "o": "5"
      }
    ]
  },
  {
    "set": "E",
    "title": "팰린드롬 문장 판별 (버그 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "앞뒤로 읽어도 같은 단어/문장을 팰린드롬이라고 합니다 (예: racecar, noon). 소문자 알파벳·공백·마침표로 이루어진 문장에서 알파벳만 추출했을 때 팰린드롬이면 팰린드롬 문장입니다.\n\n문장 sentence가 팰린드롬인지 return 하는 solution 함수를 작성했지만 일부 입력에서 잘못 동작합니다. 딱 한 줄만 변경해서 수정하세요.\n\n💡 힌트: 마침표도 아니고 공백도 아닌 문자만 골라내려면 어떤 논리 연산자가 맞을까요?",
    "ex": [
      {
        "i": "sentence = \"never odd or even.\"",
        "o": "True",
        "note": "알파벳만 추출하면 \"neveroddoreven\" — 팰린드롬"
      },
      {
        "i": "sentence = \"palindrome\"",
        "o": "False",
        "note": "맨 앞 \"p\"와 맨 뒤 \"e\"가 다름"
      }
    ],
    "starter": "def solution(sentence):\n    str = ''\n    for c in sentence:\n        if c != '.' or c != ' ':\n            str += c\n    size = len(str)\n    for i in range(size // 2):\n        if str[i] != str[size - 1 - i]:\n            return False\n    return True\n\n#The following is code to output testcase. The code below is correct and you shall correct solution function.\nsentence1 = \"never odd or even.\"\nret1 = solution(sentence1)\n\n#Press Run button to receive output.\nprint(\"Solution: return value of the function is\", ret1, \".\")\n\nsentence2 = \"palindrome\"\nret2 = solution(sentence2)\n\n#Press Run button to receive output.\nprint(\"Solution: return value of the function is\", ret2, \".\")",
    "sol": "def solution(sentence):\n    str = ''\n    for c in sentence:\n        if c != '.' and c != ' ':\n            str += c\n    size = len(str)\n    for i in range(size // 2):\n        if str[i] != str[size - 1 - i]:\n            return False\n    return True",
    "tests": [
      {
        "call": "solution(\"never odd or even.\")",
        "o": "True"
      },
      {
        "call": "solution(\"palindrome\")",
        "o": "False"
      },
      {
        "call": "solution(\"noon\")",
        "o": "True"
      }
    ]
  },
  {
    "set": "E",
    "title": "연속 중복 문자 삭제 (버그 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "알파벳 문자열에서 연속하는 중복 문자를 삭제하려 합니다. 예를 들어 \"senteeeencccccceeee\"가 주어지면 \"sentence\"가 됩니다.\n\n소문자 문자열 characters가 주어질 때 연속 중복을 삭제한 결과를 return 하는 solution 함수를 작성했지만 잘못 동작합니다. 딱 한 줄만 변경해서 수정하세요.\n\n💡 힌트: 첫 글자는 이미 result에 넣어 두었어요. 그럼 비교는 몇 번째 인덱스부터 시작해야 할까요? (i-1이 마지막 글자를 가리키는 인덱스 0의 함정!)",
    "ex": [
      {
        "i": "characters = \"senteeeencccccceeee\"",
        "o": "sentence"
      }
    ],
    "starter": "def solution(characters):\n    result = \"\"\n    result += characters[0]\n    for i in range(len(characters)):\n        if characters[i - 1] != characters[i]:\n            result += characters[i]\n    return result\n\n#The following is code to output testcase. The code below is correct and you shall correct solution function.\ncharacters = \"senteeeencccccceeee\"\nret = solution(characters)\n\n#Press Run button to receive output.\nprint(\"Solution: return value of the function is\", ret, \".\")",
    "sol": "def solution(characters):\n    result = \"\"\n    result += characters[0]\n    for i in range(1, len(characters)):\n        if characters[i - 1] != characters[i]:\n            result += characters[i]\n    return result",
    "tests": [
      {
        "call": "solution(\"senteeeencccccceeee\")",
        "o": "sentence"
      },
      {
        "call": "solution(\"aaabbbcccd\")",
        "o": "abcd"
      }
    ]
  },
  {
    "set": "E",
    "title": "평균 이하인 값의 개수 (버그 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "평균은 자료의 합을 자료의 개수로 나눈 값입니다. 자연수 리스트의 평균을 구하고, 평균 이하인 숫자가 몇 개인지 구하려 합니다.\n\n예를 들어 [1,2,...,10]이면 평균이 5.5이므로 평균 이하인 값은 5개입니다.\n\n리스트 data가 주어질 때 평균 이하인 값의 개수를 return 하는 solution 함수를 작성했지만 잘못 동작합니다. 딱 한 줄만 변경해서 수정하세요.\n\n💡 힌트: 평균 공식을 다시 떠올려 보세요. 무엇을 무엇으로 나눠야 할까요?",
    "ex": [
      {
        "i": "data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
        "o": "5",
        "note": "합 55 ÷ 개수 10 = 평균 5.5 → 5.5 이하는 5개"
      },
      {
        "i": "data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 10]",
        "o": "9",
        "note": "합 19 ÷ 10 = 1.9 → 1.9 이하는 9개"
      }
    ],
    "starter": "def solution(data):\n    total = sum(data)\n    average = len(data) / total\n    cnt = 0\n    for d in data:\n        if d <= average:\n            cnt += 1\n    return cnt\n\n#The following is code to output testcase. The code below is correct and you shall correct solution function.\ndata1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nret1 = solution(data1)\n\n#Press Run button to receive output.\nprint(\"Solution: return value of the function is\", ret1, \".\")\n\ndata2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 10]\nret2 = solution(data2)\n\n#Press Run button to receive output.\nprint(\"Solution: return value of the function is\", ret2, \".\")",
    "sol": "def solution(data):\n    total = sum(data)\n    average = total / len(data)\n    cnt = 0\n    for d in data:\n        if d <= average:\n            cnt += 1\n    return cnt",
    "tests": [
      {
        "call": "solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])",
        "o": "5"
      },
      {
        "call": "solution([1, 1, 1, 1, 1, 1, 1, 1, 1, 10])",
        "o": "9"
      }
    ]
  },
  {
    "set": "F",
    "title": "장갑 짝 맞추기",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "왼손 장갑과 오른손 장갑의 제품 번호 리스트가 있습니다(제품 번호는 1~10). 제품 번호가 같은 왼손·오른손 장갑을 합쳐 한 쌍을 만들 때, 최대 몇 쌍을 만들 수 있는지 구합니다.\n\n1. 왼손 장갑을 제품 번호별로 셉니다 → 2. 오른손 장갑을 셉니다 → 3. 번호별로 최대한 쌍을 만듭니다\n\n중복 부분은 func_a 함수로 작성했습니다. @@@ 빈칸을 채워 완성하세요.\n\n💡 힌트: x의 값과 같은 인덱스 번호에 해당하는 counter 값을 1 증가시켜야 해요.",
    "ex": [
      {
        "i": "left = [2, 1, 2, 2, 4], right = [1, 2, 2, 4, 4, 7]",
        "o": "4",
        "note": "1번 한 쌍 + 2번 두 쌍 + 4번 한 쌍 = 최대 4쌍"
      }
    ],
    "starter": "max_product_number = 10\n\ndef func_a(gloves):\n    counter = [0 for _ in range(max_product_number + 1)]\n    for x in gloves:\n        @@@\n    return counter\n\ndef solution(left_gloves, right_gloves):\n    left_counter = func_a(left_gloves)\n    right_counter = func_a(right_gloves)\n\n    total = 0\n    for i in range(1, max_product_number + 1):\n        total += min(left_counter[i], right_counter[i])\n    return total\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\nleft_gloves = [2, 1, 2, 2, 4]\nright_gloves = [1, 2, 2, 4, 4, 7]\nret = solution(left_gloves, right_gloves)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "max_product_number = 10\n\ndef func_a(gloves):\n    counter = [0 for _ in range(max_product_number + 1)]\n    for x in gloves:\n        counter[x] += 1\n    return counter\n\ndef solution(left_gloves, right_gloves):\n    left_counter = func_a(left_gloves)\n    right_counter = func_a(right_gloves)\n\n    total = 0\n    for i in range(1, max_product_number + 1):\n        total += min(left_counter[i], right_counter[i])\n    return total",
    "tests": [
      {
        "call": "solution([2, 1, 2, 2, 4], [1, 2, 2, 4, 4, 7])",
        "o": "4"
      },
      {
        "call": "solution([1, 1, 1], [1])",
        "o": "1"
      },
      {
        "call": "solution([3, 3], [4, 4])",
        "o": "0"
      }
    ]
  },
  {
    "set": "F",
    "title": "3의 배수 vs 5의 배수",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "자연수 리스트에 3의 배수와 5의 배수 중 어떤 수가 더 많은지 알아봅니다.\n\n1. 3의 배수 개수 세기 → 2. 5의 배수 개수 세기 → 3. 비교해서 3의 배수가 많으면 \"three\", 5의 배수가 많으면 \"five\", 같으면 \"same\"을 return\n\n@@@ 빈칸에 주어진 func_a, func_b, func_c 함수와 매개변수를 알맞게 채우세요.\n\n💡 힌트: 각 함수가 무슨 일을 하는지 먼저 읽어보세요. func_a는 5의 배수를, func_c는 3의 배수를 셉니다!",
    "ex": [
      {
        "i": "arr = [2, 3, 6, 9, 12, 15, 10, 20, 22, 25]",
        "o": "three",
        "note": "3의 배수 5개(3,6,9,12,15) > 5의 배수 4개(10,15,20,25)"
      }
    ],
    "starter": "def func_a(arr):\n    count = 0\n    for n in arr:\n        if n % 5 == 0:\n            count += 1\n    return count\n\ndef func_b(three, five):\n    if three > five:\n        return \"three\"\n    elif three < five:\n        return \"five\"\n    else:\n        return \"same\"\n\ndef func_c(arr):\n    count = 0\n    for n in arr:\n        if n % 3 == 0:\n            count += 1\n    return count\n\ndef solution(arr):\n    count_three = func_@@@(@@@)\n    count_five = func_@@@(@@@)\n    answer = func_@@@(@@@)\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\narr = [2, 3, 6, 9, 12, 15, 10, 20, 22, 25]\nret = solution(arr)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def func_a(arr):\n    count = 0\n    for n in arr:\n        if n % 5 == 0:\n            count += 1\n    return count\n\ndef func_b(three, five):\n    if three > five:\n        return \"three\"\n    elif three < five:\n        return \"five\"\n    else:\n        return \"same\"\n\ndef func_c(arr):\n    count = 0\n    for n in arr:\n        if n % 3 == 0:\n            count += 1\n    return count\n\ndef solution(arr):\n    count_three = func_c(arr)\n    count_five = func_a(arr)\n    answer = func_b(count_three, count_five)\n    return answer",
    "tests": [
      {
        "call": "solution([2, 3, 6, 9, 12, 15, 10, 20, 22, 25])",
        "o": "three"
      },
      {
        "call": "solution([5, 10])",
        "o": "five"
      },
      {
        "call": "solution([15])",
        "o": "same"
      }
    ]
  },
  {
    "set": "F",
    "title": "짝수 제곱의 합",
    "func": true,
    "label": "직접 작성",
    "desc": "서로 다른 두 자연수 N과 M이 매개변수로 주어질 때, N부터 M까지의 자연수 중에서 짝수들의 제곱의 합을 return 하도록 solution 함수를 완성하세요.\n\n[매개변수] N과 M은 1 이상 1,000 이하의 자연수, N < M\n\n💡 참고: 제곱은 x**2, x*x, pow(x,2) 모두 가능해요.",
    "ex": [
      {
        "i": "N = 4, M = 7",
        "o": "52",
        "note": "4~7 중 짝수는 4와 6. 4²+6² = 16+36 = 52"
      }
    ],
    "starter": "#다음과 같이 import를 사용할 수 있습니다.\n#import math\n\ndef solution(N, M):\n    answer = 0\n    #여기에 코드를 작성해주세요.\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\nN = 4\nM = 7\nret = solution(N, M)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(N, M):\n    total = 0\n    for x in range(N, M + 1):\n        if x % 2 == 0:\n            total += x * x\n    return total",
    "tests": [
      {
        "call": "solution(4, 7)",
        "o": "52"
      },
      {
        "call": "solution(1, 10)",
        "o": "220"
      }
    ]
  },
  {
    "set": "F",
    "title": "길이 5 이상인 단어 이어 붙이기",
    "func": true,
    "label": "직접 작성",
    "desc": "단어 리스트에서 길이가 5 이상인 단어를 순서대로 이어 붙입니다.\n예) [\"my\", \"favorite\", \"color\", \"is\", \"violet\"] → \"favoritecolorviolet\"\n\n단어 리스트 words가 주어질 때, 길이 5 이상인 단어를 순서대로 이어 붙인 문자열을 return 하도록 완성하세요.\n\n⚠️ 만약 이어 붙인 결과가 빈 문자열이면 \"empty\"를 return 하세요!\n\n[매개변수] words의 길이는 1~100, 각 단어는 길이 1~10의 소문자",
    "ex": [
      {
        "i": "words = [\"my\", \"favorite\", \"color\", \"is\", \"violet\"]",
        "o": "favoritecolorviolet"
      },
      {
        "i": "words = [\"yes\", \"i\", \"am\"]",
        "o": "empty",
        "note": "길이 5 이상인 단어가 없으므로 empty"
      }
    ],
    "starter": "#다음과 같이 import를 사용할 수 있습니다.\n#import math\n\ndef solution(words):\n    answer = ''\n    #여기에 코드를 작성해주세요.\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\nwords1 = [\"my\", \"favorite\", \"color\", \"is\", \"violet\"]\nret1 = solution(words1)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은 \", ret1, \" 입니다.\")\n\nwords2 = [\"yes\", \"i\", \"am\"]\nret2 = solution(words2)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은 \", ret2, \" 입니다.\")",
    "sol": "def solution(words):\n    answer = \"\"\n    for w in words:\n        if len(w) >= 5:\n            answer += w\n    if len(answer) < 1:\n        answer = \"empty\"\n    return answer",
    "tests": [
      {
        "call": "solution([\"my\", \"favorite\", \"color\", \"is\", \"violet\"])",
        "o": "favoritecolorviolet"
      },
      {
        "call": "solution([\"yes\", \"i\", \"am\"])",
        "o": "empty"
      },
      {
        "call": "solution([\"hello\"])",
        "o": "hello"
      }
    ]
  },
  {
    "set": "F",
    "title": "몬스터 최소 공격 횟수",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "게임 캐릭터가 몬스터와 1:1 전투를 합니다. 캐릭터가 공격하면 몬스터 hp가 attack만큼 줄고, 몬스터는 자기 차례에 recovery만큼 회복합니다. 둘은 번갈아 행동하고 캐릭터가 먼저 공격합니다. 몬스터 hp를 0 이하로 만들면 승리!\n\n공격력 attack, 회복량 recovery, 초기 체력 hp가 주어질 때 몬스터를 잡기 위한 최소 공격 횟수를 return 하도록 @@@ 빈칸을 채우세요.\n\n[매개변수] recovery < attack, hp는 200~1,000",
    "ex": [
      {
        "i": "attack = 30, recovery = 10, hp = 60",
        "o": "3",
        "note": "60 → 공격(30) → 회복(40) → 공격(10) → 회복(20) → 공격(-10) 승리! 총 3번"
      }
    ],
    "starter": "def solution(attack, recovery, hp):\n    count = 0\n    while(True):\n        count += @@@\n        hp -= @@@\n        if hp <= 0:\n            @@@\n        hp += @@@\n    return count\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\nattack = 30\nrecovery = 10\nhp = 60\nret = solution(attack, recovery, hp)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(attack, recovery, hp):\n    count = 0\n    while(True):\n        count += 1\n        hp -= attack\n        if hp <= 0:\n            break\n        hp += recovery\n    return count",
    "tests": [
      {
        "call": "solution(30, 10, 60)",
        "o": "3"
      },
      {
        "call": "solution(50, 10, 200)",
        "o": "5"
      }
    ]
  },
  {
    "set": "F",
    "title": "엘리베이터 총 이동 거리",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "엘리베이터가 하루 동안 멈춘 층이 순서대로 담긴 리스트가 있습니다. 층과 층 사이 거리는 1일 때 총 이동 거리를 구합니다.\n예) [1, 2, 5, 4, 2] → 1+3+1+2 = 7\n\nfloors가 주어질 때 총 이동 거리를 return 하도록 @@@ 빈칸을 채우세요.\n\n💡 힌트: 바로 앞 층과 비교해야 하니 인덱스를 몇 번부터 시작할지 주의! 그리고 거리는 항상 양수(절댓값)여야 해요.\n\n[매개변수] floors의 길이는 2~100, 인접한 두 원소가 같은 경우는 없음",
    "ex": [
      {
        "i": "floors = [1, 2, 5, 4, 2]",
        "o": "7",
        "note": "1→2(1) + 2→5(3) + 5→4(1) + 4→2(2) = 7"
      }
    ],
    "starter": "def solution(floors):\n    dist = 0\n    length = len(floors)\n    for i in range(@@@):\n        if @@@:\n            dist += floors[i] - floors[i-1]\n        else:\n            dist += floors[i-1] - floors[i]\n    return dist\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\nfloors = [1, 2, 5, 4, 2]\nret = solution(floors)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(floors):\n    dist = 0\n    length = len(floors)\n    for i in range(1, length):\n        if floors[i] > floors[i-1]:\n            dist += floors[i] - floors[i-1]\n        else:\n            dist += floors[i-1] - floors[i]\n    return dist",
    "tests": [
      {
        "call": "solution([1, 2, 5, 4, 2])",
        "o": "7"
      },
      {
        "call": "solution([3, 1])",
        "o": "2"
      },
      {
        "call": "solution([1, 100])",
        "o": "99"
      }
    ]
  },
  {
    "set": "F",
    "title": "온도 단위 변환 (버그 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "화씨(℉)↔섭씨(℃)를 변환합니다.\n\n환산 공식\n* 화씨 → 섭씨: (화씨온도 - 32) ÷ 1.8\n* 섭씨 → 화씨: (섭씨온도 × 1.8) + 32\n\n온도 value와 단위 unit이 주어질 때 환산한 온도의 정수 부분을 return 하는 함수를 작성했지만 일부 입력에서 잘못 동작합니다. 딱 한 줄만 변경해서 수정하세요.\n\n💡 힌트: 연산자 우선순위! 나눗셈은 뺄셈보다 먼저 계산됩니다.",
    "ex": [
      {
        "i": "value = 527, unit = \"C\"",
        "o": "980",
        "note": "(527 × 1.8) + 32 = 980.6 → 정수 부분 980"
      },
      {
        "i": "value = 600, unit = \"F\"",
        "o": "315",
        "note": "(600 - 32) ÷ 1.8 = 315.5... → 315"
      }
    ],
    "starter": "def solution(value, unit):\n    converted = 0\n    if unit == \"C\":\n        value = value * 1.8 + 32\n    if unit == \"F\":\n        value = value - 32 / 1.8\n    converted = int(value)\n    return converted\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래 코드는 잘못된 부분이 없으니, solution함수만 수정하세요.\nvalue = 527\nunit = \"C\"\nret = solution(value, unit)\n\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(value, unit):\n    converted = 0\n    if unit == \"C\":\n        value = value * 1.8 + 32\n    if unit == \"F\":\n        value = (value - 32) / 1.8\n    converted = int(value)\n    return converted",
    "tests": [
      {
        "call": "solution(527, \"C\")",
        "o": "980"
      },
      {
        "call": "solution(600, \"F\")",
        "o": "315"
      },
      {
        "call": "solution(32, \"F\")",
        "o": "0"
      }
    ]
  },
  {
    "set": "F",
    "title": "자릿수 중 소수의 개수",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "자연수를 각 자릿수별로 나누었을 때 소수(2, 3, 5, 7)가 몇 개인지 구합니다.\n예) 29022531 → 2, 2, 2, 5, 3이 소수 → 총 5개\n\nnumber가 주어질 때 각 자릿수 중 소수의 개수를 return 하도록 while문의 @@@ 조건을 채우세요.\n\n💡 힌트: 자릿수가 남아 있는 동안(number가 0이 아닌 동안) 반복해야 해요. number % 10은 마지막 자리, number //= 10은 마지막 자리 제거!\n\n[매개변수] number는 1 이상 1,000,000,000 이하의 자연수",
    "ex": [
      {
        "i": "number = 29022531",
        "o": "5",
        "note": "각 자릿수 2,9,0,2,2,5,3,1 중 소수는 2,2,2,5,3으로 5개"
      }
    ],
    "starter": "def solution(number):\n    count = 0\n    while @@@:\n        n = number % 10\n        if n == 2 or n == 3 or n == 5 or n == 7:\n            count += 1\n        number //= 10\n    return count\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\nnumber = 29022531\nret = solution(number)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(number):\n    count = 0\n    while number > 0:\n        n = number % 10\n        if n == 2 or n == 3 or n == 5 or n == 7:\n            count += 1\n        number //= 10\n    return count",
    "tests": [
      {
        "call": "solution(29022531)",
        "o": "5"
      },
      {
        "call": "solution(1)",
        "o": "0"
      },
      {
        "call": "solution(2357)",
        "o": "4"
      }
    ]
  },
  {
    "set": "F",
    "title": "정확히 K표 받은 후보 수 (버그 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "N명의 후보에 대한 투표 결과 리스트가 있습니다. 예를 들어 [2, 5, 3, 4, 1, 5, 1, 5, 5, 3]은 순서대로 2번, 5번, 3번... 후보에게 투표한 것입니다. 정확히 K표를 받은 후보가 몇 명인지 구합니다.\n\nvotes, N, K가 주어질 때 K표를 받은 후보 수를 return 하는 함수를 작성했지만 잘못 동작합니다. 딱 한 줄만 변경해서 수정하세요.\n\n💡 힌트: 개수를 세는 변수의 시작값은 무엇이어야 할까요?",
    "ex": [
      {
        "i": "votes = [2, 5, 3, 4, 1, 5, 1, 5, 5, 3], N = 5, K = 2",
        "o": "2",
        "note": "1번 2표, 2번 1표, 3번 2표, 4번 1표, 5번 4표 → 정확히 2표는 1번, 3번으로 2명"
      }
    ],
    "starter": "def solution(votes, N, K):\n    counter = [0 for _ in range(N + 1)]\n    for x in votes:\n        counter[x] += 1\n    answer = -1\n    for c in counter:\n        if c == K:\n            answer += 1\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래 코드는 잘못된 부분이 없으니, solution함수만 수정하세요.\nvotes = [2, 5, 3, 4, 1, 5, 1, 5, 5, 3]\nN = 5\nK = 2\nret = solution(votes, N, K)\n\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(votes, N, K):\n    counter = [0 for _ in range(N + 1)]\n    for x in votes:\n        counter[x] += 1\n    answer = 0\n    for c in counter:\n        if c == K:\n            answer += 1\n    return answer",
    "tests": [
      {
        "call": "solution([2, 5, 3, 4, 1, 5, 1, 5, 5, 3], 5, 2)",
        "o": "2"
      },
      {
        "call": "solution([2, 5, 3, 4, 1, 5, 1, 5, 5, 3], 5, 1)",
        "o": "2"
      },
      {
        "call": "solution([2, 5, 3, 4, 1, 5, 1, 5, 5, 3], 5, 4)",
        "o": "1"
      }
    ]
  },
  {
    "set": "F",
    "title": "구매 금액별 상품권 지급 (버그 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "A 백화점은 구매금액에 따라 상품권을 지급합니다 (가장 큰 금액 한 장만).\n\n· 100만원 이상 → 5만원 상품권\n· 60만원 이상 → 3만원 상품권\n· 40만원 이상 → 2만원 상품권\n· 20만원 이상 → 1만원 상품권\n\n⚠️ 20만원 미만 구매 고객에게는 상품권을 지급하지 않습니다!\n\n구매 금액 리스트 purchase가 주어질 때 지급할 상품권 총액을 return 하는 함수를 작성했지만 잘못 동작합니다. 딱 한 줄만 변경해서 수정하세요.",
    "ex": [
      {
        "i": "purchase = [150000, 210000, 399990, 990000, 1000000]",
        "o": "100000",
        "note": "15만원→0원(!), 21만·39.9만→1만원씩, 99만→3만원, 100만→5만원 = 총 10만원"
      }
    ],
    "starter": "def solution(purchase):\n    total = 0\n    for p in purchase:\n        if p >= 1000000:\n            total += 50000\n        elif p >= 600000:\n            total += 30000\n        elif p >= 400000:\n            total += 20000\n        else:\n            total += 10000\n    return total\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래 코드는 잘못된 부분이 없으니, solution함수만 수정하세요.\npurchase = [150000, 210000, 399990, 990000, 1000000]\nret = solution(purchase)\n\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(purchase):\n    total = 0\n    for p in purchase:\n        if p >= 1000000:\n            total += 50000\n        elif p >= 600000:\n            total += 30000\n        elif p >= 400000:\n            total += 20000\n        elif p >= 200000:\n            total += 10000\n    return total",
    "tests": [
      {
        "call": "solution([150000, 210000, 399990, 990000, 1000000])",
        "o": "100000"
      },
      {
        "call": "solution([200000, 100000])",
        "o": "10000"
      },
      {
        "call": "solution([1500000])",
        "o": "50000"
      }
    ]
  },
  {
    "set": "G",
    "title": "n번 학생의 등수 구하기",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "학생들의 시험 점수가 주어졌을 때, n번 학생이 몇 등인지 구하려 합니다. 학번은 0번부터 시작하며, 시험 점수는 학번 순으로 주어집니다.\n\n[프로그램 구조]\n1. n번 학생의 점수를 변수에 저장합니다.\n2. 점수를 내림차순으로 정렬합니다.\n3. 리스트의 첫 번째 원소부터 마지막 원소까지 순회하며 n번 학생의 점수를 찾습니다.\n  3-1. 1번 단계에서 저장해 둔 점수와 같은 점수를 찾으면 등수를 return 합니다.\n\n위 구조를 참고하여 빈칸(@@@)에 주어진 func_a, func_b, func_c 함수와 매개변수를 알맞게 채워주세요.\n\n[매개변수] scores의 길이는 1~100, 점수는 0~100(동점자 없음), n은 0 이상 (길이-1) 이하\n\n💡 힌트: func_a, func_b, func_c가 각각 구조의 몇 번 단계에 해당하는지 먼저 찾아보세요.",
    "ex": [
      {
        "i": "scores = [20, 60, 98, 59], n = 3",
        "o": "3",
        "note": "3번 학생의 점수는 59점. 내림차순 정렬 [98, 60, 59, 20]에서 59는 3번째 → 3등"
      }
    ],
    "starter": "def func_a(scores, score):\n    rank = 1\n    for s in scores:\n        if s == score:\n            return rank\n        rank += 1\n    return 0\n\ndef func_b(arr):\n    arr.sort(reverse=True)\n\ndef func_c(arr, n):\n    return arr[n]\n\ndef solution(scores, n):\n    score = func_@@@(@@@)\n    func_@@@(@@@)\n    answer = func_@@@(@@@)\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\nscores = [20, 60, 98, 59]\nn = 3\nret = solution(scores, n)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def func_a(scores, score):\n    rank = 1\n    for s in scores:\n        if s == score:\n            return rank\n        rank += 1\n    return 0\n\ndef func_b(arr):\n    arr.sort(reverse=True)\n\ndef func_c(arr, n):\n    return arr[n]\n\ndef solution(scores, n):\n    score = func_c(scores, n)\n    func_b(scores)\n    answer = func_a(scores, score)\n    return answer",
    "tests": [
      {
        "call": "solution([20, 60, 98, 59], 3)",
        "o": "3"
      },
      {
        "call": "solution([50], 0)",
        "o": "1"
      },
      {
        "call": "solution([10, 90, 30], 2)",
        "o": "2"
      }
    ]
  },
  {
    "set": "G",
    "title": "장학생 수 구하기",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "학기가 끝날 때마다 장학금을 줍니다. 장학금을 주는 조건은 다음과 같습니다.\n\n1. 이번 학기 성적이 80점 이상(100점 만점)이면서 석차가 상위 10% 이내인 학생\n2. 이번 학기 성적이 80점 이상이면서 1등인 학생\n3. 직전 학기 대비 성적이 가장 많이 오른 학생(여러 명인 경우 해당 학생 전부)\n\n단, 동점인 학생들은 등수가 같으며, 중복 수혜는 불가합니다.\n\n[프로그램 구조]\n1. 이번 학기 성적을 기준으로 학생별 석차를 구합니다.\n2. 각 학생의 (이번 학기 성적 - 직전 학기 성적) 중 최댓값을 구합니다.\n3. 조건을 만족하는 학생을 발견하면 장학생 수를 1 증가시킵니다.\n4. 장학생 수를 return 합니다.\n\n빈칸(@@@)에 주어진 func_a, func_b, func_c 함수와 매개변수를 알맞게 채워주세요.\n\n[매개변수] 두 리스트의 길이는 같고 1~200, 원소는 0~100인 정수\n\n💡 힌트: 각 함수의 매개변수 개수를 세어 보세요. solution 안에서 만든 변수(rank, max_diff_grade)가 어느 함수에 필요한가요?",
    "ex": [
      {
        "i": "current_grade = [70, 100, 70, 80, 50, 95], last_grade = [35, 65, 80, 50, 20, 60]",
        "o": "3",
        "note": "학생 수가 10명보다 적으므로 1등이 장학금을 받고, 성적이 가장 많이 오른(+35) 학생 3명 중 1등과 겹치지 않는 2명이 추가 → 총 3명"
      }
    ],
    "starter": "def func_a(current_grade, last_grade, rank, max_diff_grade):\n    arr_length = len(current_grade)\n    count = 0\n    for i in range(arr_length):\n        if current_grade[i] >= 80 and rank[i] <= arr_length // 10:\n            count += 1\n        elif current_grade[i] >= 80 and rank[i] == 1:\n            count += 1\n        elif max_diff_grade > 0 and max_diff_grade == current_grade[i] - last_grade[i]:\n            count += 1\n    return count\n\ndef func_b(current_grade):\n    arr_length = len(current_grade)\n    rank = [1] * arr_length\n    for i in range(arr_length):\n        for j in range(arr_length):\n            if current_grade[i] < current_grade[j]:\n                rank[i] += 1\n    return rank\n\ndef func_c(current_grade, last_grade):\n    max_diff_grade = 1\n    for i in range(len(current_grade)):\n        max_diff_grade = max(max_diff_grade, current_grade[i] - last_grade[i])\n    return max_diff_grade\n\ndef solution(current_grade, last_grade):\n    rank = func_@@@(@@@)\n    max_diff_grade = func_@@@(@@@)\n    answer = func_@@@(@@@)\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\ncurrent_grade = [70, 100, 70, 80, 50, 95]\nlast_grade = [35, 65, 80, 50, 20, 60]\nret = solution(current_grade, last_grade)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def func_a(current_grade, last_grade, rank, max_diff_grade):\n    arr_length = len(current_grade)\n    count = 0\n    for i in range(arr_length):\n        if current_grade[i] >= 80 and rank[i] <= arr_length // 10:\n            count += 1\n        elif current_grade[i] >= 80 and rank[i] == 1:\n            count += 1\n        elif max_diff_grade > 0 and max_diff_grade == current_grade[i] - last_grade[i]:\n            count += 1\n    return count\n\ndef func_b(current_grade):\n    arr_length = len(current_grade)\n    rank = [1] * arr_length\n    for i in range(arr_length):\n        for j in range(arr_length):\n            if current_grade[i] < current_grade[j]:\n                rank[i] += 1\n    return rank\n\ndef func_c(current_grade, last_grade):\n    max_diff_grade = 1\n    for i in range(len(current_grade)):\n        max_diff_grade = max(max_diff_grade, current_grade[i] - last_grade[i])\n    return max_diff_grade\n\ndef solution(current_grade, last_grade):\n    rank = func_b(current_grade)\n    max_diff_grade = func_c(current_grade, last_grade)\n    answer = func_a(current_grade, last_grade, rank, max_diff_grade)\n    return answer",
    "tests": [
      {
        "call": "solution([70, 100, 70, 80, 50, 95], [35, 65, 80, 50, 20, 60])",
        "o": "3"
      },
      {
        "call": "solution([90, 80], [10, 70])",
        "o": "1"
      }
    ]
  },
  {
    "set": "G",
    "title": "체조 점수 구하기",
    "func": true,
    "label": "직접 작성",
    "desc": "체조선수는 여러 심사위원의 점수 중 가장 높은 점수 하나와 가장 낮은 점수 하나를 제외하고 나머지 점수들의 평균을 계산하여 최종점수를 받습니다. 단, 이때 소수점 이하의 수는 버립니다.\n\n예를 들어, [35, 28, 98, 34, 20, 50, 85, 74, 71, 7]의 점수를 받았다면 최고점 98과 최저점 7을 제외한 8명의 평균은 49.625점 → 소수점을 버리면 49점입니다.\n\n각 심사위원이 매긴 점수가 담긴 리스트 scores가 매개변수로 주어질 때, 이 선수가 받은 점수를 return 하도록 solution 함수를 작성해 주세요.\n\n[매개변수] scores의 길이는 3~100, 점수는 0~100의 정수\n\n💡 힌트: sum(), max(), min(), len() 함수를 활용해 보세요. 평균을 정수로 만들려면 어떤 나눗셈 연산자를 써야 할까요?",
    "ex": [
      {
        "i": "scores = [35, 28, 98, 34, 20, 50, 85, 74, 71, 7]",
        "o": "49",
        "note": "최고 98, 최저 7 제외 → 평균 49.625 → 소수점 버림 49"
      },
      {
        "i": "scores = [1, 1, 1, 1, 1]",
        "o": "1",
        "note": "1점 두 개를 제외한 나머지 합은 3, 평균은 1"
      }
    ],
    "starter": "#다음과 같이 import를 사용할 수 있습니다.\n#import math\n\ndef solution(scores):\n    #여기에 코드를 작성해주세요.\n    answer = 0\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\nscores1 = [35, 28, 98, 34, 20, 50, 85, 74, 71, 7]\nret1 = solution(scores1)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret1, \"입니다.\")\n\nscores2 = [1, 1, 1, 1, 1]\nret2 = solution(scores2)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret2, \"입니다.\")",
    "sol": "def solution(scores):\n    answer = (sum(scores) - max(scores) - min(scores)) // (len(scores) - 2)\n    return answer",
    "tests": [
      {
        "call": "solution([35, 28, 98, 34, 20, 50, 85, 74, 71, 7])",
        "o": "49"
      },
      {
        "call": "solution([1, 1, 1, 1, 1])",
        "o": "1"
      },
      {
        "call": "solution([0, 50, 100])",
        "o": "50"
      }
    ]
  },
  {
    "set": "G",
    "title": "오타 수정 문자 개수",
    "func": true,
    "label": "직접 작성",
    "desc": "영어 단어를 외우기 위해 단어를 반복하여 타이핑했더니 오타가 많습니다. 오타를 수정하려면 문자를 몇 개 바꿔야 하는지 구하려 합니다.\n\n예를 들어 \"CODE\"를 3번 타이핑했더니 [\"CODE\", \"COED\", \"CDEO\"]가 적혀 있었습니다.\n1. \"CODE\"는 바르게 적혔습니다.\n2. \"COED\"는 E와 D를 바꾸면 됩니다 (2개)\n3. \"CDEO\"는 D, E, O를 바꾸면 됩니다 (3개)\n→ 총 5개\n\n타이핑한 단어를 담은 리스트 words와 원래 치려 한 단어 word가 주어질 때, 바꿔야 하는 문자 개수를 return 하도록 solution 함수를 완성해 주세요.\n\n[매개변수] word는 10개 이하의 알파벳 대문자 단어, words의 각 문자열 길이는 word와 같음, words의 개수는 15 이하\n\n💡 힌트: 각 단어를 word와 같은 위치끼리 비교하면 돼요. zip() 함수나 인덱스 반복 어느 쪽이든 좋아요.",
    "ex": [
      {
        "i": "words = [\"CODE\", \"COED\", \"CDEO\"], word = \"CODE\"",
        "o": "5",
        "note": "0 + 2 + 3 = 5개"
      }
    ],
    "starter": "#다음과 같이 import를 사용할 수 있습니다.\n#import math\n\ndef solution(words, word):\n    #여기에 코드를 작성해주세요.\n    count = 0\n    return count\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\nwords = [\"CODE\", \"COED\", \"CDEO\"]\nword = \"CODE\"\nret = solution(words, word)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(words, word):\n    count = 0\n    for comp in words:\n        for x, y in zip(comp, word):\n            if x != y:\n                count = count + 1\n    return count",
    "tests": [
      {
        "call": "solution([\"CODE\", \"COED\", \"CDEO\"], \"CODE\")",
        "o": "5"
      },
      {
        "call": "solution([\"AB\", \"AB\"], \"AB\")",
        "o": "0"
      },
      {
        "call": "solution([\"XY\"], \"AB\")",
        "o": "2"
      }
    ]
  },
  {
    "set": "G",
    "title": "총 교통비 계산하기",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "여행객들의 총 교통비를 계산합니다. 교통편은 \"Bus\", \"Ship\", \"Airplane\" 3가지이고, 나이가 20살 이상이면 어른 요금, 그렇지 않으면 어린이 요금을 받습니다.\n\n[요금표] Bus: 어른 40,000 / 어린이 15,000 · Ship: 어른 30,000 / 어린이 13,000 · Airplane: 어른 70,000 / 어린이 45,000\n\n여행객이 10명 이상인 경우 어른은 10%, 어린이는 20% 할인을 받습니다.\n\n여행객들의 나이 리스트 member_age와 교통편 transportation이 주어질 때, 총 교통비를 return 하도록 빈칸(@@@)을 채워 코드를 완성해 주세요.\n\n[매개변수] member_age의 길이는 1~1,000, 원소는 1~100, transportation은 \"Bus\"/\"Ship\"/\"Airplane\"\n\n💡 힌트: 10% 할인이면 원래 가격의 0.9배! 결과값이 정수(203600)로 나와야 하는데 소수(203600.0)가 나온다면 int()를 떠올려 보세요.",
    "ex": [
      {
        "i": "member_age = [13, 33, 45, 11, 20], transportation = \"Bus\"",
        "o": "150000",
        "note": "어린이 2명 30,000 + 어른 3명 120,000 = 150,000"
      },
      {
        "i": "member_age = [25, 11, 27, 56, 7, 19, 52, 31, 77, 8], transportation = \"Ship\"",
        "o": "203600",
        "note": "10명 이상 할인 적용: 어린이 4명 41,600 + 어른 6명 162,000 = 203,600"
      }
    ],
    "starter": "def solution(member_age, transportation):\n\tif transportation == 'Bus':\n\t\tadult_expense = 40000\n\t\tchild_expense = 15000\n\telif transportation == 'Ship':\n\t\tadult_expense = 30000\n\t\tchild_expense = 13000\n\telif transportation == 'Airplane':\n\t\tadult_expense = 70000\n\t\tchild_expense = 45000\n\n\tif len(member_age) >= 10:\n\t\tadult_expense = @@@\n\t\tchild_expense = @@@\n\n\ttotal_expenses = 0\n\tfor age in member_age:\n\t\tif @@@:\n\t\t\ttotal_expenses += adult_expense\n\t\telse:\n\t\t\ttotal_expenses += child_expense\n\n\treturn total_expenses\n\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\nmember_age1 = [13, 33, 45, 11, 20]\ntransportation1 = \"Bus\"\nret1 = solution(member_age1, transportation1)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret1, \"입니다.\")\n\nmember_age2 = [25, 11, 27, 56, 7, 19, 52, 31, 77, 8]\ntransportation2 = \"Ship\"\nret2 = solution(member_age2, transportation2)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret2, \"입니다.\")",
    "sol": "def solution(member_age, transportation):\n\tif transportation == 'Bus':\n\t\tadult_expense = 40000\n\t\tchild_expense = 15000\n\telif transportation == 'Ship':\n\t\tadult_expense = 30000\n\t\tchild_expense = 13000\n\telif transportation == 'Airplane':\n\t\tadult_expense = 70000\n\t\tchild_expense = 45000\n\n\tif len(member_age) >= 10:\n\t\tadult_expense = int(adult_expense * 0.9)\n\t\tchild_expense = int(child_expense * 0.8)\n\n\ttotal_expenses = 0\n\tfor age in member_age:\n\t\tif age >= 20:\n\t\t\ttotal_expenses += adult_expense\n\t\telse:\n\t\t\ttotal_expenses += child_expense\n\n\treturn total_expenses",
    "tests": [
      {
        "call": "solution([13, 33, 45, 11, 20], \"Bus\")",
        "o": "150000"
      },
      {
        "call": "solution([25, 11, 27, 56, 7, 19, 52, 31, 77, 8], \"Ship\")",
        "o": "203600"
      },
      {
        "call": "solution([30], \"Airplane\")",
        "o": "70000"
      }
    ]
  },
  {
    "set": "G",
    "title": "타일 색칠하기",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "타일을 'R', 'G', 'B' 색으로 칠하려 합니다. R 색으로는 3칸을 한 번에, G 색으로는 2칸을 한 번에, B 색으로는 1칸을 칠할 수 있습니다. 색은 R, G, B 순서로 한 번씩 번갈아 가면서 사용해야 하며, 타일의 길이를 넘겨서 칠할 수는 없습니다.\n\n예를 들어, 타일 길이가 11이면 \"RRRGGBRRRGG\"로 칠할 수 있습니다.\n\n타일 길이 tile_length가 주어질 때, 타일을 색칠한 순서를 문자열로 return 하도록 빈칸(@@@)을 채워 코드를 완성해 주세요. 순서에 맞게 칠할 수 없다면 \"-1\"을 return 합니다.\n\n[매개변수] tile_length는 1,000 이하의 자연수\n\n💡 힌트: 패턴 \"RRRGGB\"는 6칸씩 반복돼요. 칠할 수 있는 경우는 6으로 나눈 나머지가 0(딱 맞음), 5(B 하나 덜 칠함), 3(GGB 덜 칠함)일 때예요. 그럼 칠할 수 없는 나머지는?",
    "ex": [
      {
        "i": "tile_length = 11",
        "o": "RRRGGBRRRGG",
        "note": "R 3장 + G 2장 + B 1장 + R 3장 + G 2장 = 11칸"
      },
      {
        "i": "tile_length = 16",
        "o": "-1",
        "note": "15칸까지 칠하면 1칸이 남는데 G는 2칸이 필요해서 칠할 수 없음"
      }
    ],
    "starter": "def solution(tile_length):\n    answer = ''\n    com = 'RRRGGB'\n    if tile_length%6 == 1 or tile_length%6 == 2 or @@@:\n        answer = '-1'\n    else:\n        for i in range(tile_length):\n            answer += com[i % 6]\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\ntile_length1 = 11\nret1 = solution(tile_length1)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은 \", ret1, \" 입니다.\")\n\ntile_length2 = 16\nret2 = solution(tile_length2)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은 \", ret2, \" 입니다.\")",
    "sol": "def solution(tile_length):\n    answer = ''\n    com = 'RRRGGB'\n    if tile_length%6 == 1 or tile_length%6 == 2 or tile_length%6 == 4:\n        answer = '-1'\n    else:\n        for i in range(tile_length):\n            answer += com[i % 6]\n    return answer",
    "tests": [
      {
        "call": "solution(11)",
        "o": "RRRGGBRRRGG"
      },
      {
        "call": "solution(16)",
        "o": "-1"
      },
      {
        "call": "solution(6)",
        "o": "RRRGGB"
      },
      {
        "call": "solution(3)",
        "o": "RRR"
      }
    ]
  },
  {
    "set": "G",
    "title": "주스 최대 개수 (한 줄 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "주스 1잔을 만들려면 사과 3개와 당근 1개가 필요합니다. 그런데 키우는 토끼에게 먹이를 주기 위해 사과와 당근 종류에 상관없이 k개를 빼놓으려고 합니다. 주스는 최대한 많이 만들수록 좋습니다.\n\n사과 개수 num_apple, 당근 개수 num_carrot, 토끼 먹이 개수 k가 주어질 때 주스를 최대 몇 잔 만들 수 있는지 return 하도록 solution 함수를 작성했습니다. 그러나 코드 일부분이 잘못되어 있습니다. 주어진 코드에서 한 줄만 변경해서 모든 입력에 대해 올바르게 동작하도록 수정하세요.\n\n[매개변수] num_apple과 num_carrot은 0~200인 정수, k는 0 이상 num_apple+num_carrot 이하인 정수\n\n💡 힌트: 주스로 다 묶고 나니 토끼 먹이 k개가 모자라요. 그럼 주스 잔 수를 늘려야 할까요, 줄여야 할까요? while 안의 코드를 잘 보세요.",
    "hint": [
      "https://raw.githubusercontent.com/kssim00/python-test/main/hints/G-7-1.png"
    ],
    "ex": [
      {
        "i": "num_apple = 5, num_carrot = 1, k = 2",
        "o": "1",
        "note": "사과 2개를 먹이로 주면 사과 3, 당근 1이 남아 주스 1잔"
      },
      {
        "i": "num_apple = 10, num_carrot = 5, k = 4",
        "o": "2",
        "note": "사과 2개와 당근 2개를 먹이로 주면 사과 8, 당근 3이 남아 주스 2잔"
      }
    ],
    "starter": "def solution(num_apple, num_carrot, k):\n    answer = 0\n    \n    if num_apple < num_carrot * 3:\n        answer = num_apple // 3\n    else:\n        answer = num_carrot    \n\n    num_apple -= answer * 3\n    num_carrot -= answer\n\n    i = 0\n    while k - (num_apple + num_carrot + i) > 0:\n        if i % 4 == 0:\n            answer += 1\n        i = i + 1\n        \n    return answer\n\n# 아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래 코드는 잘못된 부분이 없으니, solution함수만 수정하세요.\nnum_apple1 = 5\nnum_carrot1 = 1\nk1 = 2\nret1 = solution(num_apple1, num_carrot1, k1)\n\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret1, \"입니다.\")\n\nnum_apple2 = 10\nnum_carrot2 = 5\nk2 = 4\nret2 = solution(num_apple2, num_carrot2, k2)\n\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret2, \"입니다.\")",
    "sol": "def solution(num_apple, num_carrot, k):\n    answer = 0\n\n    if num_apple < num_carrot * 3:\n        answer = num_apple // 3\n    else:\n        answer = num_carrot\n\n    num_apple -= answer * 3\n    num_carrot -= answer\n\n    i = 0\n    while k - (num_apple + num_carrot + i) > 0:\n        if i % 4 == 0:\n            answer -= 1\n        i = i + 1\n\n    return answer",
    "tests": [
      {
        "call": "solution(5, 1, 2)",
        "o": "1"
      },
      {
        "call": "solution(10, 5, 4)",
        "o": "2"
      },
      {
        "call": "solution(6, 2, 3)",
        "o": "1"
      },
      {
        "call": "solution(3, 1, 0)",
        "o": "1"
      }
    ]
  },
  {
    "set": "G",
    "title": "TV 2대 이상 트는 시간 (한 줄 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "A씨가 하루에 TV를 두 대 이상 트는 시간을 알아내려 합니다. A씨는 매일 세 프로그램을 시청하며, 방송 시간이 겹칠 때는 TV를 여러 대 켜서 모든 프로그램을 봅니다.\n\n세 프로그램의 [시작 시각, 끝 시각]이 담긴 2차원 리스트 programs가 주어질 때, 하루에 TV를 2대 이상 트는 총 시간을 return 하도록 solution 함수를 작성했습니다. 그러나 코드 일부분이 잘못되어 있습니다. 한 줄만 변경해서 올바르게 동작하도록 수정하세요.\n\n[매개변수] programs의 행 길이는 항상 3, 시각은 0~24의 정수, 시작 시각 < 끝 시각\n\n💡 힌트: used_tv[i]에는 i시에 켜져 있는 TV 대수가 들어 있어요. 우리가 세고 싶은 건 'TV가 몇 대 이상'인 시간이었죠?",
    "ex": [
      {
        "i": "programs = [[1, 6], [3, 5], [2, 8]]",
        "o": "4",
        "note": "2대 트는 시간: 2~3시, 5~6시 (2시간) + 3대 트는 시간: 3~5시 (2시간) = 총 4시간"
      }
    ],
    "starter": "def solution(programs):\n    answer = 0\n    used_tv = [0] * 25\n\n    for program in programs:\n        for i in range(program[0], program[1]):\n            used_tv[i] = used_tv[i] + 1\n    \n    for i in used_tv:\n        if i >= 1:\n            answer = answer + 1\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래 코드는 잘못된 부분이 없으니, solution함수만 수정하세요.\nprograms = [[1, 6], [3, 5], [2, 8]]\nret = solution(programs)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(programs):\n    answer = 0\n    used_tv = [0] * 25\n\n    for program in programs:\n        for i in range(program[0], program[1]):\n            used_tv[i] = used_tv[i] + 1\n\n    for i in used_tv:\n        if i >= 2:\n            answer = answer + 1\n    return answer",
    "tests": [
      {
        "call": "solution([[1, 6], [3, 5], [2, 8]])",
        "o": "4"
      },
      {
        "call": "solution([[0, 3], [3, 6], [6, 9]])",
        "o": "0"
      },
      {
        "call": "solution([[0, 5], [0, 5], [0, 5]])",
        "o": "5"
      }
    ]
  },
  {
    "set": "G",
    "title": "주차장 차량 2부제 (한 줄 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "관공서 주차장에서는 차량 2부제를 실시합니다. 차량 번호 끝자리가 홀수인 차량은 홀수 일에만, 짝수인 차량은 짝수 일에만 주차장에 들어올 수 있습니다.\n\n며칠인지를 나타내는 day와 그날 주차장에 들어오려고 하는 차 번호 리스트 numbers가 주어질 때, 주차장에 들어올 수 있는 차량 수를 return 하도록 solution 함수를 작성했습니다. 그러나 코드 일부분이 잘못되어 있습니다. 한 줄만 변경해서 올바르게 동작하도록 수정해 주세요. (중복되는 번호판 번호는 주어지지 않습니다.)\n\n[매개변수] day는 1~31, numbers의 길이는 1~9,000, 원소는 1,000~9,999의 자연수(중복 없음)\n\n💡 힌트: '차량 번호의 짝홀'과 '날짜의 짝홀'이 어떤 관계일 때 들어올 수 있는 거였죠? 예시로 직접 확인해 보세요.",
    "ex": [
      {
        "i": "day = 17, numbers = [3285, 1724, 4438, 2988, 3131, 2998]",
        "o": "2",
        "note": "17일은 홀수 일 → 홀수 번호 차량 3285, 3131 총 2대만 들어올 수 있음"
      }
    ],
    "starter": "def solution(day, numbers):\n    count = 0\n    for number in numbers:\n        if number%2 != day%2:\n            count += 1\n    return count\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래 코드는 잘못된 부분이 없으니, solution함수만 수정하세요.\nday = 17\nnumbers = [3285, 1724, 4438, 2988, 3131, 2998]\nret = solution(day, numbers)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(day, numbers):\n    count = 0\n    for number in numbers:\n        if number%2 == day%2:\n            count += 1\n    return count",
    "tests": [
      {
        "call": "solution(17, [3285, 1724, 4438, 2988, 3131, 2998])",
        "o": "2"
      },
      {
        "call": "solution(2, [1000, 1001])",
        "o": "1"
      },
      {
        "call": "solution(4, [2222, 3333, 4444])",
        "o": "2"
      }
    ]
  },
  {
    "set": "G",
    "title": "자신을 2로 나눈 값의 개수 (한 줄 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "리스트 원소인 자신을 2로 나눈 값이 리스트에 있는 수의 개수를 구하려고 합니다.\n\n예를 들어 리스트가 [4, 8, 3, 6, 7]인 경우, 6/2 = 3, 8/2 = 4이므로 자신을 2로 나눈 값이 리스트에 들어 있는 수의 개수는 총 2개입니다.\n\n숫자가 담긴 리스트 arr가 주어졌을 때, 자신을 2로 나눈 값이 리스트에 들어 있는 수가 몇 개인지 return 하는 solution 함수를 작성했습니다. 그러나 코드 일부분이 잘못되어 있어 실행조차 되지 않습니다. 한 줄만 변경해서 올바르게 동작하도록 수정해 주세요.\n\n[매개변수] arr의 크기는 1~1,000, 원소는 1,000 이하의 자연수\n\n💡 힌트: 일단 실행해 보세요 — 오류 메시지가 어디가 문제인지 알려줘요. '리스트 안에 어떤 값이 있는지 확인'하는 문법은 for가 아니라 무엇이었을까요? 그리고 i/2 대신 int(i/2)를 쓰면 왜 안 될지도 생각해 보세요. (예: 7/2 → 3.5, int(7/2) → 3)",
    "ex": [
      {
        "i": "arr = [4, 8, 3, 6, 7]",
        "o": "2",
        "note": "8/2=4 존재, 6/2=3 존재 → 2개 (4/2=2, 3/2=1.5, 7/2=3.5는 리스트에 없음)"
      }
    ],
    "starter": "def solution(arr):\n    answer = 0\n    for i in arr:\n        for i/2 in arr:\n            answer += 1\n    return answer\n\n# 아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래 코드는 잘못된 부분이 없으니, solution함수만 수정하세요.\narr = [4, 8, 3, 6, 7]\nret = solution(arr)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(arr):\n    answer = 0\n    for i in arr:\n        if i/2 in arr:\n            answer += 1\n    return answer",
    "tests": [
      {
        "call": "solution([4, 8, 3, 6, 7])",
        "o": "2"
      },
      {
        "call": "solution([2, 4, 8])",
        "o": "2"
      },
      {
        "call": "solution([1, 3, 5])",
        "o": "0"
      },
      {
        "call": "solution([3, 1])",
        "o": "0"
      }
    ]
  },
  {
    "set": "H",
    "title": "상담 못 받은 학생 찾기",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "학생 10명이 상담을 받기 위해 매일 한 명씩, 순서대로 상담실을 찾아갑니다. 상담은 상담 선생님이 계실 때에만 받을 수 있고, 한번 방문한 학생은 다시 찾아가지 않습니다. 일정표에는 선생님이 있는 날엔 \"O\", 없는 날엔 \"X\"가 표시됩니다.\n\n예를 들어 일정이 [\"O\", \"X\", \"X\", \"O\", \"O\", \"O\", \"X\", \"O\", \"X\", \"X\"]라면 2번, 3번, 7번, 9번, 10번 학생은 상담을 받지 못합니다.\n\n선생님의 일정을 담은 리스트 schedule이 주어질 때, 상담을 받지 못한 학생의 번호를 오름차순으로 정렬하여 return 하도록 빈칸(@@@)을 채워 코드를 완성해 주세요.\n\n[매개변수] schedule의 원소는 \"O\" 또는 \"X\", 길이는 10\n\n💡 힌트: enumerate()는 (인덱스, 값) 쌍을 꺼내줘요. 인덱스는 0부터 시작하는데 학생 번호는 1번부터라는 점에 주의!",
    "ex": [
      {
        "i": "schedule = [\"O\", \"X\", \"X\", \"O\", \"O\", \"O\", \"X\", \"O\", \"X\", \"X\"]",
        "o": "[2, 3, 7, 9, 10]",
        "note": "선생님이 없는 날(X)에 방문한 2, 3, 7, 9, 10번 학생이 상담을 받지 못함"
      }
    ],
    "starter": "def solution(schedule):\n    answer = []\n    for idx, i in enumerate(schedule):\n        if i == @@@:\n            answer.append(@@@)\n    return answer\n\n# 아래는 테스트케이스 출력을 해보기 위한 코드입니다.\nschedule = [\"O\", \"X\", \"X\", \"O\", \"O\", \"O\", \"X\", \"O\", \"X\", \"X\"]\nret = solution(schedule)\n\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(schedule):\n    answer = []\n    for idx, i in enumerate(schedule):\n        if i == \"X\":\n            answer.append(idx + 1)\n    return answer",
    "tests": [
      {
        "call": "solution([\"O\", \"X\", \"X\", \"O\", \"O\", \"O\", \"X\", \"O\", \"X\", \"X\"])",
        "o": "[2, 3, 7, 9, 10]"
      },
      {
        "call": "solution([\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"])",
        "o": "[]"
      },
      {
        "call": "solution([\"X\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"X\"])",
        "o": "[1, 10]"
      }
    ]
  },
  {
    "set": "H",
    "title": "체력시험 합격 인원",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "체력시험 합격 인원을 알아보려고 합니다. 종목은 윗몸일으키기, 팔굽혀펴기, 달리기이며 종목별 합격 기준은 순서대로 80점, 88점, 70점 이상입니다.\n\n· 통과한 종목이 하나 이하거나, 통과 점수의 반을 넘기지 못한 종목이 있다면 불합격입니다.\n· 그 외에는 합격입니다.\n\n[프로그램 구조]\n1. 통과한 종목이 몇 개인지 셉니다.\n2. 통과 점수의 반을 넘기지 못한 종목이 몇 개인지 셉니다.\n3. 통과한 종목이 하나보다 많고 통과 점수의 반을 넘기지 못한 종목이 없으면 통과한 인원으로 셉니다.\n\n각 종목 기록을 담고 있는 리스트 scores가 주어질 때, 합격 인원을 return 하도록 빈칸(@@@)에 func_a, func_b, func_c 함수와 매개변수를 알맞게 채워주세요.\n\n[매개변수] scores의 각 원소는 [윗몸일으키기, 팔굽혀펴기, 달리기] 점수(0~100)\n\n💡 힌트: func_c는 통과 종목 수, func_b는 반타작 못 한 종목 수를 세요. func_a가 돌려주는 True/False를 answer에 더하면 True는 1, False는 0으로 계산돼요!",
    "ex": [
      {
        "i": "scores = [[30, 40, 100], [97, 88, 95]]",
        "o": "1",
        "note": "1번째 사람은 합격 점수의 반을 못 넘긴 종목이 있어 불합격, 2번째 사람만 합격"
      },
      {
        "i": "scores = [[90, 88, 70], [85, 90, 90], [100, 100, 70], [30, 90, 80], [40, 10, 20], [83, 88, 80]]",
        "o": "4",
        "note": "1, 2, 3, 6번째 사람이 합격 기준을 만족"
      }
    ],
    "starter": "def func_a(passed, non_passed):\n    return ( passed > 1 and non_passed ==0 )\n\ndef func_b(scores):\n    answer = 0\n    if scores[0] < 40:\n        answer += 1\n    if scores[1] < 44:\n        answer += 1\n    if scores[2] < 35:\n        answer += 1\n    return answer\n\ndef func_c(scores):\n    answer = 0\n    if scores[0] >= 80:\n        answer += 1\n    if scores[1] >= 88:\n        answer += 1\n    if scores[2] >= 70:\n        answer += 1\n    return answer\n\ndef solution(scores):\n    answer = 0\n    for my_score in scores:\n        passed = func_c(my_score)\n        non_passed = func_b(@@@)\n        answer += func_@@@(@@@, @@@)\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\nscores1 = [[30, 40, 100], [97, 88, 95]]\nret1 = solution(scores1)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret1, \"입니다.\")\n\nscores2 = [[90, 88, 70], [85, 90, 90], [100, 100, 70], [30, 90, 80], [40, 10, 20], [83, 88, 80]]\nret2 = solution(scores2)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret2, \"입니다.\")",
    "sol": "def func_a(passed, non_passed):\n    return ( passed > 1 and non_passed == 0 )\n\ndef func_b(scores):\n    answer = 0\n    if scores[0] < 40:\n        answer += 1\n    if scores[1] < 44:\n        answer += 1\n    if scores[2] < 35:\n        answer += 1\n    return answer\n\ndef func_c(scores):\n    answer = 0\n    if scores[0] >= 80:\n        answer += 1\n    if scores[1] >= 88:\n        answer += 1\n    if scores[2] >= 70:\n        answer += 1\n    return answer\n\ndef solution(scores):\n    answer = 0\n    for my_score in scores:\n        passed = func_c(my_score)\n        non_passed = func_b(my_score)\n        answer += func_a(passed, non_passed)\n    return answer",
    "tests": [
      {
        "call": "solution([[30, 40, 100], [97, 88, 95]])",
        "o": "1"
      },
      {
        "call": "solution([[90, 88, 70], [85, 90, 90], [100, 100, 70], [30, 90, 80], [40, 10, 20], [83, 88, 80]])",
        "o": "4"
      },
      {
        "call": "solution([[80, 88, 34]])",
        "o": "0"
      }
    ]
  },
  {
    "set": "H",
    "title": "카드 게임 승자와 점수",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "A와 B가 카드 게임을 합니다.\n· 알파벳 a, b, c, d, e가 적힌 카드뭉치가 있습니다.\n· A와 B가 서로 번갈아 가면서 n장씩 카드를 뽑습니다.\n· 카드 한 장당 a=1점, b=2점, c=3점, d=4점, e=5점으로 점수를 합산합니다.\n· 점수가 높은 사람이 승리합니다.\n\n[프로그램 구조]\n1. A와 B가 번갈아 가며 가져간 카드를 각각 리스트에 넣습니다.\n2. A와 B가 각각 획득한 점수를 구합니다.\n3. 획득한 점수가 큰 사람과 획득한 점수를 순서대로 리스트에 담아 return 합니다.\n\nA가 이기면 1, B가 이기면 2, 무승부면 0을 첫 원소로 return 합니다. 빈칸(@@@)에 func_a, func_b, func_c 함수와 매개변수를 알맞게 채워주세요.\n\n[매개변수] n은 1~25, bundle은 알파벳 소문자, 길이는 2 이상 2*n 이하\n\n💡 힌트: A는 0번부터 짝수 인덱스, B는 1번부터 홀수 인덱스의 카드를 가져가요. func_a(bundle, 시작번호)가 2칸씩 건너뛰며 카드를 골라줍니다. [:n]은 그중 n장만 잘라내는 거예요.",
    "ex": [
      {
        "i": "n = 4, bundle = \"cacdbdedccbb\"",
        "o": "[0, 13]",
        "note": "A는 c,c,b,e를 뽑아 13점, B는 a,d,d,d를 뽑아 13점 → 무승부(0)와 점수 13"
      }
    ],
    "starter": "def func_a(bundle, start):\n    return bundle[start::2]\n\ndef func_b(score1, score2):\n    if score1 > score2:\n        return [1, score1]\n    elif score2 > score1:\n        return [2, score2]\n    else:\n        return [0, score1]\n\ndef func_c(bundle):\n    answer = 0\n    score_per_cards = {\n        'a': 1,\n        'b': 2,\n        'c': 3,\n        'd': 4,\n        'e': 5\n    }\n    for card in bundle:\n        answer += score_per_cards[card]\n    return answer\n        \ndef solution(n, bundle):\n    a_cards = func_a(@@@, @@@)[:n]\n    b_cards = func_a(@@@, @@@)[:n]\n    a_score = func_c(@@@)\n    b_score = func_c(@@@)\n    return func_b(@@@, @@@)\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\nn = 4\nbundle = \"cacdbdedccbb\"\nret = solution(n, bundle)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def func_a(bundle, start):\n    return bundle[start::2]\n\ndef func_b(score1, score2):\n    if score1 > score2:\n        return [1, score1]\n    elif score2 > score1:\n        return [2, score2]\n    else:\n        return [0, score1]\n\ndef func_c(bundle):\n    answer = 0\n    score_per_cards = {\n        'a': 1,\n        'b': 2,\n        'c': 3,\n        'd': 4,\n        'e': 5\n    }\n    for card in bundle:\n        answer += score_per_cards[card]\n    return answer\n\ndef solution(n, bundle):\n    a_cards = func_a(bundle, 0)[:n]\n    b_cards = func_a(bundle, 1)[:n]\n    a_score = func_c(a_cards)\n    b_score = func_c(b_cards)\n    return func_b(a_score, b_score)",
    "tests": [
      {
        "call": "solution(4, \"cacdbdedccbb\")",
        "o": "[0, 13]"
      },
      {
        "call": "solution(1, \"ae\")",
        "o": "[2, 5]"
      },
      {
        "call": "solution(2, \"eaeb\")",
        "o": "[1, 10]"
      }
    ]
  },
  {
    "set": "H",
    "title": "필요한 조교 수 구하기",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "프로그래밍 수업 n개를 동시에 진행할 때 필요한 조교 수를 알아보려고 합니다. 조교 1명이 m명의 학생을 담당합니다.\n\n교실별 학생 수 classes, 조교 1명이 담당하는 학생 수 m이 주어질 때, 수업을 진행하기 위한 조교 수를 return 하도록 빈칸(@@@)을 채워 전체 코드를 완성해 주세요.\n\n[매개변수] classes의 원소는 0~1,000, 길이는 1~1,000, m은 1~1,000\n\n💡 힌트: 학생 80명을 30명씩 맡기면 몫이 조교 수! 그런데 나머지 학생이 남으면 조교 1명이 더 필요하겠죠? 몫(//)과 나머지(%) 연산자를 떠올려 보세요.",
    "ex": [
      {
        "i": "classes = [80, 45, 33, 20], m = 30",
        "o": "8",
        "note": "반마다 필요한 조교는 3명, 2명, 2명, 1명으로 총 8명"
      }
    ],
    "starter": "def solution(classes, m):\n    answer = 0\n    for students in classes:\n        answer += students @@@ m\n        if students @@@ m != 0:\n            answer += 1\n    return answer\n\n# 아래는 테스트케이스 출력을 해보기 위한 코드입니다.\nclasses = [80, 45, 33, 20]\nm = 30\nret = solution(classes, m)\n\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(classes, m):\n    answer = 0\n    for students in classes:\n        answer += students // m\n        if students % m != 0:\n            answer += 1\n    return answer",
    "tests": [
      {
        "call": "solution([80, 45, 33, 20], 30)",
        "o": "8"
      },
      {
        "call": "solution([30, 60], 30)",
        "o": "3"
      },
      {
        "call": "solution([0], 5)",
        "o": "0"
      }
    ]
  },
  {
    "set": "H",
    "title": "운동으로 소모하는 총열량 (한 줄 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "열량이 적힌 식단표가 있습니다. 다이어트를 하는 A씨는 오늘 먹는 열량이 그동안 먹은 식단의 열량 중 최솟값보다 큰 경우 운동을 하여 그 차이만큼을 소모합니다.\n\n예를 들어 식단의 열량이 [713, 665, 873, 500, 751]이라면 둘째 날까지는 운동을 하지 않습니다. 셋째 날은 열량 873이 이전 최솟값 665보다 크므로 208을 소모하고, 다섯째 날은 751이 이전 최솟값 500보다 크므로 251을 소모합니다. 총 459입니다.\n\n식단의 열량 리스트 calorie가 주어질 때, 운동으로 소모하는 총열량을 return 하도록 solution 함수를 작성했지만 코드 일부분이 잘못되었습니다. 한 줄만 변경해서 올바르게 동작하도록 수정하세요.\n\n[매개변수] calorie의 원소는 1~1,000, 길이는 1~100\n\n💡 힌트: 최솟값을 구할 때 초기값이 0이면 어떤 열량도 0보다 작아질 수 없어요. 최솟값의 초기값은 아주 큰 값(예: 1000)이나 첫 번째 데이터로 시작해야 해요.",
    "ex": [
      {
        "i": "calorie = [713, 665, 873, 500, 751]",
        "o": "459",
        "note": "셋째 날 208 + 다섯째 날 251 = 459"
      }
    ],
    "starter": "def solution(calorie):\n    min_cal = 0\n    answer = 0\n    for cal in calorie:\n        if cal > min_cal:\n            answer += cal - min_cal\n        min_cal = min(min_cal, cal)\n    return answer\n\n# 아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니, 위의 코드만 수정하세요.\ncalorie = [713, 665, 873, 500, 751]\nret = solution(calorie)\n\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(calorie):\n    min_cal = calorie[0]\n    answer = 0\n    for cal in calorie:\n        if cal > min_cal:\n            answer += cal - min_cal\n        min_cal = min(min_cal, cal)\n    return answer",
    "tests": [
      {
        "call": "solution([713, 665, 873, 500, 751])",
        "o": "459"
      },
      {
        "call": "solution([500, 600])",
        "o": "100"
      },
      {
        "call": "solution([300, 200, 100])",
        "o": "0"
      }
    ]
  },
  {
    "set": "H",
    "title": "최대 사용 가능 포인트 (한 줄 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "적립된 포인트를 최대한으로 사용하려고 합니다.\n· 포인트는 100 포인트 단위로 사용합니다.\n· 1000 포인트 이상 있을 때만 포인트를 사용할 수 있습니다.\n\n적립 포인트 point가 주어질 때, 최대 몇 포인트를 쓸 수 있는지 return 하도록 solution 함수를 작성했지만 코드 일부분이 잘못되었습니다. 한 줄만 변경해서 올바르게 동작하도록 수정하세요.\n\n[매개변수] point는 0 이상 1,000,000 이하인 정수\n\n💡 힌트: 일단 실행해 보세요. 2323 포인트로 2300이 나와야 하는데 23이 나오죠? 100으로 나눈 몫(23)에 무엇을 해야 백 단위 포인트(2300)가 될까요?",
    "ex": [
      {
        "i": "point = 2323",
        "o": "2300",
        "note": "2323 포인트라면 100 단위로 최대 2300 포인트 사용 가능"
      }
    ],
    "starter": "def solution(point):\n    if point < 1000:\n        return 0\n    return point  // 100\n\n# 아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니, 위의 코드만 수정하세요.\npoint = 2323\nret = solution(point)\n\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(point):\n    if point < 1000:\n        return 0\n    return point // 100 * 100",
    "tests": [
      {
        "call": "solution(2323)",
        "o": "2300"
      },
      {
        "call": "solution(999)",
        "o": "0"
      },
      {
        "call": "solution(1000)",
        "o": "1000"
      },
      {
        "call": "solution(0)",
        "o": "0"
      }
    ]
  },
  {
    "set": "H",
    "title": "점수 차이 최대·최소 (한 줄 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "중간시험 점수와 기말시험 점수로, 점수가 가장 많이 오른 학생의 점수 차이와 가장 많이 떨어진 학생의 점수 차이를 구하려 합니다.\n\n[프로그램 구조]\n1. 각 학생에 대하여 (기말고사 - 중간고사) 값의 최댓값을 구합니다.\n2. 각 학생에 대하여 (기말고사 - 중간고사) 값의 최솟값을 구합니다.\n3. 1번과 2번에서 구한 점수를 [최댓값, 최솟값] 리스트에 담아 return 합니다.\n\n예를 들어 중간이 [20, 50, 40], 기말이 [10, 50, 70]이면 차이는 [-10, 0, 30]이므로 [30, -10]을 return 합니다. 점수가 오른 학생이 없으면 첫 원소에 0, 떨어진 학생이 없으면 두 번째 원소에 0을 넣습니다.\n\n코드 일부분이 잘못되어 있습니다. 한 줄만 변경해서 올바르게 동작하도록 수정하세요.\n\n[매개변수] 점수는 100 이하 자연수, 두 리스트의 길이는 같음\n\n💡 힌트: func_a와 func_b는 둘 다 '기말 - 중간'을 다뤄야 해요. 두 함수의 계산식을 나란히 비교해 보세요. 어느 쪽이 반대로 빼고 있나요?",
    "ex": [
      {
        "i": "mid_scores = [20, 50, 40], final_scores = [10, 50, 70]",
        "o": "[30, -10]",
        "note": "가장 많이 오른 차이 +30, 가장 많이 떨어진 차이 -10"
      }
    ],
    "starter": "def func_a(scores1, scores2):\n    answer = 0\n    for score1, score2 in zip(scores1, scores2):\n        answer = max(answer, score2 - score1)\n    return answer\n\ndef func_b(scores1, scores2):\n    answer = 0\n    for score1, score2 in zip(scores1, scores2):\n        answer = min(answer, score1 - score2)\n    return answer\n            \ndef solution(mid_scores, final_scores):\n    up = func_a(mid_scores, final_scores)\n    down = func_b(mid_scores, final_scores)\n    answer = [up, down]\n    return answer\n\n# 아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니, 위의 코드만 수정하세요.\nmid_scores = [20, 50, 40]\nfinal_scores = [10, 50, 70]\nret = solution(mid_scores, final_scores)\n\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def func_a(scores1, scores2):\n    answer = 0\n    for score1, score2 in zip(scores1, scores2):\n        answer = max(answer, score2 - score1)\n    return answer\n\ndef func_b(scores1, scores2):\n    answer = 0\n    for score1, score2 in zip(scores1, scores2):\n        answer = min(answer, score2 - score1)\n    return answer\n\ndef solution(mid_scores, final_scores):\n    up = func_a(mid_scores, final_scores)\n    down = func_b(mid_scores, final_scores)\n    answer = [up, down]\n    return answer",
    "tests": [
      {
        "call": "solution([20, 50, 40], [10, 50, 70])",
        "o": "[30, -10]"
      },
      {
        "call": "solution([10, 20], [20, 30])",
        "o": "[10, 0]"
      },
      {
        "call": "solution([50, 60], [40, 50])",
        "o": "[0, -10]"
      }
    ]
  },
  {
    "set": "H",
    "title": "과반수 득표 후보 찾기 (한 줄 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "1번부터 n번까지의 후보에 대한 투표 결과가 주어질 때, 과반수를 득표한 후보자의 번호를 구하려고 합니다. 과반수란 절반이 넘는 수를 의미합니다.\n\n예를 들어 후보 3명에 대한 투표 결과가 [1, 2, 1, 3, 1, 2, 1]이라면 총 7표 중 1번 후보가 4표로 과반수를 득표해 당선입니다.\n\n후보의 수 n, 투표 결과 리스트 votes가 주어질 때, 과반수를 득표한 후보자의 번호를 return 하도록(없으면 -1) solution 함수를 작성했지만 코드 일부분이 잘못되었습니다. 한 줄만 변경해서 올바르게 동작하도록 수정하세요.\n\n[매개변수] n은 1~100, votes의 길이는 1~1,000, 원소는 1~n\n\n💡 힌트: '과반수'는 무엇의 절반을 넘어야 할까요? 후보 수의 절반? 아니면 전체 투표 수의 절반? 예시 #2 (n=2, 7표)로 직접 따져보세요.",
    "ex": [
      {
        "i": "n = 3, votes = [1, 2, 1, 3, 1, 2, 1]",
        "o": "1",
        "note": "총 7표 중 1번 후보가 4표(과반) 득표"
      },
      {
        "i": "n = 2, votes = [2, 1, 2, 1, 2, 2, 1]",
        "o": "2",
        "note": "총 7표 중 2번 후보가 4표(과반) 득표"
      }
    ],
    "starter": "def solution(n, votes):\n    arr = [0] * (n + 1)\n    for vote in votes:\n        arr[vote] += 1\n\n    for i in range(1, n+1):\n        if arr[i] > n/2:\n            return i\n    return -1\n\n# 아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니, 위의 코드만 수정하세요.\nn1 = 3\nvotes1 = [1, 2, 1, 3, 1, 2, 1]\nret1 = solution(n1, votes1)\n\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은 \", ret1, \" 입니다.\")\n\nn2 = 2\nvotes2 = [2, 1, 2, 1, 2, 2, 1]\nret2 = solution(n2, votes2)\n\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은 \", ret2, \" 입니다.\")",
    "sol": "def solution(n, votes):\n    arr = [0] * (n + 1)\n    for vote in votes:\n        arr[vote] += 1\n\n    for i in range(1, n+1):\n        if arr[i] > len(votes)/2:\n            return i\n    return -1",
    "tests": [
      {
        "call": "solution(3, [1, 2, 1, 3, 1, 2, 1])",
        "o": "1"
      },
      {
        "call": "solution(2, [2, 1, 2, 1, 2, 2, 1])",
        "o": "2"
      },
      {
        "call": "solution(2, [1, 2])",
        "o": "-1"
      },
      {
        "call": "solution(1, [1])",
        "o": "1"
      }
    ]
  },
  {
    "set": "H",
    "title": "위험 지역 개수 구하기",
    "func": true,
    "label": "직접 작성",
    "desc": "4 x 4 크기 격자 모양 지형에 위험 지역이 몇 개인지 알고 싶습니다. 위험지역이란 동, 서, 남, 북 인접한 지역이 모두 해당 지역보다 높은 지역입니다. (격자 밖은 인접 지역으로 세지 않습니다.)\n\n지역별 높이가 담긴 2차원 리스트 height가 주어질 때, 위험 지역이 몇 개인지 return 하도록 solution 함수를 완성해 주세요.\n\n[매개변수] height는 4x4 2차원 리스트, 각 높이는 1~50인 자연수\n\n💡 힌트: 시작 코드에 상하좌우를 탐색하는 di, dj 좌표 규칙이 준비되어 있어요. 각 칸마다 '위험하다'고 가정(True)하고 출발해서, 인접 칸 중 하나라도 자기보다 낮거나 같으면 False로 바꾸는 방식을 써 보세요. 4방향을 다 확인한 뒤에도 True면 count를 올리면 됩니다. print 디버깅 줄은 완성하면서 지워도 좋아요.",
    "img": "<table style='border-collapse: collapse; width: 300px; height: 300px; text-align: center; font-size: 20px; font-weight: bold; border: 2px solid #333;'><tbody><tr style='height: 75px;'><td style='background-color:#ff4d4d; color:white; border: 1px solid #ccc;'>3</td><td style='border: 1px solid #ccc;'>6</td><td style='background-color:#ff4d4d; color:white; border: 1px solid #ccc;'>2</td><td style='border: 1px solid #ccc;'>8</td></tr><tr style='height: 75px;'><td style='border: 1px solid #ccc;'>7</td><td style='background-color:#ff4d4d; color:white; border: 1px solid #ccc;'>3</td><td style='border: 1px solid #ccc;'>4</td><td style='background-color:#ff4d4d; color:white; border: 1px solid #ccc;'>2</td></tr><tr style='height: 75px;'><td style='border: 1px solid #ccc;'>8</td><td style='border: 1px solid #ccc;'>6</td><td style='border: 1px solid #ccc;'>7</td><td style='border: 1px solid #ccc;'>3</td></tr><tr style='height: 75px;'><td style='border: 1px solid #ccc;'>5</td><td style='border: 1px solid #ccc;'>3</td><td style='background-color:#ff4d4d; color:white; border: 1px solid #ccc;'>2</td><td style='border: 1px solid #ccc;'>9</td></tr></tbody></table>",
    "ex": [
      {
        "i": "height = [[3, 6, 2, 8], [7, 3, 4, 2], [8, 6, 7, 3], [5, 3, 2, 9]]",
        "o": "5",
        "note": "(0,0)의 3, (0,2)의 2, (1,1)의 3, (1,3)의 2, (3,2)의 2 총 5곳이 위험지역"
      }
    ],
    "starter": "#다음과 같이 import를 사용할 수 있습니다.\n#import math\n\ndef solution(height):\n    #여기에 코드를 작성해주세요.\n    count = 0\n    di=[-1,1, 0,0]\n    dj=[0, 0, -1, 1]\n    for i in range(4):\n        for j in range(4):\n            print(\"기준점:\", i, j,height[i][j] )\n            for k in range(4):\n                if 0<=i+di[k]<4 and 0<=j+dj[k]<4:\n                    danger=False\n                    #print(i+di[k], j+dj[k],height[i+di[k]][j+dj[k]] )\n    return count\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\nheight = [[3, 6, 2, 8], [7, 3, 4, 2], [8, 6, 7, 3], [5, 3, 2, 9]]\nret = solution(height)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(height):\n    count = 0\n    di = [-1, 1, 0, 0]\n    dj = [0, 0, -1, 1]\n    for i in range(4):\n        for j in range(4):\n            is_danger = True\n            for k in range(4):\n                if 0 <= i+di[k] < 4 and 0 <= j+dj[k] < 4:\n                    if height[i+di[k]][j+dj[k]] <= height[i][j]:\n                        is_danger = False\n            if is_danger == True:\n                count += 1\n    return count",
    "tests": [
      {
        "call": "solution([[3, 6, 2, 8], [7, 3, 4, 2], [8, 6, 7, 3], [5, 3, 2, 9]])",
        "o": "5"
      },
      {
        "call": "solution([[5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 5]])",
        "o": "0"
      },
      {
        "call": "solution([[1, 9, 9, 9], [9, 9, 9, 9], [9, 9, 9, 9], [9, 9, 9, 1]])",
        "o": "2"
      }
    ]
  },
  {
    "set": "H",
    "title": "합격자 수 구하기",
    "func": true,
    "label": "직접 작성",
    "desc": "XX 시험을 친 수험생들의 점수가 주어질 때, 합격자 수를 구하려 합니다. 시험에 합격하기 위해서는 커트라인 이상의 점수를 받아야 합니다.\n\n예를 들어 수험생들의 점수가 [80, 90, 55, 60, 59]이고 커트라인이 60점이라면 3명이 합격했습니다.\n\n수험생들의 시험 점수 리스트 scores, 커트라인 점수 cutline이 주어질 때, 합격자 수를 return 하도록 solution 함수를 완성해 주세요.\n\n[매개변수] scores의 원소는 0~100, 길이는 1~100, cutline은 0~100\n\n💡 힌트: 점수를 하나씩 꺼내 커트라인과 비교하면 돼요. '이상'이니까 커트라인과 같은 점수도 합격!",
    "ex": [
      {
        "i": "scores = [80, 90, 55, 60, 59], cutline = 60",
        "o": "3",
        "note": "80, 90, 60점은 합격, 55, 59점은 불합격"
      }
    ],
    "starter": "# 다음과 같이 import를 사용할 수 있습니다.\n# import math\n\ndef solution(scores, cutline):\n    # 여기에 코드를 작성해주세요.\n    answer = 0\n    return answer\n\n# 아래는 테스트케이스 출력을 해보기 위한 코드입니다.\nscores = [80, 90, 55, 60, 59]\ncutline = 60\nret = solution(scores, cutline)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(scores, cutline):\n    answer = 0\n    for s in scores:\n        if s >= cutline:\n            answer += 1\n    return answer",
    "tests": [
      {
        "call": "solution([80, 90, 55, 60, 59], 60)",
        "o": "3"
      },
      {
        "call": "solution([100], 100)",
        "o": "1"
      },
      {
        "call": "solution([0, 0], 1)",
        "o": "0"
      }
    ]
  },
  {
    "set": "I",
    "title": "사다리 게임 당첨자 찾기",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "6명이 사다리 게임을 할 때, 몇 번째 위치에서 시작하는 사람이 상품을 타는지 구합니다. 가로줄은 항상 인접한 세로줄만 연결하며, 주어진 순서대로 위에서부터 연결합니다.\n\n가로줄의 위치가 담긴 2차원 리스트 ladders와 상품의 위치 win이 매개변수로 주어질 때, 당첨자의 시작 위치를 return하도록 solution 함수를 작성하려 합니다. @@@ 빈칸을 채워 코드를 완성하세요.\n\n[매개변수] 가로줄 개수는 1~20, win은 1~6",
    "img": "<div style='text-align:center;margin:20px 0;'><svg width='300' height='230' xmlns='http://www.w3.org/2000/svg' style='display:inline-block;'><text x='10' y='16' text-anchor='middle' fill='#ccc' font-size='13' font-weight='bold'>1</text><text x='62' y='16' text-anchor='middle' fill='#ccc' font-size='13' font-weight='bold'>2</text><text x='114' y='16' text-anchor='middle' fill='#ccc' font-size='13' font-weight='bold'>3</text><text x='166' y='16' text-anchor='middle' fill='#ccc' font-size='13' font-weight='bold'>4</text><text x='218' y='16' text-anchor='middle' fill='#ccc' font-size='13' font-weight='bold'>5</text><text x='270' y='16' text-anchor='middle' fill='#ccc' font-size='13' font-weight='bold'>6</text><line x1='10' y1='20' x2='10' y2='200' stroke='#ccc' stroke-width='2.5'/><line x1='62' y1='20' x2='62' y2='200' stroke='#ccc' stroke-width='2.5'/><line x1='114' y1='20' x2='114' y2='200' stroke='#ccc' stroke-width='2.5'/><line x1='166' y1='20' x2='166' y2='200' stroke='#ccc' stroke-width='2.5'/><line x1='218' y1='20' x2='218' y2='200' stroke='#ccc' stroke-width='2.5'/><line x1='270' y1='20' x2='270' y2='200' stroke='#ccc' stroke-width='2.5'/><line x1='10' y1='55' x2='62' y2='55' stroke='#ccc' stroke-width='2.5'/><line x1='114' y1='85' x2='166' y2='85' stroke='#ccc' stroke-width='2.5'/><line x1='62' y1='115' x2='114' y2='115' stroke='#ccc' stroke-width='2.5'/><line x1='166' y1='140' x2='218' y2='140' stroke='#ccc' stroke-width='2.5'/><line x1='218' y1='165' x2='270' y2='165' stroke='#ccc' stroke-width='2.5'/><text x='114' y='220' text-anchor='middle' fill='#f1c40f' font-size='14' font-weight='bold'>Win</text></svg></div>",
    "hint": [
      "https://raw.githubusercontent.com/kssim00/python-test/main/hints/I-1-1.png"
    ],
    "ex": [
      {
        "i": "ladders = [[1, 2], [3, 4], [2, 3], [4, 5], [5, 6]], win = 3",
        "o": "1"
      }
    ],
    "starter": "def solution(ladders, win):\n    answer = 0\n    player = [1, 2, 3, 4, 5, 6]\n    for e in ladders:\n        temp = player[e[0]-1]\n        @@@ = @@@\n        @@@ = temp\n    answer = player[win-1]\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\nladders = [[1, 2], [3, 4], [2, 3], [4, 5], [5, 6]]\nwin = 3\nret = solution(ladders, win)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(ladders, win):\n    answer = 0\n    \n    player = [1, 2, 3, 4, 5, 6]\n    \n    for e in ladders:\n        temp = player[e[0]-1]\n        player[e[0]-1] = player[e[1]-1]\n        player[e[1]-1] = temp\n        \n    answer = player[win-1]\n    return answer",
    "tests": [
      {
        "call": "solution([[1, 2], [3, 4], [2, 3], [4, 5], [5, 6]], 3)",
        "o": "1"
      }
    ]
  },
  {
    "set": "I",
    "title": "공강 시간 구하기",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "공강이란 수업 시간 사이에 수업이 없이 비는 시간입니다. 시간표가 주어질 때 공강은 총 몇 시간인지 구합니다. 수업이 있는 시간은 1, 없는 시간은 0으로 표시하며 모든 수업은 정각에 시작해 1시간 뒤 끝납니다.\n\n1단계. func_c로 가장 첫 수업 시작 시각을 구합니다.\n2단계. func_a로 가장 마지막 수업 시작 시각을 구합니다.\n3단계. func_b로 1과 2 사이에서 수업이 없는 시간을 셉니다.\n\n@@@ 빈칸을 채워 코드를 완성하세요.\n\n[매개변수] time_table 길이는 5~15, 원소는 0 또는 1",
    "img": "<table style='width:auto; margin:0 auto; border-spacing:2px; border-collapse:separate;'><tr><td style='width:30px;height:30px;background:#fff;color:#000;border:1px solid #444;text-align:center;'>1</td><td style='width:30px;height:30px;background:#fff;color:#000;border:1px solid #444;text-align:center;'>1</td><td style='width:30px;height:30px;background:#ff4d4d;color:#fff;border:1px solid #444;text-align:center;'>0</td><td style='width:30px;height:30px;background:#ff4d4d;color:#fff;border:1px solid #444;text-align:center;'>0</td><td style='width:30px;height:30px;background:#fff;color:#000;border:1px solid #444;text-align:center;'>1</td><td style='width:30px;height:30px;background:#ff4d4d;color:#fff;border:1px solid #444;text-align:center;'>0</td><td style='width:30px;height:30px;background:#fff;color:#000;border:1px solid #444;text-align:center;'>1</td><td style='width:30px;height:30px;background:#fff;color:#000;border:1px solid #444;text-align:center;'>0</td><td style='width:30px;height:30px;background:#fff;color:#000;border:1px solid #444;text-align:center;'>0</td><td style='width:30px;height:30px;background:#fff;color:#000;border:1px solid #444;text-align:center;'>0</td></tr></table><div style='text-align:center; font-size:12px; margin-top:5px;'><span style='color:#ff4d4d;'>■</span> : 공강</div>",
    "ex": [
      {
        "i": "time_table = [1, 1, 0, 0, 1, 0, 1, 0, 0, 0]",
        "o": "3"
      }
    ],
    "starter": "def func_a(time_table):\n    answer = 0\n    for i, t in reversed(list(enumerate(time_table))):\n        if t == 1:\n            answer = i\n            break\n    return answer\n\ndef func_b(time_table, class1, class2):\n    answer = 0\n    for i in range(class1, class2):\n        if time_table[i] == 0:\n            answer += 1\n    return answer\n\ndef func_c(time_table):\n    answer = 0\n    for i, t in enumerate(time_table):\n        if t == 1:\n            answer = i\n            break\n    return answer\n\ndef solution(time_table):\n    answer = 0\n    first_class = func_@@@(@@@)\n    last_class = func_@@@(@@@)\n    answer = func_@@@(@@@)\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\ntime_table = [1, 1, 0, 0, 1, 0, 1, 0, 0, 0]\nret = solution(time_table)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def func_a(time_table):\n    answer = 0\n    for i, t in reversed(list(enumerate(time_table))):\n        if t == 1:\n            answer = i\n            break\n    return answer\n\ndef func_b(time_table, class1, class2):\n    answer = 0\n    for i in range(class1, class2):\n        if time_table[i] == 0:\n            answer += 1\n    return answer\n\ndef func_c(time_table):\n    answer = 0\n    for i, t in enumerate(time_table):\n        if t == 1:\n            answer = i\n            break\n    return answer\n\ndef solution(time_table):\n    answer = 0\n    first_class = func_c(time_table)\n    last_class = func_a(time_table)\n    answer = func_b(time_table, first_class, last_class)\n    return answer",
    "tests": [
      {
        "call": "solution([1, 1, 0, 0, 1, 0, 1, 0, 0, 0])",
        "o": "3"
      }
    ]
  },
  {
    "set": "I",
    "title": "속도위반 벌금 계산",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "모든 속도위반 차량이 낼 벌금이 총 몇 만원인지 구합니다.\n\n기준: 규정 속도 10%~20% 미만 위반 3만원 / 20%~30% 미만 위반 5만원 / 30% 이상 위반 7만원\n\n규정 속도 speed와 도로를 달리는 모든 차의 속도가 담긴 리스트 cars가 매개변수로 주어질 때, 총벌금을 return하도록 solution 함수를 작성하려 합니다. @@@ 빈칸을 채워 코드를 완성하세요.\n\n[매개변수] speed는 30~140(10의 배수), cars 길이는 1~40, 속도는 0~200",
    "ex": [
      {
        "i": "speed = 100, cars = [110, 98, 125, 148, 120, 112, 89]",
        "o": "23",
        "note": "10~20%위반 2대(6만원)+20~30%위반 2대(10만원)+30%이상위반 1대(7만원)=23만원"
      }
    ],
    "starter": "def solution(speed, cars):\n    answer = 0\n    for x in cars:\n        if x >= speed * 11 / 10 and x < speed * 12 / 10:\n            answer += 3\n        elif x >= @@@ and x < @@@:\n            answer += 5\n        elif x >= @@@:\n            answer += 7\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\nspeed = 100\ncars = [110, 98, 125, 148, 120, 112, 89]\nret = solution(speed, cars)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(speed, cars):\n    answer = 0\n    for x in cars:\n        if x >= speed * 11 / 10 and x < speed * 12 / 10:\n            answer += 3;\n        elif x >= speed * 12 / 10 and x < speed * 13 / 10:\n            answer += 5;\n        elif x >= speed * 13 / 10:\n            answer += 7;\n    return answer",
    "tests": [
      {
        "call": "solution(100, [110, 98, 125, 148, 120, 112, 89])",
        "o": "23"
      }
    ]
  },
  {
    "set": "I",
    "title": "3종목 경기 총점 계산",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "태권도·달리기·사격 3종목 경기의 총점수를 구합니다.\n\n태권도: 25회 이상 승리 시 250점, 그 외에는 승리당 8점\n달리기: 60초 완주 시 250점, 1초 빠를 때마다 +5점, 느릴 때마다 -5점\n사격: 10번 사격해 과녁 숫자 합만큼 획득, 10점을 7번 이상 맞히면 추가 100점\n\n태권도 승수 taekwondo, 달리기 기록 running, 사격 기록 리스트 shooting이 매개변수로 주어질 때, 총점수를 return하도록 solution 함수를 작성하려 합니다. @@@ 빈칸을 채워 코드를 완성하세요.\n\n[매개변수] taekwondo 0~35, running 40~120, shooting은 10개의 0~10 숫자",
    "ex": [
      {
        "i": "taekwondo = 27, running = 63, shooting = [9, 10, 8, 10, 10, 10, 7, 10, 10, 10]",
        "o": "679"
      }
    ],
    "starter": "def solution(taekwondo, running, shooting):\n    answer = 0\n    if taekwondo >= 25:\n    \tanswer += @@@\n    else:\n    \tanswer += taekwondo * 8\n    answer += 250 + (60 - running) * 5\n    count = 0\n    for s in shooting:\n    \tanswer += s\n    \tif s == 10:\n    \t\tcount += 1\n    if count >= 7:\n    \tanswer += @@@\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\ntaekwondo = 27\nrunning = 63\nshooting = [9, 10, 8, 10, 10, 10, 7, 10, 10, 10]\nret = solution(taekwondo, running, shooting)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(taekwondo, running, shooting):\n    answer = 0\n    if taekwondo >= 25:\n    \tanswer += 250\n    else:\n    \tanswer += taekwondo * 8\n    answer += 250 + (60 - running) * 5\n    count = 0\n    for s in shooting:\n    \tanswer += s\n    \tif s == 10:\n    \t\tcount += 1\n    if count >= 7:\n    \tanswer += 100\n    return answer",
    "tests": [
      {
        "call": "solution(27, 63, [9, 10, 8, 10, 10, 10, 7, 10, 10, 10])",
        "o": "679"
      }
    ]
  },
  {
    "set": "I",
    "title": "O일장 주기 구하기 (한 줄 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "O일장은 O일마다 열리는 시장입니다. a일장과 b일장이 같이 열리는 날은 며칠에 한 번씩 있는지 구하는 solution 함수를 작성했지만 일부 입력에서 잘못 동작합니다.\n\n주어진 코드에서 딱 한 줄만 변경해서 모든 입력에 대해 올바르게 동작하도록 수정하세요.\n\n[매개변수] a, b는 1~30인 자연수\n\n💡 힌트: a와 b가 함께 열리는 주기는 두 수의 최소공배수예요. i를 1씩 늘려가며 a*i가 b로 나누어떨어지는 첫 순간을 찾고 있어요. 그 순간에 무엇을 return해야 할까요?",
    "img": "<div style='overflow-x:auto;'><table style='border-collapse:collapse; background:#1e1e1e; margin:10px 0; border:1px solid #444; width:auto;'><tr><th style='background:#444; color:#fff; border:1px solid #444; padding:2px; width:50px; height:15px; font-size:11px; font-weight:bold;'>4일장</th><td style='border:1px solid #444; background:#2d5a27; width:20px; height:15px;'></td><td style='border:1px solid #444; background:#2d5a27; width:20px;'></td><td style='border:1px solid #444; background:#2d5a27; width:20px;'></td><td style='border:1px solid #444; background:#ff4d4d; width:20px;'></td><td style='border:1px solid #444; background:#2d5a27; width:20px;'></td><td style='border:1px solid #444; background:#2d5a27; width:20px;'></td><td style='border:1px solid #444; background:#2d5a27; width:20px;'></td><td style='border:1px solid #444; background:#ff4d4d; width:20px;'></td><td style='border:1px solid #444; background:#2d5a27; width:20px;'></td><td style='border:1px solid #444; background:#2d5a27; width:20px;'></td><td style='border:1px solid #444; background:#2d5a27; width:20px;'></td><td style='border:1px solid #444; background:#ff4d4d; width:20px;'></td></tr><tr><th style='background:#444; color:#fff; border:1px solid #444; padding:2px; height:15px; font-size:11px; font-weight:bold;'>6일장</th><td style='border:1px solid #444; background:#2d5a27; width:20px; height:15px;'></td><td style='border:1px solid #444; background:#2d5a27; width:20px;'></td><td style='border:1px solid #444; background:#2d5a27; width:20px;'></td><td style='border:1px solid #444; background:#2d5a27; width:20px;'></td><td style='border:1px solid #444; background:#2d5a27; width:20px;'></td><td style='border:1px solid #444; background:#ff4d4d; width:20px;'></td><td style='border:1px solid #444; background:#2d5a27; width:20px;'></td><td style='border:1px solid #444; background:#2d5a27; width:20px;'></td><td style='border:1px solid #444; background:#2d5a27; width:20px;'></td><td style='border:1px solid #444; background:#2d5a27; width:20px;'></td><td style='border:1px solid #444; background:#2d5a27; width:20px;'></td><td style='border:1px solid #444; background:#ff4d4d; width:20px;'></td></tr></table></div><div style='margin-bottom:15px; font-size:12px;'><span style='width:15px; height:15px; display:inline-block; border:1px solid #444; background:#2d5a27; vertical-align:middle;'></span> : 휴일 &nbsp;&nbsp; <span style='width:15px; height:15px; display:inline-block; border:1px solid #444; background:#ff4d4d; vertical-align:middle;'></span> : 열리는 날</div>",
    "ex": [
      {
        "i": "a = 4, b = 6",
        "o": "12"
      }
    ],
    "starter": "def solution(a, b):\n    answer = 0\n    for i in range(1, b + 1):\n        if (a * i) % b == 0:\n            answer = b * i\n            break\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니, 위의 코드만 수정하세요.\na = 4\nb = 6\nret = solution(a, b)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(a, b):\n    answer = 0\n    for i in range(1, b + 1):\n        if (a * i) % b == 0:\n            answer = a * i\n            break\n    return answer",
    "tests": [
      {
        "call": "solution(4, 6)",
        "o": "12"
      },
      {
        "call": "solution(3, 5)",
        "o": "15"
      }
    ]
  },
  {
    "set": "I",
    "title": "수학 점수 최솟값 구하기 (한 줄 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "국어 점수와 영어 점수가 주어질 때, 국어·영어·수학 평균이 70점 이상이려면 수학 점수가 최소 몇 점이어야 하는지 구하는 solution 함수를 작성했지만 일부 입력에서 잘못 동작합니다.\n\n딱 한 줄만 변경해서 모든 입력에 대해 올바르게 동작하도록 수정하세요. (100점을 받아도 평균 70점이 안 되면 -1을 return)\n\n[매개변수] korean, english는 0~100인 정수\n\n💡 힌트: 평균 70점 이상 ↔ (국어+영어+수학)÷3 ≥ 70 ↔ 수학 ≥ 210-(국어+영어). 괄호 위치를 다시 확인해 보세요.",
    "ex": [
      {
        "i": "korean = 70, english = 60",
        "o": "80"
      }
    ],
    "starter": "def solution(korean, english):\n    answer = 0\n    math = 210 - korean + english\n    if math > 100:\n        answer = -1\n    else:\n        answer = math\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니 위의 코드만 수정하세요.\nkorean = 70\nenglish = 60\nret = solution(korean, english)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(korean, english):\n    answer = 0\n    math = 210 - (korean + english)\n    if math > 100:\n        answer = -1\n    else:\n        answer = math\n    return answer",
    "tests": [
      {
        "call": "solution(70, 60)",
        "o": "80"
      },
      {
        "call": "solution(50, 50)",
        "o": "-1"
      }
    ]
  },
  {
    "set": "I",
    "title": "계산대 소요 시간 구하기 (한 줄 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "물건이 3개 이하면 소량 계산대에서, 그렇지 않으면 일반 계산대에서 계산합니다. 두 계산대 모두 물건 하나에 1분이 걸릴 때, 모든 물건을 계산하는 데 필요한 시간(두 계산대 중 더 오래 걸리는 쪽)을 구하는 solution 함수를 작성했지만 일부 입력에서 잘못 동작합니다.\n\n딱 한 줄만 변경해서 모든 입력에 대해 올바르게 동작하도록 수정하세요.\n\n[매개변수] 손님 1~100명, 손님당 물건 1~20개\n\n💡 힌트: 계산에 걸리는 전체 시간은 두 계산대 중 더 '오래' 걸리는 쪽이에요. 부등호 방향을 다시 확인해 보세요.",
    "ex": [
      {
        "i": "stuffs = [5, 3, 4, 2, 3, 2]",
        "o": "10",
        "note": "일반 계산대 9분(5+4), 소량 계산대 10분(3+2+3+2) 중 더 오래 걸리는 10분"
      }
    ],
    "starter": "def solution(stuffs):\n    answer = 0\n    small_counter, general_counter = 0, 0\n    for s in stuffs:\n        if s > 3:\n            general_counter += s\n        else:\n            small_counter += s\n    if small_counter < general_counter:\n        answer = small_counter\n    else:\n        answer = general_counter\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니 위의 코드만 수정하세요.\nstuffs = [5, 3, 4, 2, 3, 2]\nret = solution(stuffs)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은 \", ret, \" 입니다.\")",
    "sol": "def solution(stuffs):\n    answer = 0\n    small_counter, general_counter = 0, 0\n    for s in stuffs:\n        if s > 3:\n            general_counter += s\n        else:\n            small_counter += s\n    if small_counter > general_counter:\n        answer = small_counter\n    else:\n        answer = general_counter\n    return answer",
    "tests": [
      {
        "call": "solution([5, 3, 4, 2, 3, 2])",
        "o": "10"
      }
    ]
  },
  {
    "set": "I",
    "title": "상수도 사용요금 계산 (한 줄 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "상수도 사용요금을 계산합니다. 1단계 0~20톤 430원, 2단계 21~30톤 570원, 3단계 31톤 이상 840원이 단계별로 적용됩니다. 상수도 사용량 usage가 매개변수로 주어질 때, 사용요금을 return하도록 solution 함수를 작성했지만 일부 입력에서 잘못 동작합니다.\n\n딱 한 줄만 변경해서 모든 입력에 대해 올바르게 동작하도록 수정하세요.\n\n[매개변수] usage는 0~100톤인 정수\n\n💡 힌트: 3단계 요금은 '31톤 이상'을 넘는 양에만 적용돼요. 20톤과 30톤을 초과한 양을 각각 빼는 기준을 다시 확인해 보세요.",
    "ex": [
      {
        "i": "usage = 35",
        "o": "18500",
        "note": "20톤×430원 + 10톤×570원 + 5톤×840원 = 18,500원"
      }
    ],
    "starter": "def solution(usage):\n    answer = 0\n    if usage > 30:\n        answer = 20 * 430 + 10 * 570 + (usage - 20) * 840\n    elif usage > 20:\n        answer = 20 * 430 + (usage - 20) * 570\n    else:\n        answer = usage * 430\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니 위의 코드만 수정하세요.\nusage = 35\nret = solution(usage)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(usage):\n    answer = 0\n    if usage > 30:\n        answer = 20 * 430 + 10 * 570 + (usage - 30) * 840\n    elif usage > 20:\n        answer = 20 * 430 + (usage - 20) * 570\n    else:\n        answer = usage * 430\n    return answer",
    "tests": [
      {
        "call": "solution(35)",
        "o": "18500"
      },
      {
        "call": "solution(20)",
        "o": "8600"
      }
    ]
  },
  {
    "set": "I",
    "title": "동점자 순위 매기기",
    "func": true,
    "label": "직접 작성",
    "desc": "시험 점수에 따라 학생의 순위를 매기려 합니다. 동점자 순위는 가능한 순위 중 가장 높은 순위로 매깁니다.\n\n예를 들어 점수가 [90, 87, 87, 23, 35, 28, 12, 46]이면 순위는 [1, 2, 2, 7, 5, 6, 8, 4]입니다.\n\n모든 학생의 점수를 담은 리스트 score가 매개변수로 주어질 때, 순위를 담은 리스트를 return하도록 solution 함수를 작성해 주세요.\n\n[매개변수] 학생 수 1~1,000명, 점수는 1~100인 정수",
    "ex": [
      {
        "i": "score = [90, 87, 87, 23, 35, 28, 12, 46]",
        "o": "[1, 2, 2, 7, 5, 6, 8, 4]"
      },
      {
        "i": "score = [10, 20, 20, 30]",
        "o": "[4, 2, 2, 1]"
      }
    ],
    "starter": "#다음과 같이 import를 사용할 수 있습니다.\n#import math\n\ndef solution(score):\n\t# 여기에 코드를 작성해주세요.\n    answer = []\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\nscore1 = [90, 87, 87, 23, 35, 28, 12, 46]\nret1 = solution(score1)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은 \", ret1, \" 입니다.\")\n\nscore2 = [10, 20, 20, 30]\nret2 = solution(score2)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은 \", ret2, \" 입니다.\")",
    "sol": "def solution(score):\n    answer = [0] * len(score)\n    for i in range(len(score)):\n        answer[i] = sum(map(lambda x:x > score[i], score))+1\n    return answer",
    "tests": [
      {
        "call": "solution([90, 87, 87, 23, 35, 28, 12, 46])",
        "o": "[1, 2, 2, 7, 5, 6, 8, 4]"
      },
      {
        "call": "solution([10, 20, 20, 30])",
        "o": "[4, 2, 2, 1]"
      }
    ]
  },
  {
    "set": "I",
    "title": "교대근무 최장 시간 구하기",
    "func": true,
    "label": "직접 작성",
    "desc": "n명이 시간표에 따라 교대 근무를 합니다. 근무 순번은 첫 번째 사람부터 n번째 사람까지이며, n번째 사람 다음엔 다시 첫 번째 사람부터 반복합니다. 가장 오래 일한 사람이 몇 시간 일했는지 구합니다.\n\n예를 들어 시간표가 [1, 5, 1, 9]이고 n이 3이면 첫 번째 사람은 1+9시간, 두 번째 사람은 5시간, 세 번째 사람은 1시간 근무해 첫 번째 사람이 10시간으로 가장 오래 일했습니다.\n\n근무 시간표 time_table과 사람 수 n이 매개변수로 주어질 때, 가장 오래 일한 사람의 근무 시간을 return하도록 solution 함수를 작성해 주세요.\n\n[매개변수] time_table 길이 1~100(원소 1~100), n은 1~time_table 길이",
    "ex": [
      {
        "i": "time_table = [1, 5, 1, 9], n = 3",
        "o": "10"
      },
      {
        "i": "time_table = [4, 8, 2, 5, 4, 6, 7], n = 4",
        "o": "14"
      }
    ],
    "starter": "#다음과 같이 import를 사용할 수 있습니다.\n#import math\n\ndef solution(time_table, n):\n    #여기에 코드를 작성해주세요.\n    answer = 0\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\ntime_table1 = [1, 5, 1, 9]\nn1 = 3\nret1 = solution(time_table1, n1)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret1, \"입니다.\")\n\ntime_table2 = [4, 8, 2, 5, 4, 6, 7]\nn2 = 4\nret2 = solution(time_table2, n2)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret2, \"입니다.\")",
    "sol": "def solution(time_table, n):\n    answer = 0\n    lst = [0 for _ in range(n)]\n    for i, t in enumerate(time_table):\n    \tlst[i % n] += t\n    answer = max(lst)\n    return answer",
    "tests": [
      {
        "call": "solution([1, 5, 1, 9], 3)",
        "o": "10"
      },
      {
        "call": "solution([4, 8, 2, 5, 4, 6, 7], 4)",
        "o": "14"
      }
    ]
  },
  {
    "set": "J",
    "title": "두 날짜 사이 고온일수 세기 (한 줄 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "n일 동안 매일의 평균 기온이 순서대로 담긴 리스트가 있습니다. A번째 일과 B번째 일 '사이'에서 두 날짜보다 기온이 높았던 날이 며칠인지 구하는 solution 함수를 작성했지만 일부 입력에서 잘못 동작합니다.\n\n딱 한 줄만 변경해서 모든 입력에 대해 올바르게 동작하도록 수정하세요.\n\n[매개변수] temperature 길이 3~30(원소 -30~50), 날짜는 0번째부터 시작, A<B\n\n💡 힌트: 'A번째 일과 B번째 일 사이'라면, 비교해야 할 날짜 범위는 전체(0~길이)가 아니라 어디부터 어디까지일까요?",
    "ex": [
      {
        "i": "temperature = [3, 2, 1, 5, 4, 3, 3, 2], A = 1, B = 6",
        "o": "2",
        "note": "1번째 날 기온 2, 6번째 날 기온 3. 그 사이(2~5번째)에서 둘 다보다 높은 날은 3번째(5), 4번째(4) → 2일"
      }
    ],
    "starter": "def solution(temperature, A, B):\n    answer = 0\n    for i in range(0, len(temperature)):\n        if temperature[i] > temperature[A] and temperature[i] > temperature[B]:\n            answer += 1\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니 위의 코드만 수정하세요.\ntemperature = [3, 2, 1, 5, 4, 3, 3, 2]\nA = 1\nB = 6\nret = solution(temperature, A, B)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(temperature, A, B):\n    answer = 0\n    for i in range(A+1, B):\n        if temperature[i] > temperature[A] and temperature[i] > temperature[B]:\n            answer += 1\n    return answer",
    "tests": [
      {
        "call": "solution([3, 2, 1, 5, 4, 3, 3, 2], 1, 6)",
        "o": "2"
      }
    ]
  },
  {
    "set": "J",
    "title": "필요한 만큼 종이 받은 사람 수 (한 줄 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "한 줄로 선 사람들에게 종이 K장을 맨 앞사람부터 차례로 나눠줍니다. 각자 필요한 만큼 챙기고 남은 종이를 뒷사람에게 전달하며, 전달할 종이가 없으면 멈춥니다. 필요한 만큼 종이를 받은 사람이 몇 명인지 구하는 solution 함수를 작성했지만 일부 입력에서 잘못 동작합니다.\n\n딱 한 줄만 변경해서 모든 입력에 대해 올바르게 동작하도록 수정하세요.\n\n[매개변수] papers 길이 1~20(원소 1~20), K는 1~400\n\n💡 힌트: 종이가 모자란 사람을 발견한 순간, 그 사람 앞까지만 인원수로 세어야 해요. 계속 반복하면서 값을 덮어쓰면 안 되겠죠?",
    "ex": [
      {
        "i": "papers = [2, 4, 3, 2, 1], K = 10",
        "o": "3",
        "note": "앞 3명은 2+4+3=9장으로 충족, 4번째는 2장 필요한데 1장만 남아 실패 → 3명"
      },
      {
        "i": "papers = [2, 4, 3, 2, 1], K = 14",
        "o": "5",
        "note": "모든 사람이 필요한 만큼 받음 → 5명"
      }
    ],
    "starter": "def solution(papers, K):\n    length = len(papers)\n    for i, paper in enumerate(papers):\n        K -= paper\n        if K < 0:\n            length = i\n    return length\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니 위의 코드만 수정하세요.\npapers1 = [2, 4, 2, 3, 1]\nK1 = 10\nret1 = solution(papers1, K1)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret1, \"입니다.\")\n\npapers2 = [2, 4, 2, 3, 1]\nK2 = 14\nret2 = solution(papers2, K2)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret2, \"입니다.\")",
    "sol": "def solution(papers, K):\n    length = len(papers)\n    for i, paper in enumerate(papers):\n        K -= paper\n        if K < 0:\n            return i\n    return length",
    "tests": [
      {
        "call": "solution([2, 4, 3, 2, 1], 10)",
        "o": "3"
      },
      {
        "call": "solution([2, 4, 3, 2, 1], 14)",
        "o": "5"
      }
    ]
  },
  {
    "set": "J",
    "title": "유니폼 사이즈별 개수",
    "func": true,
    "label": "직접 작성",
    "desc": "단체 유니폼을 주문하려 합니다. 사람의 덩치가 95 미만이면 S, 95~100 미만 M, 100~105 미만 L, 105 이상이면 XL 사이즈입니다.\n\n사람들의 덩치를 담은 리스트 people이 매개변수로 주어질 때, 주문해야 하는 사이즈별 수량을 [S, M, L, XL] 순서의 리스트로 return하도록 solution 함수를 작성해 주세요.\n\n[매개변수] people 길이 1~100, 덩치는 80~120인 자연수",
    "ex": [
      {
        "i": "people = [97, 102, 93, 100, 107]",
        "o": "[1, 1, 2, 1]",
        "note": "93→S, 97→M, 102·100→L, 107→XL"
      }
    ],
    "starter": "#다음과 같이 import를 사용할 수 있습니다.\n#import math\n\ndef solution(people):\n    #여기에 코드를 작성해주세요.\n    answer = [0 for _ in range(4)]\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\npeople = [97, 102, 93, 100, 107]\nret = solution(people)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은 \", ret, \" 입니다.\")",
    "sol": "def solution(people):\n    answer = [0 for _ in range(4)]\n    for p in people:\n        if p < 95:\n            answer[0] += 1\n        elif p >= 95 and p < 100:\n            answer[1] += 1\n        elif p >= 100 and p < 105:\n            answer[2] += 1\n        elif p >= 105:\n            answer[3] += 1\n    return answer",
    "tests": [
      {
        "call": "solution([97, 102, 93, 100, 107])",
        "o": "[1, 1, 2, 1]"
      }
    ]
  },
  {
    "set": "J",
    "title": "카드 뽑기 점수 계산",
    "func": true,
    "label": "직접 작성",
    "desc": "카드 3장을 뽑아 점수를 냅니다. 카드는 [색, 숫자] 형태이며 색은 \"red\", \"black\", \"blue\" 중 하나입니다.\n\n3장 색이 모두 같으면 숫자 합×3, 2장만 같으면 숫자 합×2, 모두 다르면 숫자 합 그대로가 점수입니다.\n\n뽑은 카드 정보가 담긴 2차원 리스트 cards가 매개변수로 주어질 때, 획득한 총점수를 return하도록 solution 함수를 작성해 주세요.\n\n[매개변수] cards는 3x2 크기, 숫자는 1~9인 자연수",
    "ex": [
      {
        "i": "cards = [[\"blue\", \"2\"], [\"red\", \"5\"], [\"black\", \"3\"]]",
        "o": "10",
        "note": "색이 모두 달라 숫자 합 10 그대로"
      },
      {
        "i": "cards = [[\"blue\", \"2\"], [\"blue\", \"5\"], [\"black\", \"3\"]]",
        "o": "20",
        "note": "blue 2장 같음 → 숫자 합 10×2=20"
      }
    ],
    "starter": "#다음과 같이 import를 사용할 수 있습니다.\n#import math\n\ndef solution(cards):\n    #여기에 코드를 작성해주세요.\n    answer = 0\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\ncards1 = [[\"blue\", \"2\"], [\"red\", \"5\"], [\"black\", \"3\"]]\nret1 = solution(cards1)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret1, \"입니다.\")\n\ncards2 = [[\"blue\", \"2\"], [\"blue\", \"5\"], [\"black\", \"3\"]]\nret2 = solution(cards2)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret2, \"입니다.\")",
    "sol": "def solution(cards):\n    answer = 0\n    count = [0 for _ in range(3)]\n    for card in cards:\n        if card[0] == 'black':\n            count[0] += 1\n        elif card[0] == 'blue':\n            count[1] += 1\n        elif card[0] == 'red':\n            count[2] += 1\n        answer += int(card[1])\n    if count[0] == 3 or count[1] == 3 or count[2] == 3:\n        answer *= 3\n    elif count[0] == 2 or count[1] == 2 or count[2] == 2:\n        answer *= 2\n    return answer",
    "tests": [
      {
        "call": "solution([[\"blue\", \"2\"], [\"red\", \"5\"], [\"black\", \"3\"]])",
        "o": "10"
      },
      {
        "call": "solution([[\"blue\", \"2\"], [\"blue\", \"5\"], [\"black\", \"3\"]])",
        "o": "20"
      }
    ]
  },
  {
    "set": "J",
    "title": "빈 병 교환 음료수 개수 (한 줄 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "X마트에서는 빈 병 n개를 음료수 한 병과 교환해 줍니다. 가진 돈 money, 음료수 가격 price, 교환에 필요한 빈 병 수 n이 주어질 때 마실 수 있는 총 음료수 수를 구하는 solution 함수를 작성했지만 일부 입력에서 잘못 동작합니다.\n\n딱 한 줄만 변경해서 모든 입력에 대해 올바르게 동작하도록 수정하세요.\n\n[매개변수] money 1~1,000, price 1~100, n은 3~10\n\n💡 힌트: 빈 병 n개를 '가져가서' 새 음료수와 바꾸면, 그만큼 갖고 있던 빈 병 개수는 늘어야 할까요 줄어야 할까요?",
    "ex": [
      {
        "i": "money = 8, price = 2, n = 4",
        "o": "5",
        "note": "8원으로 4병 사고 마시면 빈병 4개→1병 더 교환, 총 5병"
      },
      {
        "i": "money = 6, price = 2, n = 2",
        "o": "5"
      }
    ],
    "starter": "def solution(money, price, n):\n    answer = 0\n    empty_bottle = answer = money // price\n    while n <= empty_bottle:\n        empty_bottle = empty_bottle + n\n        answer += 1\n        empty_bottle += 1\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니 위의 코드만 수정하세요.\nmoney1 = 8\nprice1 = 2\nn1 = 4\nret1 = solution(money1, price1, n1)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret1, \"입니다.\")\n\nmoney2 = 6\nprice2 = 2\nn2 = 2\nret2 = solution(money2, price2, n2)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret2, \"입니다.\")",
    "sol": "def solution(money, price, n):\n    answer = 0\n    empty_bottle = answer = money // price\n    while n <= empty_bottle:\n        empty_bottle = empty_bottle - n\n        answer += 1\n        empty_bottle += 1\n    return answer",
    "tests": [
      {
        "call": "solution(8, 2, 4)",
        "o": "5"
      },
      {
        "call": "solution(6, 2, 2)",
        "o": "5"
      }
    ]
  },
  {
    "set": "J",
    "title": "비밀번호 생성 규칙 확인",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "회원가입 시 다음 규칙을 지켜야 비밀번호를 생성할 수 있습니다.\n1. 알파벳 대문자 1개 이상\n2. 알파벳 소문자 2개 이상\n3. 숫자 2개 이상\n\n생성하려는 비밀번호 password가 매개변수로 주어질 때, 생성 가능하면 true, 아니면 false를 return하도록 solution 함수를 작성하려 합니다. @@@ 빈칸을 채워 코드를 완성하세요.\n\n[매개변수] password는 대문자·소문자·숫자로만 구성, 길이 5~15",
    "ex": [
      {
        "i": "password = \"helloworld\"",
        "o": "False",
        "note": "대문자·숫자를 포함하지 않음"
      },
      {
        "i": "password = \"Hello123\"",
        "o": "True",
        "note": "대문자 1개, 소문자 4개, 숫자 3개 포함"
      }
    ],
    "starter": "def solution(password):\n    capital_count, small_count, digit_count = 0, 0, 0\n    for p in password:\n        if p >= 'A' and p <= 'Z':\n            capital_count += 1\n        elif p >= 'a' and p <= 'z':\n            small_count += 1\n        elif p >= @@@ and p <= @@@:\n            digit_count += 1\n    if @@@:\n        answer = True\n    else:\n        answer = False\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\npassword1 = \"helloworld\"\nret1 = solution(password1)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret1, \"입니다.\")\n\npassword2 = \"Hello123\"\nret2 = solution(password2)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret2, \"입니다.\")",
    "sol": "def solution(password):\n    capital_count, small_count, digit_count = 0, 0, 0\n    for p in password:\n        if p >= 'A' and p <= 'Z':\n            capital_count += 1\n        elif p >= 'a' and p <= 'z':\n            small_count += 1\n        elif p >= '0' and p <= '9':\n            digit_count += 1\n    if capital_count >= 1 and small_count >= 2 and digit_count >= 2:\n        answer = True\n    else:\n        answer = False\n    return answer",
    "tests": [
      {
        "call": "solution(\"helloworld\")",
        "o": "False"
      },
      {
        "call": "solution(\"Hello123\")",
        "o": "True"
      }
    ]
  },
  {
    "set": "J",
    "title": "예산 내 의자·책상 최대 구매",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "예산 내에서 의자와 책상을 하나씩 사되, 둘의 가격 합이 가장 크도록 사려 합니다.\n\n예산 money, 의자 가격 리스트 chairs, 책상 가격 리스트 desks가 매개변수로 주어질 때, 예산으로 감당 가능한 가격 합의 최댓값을 return하도록(살 수 없으면 0) solution 함수를 작성하려 합니다. @@@ 빈칸을 채워 코드를 완성하세요.\n\n[매개변수] money 1~1,000, 의자·책상 가격 1~1,000, chairs·desks 길이 1~100",
    "ex": [
      {
        "i": "money = 7, chairs = [2, 5], desks = [4, 3, 5]",
        "o": "7",
        "note": "의자 2 + 책상 5 = 7원으로 예산에 딱 맞음"
      },
      {
        "i": "money = 7, chairs = [3], desks = [5]",
        "o": "0",
        "note": "3+5=8원으로 예산 초과 → 0"
      }
    ],
    "starter": "def solution(money, chairs, desks):\n    answer = 0\n    for chair in chairs:\n        for desk in desks:\n            price = @@@\n            if answer < price and @@@:\n                answer = price\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\nmoney1 = 7\nchairs1 = [2, 5]\ndesks1 = [4, 3, 5]\nret1 = solution(money1, chairs1, desks1)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret1, \"입니다.\")\n\nmoney2 = 7\nchairs2 = [3]\ndesks2 = [5]\nret2 = solution(money2, chairs2, desks2)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret2, \"입니다.\")",
    "sol": "def solution(money, chairs, desks):\n    answer = 0\n    for chair in chairs:\n        for desk in desks:\n            price = chair + desk\n            if answer < price and price <= money:\n                answer = price\n    return answer",
    "tests": [
      {
        "call": "solution(7, [2, 5], [4, 3, 5])",
        "o": "7"
      },
      {
        "call": "solution(7, [3], [5])",
        "o": "0"
      }
    ]
  },
  {
    "set": "J",
    "title": "뒤집은 수와의 차 구하기",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "어떤 수와 그 수를 뒤집은 수(앞의 0은 제거)의 차를 구합니다. 예를 들어 120을 뒤집으면 21이 되어 차는 99입니다.\n\n1단계. func_b로 자릿수를 구합니다.\n2단계. func_c로 자릿수를 이용해 수를 뒤집습니다.\n3단계. func_a로 원래 수와 뒤집은 수의 차를 구합니다.\n\n@@@ 빈칸을 채워 solution 함수를 완성하세요.\n\n[매개변수] number는 1~10,000인 정수",
    "ex": [
      {
        "i": "number = 120",
        "o": "99"
      },
      {
        "i": "number = 23",
        "o": "9",
        "note": "23을 뒤집으면 32, 차는 9"
      }
    ],
    "starter": "def func_a(number1, number2):\n    ret = 0\n    if number1 > number2:\n        ret = number1 - number2\n    else:\n        ret = number2 - number1\n    return ret\n\ndef func_b(number):\n    ret = 0\n    while number != 0:\n        number = number // 10\n        ret += 1\n    return ret\n\ndef func_c(number, digit):\n    ret = 0\n    for i in range(digit):\n        temp = number % 10\n        number = number // 10\n        ret = ret * 10 + temp\n    return ret\n\ndef solution(number):\n    answer = 0\n    digit = func_@@@(@@@)\n    convert_number = func_@@@(@@@)\n    answer = func_@@@(@@@)\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\nnumber1 = 120\nret1 = solution(number1)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret1, \"입니다.\")\n\nnumber2 = 23\nret2 = solution(number2)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 깂은\", ret2, \"입니다.\")",
    "sol": "def func_a(number1, number2):\n    ret = 0\n    if number1 > number2:\n        ret = number1 - number2\n    else:\n        ret = number2 - number1\n    return ret\n\ndef func_b(number):\n    ret = 0\n    while number != 0:\n        number = number // 10\n        ret += 1\n    return ret\n\ndef func_c(number, digit):\n    ret = 0\n    for i in range(digit):\n        temp = number % 10\n        number = number // 10\n        ret = ret * 10 + temp\n    return ret\n\ndef solution(number):\n    answer = 0\n    digit = func_b(number)\n    convert_number = func_c(number, digit)\n    answer = func_a(number, convert_number)\n    return answer",
    "tests": [
      {
        "call": "solution(120)",
        "o": "99"
      },
      {
        "call": "solution(23)",
        "o": "9"
      }
    ]
  },
  {
    "set": "J",
    "title": "양말 짝 맞추기 (한 줄 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "같은 색 양말 2개씩을 묶어 한 쌍을 만들려 합니다. 양말 색을 숫자로 표현한 리스트 socks가 주어질 때 몇 쌍을 만들 수 있는지 구하는 solution 함수를 작성했지만 일부 입력에서 잘못 동작합니다.\n\n딱 한 줄만 변경해서 모든 입력에 대해 올바르게 동작하도록 수정하세요.\n\n[매개변수] 양말 색은 0~9, 양말 수는 1~100\n\n💡 힌트: 같은 색이 몇 '켤레(2개 묶음)' 나오는지 구하는 거예요. 색깔별 개수를 2로 나눈 나머지(%)와 몫(//) 중 어느 쪽이 '쌍의 수'일까요?",
    "img": "<div style='margin: 20px 0; overflow-x: auto;'>\n  <table style='background:#1e1e1e; border-collapse: separate; border-spacing: 12px; border-radius: 10px; border: 1px solid #333;'>\n    <tr>\n      <!-- 빨강 1쌍 -->\n      <td style='border: 1px dashed #555; padding: 10px; border-radius: 6px; text-align: center; vertical-align: middle;'>\n        <div style='white-space: nowrap; margin-bottom: 5px;'>\n          <svg width='18' height='24' viewBox='0 0 20 30' style='display: inline-block;'><path d='M5 2h10v15c0 5 5 5 5 8s-10 5-15 0z' fill='#ff4d4d'/></svg>\n          <svg width='18' height='24' viewBox='0 0 20 30' style='display: inline-block;'><path d='M5 2h10v15c0 5 5 5 5 8s-10 5-15 0z' fill='#ff4d4d'/></svg>\n        </div>\n        <div style='font-size: 11px; color: #888; white-space: nowrap;'>빨강1쌍</div>\n      </td>\n      <!-- 파랑 1쌍 -->\n      <td style='border: 1px dashed #555; padding: 10px; border-radius: 6px; text-align: center; vertical-align: middle;'>\n        <div style='white-space: nowrap; margin-bottom: 5px;'>\n          <svg width='18' height='24' viewBox='0 0 20 30' style='display: inline-block;'><path d='M5 2h10v15c0 5 5 5 5 8s-10 5-15 0z' fill='#007acc'/></svg>\n          <svg width='18' height='24' viewBox='0 0 20 30' style='display: inline-block;'><path d='M5 2h10v15c0 5 5 5 5 8s-10 5-15 0z' fill='#007acc'/></svg>\n        </div>\n        <div style='font-size: 11px; color: #888; white-space: nowrap;'>파랑1쌍</div>\n      </td>\n      <!-- 남는 양말 -->\n      <td style='padding: 10px; text-align: center; vertical-align: middle;'>\n        <div style='white-space: nowrap;'>\n          <svg width='18' height='24' viewBox='0 0 20 30' style='display: inline-block;'><path d='M5 2h10v15c0 5 5 5 5 8s-10 5-15 0z' fill='#ffcc00'/></svg>\n          <svg width='18' height='24' viewBox='0 0 20 30' style='display: inline-block;'><path d='M5 2h10v15c0 5 5 5 5 8s-10 5-15 0z' fill='#ff4d4d'/></svg>\n        </div>\n      </td>\n      <!-- 총 합계 -->\n      <td style='padding: 10px; text-align: center; vertical-align: middle;'>\n        <div style='font-size: 14px; color: #2ecc71; font-weight: bold; white-space: nowrap;'>= 총 2쌍</div>\n      </td>\n    </tr>\n  </table>\n</div>",
    "ex": [
      {
        "i": "socks = [1, 2, 1, 3, 2, 1]",
        "o": "2",
        "note": "빨강(1) 3개→1쌍+1개 남음, 파랑(2) 2개→1쌍, 노랑(3) 1개→0쌍. 총 2쌍"
      }
    ],
    "starter": "def solution(socks):\n    answer = 0\n    count = [0 for _ in range(10)]\n    for s in socks:\n        count[s] += 1\n    for c in count:\n        answer += (c % 2)\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니 위의 코드만 수정하세요.\nsocks = [1, 2, 1, 3, 2, 1]\nret = solution(socks)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다. \nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(socks):\n    answer = 0\n    count = [0 for _ in range(10)]\n    for s in socks:\n        count[s] += 1\n    for c in count:\n        answer += (c // 2)\n    return answer",
    "tests": [
      {
        "call": "solution([1, 2, 1, 3, 2, 1])",
        "o": "2"
      }
    ]
  },
  {
    "set": "J",
    "title": "불량 사과상자 개수 구하기",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "사과 한 상자의 표준 무게와 비교해 오차가 10% 이내면 정상품, 그보다 크면 불량품입니다.\n\n표준 무게 weight와 판정할 상자들의 무게 리스트 boxes가 매개변수로 주어질 때, 불량품 개수를 return하도록 solution 함수를 작성하려 합니다. @@@ 빈칸을 채워 코드를 완성하세요.\n\n[매개변수] weight는 500~10,000(10의 배수), boxes 길이 1~20(무게 400~12,000)",
    "ex": [
      {
        "i": "weight = 600, boxes = [653, 670, 533, 540, 660]",
        "o": "2",
        "note": "정상 범위는 540~660. 670과 533이 범위를 벗어나 불량품 2개"
      }
    ],
    "starter": "def solution(weight, boxes):\n    answer = 0\n    for x in boxes:\n        if @@@:\n            answer += 1\n    return answer\n\n#아래는 테스트케이스 출력을 해보기 위한 코드입니다.\nweight = 600\nboxes = [653, 670, 533, 540, 660]\nret = solution(weight, boxes)\n\n#[실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret, \"입니다.\")",
    "sol": "def solution(weight, boxes):\n    answer = 0\n    for x in boxes:\n        if x < weight * 9 / 10 or x > weight * 11 / 10:\n            answer += 1\n    return answer",
    "tests": [
      {
        "call": "solution(600, [653, 670, 533, 540, 660])",
        "o": "2"
      }
    ]
  },
  {
    "set": "K",
    "title": "선택 정렬 후 배수 인덱스 합 구하기 (한 줄 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "N개의 자연수를 오름차순으로 정렬한 뒤, 인덱스가 M의 배수인 원소(0번 인덱스는 제외)의 합을 구하려 합니다. 선택 정렬로 배열을 정렬하는 solution 함수를 작성했지만 내림차순으로 정렬되어 일부 입력에서 잘못 동작합니다.\n\n딱 한 줄만 변경해서 오름차순으로 정렬되도록 수정하세요.\n\n[매개변수] N은 1~1,000, M은 2~50(M<N)\n\n💡 힌트: 선택 정렬에서 이번 자리에 들어갈 '가장 작은 값'의 위치를 찾아야 해요. 지금 부등호는 가장 큰 값을 찾고 있지 않나요?",
    "img": "<table><tr><td class='bg-blue'>4</td><td class='bg-blue'>2</td><td class='bg-blue'>1</td><td class='bg-blue'>3</td><td class='bg-blue'>9</td><td class='bg-blue'>5</td><td class='bg-blue'>6</td></tr></table>\n<p style='text-align:center; color:#007acc; margin:5px 0; font-size:20px;'>⬇</p>\n<table><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>9</td></tr></table>\n<br>\n<table><tr><th>Index</th><td>0</td><td>1</td><td>2</td><td class='bg-yellow'>3</td><td>4</td><td>5</td><td class='bg-yellow'>6</td></tr><tr><th>arr[i]</th><td>1</td><td>2</td><td>3</td><td class='bg-yellow'>4</td><td>5</td><td>6</td><td class='bg-yellow'>9</td></tr></table>",
    "ex": [
      {
        "i": "arr = [4, 2, 1, 3, 9, 5, 6], N = 7, M = 3",
        "o": "13",
        "note": "정렬 후 [1,2,3,4,5,6,9] → 인덱스 3,6의 값 4+9=13"
      }
    ],
    "starter": "#다음과 같이 import를 사용할 수 있습니다.\n#import math\n\ndef solution(arr, N, M):\n\n    for i in range(N - 1):\n        min_idx = i\n        for j in range(i + 1, N):\n            if arr[j] > arr[min_idx]:\n                min_idx = j\n        arr[i], arr[min_idx] = arr[min_idx], arr[i]\n\n    sum = 0\n\n    for i in range(1, N):\n        if i % M == 0:\n            sum += arr[i]\n\n    return sum\n\n\n# 아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니 위의 코드만 수정하세요.\narr1 = [4,2,1,3,9,5,6]\nN1 = 7\nM1 = 3\nret1 = solution(arr1, N1, M1)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret1, \"입니다.\")\n\narr2 = [7,6,5,4,3,2,1]\nN2 = 7\nM2 = 3\nret2 = solution(arr2, N2, M2)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret2, \"입니다.\")\n\narr3 = [8,6,3,3,4,1,5,7]\nN3 = 8\nM3 = 2\nret3 = solution(arr3, N3, M3)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret3, \"입니다.\")\n\n\n",
    "sol": "def solution(arr, N, M):\n\n    for i in range(N - 1):\n        min_idx = i\n        for j in range(i + 1, N):\n            if arr[j] < arr[min_idx]:\n                min_idx = j\n        arr[i], arr[min_idx] = arr[min_idx], arr[i]\n\n    sum = 0\n\n    for i in range(1, N):\n        if i % M == 0:\n            sum += arr[i]\n\n    return sum",
    "tests": [
      {
        "call": "solution([4, 2, 1, 3, 9, 5, 6], 7, 3)",
        "o": "13"
      },
      {
        "call": "solution([7, 6, 5, 4, 3, 2, 1], 7, 3)",
        "o": "11"
      },
      {
        "call": "solution([8, 6, 3, 3, 4, 1, 5, 7], 8, 2)",
        "o": "15"
      }
    ]
  },
  {
    "set": "K",
    "title": "스프링클러 물 안 닿는 면적 구하기 (한 줄 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "N×N 정사각형 정원에 스프링클러 M개가 설치되어 있습니다. 스프링클러는 상하좌우로 물의 세기만큼 물을 뿌립니다(설치 위치 포함). 물이 뿌려지지 않는 칸의 개수를 구하는 solution 함수를 작성했지만 일부 입력에서 잘못 동작합니다.\n\n딱 한 줄만 변경해서 모든 입력에 대해 올바르게 동작하도록 수정하세요.\n\n[매개변수] 1≤N≤10, 1≤M≤5, 모든 수치는 1 이상 정수\n\n💡 힌트: 물의 세기가 2라면 최대 2칸 떨어진 곳까지 물이 닿아야 해요. range(1, can[2])가 실제로 몇 칸까지 반복하는지 세어보세요.",
    "img": "<table style='width:auto;'><tr><th class='bg-blue'>0</th><th class='bg-blue'>1</th><th class='bg-blue'>2</th></tr><tr><td>세로 위치</td><td>가로 위치</td><td>물의 세기</td></tr></table>\n<style>.w-grid td{width:35px; height:35px; border:1px solid #444; text-align:center; font-size:18px; background:#2d5a27;} .w-grid .active{background:#3498db;}</style>\n<table class='w-grid'>\n<tr><th>위치</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr>\n<tr><th>0</th><td class='active'>⛲</td><td class='active'>💧</td><td class='active'>💧</td><td></td><td></td></tr>\n<tr><th>1</th><td class='active'>💧</td><td></td><td class='active'>💧</td><td></td><td></td></tr>\n<tr><th>2</th><td class='active'>💧</td><td class='active'>💧</td><td class='active'>⛲</td><td class='active'>💧</td><td class='active'>💧</td></tr>\n<tr><th>3</th><td></td><td></td><td class='active'>💧</td><td></td><td></td></tr>\n<tr><th>4</th><td></td><td></td><td class='active'>💧</td><td></td><td></td></tr>\n</table>",
    "ex": [
      {
        "i": "watering_can = [[2, 2, 2], [0, 0, 1]], N = 5, M = 2",
        "o": "13",
        "note": "물이 뿌려지지 않는 칸(초록색)이 13칸"
      }
    ],
    "starter": "#다음과 같이 import를 사용할 수 있습니다.\n#import math\n\ndef solution(watering_can, N, M):\n\n    NO_WATER = 0\n    WATER = 1\n\n    garden = [[NO_WATER] * N for i in range(N)]\n\n    for i in range(M) :\n        can = watering_can[i]\n        garden[can[0]][can[1]] = WATER\n        for j in range(1,can[2]):\n            if can[0]+j < N:\n                garden[can[0]+j][can[1]] = WATER\n            if can[0]-j >= 0:\n                garden[can[0]-j][can[1]] = WATER\n            if can[1]+j < N:\n                garden[can[0]][can[1]+j] = WATER\n            if can[1]-j >= 0:\n                garden[can[0]][can[1]-j] = WATER\n\n    answer = 0\n\n    for i in range(N):\n        for j in range(N):\n            if garden[i][j] == NO_WATER:\n                answer += 1\n\n    return answer\n\n\n# 아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니 위의 코드만 수정하세요.\nwatering_can1 = [[2,2,2],[0,0,1]]\nN1 = 5\nM1 = 2\nret1 = solution(watering_can1, N1, M1)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret1, \"입니다.\")\n\n\n",
    "sol": "def solution(watering_can, N, M):\n\n    NO_WATER = 0\n    WATER = 1\n\n    garden = [[NO_WATER] * N for i in range(N)]\n\n    for i in range(M) :\n        can = watering_can[i]\n        garden[can[0]][can[1]] = WATER\n        for j in range(1,can[2]+1):\n            if can[0]+j < N:\n                garden[can[0]+j][can[1]] = WATER\n            if can[0]-j >= 0:\n                garden[can[0]-j][can[1]] = WATER\n            if can[1]+j < N:\n                garden[can[0]][can[1]+j] = WATER\n            if can[1]-j >= 0:\n                garden[can[0]][can[1]-j] = WATER\n\n    answer = 0\n\n    for i in range(N):\n        for j in range(N):\n            if garden[i][j] == NO_WATER:\n                answer += 1\n\n    return answer",
    "tests": [
      {
        "call": "solution([[2, 2, 2], [0, 0, 1]], 5, 2)",
        "o": "13"
      }
    ]
  },
  {
    "set": "K",
    "title": "겹친 색칠 영역 칸 수 구하기 (한 줄 수정)",
    "func": true,
    "label": "한 줄 수정",
    "desc": "N×N 격자에 M개의 직사각형 영역을 빨간색 또는 파란색으로 칠합니다. 서로 다른 색이 겹치면 회색, 같은 색끼리 겹치면 그대로 그 색으로 남습니다. 색칠이 끝난 뒤 특정 색(C)으로 칠해진 칸 수를 구하는 solution 함수를 작성했지만 일부 입력에서 잘못 동작합니다.\n\n코드를 수정해서 모든 입력에 대해 올바르게 동작하도록 하세요.\n\n[매개변수] 5≤N≤10, 2≤M≤5, 1≤C≤3(1=빨강,2=파랑,3=회색)\n\n💡 힌트: '같은 색끼리 겹치는 경우'는 회색이 되면 안 돼요. 두 조건(처음 칠하는 경우 / 다른 색과 겹치는 경우)을 다시 나눠보세요.",
    "img": "<style>.mini-grid td{width:22px; height:18px; border:1px solid #444; font-size:10px; text-align:center;} .pr{background:#ff4d4d;} .pb{background:#007acc;} .pg{background:#777;}</style>\n<table class='mini-grid' style='margin:5px 0;'>\n<tr><th>r\\c</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr>\n<tr><th>0</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>\n<tr><th>1</th><td></td><td class='pr'></td><td class='pr'></td><td class='pr'></td><td class='pr'></td><td></td><td></td><td></td><td></td><td></td></tr>\n<tr><th>2</th><td></td><td class='pr'></td><td class='pr'></td><td class='pg'></td><td class='pg'></td><td class='pb'></td><td class='pb'></td><td></td><td></td><td></td></tr>\n<tr><th>3</th><td></td><td class='pr'></td><td class='pr'></td><td class='pg'></td><td class='pg'></td><td class='pb'></td><td class='pb'></td><td></td><td></td><td></td></tr>\n<tr><th>4</th><td></td><td class='pr'></td><td class='pr'></td><td class='pg'></td><td class='pg'></td><td class='pb'></td><td class='pb'></td><td></td><td></td><td></td></tr>\n<tr><th>5</th><td></td><td class='pr'></td><td class='pr'></td><td class='pg'></td><td class='pg'></td><td class='pb'></td><td class='pb'></td><td></td><td></td><td></td></tr>\n<tr><th>6</th><td></td><td></td><td></td><td class='pb'></td><td class='pb'></td><td class='pb'></td><td class='pb'></td><td></td><td></td><td></td></tr>\n<tr><th>7</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>\n<tr><th>8</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>\n<tr><th>9</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>\n</table>\n<table><tr><th class='bg-blue'>0</th><th class='bg-blue'>1</th><th class='bg-blue'>2</th><th class='bg-blue'>3</th><th class='bg-blue'>4</th></tr><tr><td>왼쪽 위 r</td><td>왼쪽 위 c</td><td>오른쪽 아래 r</td><td>오른쪽 아래 c</td><td>색의 종류</td></tr></table>",
    "ex": [
      {
        "i": "N = 10, M = 2, area = [[1, 1, 5, 4, 1], [2, 3, 6, 6, 2]], C = 3",
        "o": "8",
        "note": "빨강 12칸, 회색(겹침) 8칸, 파랑 12칸 중 회색 칸 수는 8"
      },
      {
        "i": "N = 10, M = 2, area = [[1, 1, 5, 4, 1], [2, 3, 6, 6, 1]], C = 3",
        "o": "0",
        "note": "같은 빨간색끼리 겹쳐서 회색 영역이 생기지 않음"
      }
    ],
    "starter": "#다음과 같이 import를 사용할 수 있습니다.\n#import math\n\nRED = 1\nBLUE = 2\nGRAY = 3\n\ndef solution(N, M, area, C):\n    paper = [[0] * N for _ in range(N)]\n\n    for i in range(M):\n        target = area[i]\n        from_r, from_c = target[0], target[1]\n        to_r, to_c = target[2], target[3]\n        color = target[4]\n\n        for r in range(from_r, to_r + 1):\n            for c in range(from_c, to_c + 1):\n                if paper[r][c] == 0:\n                    paper[r][c] = color\n                elif (paper[r][c] == color):\n                    paper[r][c] = GRAY\n\n    answer = 0\n\n    for r in range(N):\n        for c in range(N):\n            if C == paper[r][c]:\n                answer += 1\n\n    return answer\n\n\n# 아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니 위의 코드만 수정하세요.\nN1 = 10\nM1 = 2\narea1 = [[1,1,5,4,1],[2,3,6,6,2]]\nC1 = 3\nret1 = solution(N1, M1, area1, C1)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret1, \"입니다.\")\n\nN2 = 10\nM2 = 2\narea2 = [[1,1,5,4,1],[2,3,6,6,1]]\nC2 = 3\nret2 = solution(N2, M2, area2, C2)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret2, \"입니다.\")\n\n\n",
    "sol": "RED = 1\nBLUE = 2\nGRAY = 3\n\ndef solution(N, M, area, C):\n    paper = [[0] * N for _ in range(N)]\n\n    for i in range(M):\n        target = area[i]\n        from_r, from_c = target[0], target[1]\n        to_r, to_c = target[2], target[3]\n        color = target[4]\n\n        for r in range(from_r, to_r + 1):\n            for c in range(from_c, to_c + 1):\n                if paper[r][c] == 0 or paper[r][c] == color:\n                    paper[r][c] = color\n                elif (paper[r][c] != color):\n                    paper[r][c] = GRAY\n\n    answer = 0\n\n    for r in range(N):\n        for c in range(N):\n            if C == paper[r][c]:\n                answer += 1\n\n    return answer\n\n",
    "tests": [
      {
        "call": "solution(10, 2, [[1, 1, 5, 4, 1], [2, 3, 6, 6, 2]], 3)",
        "o": "8"
      },
      {
        "call": "solution(10, 2, [[1, 1, 5, 4, 1], [2, 3, 6, 6, 1]], 3)",
        "o": "0"
      }
    ]
  },
  {
    "set": "K",
    "title": "연속 M개 최대합·최소합 차이 구하기",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "N개의 정수 중 연속한 M개를 골라 그 합을 구할 때, 가능한 최대 합과 최소 합의 차이를 구하려 합니다.\n\n예를 들어 [3, 1, 1, 4, 5, 9]에서 M이 3이면 [3,1,1]의 합 5가 최소, [4,5,9]의 합 18이 최대이므로 차이는 13입니다.\n\n배열 arr, 배열 크기 N, 연속 개수 M이 매개변수로 주어질 때, 최대 합과 최소 합의 차이를 return하도록 solution 함수를 작성하려 합니다. @@@ 빈칸을 채워 코드를 완성하세요.\n\n[매개변수] N은 1~1,000, M은 2~50, 원소는 1~50",
    "ex": [
      {
        "i": "arr = [3, 1, 1, 4, 5, 9], N = 6, M = 3",
        "o": "13"
      },
      {
        "i": "arr = [3, 1, 1, 4, 5, 9], N = 6, M = 2",
        "o": "12",
        "note": "최소 합 1+1=2, 최대 합 5+9=14, 차이 12"
      },
      {
        "i": "arr = [1, 2, 3, 4, 5, 6], N = 6, M = 4",
        "o": "8",
        "note": "최소 합 1+2+3+4=10, 최대 합 3+4+5+6=18, 차이 8"
      }
    ],
    "starter": "#다음과 같이 import를 사용할 수 있습니다.\n#import math\n\ndef solution(arr, N, M):\n    min_sum = 50000\n    max_sum = 0\n\n    for i in range(N-M+1):\n        temp_max = 0\n        for j in range(i, i+M):\n            temp_max += arr[j]\n        if temp_max > @@@:\n            @@@ = temp_max\n        if temp_max < @@@:\n            @@@ = temp_max\n\n    return max_sum - min_sum\n\n# 아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니 위의 코드만 수정하세요.\narr1 = [3,1,1,4,5,9]\nN1 = 6\nM1 = 3\nret1 = solution(arr1, N1, M1)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret1, \"입니다.\")\n\narr2 = [3,1,1,4,5,9]\nN2 = 6\nM2 = 2\nret2 = solution(arr2, N2, M2)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret2, \"입니다.\")\n\narr3 = [1,2,3,4,5,6]\nN3 = 6\nM3 = 4\nret3 = solution(arr3, N3, M3)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret3, \"입니다.\")\n\n\n",
    "sol": "def solution(arr, N, M):\n    min_sum = 50000\n    max_sum = 0\n\n    for i in range(N-M+1):\n        temp_max = 0\n        for j in range(i, i+M):\n            temp_max += arr[j]\n        if temp_max > max_sum:\n            max_sum = temp_max\n        if temp_max < min_sum:\n            min_sum = temp_max\n\n    return max_sum - min_sum",
    "tests": [
      {
        "call": "solution([3, 1, 1, 4, 5, 9], 6, 3)",
        "o": "13"
      },
      {
        "call": "solution([3, 1, 1, 4, 5, 9], 6, 2)",
        "o": "12"
      },
      {
        "call": "solution([1, 2, 3, 4, 5, 6], 6, 4)",
        "o": "8"
      }
    ]
  },
  {
    "set": "K",
    "title": "격자판 최대·최소 평균의 합 구하기",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "5×5 격자판에서 가로, 세로, 대각선(총 12줄) 중 평균이 가장 큰 줄과 가장 작은 줄을 찾아 그 두 평균의 합을 구하려 합니다. 평균은 소수점을 버립니다.\n\n격자판 board가 매개변수로 주어질 때, 가장 큰 평균과 가장 작은 평균의 합을 return하도록 solution 함수를 작성하려 합니다. @@@ 빈칸을 채워 코드를 완성하세요.\n\n[매개변수] 격자판의 모든 수는 1~100",
    "img": "<style>.b-grid td{width:30px; height:30px; text-align:center; border:1px solid #444;} .b-grid {margin:10px auto;}</style>\n<table class='b-grid'><tr><td>25</td><td>11</td><td>82</td><td>61</td><td>34</td></tr><tr><td>87</td><td>98</td><td>91</td><td>76</td><td>95</td></tr><tr><td>44</td><td>2</td><td>39</td><td>57</td><td>65</td></tr><tr><td>69</td><td>32</td><td>51</td><td>16</td><td>41</td></tr><tr><td>94</td><td>27</td><td>74</td><td>37</td><td>9</td></tr></table>\n<div class='desc-text'>가장 큰 평균은 아래와 같은 한 줄(파란색 배경)에서 구할 수 있습니다.</div>\n<table class='b-grid'><tr><td>25</td><td>11</td><td>82</td><td>61</td><td>34</td></tr><tr class='bg-blue' style='color:#fff;'><td>87</td><td>98</td><td>91</td><td>76</td><td>95</td></tr><tr><td>44</td><td>2</td><td>39</td><td>57</td><td>65</td></tr><tr><td>69</td><td>32</td><td>51</td><td>16</td><td>41</td></tr><tr><td>94</td><td>27</td><td>74</td><td>37</td><td>9</td></tr></table>\n<div class='desc-text'>가장 작은 평균은 아래와 같은 한 줄(노란색 배경)에서 구할 수 있습니다.</div>\n<table class='b-grid'><tr><td>25</td><td class='bg-yellow' style='color:#000;'>11</td><td>82</td><td>61</td><td>34</td></tr><tr><td>87</td><td class='bg-yellow' style='color:#000;'>98</td><td>91</td><td>76</td><td>95</td></tr><tr><td>44</td><td class='bg-yellow' style='color:#000;'>2</td><td>39</td><td>57</td><td>65</td></tr><tr><td>69</td><td class='bg-yellow' style='color:#000;'>32</td><td>51</td><td>16</td><td>41</td></tr><tr><td>94</td><td class='bg-yellow' style='color:#000;'>27</td><td>74</td><td>37</td><td>9</td></tr></table>\n<table style='width:100%; border-collapse:collapse; margin:10px 0;'><tr><th style='background:#333; color:#fff;'>구분</th><th style='background:#333; color:#fff;' colspan='5'>평균</th></tr><tr><td style='border:1px solid #444;'>가로열</td><td style='border:1px solid #444;'>42</td><td style='border:1px solid #444; background:#555; color:#fff;'>89</td><td style='border:1px solid #444;'>41</td><td style='border:1px solid #444;'>41</td><td style='border:1px solid #444;'>48</td></tr><tr><td style='border:1px solid #444;'>세로열</td><td style='border:1px solid #444;'>63</td><td style='border:1px solid #444; background:#555; color:#fff;'>34</td><td style='border:1px solid #444;'>67</td><td style='border:1px solid #444;'>49</td><td style='border:1px solid #444;'>48</td></tr><tr><td style='border:1px solid #444;'>대각선</td><td style='border:1px solid #444;'>55</td><td style='border:1px solid #444;'>37</td><td style='border:1px solid #444;'></td><td style='border:1px solid #444;'></td><td style='border:1px solid #444;'></td></tr></table>\n<table style='width:50%; border-collapse:collapse;'><tr><td style='border:1px solid #444;'>최소값</td><td style='border:1px solid #444;'>34</td></tr><tr><td style='border:1px solid #444;'>최대값</td><td style='border:1px solid #444;'>89</td></tr><tr><td style='border:1px solid #444;'>합계</td><td style='border:1px solid #444;'>123</td></tr></table>",
    "ex": [
      {
        "i": "board = [[25,11,82,61,34],[87,98,91,76,95],[44,2,39,57,65],[69,32,51,16,41],[94,27,74,37,9]]",
        "o": "123",
        "note": "가장 큰 평균 89(2번째 가로줄) + 가장 작은 평균 34(대각선) = 123"
      }
    ],
    "starter": "#다음과 같이 import를 사용할 수 있습니다.\n#import math\n\ndef solution(board):\n    min_avg = 100\n    max_avg = 0\n\n    for i in range(5):\n        sum_x = 0\n        sum_y = 0\n        for j in range(5):\n            sum_x += @@@\n            sum_y += @@@\n\n        sum_x = int(sum_x / 5)\n        sum_y = int(sum_y / 5)\n\n        if max_avg < sum_x:\n            max_avg = sum_x\n        if max_avg < sum_y:\n            max_avg = sum_y\n        if min_avg > sum_x:\n            min_avg = sum_x\n        if min_avg > sum_y:\n            min_avg = sum_y\n\n    sum_d1 = 0\n    sum_d2 = 0\n    for i in range(5):\n        sum_d1 += @@@\n        sum_d2 += @@@\n\n    sum_d1 = int(sum_d1 / 5)\n    sum_d2 = int(sum_d2 / 5)\n\n    if max_avg < sum_d1:\n        max_avg = sum_d1\n    if max_avg < sum_d2:\n        max_avg = sum_d2\n    if min_avg > sum_d1:\n        min_avg = sum_d1\n    if min_avg > sum_d2:\n        min_avg = sum_d2\n\n    return min_avg + max_avg\n\n# 아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니 위의 코드만 수정하세요.\nboard1 = [[25,11,82,61,34],[87,98,91,76,95],[44,2,39,57,65],[69,32,51,16,41],[94,27,74,37,9]]\nret1 = solution(board1)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret1, \"입니다.\")\n\n\n",
    "sol": "def solution(board):\n    min_avg = 100\n    max_avg = 0\n\n    for i in range(5):\n        sum_x = 0\n        sum_y = 0\n        for j in range(5):\n            sum_x += board[i][j]\n            sum_y += board[j][i]\n\n        sum_x = int(sum_x / 5)\n        sum_y = int(sum_y / 5)\n\n        if max_avg < sum_x:\n            max_avg = sum_x\n        if max_avg < sum_y:\n            max_avg = sum_y\n        if min_avg > sum_x:\n            min_avg = sum_x\n        if min_avg > sum_y:\n            min_avg = sum_y\n\n    sum_d1 = 0\n    sum_d2 = 0\n    for i in range(5):\n        sum_d1 += board[i][i]\n        sum_d2 += board[i][4-i]\n\n    sum_d1 = int(sum_d1 / 5)\n    sum_d2 = int(sum_d2 / 5)\n\n    if max_avg < sum_d1:\n        max_avg = sum_d1\n    if max_avg < sum_d2:\n        max_avg = sum_d2\n    if min_avg > sum_d1:\n        min_avg = sum_d1\n    if min_avg > sum_d2:\n        min_avg = sum_d2\n\n    return min_avg + max_avg",
    "tests": [
      {
        "call": "solution([[25, 11, 82, 61, 34], [87, 98, 91, 76, 95], [44, 2, 39, 57, 65], [69, 32, 51, 16, 41], [94, 27, 74, 37, 9]])",
        "o": "123"
      }
    ]
  },
  {
    "set": "K",
    "title": "가장 많이 평가받은 소스 번호 찾기",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "N명의 시식단이 각자 가장 맛있다고 생각한 소스 번호를 하나씩 적어냈을 때, 가장 많이 평가받은 소스 번호를 구하려 합니다. 득표수가 같으면 더 큰 번호를 답으로 합니다.\n\n평가 리스트 arr과 인원 수 N이 매개변수로 주어질 때, 가장 인기 많은 소스 번호를 return하도록 solution 함수를 작성하려 합니다. @@@ 빈칸을 채워 코드를 완성하세요.\n\n[매개변수] 1≤N, 소스 번호≤100. 득표수가 같으면 더 큰 번호를 return",
    "img": "<div style='display:flex; flex-wrap:wrap; gap:3px; margin:10px 0;'><div class='bg-blue' style='padding:5px 8px; color:#fff; border-radius:4px;'>1</div><div class='bg-blue' style='padding:5px 8px; color:#fff; border-radius:4px;'>2</div><div class='bg-blue' style='padding:5px 8px; color:#fff; border-radius:4px;'>3</div><div class='bg-blue' style='padding:5px 8px; color:#fff; border-radius:4px;'>4</div><div class='bg-blue' style='padding:5px 8px; color:#fff; border-radius:4px;'>4</div><div class='bg-blue' style='padding:5px 8px; color:#fff; border-radius:4px;'>5</div><div class='bg-blue' style='padding:5px 8px; color:#fff; border-radius:4px;'>6</div><div class='bg-blue' style='padding:5px 8px; color:#fff; border-radius:4px;'>7</div><div class='bg-blue' style='padding:5px 8px; color:#fff; border-radius:4px;'>7</div><div class='bg-blue' style='padding:5px 8px; color:#fff; border-radius:4px;'>8</div><div class='bg-blue' style='padding:5px 8px; color:#fff; border-radius:4px;'>9</div><div class='bg-blue' style='padding:5px 8px; color:#fff; border-radius:4px;'>9</div><div class='bg-blue' style='padding:5px 8px; color:#fff; border-radius:4px;'>9</div><div class='bg-blue' style='padding:5px 8px; color:#fff; border-radius:4px;'>9</div><div class='bg-blue' style='padding:5px 8px; color:#fff; border-radius:4px;'>10</div></div>\n<div style='display:flex; flex-wrap:wrap; gap:3px; margin:10px 0;'><div class='bg-blue' style='padding:5px 8px; color:#fff; border-radius:4px;'>4</div><div class='bg-blue' style='padding:5px 8px; color:#fff; border-radius:4px;'>4</div><div class='bg-blue' style='padding:5px 8px; color:#fff; border-radius:4px;'>2</div><div class='bg-blue' style='padding:5px 8px; color:#fff; border-radius:4px;'>2</div><div class='bg-blue' style='padding:5px 8px; color:#fff; border-radius:4px;'>1</div></div>",
    "ex": [
      {
        "i": "arr = [1,2,3,4,4,5,6,7,7,8,9,9,9,9,10], N = 15",
        "o": "9"
      },
      {
        "i": "arr = [1,1,4,4,8,8,8,8,9,9,9,9,1,4,4,4,5,3,2,2,1,4,8,7], N = 24",
        "o": "4",
        "note": "4번 소스가 가장 많은 표를 받음"
      },
      {
        "i": "arr = [3,3,3,3,3,5,5,5,5,5,9,9,9,9,9,11,11,11,11,11], N = 20",
        "o": "11",
        "note": "모든 소스가 5표씩 동률 → 가장 큰 번호 11이 답"
      }
    ],
    "starter": "#다음과 같이 import를 사용할 수 있습니다.\n#import math\n\ndef solution(arr, N):\n\n    frequency = [0] * (101)\n\n    for i in range(N):\n        @@@ += 1\n\n    max = 0\n    num = 0\n\n    for i in range(@@@):\n        if max <= frequency[i]:\n            max = frequency[i]\n            if @@@:\n                @@@\n\n    return num\n\n# 아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니 위의 코드만 수정하세요.\narr1 = [1,2,3,4,4,5,6,7,7,8,9,9,9,9,10]\nN1 = 15\nret1 = solution(arr1, N1)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret1, \"입니다.\")\n\narr2 = [1,1,4,4,8,8,8,8,9,9,9,9,1,4,4,4,5,3,2,2,1,4,8,7]\nN2 = 24\nret2 = solution(arr2, N2)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret2, \"입니다.\")\n\narr3 = [3,3,3,3,3,5,5,5,5,5,9,9,9,9,9,11,11,11,11,11]\nN3 = 20\nret3 = solution(arr3, N3)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret3, \"입니다.\")\n\n\n",
    "sol": "def solution(arr, N):\n\n\n    frequency = [0] * (101)\n\n    for i in range(N):\n        frequency[arr[i]] += 1\n\n    max = 0\n    num = 0\n\n    for i in range(101):\n        if max <= frequency[i]:\n            max = frequency[i]\n            if num < i:\n                num = i\n\n    return num",
    "tests": [
      {
        "call": "solution([1,2,3,4,4,5,6,7,7,8,9,9,9,9,10], 15)",
        "o": "9"
      },
      {
        "call": "solution([1,1,4,4,8,8,8,8,9,9,9,9,1,4,4,4,5,3,2,2,1,4,8,7], 24)",
        "o": "4"
      },
      {
        "call": "solution([3,3,3,3,3,5,5,5,5,5,9,9,9,9,9,11,11,11,11,11], 20)",
        "o": "11"
      }
    ]
  },
  {
    "set": "K",
    "title": "최대공약수가 가장 큰 쌍 찾기",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "자연수 N개의 쌍이 주어질 때, 각 쌍의 최대공약수 중 가장 큰 값을 구하려 합니다. 최대공약수는 유클리드 호제법(재귀)으로 구합니다.\n\n쌍의 정보가 담긴 배열 arr와 쌍의 개수 N이 매개변수로 주어질 때, 가장 큰 최대공약수를 return하도록 solution 함수를 작성하려 합니다. @@@ 빈칸을 채워 gcd 함수(재귀)를 완성하세요.\n\n[매개변수] 자연수는 500 이하, 2≤N≤20\n\n💡 힌트: gcd(a, b)에서 b가 0이 되면 a가 최대공약수입니다. 그렇지 않으면 gcd(b, a를 b로 나눈 나머지)를 구합니다.",
    "img": "<div style='display:flex; flex-wrap:wrap; gap:5px; margin:10px 0;'><div class='bg-blue' style='padding:5px 12px; color:#fff; border-radius:4px;'>15, 20</div><div class='bg-blue' style='padding:5px 12px; color:#fff; border-radius:4px;'>36, 48</div><div class='bg-blue' style='padding:5px 12px; color:#fff; border-radius:4px;'>12, 7</div><div class='bg-blue' style='padding:5px 12px; color:#fff; border-radius:4px;'>121, 44</div><div class='bg-blue' style='padding:5px 12px; color:#fff; border-radius:4px;'>39, 65</div></div>",
    "ex": [
      {
        "i": "arr = [[15,20],[36,48],[12,7],[121,44],[39,65]], N = 5",
        "o": "13",
        "note": "각 쌍의 최대공약수는 5,12,1,11,13 → 가장 큰 값 13"
      },
      {
        "i": "arr = [[356,78],[154,122],[38,190],[44,188],[365,245]], N = 5",
        "o": "38"
      }
    ],
    "starter": "#다음과 같이 import를 사용할 수 있습니다.\n#import math\n\ndef solution(arr, N):\n    answer = 0\n    for i in range(N):\n        a, b = arr[i]\n        c = gcd(a, b)\n        if c > answer:\n            answer = c\n\n    return answer\n\n\ndef gcd(a, b):\n    if @@@:\n        return @@@\n    else:\n        return @@@\n\n# 아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니 위의 코드만 수정하세요.\narr1 = [[15,20],[36,48],[12,7],[121,44],[39,65]]\nN1 = 5\nret1 = solution(arr1, N1)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret1, \"입니다.\")\n\narr2 = [[356,78],[154,122],[38,190],[44,188],[365,245]]\nN2 = 5\nret2 = solution(arr2, N2)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret2, \"입니다.\")\n\n\n",
    "sol": "def solution(arr, N):\n    answer = 0\n    for i in range(N):\n        a, b = arr[i]\n\n        c = gcd(a, b)\n        # print(c)\n        if c > answer:\n            answer = c\n\n    return answer\n\n\ndef gcd(a, b):\n    if b == 0:\n        return a\n    else:\n        return gcd(b, a % b)",
    "tests": [
      {
        "call": "solution([[15,20],[36,48],[12,7],[121,44],[39,65]], 5)",
        "o": "13"
      },
      {
        "call": "solution([[356,78],[154,122],[38,190],[44,188],[365,245]], 5)",
        "o": "38"
      }
    ]
  },
  {
    "set": "K",
    "title": "정사각형 스티커로 채울 수 있는지 판별하기",
    "func": true,
    "label": "빈칸 채우기 (@@@)",
    "blank": true,
    "desc": "10×10 박스 표면에 표시된 영역에 2×2 이상 크기의 정사각형 스티커만 사용해서 정확히 다 붙일 수 있는지 판별하려 합니다. 표시된 영역은 항상 채워진 직사각형 또는 정사각형 모양입니다.\n\n박스 정보 arr가 매개변수로 주어질 때, 정사각형 스티커로 전부 붙일 수 있으면 1, 없으면 0을 return하도록 solution 함수를 작성하려 합니다. @@@ 빈칸을 채워 코드를 완성하세요.\n\n[매개변수] arr는 10×10 크기의 0/1 2차원 리스트\n\n💡 힌트: (i, j)에서 변의 길이가 w인 정사각형이 모두 1로 채워져 있는지 확인하려면 i부터 i+w-1까지, j부터 j+w-1까지 모두 검사해야 해요. range의 끝은 어디여야 할까요?",
    "img": "<style>.s-m td{width:18px; height:16px; border:1px solid #ddd; text-align:center; font-size:9px; color:#aaa; background:#fff;} .sb{background:#3498db !important; color:#fff !important;} .sr{background:#ff4d4d !important; color:#fff !important;}</style>\n<table class='s-m' style='margin:10px auto;'>\n<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>\n<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>\n<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td class='sb'>1</td><td class='sb'>1</td><td class='sb'>1</td><td class='sb'>1</td></tr>\n<tr><td>0</td><td>0</td><td class='sb'>1</td><td class='sb'>1</td><td class='sb'>1</td><td>0</td><td class='sb'>1</td><td class='sb'>1</td><td class='sb'>1</td><td class='sb'>1</td></tr>\n<tr><td>0</td><td>0</td><td class='sb'>1</td><td class='sb'>1</td><td class='sb'>1</td><td>0</td><td class='sb'>1</td><td class='sb'>1</td><td class='sb'>1</td><td class='sb'>1</td></tr>\n<tr><td>0</td><td>0</td><td class='sb'>1</td><td class='sb'>1</td><td class='sb'>1</td><td>0</td><td class='sb'>1</td><td class='sb'>1</td><td class='sb'>1</td><td class='sb'>1</td></tr>\n<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>\n<tr><td>0</td><td>0</td><td>0</td><td class='sr'>1</td><td class='sr'>1</td><td class='sr'>1</td><td class='sr'>1</td><td>0</td><td>0</td><td>0</td></tr>\n<tr><td>0</td><td>0</td><td>0</td><td class='sr'>1</td><td class='sr'>1</td><td class='sr'>1</td><td class='sr'>1</td><td>0</td><td>0</td><td>0</td></tr>\n<tr><td>0</td><td>0</td><td>0</td><td class='sr'>1</td><td class='sr'>1</td><td class='sr'>1</td><td class='sr'>1</td><td>0</td><td>0</td><td>0</td></tr>\n</table>",
    "ex": [
      {
        "i": "arr = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,1],[0,0,1,1,1,0,1,1,1,1],[0,0,1,1,1,0,1,1,1,1],[0,0,1,1,1,0,1,1,1,1],[0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,0,0,0]]",
        "o": "0",
        "note": "빨간 영역은 정사각형 스티커만으로 채울 수 없는 모양"
      },
      {
        "i": "arr = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1],[0,1,1,1,1,1,0,1,1,1],[0,1,1,1,1,1,0,1,1,1],[0,1,1,1,1,1,0,1,1,1],[0,1,1,1,1,1,0,1,1,1],[0,1,1,1,1,1,0,1,1,1],[0,1,1,1,1,0,0,0,0,0],[0,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]",
        "o": "1",
        "note": "5×5, 2×2, 2×2 스티커로 모두 채울 수 있음"
      }
    ],
    "starter": "#다음과 같이 import를 사용할 수 있습니다.\n#import math\n\ndef solution(arr):\n    answer = 1\n    N = 10\n\n    for i in range(N):\n        for j in range(N):\n            if arr[i][j] == 1:\n                length = 0\n                for w in range(2, 11):\n                    is_square = True\n                    for di in range(i, @@@):\n                        for dj in range(j, @@@):\n                            if @@@:\n                                is_square = False\n                                break\n                        if not is_square:\n                            break\n\n                    if is_square:\n                        length = w\n                    else:\n                        break\n\n                if length > 1:\n                    for di in range(i, @@@):\n                        for dj in range(j, @@@):\n                            arr[di][dj] = 0\n\n    for i in range(N):\n        for j in range(N):\n            if arr[i][j] == 1:\n                return 0\n\n    return 1\n\n# 아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니 위의 코드만 수정하세요.\narr1 = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1], [0, 0, 1, 1, 1, 0, 1, 1, 1, 1], [0, 0, 1, 1, 1, 0, 1, 1, 1, 1], [0, 0, 1, 1, 1, 0, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 0, 0, 0]]\nret1 = solution(arr1)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret1, \"입니다.\")\n\narr2 = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0, 1, 1, 1], [0, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]\nret2 = solution(arr2)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret2, \"입니다.\")\n\narr3 = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0, 0, 1, 1], [0, 1, 1, 1, 1, 1, 0, 0, 1, 1], [0, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0, 0, 0]]\nret3 = solution(arr3)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret3, \"입니다.\")\n\n\n",
    "sol": "def solution(arr):\n    answer = 1\n    N = 10\n\n    for i in range(N):\n        for j in range(N):\n            if arr[i][j] == 1:\n                length = 0\n                for w in range(2, 11):\n                    is_square = True\n                    for di in range(i, i + w):\n                        for dj in range(j, j + w):\n                            if di >= N or dj >= N or arr[di][dj] == 0:\n                                is_square = False\n                                break\n                        if not is_square:\n                            break\n\n                    if is_square:\n                        length = w\n                    else:\n                        break\n\n                if length > 1:\n                    for di in range(i, i + length):\n                        for dj in range(j, j + length):\n                            arr[di][dj] = 0\n\n    for i in range(N):\n        for j in range(N):\n            if arr[i][j] == 1:\n                return 0\n\n    return 1",
    "tests": [
      {
        "call": "solution([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1], [0, 0, 1, 1, 1, 0, 1, 1, 1, 1], [0, 0, 1, 1, 1, 0, 1, 1, 1, 1], [0, 0, 1, 1, 1, 0, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 0, 0, 0]])",
        "o": "0"
      },
      {
        "call": "solution([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0, 1, 1, 1], [0, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]])",
        "o": "1"
      },
      {
        "call": "solution([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0, 0, 1, 1], [0, 1, 1, 1, 1, 1, 0, 0, 1, 1], [0, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0, 0, 0]])",
        "o": "1"
      }
    ]
  },
  {
    "set": "K",
    "title": "마지막으로 젤리 받은 아이 찾기",
    "func": true,
    "label": "직접 작성",
    "desc": "N명의 아이들이 순서대로 자기가 원하는 젤리 개수를 적어냈고, 총 J개의 젤리가 있습니다. 1번 아이부터 순서대로 원하는 만큼 젤리를 나눠주고, N번 아이 다음엔 다시 1번 아이부터 반복합니다. 더 이상 젤리가 없으면 멈추며(마지막 아이는 남은 만큼만 받을 수도 있음), 이때 마지막으로 젤리를 받은 아이의 번호를 구합니다.\n\n아이들이 원하는 젤리 수 리스트 arr, 아이들 수 N, 총 젤리 수 J가 매개변수로 주어질 때, 마지막으로 젤리를 받은 아이의 번호를 return하도록 solution 함수를 작성해 주세요.\n\n[매개변수] 2≤N≤10, 1≤J≤1000, 아이 1명이 원하는 젤리 수는 1~20",
    "img": "<div style='width: 100%; max-width: 420px; margin: 20px auto; overflow-x: auto;'>\n  <table style='width: 100%; table-layout: fixed; border: 0 !important; border-collapse: separate; border-spacing: 6px; background: transparent;'>\n    <tr>\n      <!-- 외부 칸의 모든 테두리와 아웃라인을 제거 -->\n      <td style='border: 0 !important; padding: 0; vertical-align: top; outline: none;'>\n        <table style='width: 100%; border: 1.5px solid #E67E22; border-radius: 12px; overflow: hidden; border-spacing: 0; border-collapse: collapse;'>\n          <tr><td style='background: #F39C12; color: white; text-align: center; font-weight: bold; padding: 6px 0; font-size: 13px; border: none;'>1</td></tr>\n          <tr><td style='background: #FDF2E9; text-align: center; padding: 15px 0; border: none;'>\n            <span style='font-size: 32px; display: block; margin-bottom: 5px;'>🍮</span>\n            <span style='font-size: 14px; color: #d35400; font-weight: 800;'>x7</span>\n          </td></tr>\n        </table>\n      </td>\n      <td style='border: 0 !important; padding: 0; vertical-align: top; outline: none;'>\n        <table style='width: 100%; border: 1.5px solid #E67E22; border-radius: 12px; overflow: hidden; border-spacing: 0; border-collapse: collapse;'>\n          <tr><td style='background: #F39C12; color: white; text-align: center; font-weight: bold; padding: 6px 0; font-size: 13px; border: none;'>2</td></tr>\n          <tr><td style='background: #FDF2E9; text-align: center; padding: 15px 0; border: none;'>\n            <span style='font-size: 32px; display: block; margin-bottom: 5px;'>🍮</span>\n            <span style='font-size: 14px; color: #d35400; font-weight: 800;'>x5</span>\n          </td></tr>\n        </table>\n      </td>\n      <td style='border: 0 !important; padding: 0; vertical-align: top; outline: none;'>\n        <table style='width: 100%; border: 1.5px solid #E67E22; border-radius: 12px; overflow: hidden; border-spacing: 0; border-collapse: collapse;'>\n          <tr><td style='background: #F39C12; color: white; text-align: center; font-weight: bold; padding: 6px 0; font-size: 13px; border: none;'>3</td></tr>\n          <tr><td style='background: #FDF2E9; text-align: center; padding: 15px 0; border: none;'>\n            <span style='font-size: 32px; display: block; margin-bottom: 5px;'>🍮</span>\n            <span style='font-size: 14px; color: #d35400; font-weight: 800;'>x2</span>\n          </td></tr>\n        </table>\n      </td>\n      <td style='border: 0 !important; padding: 0; vertical-align: top; outline: none;'>\n        <table style='width: 100%; border: 1.5px solid #E67E22; border-radius: 12px; overflow: hidden; border-spacing: 0; border-collapse: collapse;'>\n          <tr><td style='background: #F39C12; color: white; text-align: center; font-weight: bold; padding: 6px 0; font-size: 13px; border: none;'>4</td></tr>\n          <tr><td style='background: #FDF2E9; text-align: center; padding: 15px 0; border: none;'>\n            <span style='font-size: 32px; display: block; margin-bottom: 5px;'>🍮</span>\n            <span style='font-size: 14px; color: #d35400; font-weight: 800;'>x9</span>\n          </td></tr>\n        </table>\n      </td>\n      <td style='border: 0 !important; padding: 0; vertical-align: top; outline: none;'>\n        <table style='width: 100%; border: 1.5px solid #E67E22; border-radius: 12px; overflow: hidden; border-spacing: 0; border-collapse: collapse;'>\n          <tr><td style='background: #F39C12; color: white; text-align: center; font-weight: bold; padding: 6px 0; font-size: 13px; border: none;'>5</td></tr>\n          <tr><td style='background: #FDF2E9; text-align: center; padding: 15px 0; border: none;'>\n            <span style='font-size: 32px; display: block; margin-bottom: 5px;'>🍮</span>\n            <span style='font-size: 14px; color: #d35400; font-weight: 800;'>x3</span>\n          </td></tr>\n        </table>\n      </td>\n      <td style='border: 0 !important; padding: 0; vertical-align: top; outline: none;'>\n        <table style='width: 100%; border: 1.5px solid #E67E22; border-radius: 12px; overflow: hidden; border-spacing: 0; border-collapse: collapse;'>\n          <tr><td style='background: #F39C12; color: white; text-align: center; font-weight: bold; padding: 6px 0; font-size: 13px; border: none;'>6</td></tr>\n          <tr><td style='background: #FDF2E9; text-align: center; padding: 15px 0; border: none;'>\n            <span style='font-size: 32px; display: block; margin-bottom: 5px;'>🍮</span>\n            <span style='font-size: 14px; color: #d35400; font-weight: 800;'>x4</span>\n          </td></tr>\n        </table>\n      </td>\n    </tr>\n  </table>\n</div>",
    "ex": [
      {
        "i": "arr = [7, 5, 2, 9, 3, 4], N = 6, J = 80",
        "o": "4",
        "note": "모두 한 바퀴(30개)씩 두 번 나눠주면 20개 남고, 1·2·3번 아이가 받은 후 4번 아이가 남은 7개(9개 중 일부)를 받고 젤리가 떨어짐"
      },
      {
        "i": "arr = [4, 11, 6, 5, 7, 1, 2, 9, 15], N = 9, J = 444",
        "o": "4"
      },
      {
        "i": "arr = [1, 3, 1, 3, 1], N = 5, J = 131",
        "o": "3"
      }
    ],
    "starter": "#다음과 같이 import를 사용할 수 있습니다.\n#import math\n\ndef solution(arr, N, J):\n    #여기에 코드를 작성해주세요.\n    answer = 0\n    return answer\n\n# 아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니 위의 코드만 수정하세요.\narr1 = [7, 5, 2, 9, 3, 4]\nN1 = 6\nJ1 = 80\nret1 = solution(arr1, N1, J1)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret1, \"입니다.\")\n\narr2 = [4, 11, 6, 5, 7, 1, 2, 9, 15]\nN2 = 9\nJ2 = 444\nret2 = solution(arr2, N2, J2)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret2, \"입니다.\")\n\narr3 = [1, 3, 1, 3, 1]\nN3 = 5\nJ3 = 131\nret3 = solution(arr3, N3, J3)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret3, \"입니다.\")\n\n\n",
    "sol": "def solution(arr, N, J):\n    now = 0\n\n    while J > 0:\n        eat = arr.pop(0)\n        J -= eat\n        arr.append(eat)\n        now += 1\n\n        if now > N:\n            now = 1\n\n    return now",
    "tests": [
      {
        "call": "solution([7, 5, 2, 9, 3, 4], 6, 80)",
        "o": "4"
      },
      {
        "call": "solution([4, 11, 6, 5, 7, 1, 2, 9, 15], 9, 444)",
        "o": "4"
      },
      {
        "call": "solution([1, 3, 1, 3, 1], 5, 131)",
        "o": "3"
      }
    ]
  },
  {
    "set": "K",
    "title": "방 순회 최소 체력 소모 구하기",
    "func": true,
    "label": "직접 작성",
    "desc": "1번 방에서 출발해 N개의 방을 정확히 한 번씩 방문하고 다시 1번 방으로 돌아오는 경로 중, 소모되는 체력이 가장 적은 경로를 찾으려 합니다. 방 사이를 이동할 때 소모되는 체력은 방향에 따라 다를 수 있습니다.\n\n각 방 사이 이동 체력 소모 정보가 담긴 2차원 배열 arr와 방의 개수 N이 매개변수로 주어질 때, 모든 방을 순회하고 돌아오는 데 필요한 최소 체력 소모량을 return하도록 solution 함수를 작성해 주세요. (외판원 순회 문제 - 모든 경로를 시도해 보며 최솟값을 찾아보세요.)\n\n[매개변수] 2≤N≤10, 이동 체력 소모는 1~100",
    "img": "<div style='width:100%; overflow-x:auto; margin:15px 0;'><svg width='100%' viewBox='0 0 580 290' xmlns='http://www.w3.org/2000/svg'><defs><marker id='arr' viewBox='0 0 10 10' refX='8' refY='5' markerWidth='5' markerHeight='5' orient='auto-start-reverse'><path d='M2 1L8 5L2 9' fill='none' stroke='context-stroke' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></marker></defs><rect x='90' y='0' width='120' height='44' fill='#3498db'/><rect x='210' y='0' width='62' height='44' fill='#3498db'/><rect x='272' y='0' width='62' height='44' fill='#3498db'/><rect x='334' y='0' width='62' height='44' fill='#3498db'/><rect x='396' y='0' width='62' height='44' fill='#3498db'/><rect x='458' y='0' width='62' height='44' fill='#3498db'/><rect x='90' y='44' width='120' height='44' fill='#3498db'/><rect x='90' y='88' width='120' height='44' fill='#3498db'/><rect x='90' y='132' width='120' height='44' fill='#3498db'/><rect x='90' y='176' width='120' height='44' fill='#3498db'/><rect x='90' y='220' width='120' height='44' fill='#3498db'/><rect x='210' y='44' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='272' y='44' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='334' y='44' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='396' y='44' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='458' y='44' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='210' y='88' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='272' y='88' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='334' y='88' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='396' y='88' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='458' y='88' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='210' y='132' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='272' y='132' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='334' y='132' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='396' y='132' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='458' y='132' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='210' y='176' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='272' y='176' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='334' y='176' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='396' y='176' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='458' y='176' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='210' y='220' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='272' y='220' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='334' y='220' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='396' y='220' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><rect x='458' y='220' width='62' height='44' fill='#ddeef9' stroke='#3498db' stroke-width='0.5'/><text x='150' y='22' text-anchor='middle' font-size='12' font-weight='bold' fill='white' dominant-baseline='central'>방 번호</text><text x='241' y='22' text-anchor='middle' font-size='14' font-weight='bold' fill='white' dominant-baseline='central'>1</text><text x='303' y='22' text-anchor='middle' font-size='14' font-weight='bold' fill='white' dominant-baseline='central'>2</text><text x='365' y='22' text-anchor='middle' font-size='14' font-weight='bold' fill='white' dominant-baseline='central'>3</text><text x='427' y='22' text-anchor='middle' font-size='14' font-weight='bold' fill='white' dominant-baseline='central'>4</text><text x='489' y='22' text-anchor='middle' font-size='14' font-weight='bold' fill='white' dominant-baseline='central'>5</text><text x='150' y='66' text-anchor='middle' font-size='14' font-weight='bold' fill='white' dominant-baseline='central'>1</text><text x='150' y='110' text-anchor='middle' font-size='14' font-weight='bold' fill='white' dominant-baseline='central'>2</text><text x='150' y='154' text-anchor='middle' font-size='14' font-weight='bold' fill='white' dominant-baseline='central'>3</text><text x='150' y='198' text-anchor='middle' font-size='14' font-weight='bold' fill='white' dominant-baseline='central'>4</text><text x='150' y='242' text-anchor='middle' font-size='14' font-weight='bold' fill='white' dominant-baseline='central'>5</text><text x='241' y='66' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>0</text><text x='241' y='110' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>4</text><text x='241' y='154' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>62</text><text x='241' y='198' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>95</text><text x='241' y='242' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>16</text><text x='303' y='66' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>25</text><text x='303' y='110' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>0</text><text x='303' y='154' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>19</text><text x='303' y='198' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>36</text><text x='303' y='242' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>41</text><text x='365' y='66' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>7</text><text x='365' y='110' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>31</text><text x='365' y='154' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>0</text><text x='365' y='198' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>51</text><text x='365' y='242' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>66</text><text x='427' y='66' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>56</text><text x='427' y='110' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>88</text><text x='427' y='154' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>71</text><text x='427' y='198' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>0</text><text x='427' y='242' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>73</text><text x='489' y='66' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>12</text><text x='489' y='110' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>45</text><text x='489' y='154' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>23</text><text x='489' y='198' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>44</text><text x='489' y='242' text-anchor='middle' font-size='13' fill='#222' dominant-baseline='central'>0</text><circle cx='365' cy='66' r='15' fill='none' stroke='#1a5fb0' stroke-width='2'/><text x='365' y='66' text-anchor='middle' font-size='13' fill='#1a5fb0' font-weight='bold' dominant-baseline='central'>7</text><circle cx='241' cy='110' r='15' fill='none' stroke='#1a5fb0' stroke-width='2'/><text x='241' y='110' text-anchor='middle' font-size='13' fill='#1a5fb0' font-weight='bold' dominant-baseline='central'>4</text><circle cx='489' cy='154' r='15' fill='none' stroke='#1a5fb0' stroke-width='2'/><text x='489' y='154' text-anchor='middle' font-size='13' fill='#1a5fb0' font-weight='bold' dominant-baseline='central'>23</text><circle cx='303' cy='198' r='15' fill='none' stroke='#1a5fb0' stroke-width='2'/><text x='303' y='198' text-anchor='middle' font-size='13' fill='#1a5fb0' font-weight='bold' dominant-baseline='central'>36</text><circle cx='427' cy='242' r='15' fill='none' stroke='#1a5fb0' stroke-width='2'/><text x='427' y='242' text-anchor='middle' font-size='13' fill='#1a5fb0' font-weight='bold' dominant-baseline='central'>73</text><path d='M190,80 Q200,80 200,110 Q200,140 190,140' fill='none' stroke='#d63030' stroke-width='2.2' marker-end='url(#arr)'/><path d='M196,168 Q208,168 208,198 Q208,228 196,228' fill='none' stroke='#d63030' stroke-width='2.2' marker-end='url(#arr)'/><path d='M110,252 Q100,252 100,220 Q100,196 110,192' fill='none' stroke='#d63030' stroke-width='2.2' marker-end='url(#arr)'/><path d='M104,184 Q92,184 92,154 Q92,124 104,124' fill='none' stroke='#d63030' stroke-width='2.2' marker-end='url(#arr)'/><path d='M110,100 Q100,100 100,80 Q100,60 110,60' fill='none' stroke='#d63030' stroke-width='2.2' marker-end='url(#arr)'/></svg></div>",
    "ex": [
      {
        "i": "arr = [[0,25,7,56,12],[4,0,31,88,45],[62,19,0,71,23],[95,36,51,0,44],[16,41,66,73,0]], N = 5",
        "o": "143",
        "note": "1→3→5→4→2→1 순서로 이동하면 7+23+73+36+4=143"
      },
      {
        "i": "arr = [[0,11,24,98,46],[53,0,29,62,75],[82,36,0,5,18],[42,54,33,0,21],[9,54,92,86,0]], N = 5",
        "o": "75",
        "note": "최소 경로 1-2-3-4-5-1"
      },
      {
        "i": "arr = [[0,18,34,22],[48,0,55,61],[18,7,0,15],[71,86,94,0]], N = 4",
        "o": "159",
        "note": "최소 경로 1-2-3-4-1"
      }
    ],
    "starter": "#다음과 같이 import를 사용할 수 있습니다.\n#import math\n\ndef solution(arr, N):\n    #여기에 코드를 작성해주세요.\n    answer = 0\n    return answer\n\n# 아래는 테스트케이스 출력을 해보기 위한 코드입니다. 아래에는 잘못된 부분이 없으니 위의 코드만 수정하세요.\narr1 = [[0, 25, 7, 56, 12], [4, 0, 31, 88, 45], [62, 19, 0, 71, 23], [95, 36, 51, 0, 44], [16, 41, 66, 73, 0]]\nN1 = 5\nret1 = solution(arr1, N1)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret1, \"입니다.\")\n\narr2 = [[0, 11, 24, 98, 46], [53, 0, 29, 62, 75], [82, 36, 0, 5, 18], [42, 54, 33, 0, 21], [9, 54, 92, 86, 0]]\nN2 = 5\nret2 = solution(arr2, N2)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret2, \"입니다.\")\n\narr3 = [[0, 18, 34, 22], [48, 0, 55, 61], [18, 7, 0, 15], [71, 86, 94, 0]]\nN3 = 4\nret3 = solution(arr3, N3)\n# [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.\nprint(\"solution 함수의 반환 값은\", ret3, \"입니다.\")\n\n\n",
    "sol": "min_value = 10000\nrooms = []\nvisited = []\nlength = 0\n\n\ndef patrol(now, e_sum):\n    global min_value\n\n    if e_sum < min_value:\n        if 0 not in visited:\n            min_value = min(min_value, e_sum + rooms[now][0])\n            return\n\n        for next_room in range(length):\n            if next_room != now and visited[next_room] == 0:\n                visited[next_room] = 1\n                patrol(next_room, e_sum + rooms[now][next_room])\n                visited[next_room] = 0\n\n\ndef solution(arr, N):\n    global length, rooms, visited, min_value\n    visited = [0] * N\n    visited[0] = 1\n    length = N\n    rooms = arr\n    min_value = 10000\n    patrol(0, 0)\n\n    return min_value",
    "tests": [
      {
        "call": "solution([[0, 25, 7, 56, 12], [4, 0, 31, 88, 45], [62, 19, 0, 71, 23], [95, 36, 51, 0, 44], [16, 41, 66, 73, 0]], 5)",
        "o": "143"
      },
      {
        "call": "solution([[0, 11, 24, 98, 46], [53, 0, 29, 62, 75], [82, 36, 0, 5, 18], [42, 54, 33, 0, 21], [9, 54, 92, 86, 0]], 5)",
        "o": "75"
      },
      {
        "call": "solution([[0, 18, 34, 22], [48, 0, 55, 61], [18, 7, 0, 15], [71, 86, 94, 0]], 4)",
        "o": "159"
      }
    ]
  }
];
