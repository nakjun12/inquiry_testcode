import { http, HttpResponse } from "msw";

const allInquire = new Map();
let nextId = 1; // Unique ID for each post

function createNewInquiry(newInquiry) {
  const id = nextId++;
  const timestamp = new Date().toISOString();
  const isWaitingForResponse = false;
  return { ...newInquiry, id, timestamp, isWaitingForResponse };
}

// 공통 응답 처리 함수
function handleResponse(response, status = 200) {
  return response
    ? HttpResponse.json(response, { status })
    : HttpResponse(null, { status });
}

export const handlers = [
  http.get("/inquire", () => handleResponse(Array.from(allInquire.values()))),

  http.post("/inquire", async ({ request }) => {
    const newInquiry = await request.json();
    const inquiry = createNewInquiry(newInquiry);
    allInquire.set(inquiry.id, inquiry);
    return handleResponse(inquiry, 201);
  }),

  // 특정 문의 조회
  http.get("/inquire/:id", ({ params }) => {
    const inquiry = allInquire.get(Number(params.id));
    return handleResponse(inquiry, inquiry ? 200 : 404);
  }),

  http.delete("/inquire/:id", ({ params }) => {
    const exists = allInquire.delete(Number(params.id));
    return handleResponse(null, exists ? 204 : 404);
  })
];
