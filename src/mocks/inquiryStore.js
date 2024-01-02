// Inquiry 데이터 저장소
const allInquire = new Map();
let nextId = 1; // Unique ID for each post

// 새로운 Inquiry 생성
export function createNewInquiry(newInquiry) {
  const id = nextId++;
  const registeredDate = new Date().toISOString();
  const answer = false;
  return { ...newInquiry, id, registeredDate, answer };
}

// 모든 Inquiry 조회
export function getAllInquiries() {
  return Array.from(allInquire.values());
}

// Inquiry 추가
export function addInquiry(newInquiry) {
  const inquiry = createNewInquiry(newInquiry);
  allInquire.set(inquiry.id, inquiry);
  return inquiry;
}

// 특정 Inquiry 조회
export function getInquiryById(id) {
  return allInquire.get(id);
}

// Inquiry 삭제
export function deleteInquiry(id) {
  return allInquire.delete(id);
}
