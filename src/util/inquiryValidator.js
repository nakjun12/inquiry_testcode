function validateInquiry({ openModal, category, subcategory, title, content }) {
  // 제목과 내용이 입력되었는지 확인
  if (!title || !content) {
    console.error("문의할 제목과 내용을 입력해주세요.");
    openModal("문의할 제목과 내용을 입력해주세요.", null);
    return false;
  }
  // 카테고리가 입력되었는지 확인
  if (!category) {
    console.error("문의할 카테고리를 선택해주세요.");
    openModal("문의할 카테고리를 선택해주세요.", null);
    return false;
  }
  // '차량 관제'나 '기타' 카테고리는 subcategory가 없어도 되지만, 다른 카테고리는 subcategory가 필요
  if (category !== "차량관제" && category !== "기타" && !subcategory) {
    console.error("문의할 하위 카테고리를 선택해주세요.");
    openModal("문의할 하위 카테고리를 선택해주세요.", null);
    return false;
  }

  return true; // 모든 검사를 통과했다면 true를 반환
}

export default validateInquiry;
