// TabBar.js
import Tab from "./tab";

function TabBar({ tabIndex, onTabChange }) {
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
