/**
 * 탭 버튼을 표시하는 컴포넌트입니다.
 *
 * @param {Object} props - 컴포넌트의 props
 *   @param {boolean} props.isSelected - 이 탭이 현재 선택된 상태인지 나타내는 부울 값
 *   @param {string} props.id - 탭의 고유 식별자
 *   @param {string} props.label - 탭에 표시될 레이블 문자열
 *   @param {Function} props.onTabChange - 탭 변경 시 실행될 함수
 */
function Tab({ isSelected, id, label, onTabChange }) {
  // 탭 버튼의 JSX 구조를 반환합니다.
  // 현재 선택된 탭의 경우, opacity 클래스를 적용하지 않습니다.
  return (
    <button
      role="tab"
      aria-selected={isSelected}
      aria-controls={id}
      data-testid={id}
      onClick={onTabChange}
      className={`font-bold text-lg rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-white ${
        isSelected ? "" : "opacity-70"
      }`}>
      {label}
    </button>
  );
}

export default Tab;
