import { INQUIRY_MENU } from "@/util/dummy";
import { useRef, useState } from "react";
import useInquiryFormViewModel from "../../utils/hooks/useInquiryFormViewModel";
import CategoryDropdown from "./categoryDropdown";
import ContentInput from "./contentInput";
import SubCategoryDropdown from "./subCategoryDropdown";
import TitleInput from "./titleInput";

export default function InquiryForm({ onTabChange }) {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");

  const { handleSubmit } = useInquiryFormViewModel({
    category,
    subcategory,
    onTabChange
  });

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  // select 엘리먼트의 변경을 처리하는 함수입니다.
  const handleSubCategoryChange = (event) => {
    setSubcategory(event.target.value);
  };

  // 기타 이벤트 핸들러 필요에 따라 추가
  const selectCategoryArr = INQUIRY_MENU[category];

  return (
    <section data-testid="inquiry-form-panel">
      {/* 카테고리 드롭다운 */}
      <div className="p-4 font-bold">
        이용에 문제가 생기셨나요?
        <br />
        자주 묻는 질문에서 해결할 수 있어요!
      </div>

      <div className="flex justify-between mt-4 mx-2">
        <CategoryDropdown
          InquiryMenu={INQUIRY_MENU}
          category={category}
          handleCategoryChange={handleCategoryChange}
        />

        {/* 세부 카테고리 드롭다운 */}
        <SubCategoryDropdown
          subcategory={subcategory}
          selectCategoryArr={selectCategoryArr}
          handleSubCategoryChange={handleSubCategoryChange}
        />
      </div>
      {/* 제목 입력 필드 */}
      <TitleInput ref={titleRef} />

      {/* 내용 입력 필드 */}
      <ContentInput ref={contentRef} />
      {/* 제출 버튼 */}
      <div className="flex justify-center p-2">
        <button
          onClick={() => handleSubmit(titleRef, contentRef)}
          data-testid="submit-button"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-primary/90 h-10 px-4 py-2 bg-[#007bff] text-white w-full">
          문의하기
        </button>
      </div>
    </section>
  );
}
