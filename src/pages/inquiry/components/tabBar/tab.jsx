// Tab.js
function Tab({ isSelected, id, label, onTabChange }) {
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
