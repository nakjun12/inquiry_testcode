/**
 * 카테고리 선택을 위한 드롭다운 컴포넌트입니다.
 * 사용자가 선택한 카테고리에 따라 옵션이 동적으로 변경됩니다.
 *
 * @param {Object} props - 컴포넌트 속성
 * @param {Object} props.InquiryMenu - 카테고리 목록이 포함된 객체
 * @param {string} props.questionCategory - 현재 선택된 카테고리
 * @param {Function} props.handleQuestionCategoryChange - 카테고리 변경 시 호출될 핸들러 함수
 */
export default function QuestionCategoryDropdown({
  InquiryMenu,
  questionCategory,
  handleQuestionCategoryChange
}) {
  return (
    <select
      className="p-2 border rounded-lg mr-2 text-sm"
      value={questionCategory}
      onChange={handleQuestionCategoryChange}
      data-testid="questionCategory-dropdown">
      {/* 기본 옵션 */}
      <option value="">서비스</option>
      {/* InquiryMenu 객체의 키를 사용하여 옵션 생성 */}
      {Object.keys(InquiryMenu).map((el) => (
        <option key={el} value={el}>
          {el}
        </option>
      ))}
    </select>
  );
}
