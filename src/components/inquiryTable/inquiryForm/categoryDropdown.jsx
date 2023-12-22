/* eslint-disable react/prop-types */
export default function CategoryDropdown({
  InquiryMenu,
  category,
  handleCategoryChange
}) {
  return (
    <select
      className="p-2 border rounded-lg mr-2 text-sm"
      value={category}
      onChange={handleCategoryChange}
      data-testid="category-dropdown">
      <option value="">서비스</option>
      {Object.keys(InquiryMenu).map((el) => (
        <option key={el} value={el}>
          {el}
        </option>
      ))}
    </select>
  );
}
