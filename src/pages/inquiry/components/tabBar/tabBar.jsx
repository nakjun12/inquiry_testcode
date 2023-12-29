import Tab from "./tab";

/**
 * 여러 탭을 포함하는 탭 바를 표시하는 컴포넌트입니다.
 *
 * @param {Object} props - 컴포넌트의 props
 *   @param {number} props.tabIndex - 현재 활성화된 탭의 인덱스
 *   @param {Function} props.onTabChange - 탭 변경 시 호출될 함수
 */
function TabBar({ tabIndex, onTabChange }) {
  // 탭 바의 JSX 구조를 반환합니다.
  // 각 탭은 현재 선택된 탭 여부에 따라 isSelected prop을 받습니다.
  return (
    <div
      className="bg-blue-600 flex justify-around items-center p-2"
      role="tablist">
      <Tab
        isSelected={tabIndex === 0}
        id="inquiry-tab"
        label="문의하기"
        onTabChange={() => onTabChange(0)}
      />
      <div className="border-r mt-2 border-white h-4" />
      <Tab
        isSelected={tabIndex === 1}
        id="my-inquiry-tab"
        label="내 문의내역"
        onTabChange={() => onTabChange(1)}
      />
    </div>
  );
}

export default TabBar;
