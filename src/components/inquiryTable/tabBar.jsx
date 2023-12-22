// TabBar.js
function TabBar({ tabIndex, onTabChange }) {
  return (
    <div
      className="bg-blue-600 flex justify-around items-center p-2"
      role="tablist">
      <button
        role="tab"
        aria-selected={tabIndex === 0}
        aria-controls="inquiry-tab"
        data-testid="inquiry-tab"
        onClick={() => onTabChange(0)}
        className={`text-lg font-bold rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-white ${
          tabIndex === 0 ? "" : "opacity-70"
        }`}>
        문의하기
      </button>
      <div className="border-r mt-2 border-white h-4"></div>
      <button
        role="tab"
        aria-selected={tabIndex === 1}
        aria-controls="my-inquiry-tab"
        data-testid="my-inquiry-tab"
        onClick={() => onTabChange(1)}
        className={`font-bold text-lg rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-white ${
          tabIndex === 1 ? "" : "opacity-70"
        }`}>
        내 문의내역
      </button>
    </div>
  );
}

export default TabBar;
