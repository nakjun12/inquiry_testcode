import { http, HttpResponse } from "msw";
import {
  addInquiry,
  deleteInquiry,
  getAllInquiries,
  getInquiryById
} from "./inquireStore";

// 공통 응답 처리 함수
function handleResponse(response, status = 200) {
  return response
    ? HttpResponse.json(response, { status })
    : new HttpResponse(null, { status });
}

// 각각의 핸들러 정의
const getInquiriesHandler = http.get("/inquire", () =>
  handleResponse(getAllInquiries())
);

const postInquiryHandler = http.post("/inquire", async ({ request }) => {
  const newInquiry = await request.json();
  const inquiry = addInquiry(newInquiry);
  return handleResponse(inquiry, 201);
});

const getInquiryByIdHandler = http.get("/inquire/:id", ({ params }) => {
  const inquiry = getInquiryById(Number(params.id));
  return handleResponse(inquiry, inquiry ? 200 : 404);
});

const deleteInquiryHandler = http.delete("/inquire/:id", ({ params }) => {
  const exists = deleteInquiry(Number(params.id));
  return handleResponse(null, exists ? 204 : 404);
});

// 핸들러들을 배열로 내보냄
export const handlers = [
  getInquiriesHandler,
  postInquiryHandler,
  getInquiryByIdHandler,
  deleteInquiryHandler
];
