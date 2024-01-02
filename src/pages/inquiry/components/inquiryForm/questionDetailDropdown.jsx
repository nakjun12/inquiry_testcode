/**
 * 서브 카테고리 선택을 위한 드롭다운 컴포넌트입니다.
 * 주어진 카테고리 배열에 따라 드롭다운의 옵션을 동적으로 생성합니다.
 *
 * @param {Object} props - 컴포넌트의 props
 * @param {Array} props.selectQuestionDetailArr - 선택 가능한 서브 카테고리 목록
 * @param {string} props.questionDetail - 현재 선택된 서브 카테고리
 * @param {Function} props.handleQuestionDetailChange - 서브 카테고리 변경 시 호출될 함수
 */
export default function QuestionDetailDropdown({
  selectQuestionDetailArr,
  questionDetail,
  handleQuestionDetailChange
}) {
  // 드롭다운 활성/비활성 상태 결정
  const isDisabled =
    !Array.isArray(selectQuestionDetailArr) ||
    selectQuestionDetailArr.length === 0;

  // 선택 옵션의 텍스트 결정
  const defaultOptionText =
    selectQuestionDetailArr?.length === 0
      ? "선택할 항목이 없습니다"
      : "문의할 항목을 선택해주세요";

  return (
    <select
      className="p-2 border rounded-lg w-5/6 text-sm"
      value={questionDetail}
      onChange={handleQuestionDetailChange}
      data-testid="questionDetail-dropdown"
      style={isDisabled ? { backgroundColor: "lightgray" } : {}}
      disabled={isDisabled}>
      {/* 기본 옵션 */}
      <option value="">{defaultOptionText}</option>
      {/* 서브 카테고리 옵션들을 동적으로 생성 */}
      {Array.isArray(selectQuestionDetailArr) &&
        selectQuestionDetailArr.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
    </select>
  );
}
