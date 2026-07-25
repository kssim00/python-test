#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
COS Pro 튜터 게시용 HTML 빌드 스크립트
--------------------------------------
source/ 폴더의 아래 4개 파일을 합쳐서, 게시판에 올릴 수 있는
단일 HTML 파일(gzip+base64 압축)을 만듭니다.

  source/data.js        <- 문제를 추가할 때 이 파일만 수정하면 됨
  source/app.js         <- 앱 로직 (건드릴 필요 없음)
  source/style.css      <- 화면 스타일 (건드릴 필요 없음)
  source/approot.html   <- 화면 뼈대 HTML (건드릴 필요 없음)
  source/wrapper_prefix.html / wrapper_suffix.html <- 최종 HTML 틀

사용법:
  python3 build.py [출력파일명.html]
  (출력파일명 생략 시 dist/cospro-tutor.html 로 저장)

※ 버전 규칙: 기능을 추가하거나 수정할 때마다 버전 번호를 하나씩 올릴 것.
   표시 위치 3곳 (모두 "숫자만" 표시, "(게시용)" 등 접미사 없이):
     - source/approot.html  : header의 <b>v34</b>
     - source/app.js        : "✅ 실행 엔진 정상 (v34)" 메시지
     - source/wrapper_prefix.html : 상단 주석의 (v34)
   현재 버전: v34 (2026-07-23, 힌트 이미지 여러 장 지원 — 한 창 안에서 이전/다음 버튼으로 넘겨봄)
"""
import gzip
import base64
import sys
import os

BASE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(BASE, "source")
DATA_JS = os.path.join(BASE, "data.js")


def read(name):
    with open(os.path.join(SRC, name), encoding="utf-8") as f:
        return f.read()


def main():
    out_path = sys.argv[1] if len(sys.argv) > 1 else os.path.join(BASE, "dist", "cospro-tutor.html")
    os.makedirs(os.path.dirname(out_path), exist_ok=True)

    css = read("style.css")
    approot_html = read("approot.html")
    with open(DATA_JS, encoding="utf-8") as f:
        data_js = f.read()
    app_js = read("app.js")

    full_js = data_js + "\n" + app_js
    payload = "".join([css, approot_html, full_js])

    compressed = gzip.compress(payload.encode("utf-8"), mtime=0)
    b64 = base64.b64encode(compressed).decode("ascii")

    prefix = read("wrapper_prefix.html")
    suffix = read("wrapper_suffix.html")

    with open(out_path, "w", encoding="utf-8") as f:
        f.write(prefix)
        f.write(b64)
        f.write(suffix)

    orig_data_len = len(data_js) + len(app_js)
    print(f"완료: {out_path}")
    print(f"  문제 수: (PROBLEMS 배열 확인은 data.js 참고)")
    print(f"  압축 전 크기: {len(payload):,} bytes")
    print(f"  압축 후 크기(base64): {len(b64):,} bytes")


if __name__ == "__main__":
    main()
