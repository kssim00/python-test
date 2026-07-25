/* ============================================================
   COS Pro 튜터 - AI 선생님 프록시 서버 (Cloudflare Worker)
   ------------------------------------------------------------
   역할: 학생 브라우저 → 이 서버 → Anthropic API
   API 키는 이 서버(Worker)에만 저장되고, 학생 화면(HTML)에는
   절대 노출되지 않습니다.

   [배포 방법]
   1. https://dash.cloudflare.com 무료 가입 (신용카드 필요 없음)
   2. 왼쪽 메뉴 Workers & Pages → Create → "Create Worker" 선택
   3. 아무 이름이나 입력 후 Deploy (일단 기본 코드로 배포됨)
   4. 배포된 Worker 편집 화면(Edit code)으로 들어가서
      아래 코드 전체를 복사해 기존 코드를 지우고 붙여넣기 → Save and Deploy
   5. Worker 설정(Settings) → Variables and Secrets → Add
      이름: ANTHROPIC_API_KEY
      값: 원장님의 실제 Anthropic API 키 (sk-ant-...)
      → 반드시 "Secret" 타입으로 저장 (Encrypt 체크)
   6. 화면 상단에 나오는 Worker 주소를 복사
      (예: https://cospro-proxy.내이름.workers.dev)
   7. cospro-tutor/source/app.js 맨 앞의
      PROXY_URL 값을 6번 주소로 바꾸고 빌드(build.py)
      → 이 부분은 Claude에게 "Worker 주소는 이거야: ..." 라고
        알려주시면 대신 수정해 드릴게요.

   [비용/남용 방지 참고]
   - Anthropic API는 호출한 만큼만 과금됩니다 (한 힌트당 매우 저렴).
   - 이 프록시 주소는 HTML 소스에 그대로 보이기 때문에, 누군가 악의적으로
     주소를 찾아내 반복 호출하면 비용이 발생할 수 있습니다.
   - Cloudflare 대시보드의 Security → WAF → Rate limiting rules 에서
     "분당 IP당 요청 수 제한" 규칙을 무료로 추가하는 것을 권장합니다.
   ============================================================ */

const ALLOWED_ORIGIN = "*"; // 필요하면 게시판 도메인으로 제한 가능 (예: "https://yourboard.com")
const MODEL = "claude-sonnet-5";
const MAX_TOKENS = 1000;

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders() });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", {
        status: 405,
        headers: corsHeaders(),
      });
    }

    let body;
    try {
      body = await request.json();
    } catch (e) {
      return new Response(JSON.stringify({ error: "invalid json" }), {
        status: 400,
        headers: { ...corsHeaders(), "Content-Type": "application/json" },
      });
    }

    if (!body || !Array.isArray(body.messages)) {
      return new Response(JSON.stringify({ error: "messages required" }), {
        status: 400,
        headers: { ...corsHeaders(), "Content-Type": "application/json" },
      });
    }

    try {
      const upstream = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: MAX_TOKENS,
          messages: body.messages,
        }),
      });

      const text = await upstream.text();
      return new Response(text, {
        status: upstream.status,
        headers: { ...corsHeaders(), "Content-Type": "application/json" },
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: String(e) }), {
        status: 500,
        headers: { ...corsHeaders(), "Content-Type": "application/json" },
      });
    }
  },
};
