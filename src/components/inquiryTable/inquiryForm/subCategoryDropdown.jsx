export default function SubCategoryDropdown({
  selectCategoryArr,
  subcategory,
  handleSubCategoryChange
}) {
  const isDisabled =
    !Array.isArray(selectCategoryArr) || selectCategoryArr.length === 0;
  return (
    <select
      className="p-2 border rounded-lg w-5/6 text-sm"
      value={subcategory}
      onChange={handleSubCategoryChange}
      data-testid="subcategory-dropdown"
      style={isDisabled ? { backgroundColor: "lightgray" } : {}}
      disabled={isDisabled}>
      <option value="">
        {selectCategoryArr?.length === 0
          ? "선택할 항목이 없습니다"
          : "문의할 항목을 선택해주세요"}
      </option>
      {Array.isArray(selectCategoryArr) &&
        selectCategoryArr.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
    </select>
  );
}
