import { QUESTION_INQUIRY_MENU } from "@/utils/constants/dummy";
import { useRef, useState } from "react";
import useInquiryFormViewModel from "../../utils/hooks/useInquiryFormViewModel";
import ContentInput from "./contentInput";
import QuestionCategoryDropdown from "./questionCategoryDropdown";
import QuestionDetailDropdown from "./questionDetailDropdown";
import TitleInput from "./titleInput";
/**
 * 문의 폼을 표시하는 컴포넌트입니다.
 * 사용자는 이 폼을 통해 문의 사항을 제출할 수 있습니다.
 *
 * @param {Object} props - 컴포넌트 속성
 * @param {Function} props.onTabChange - 탭 변경을 처리하는 함수
 */
export default function InquiryForm({ onTabChange }) {
  // 제목과 내용을 위한 ref 생성
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  // 카테고리와 서브카테고리 상태 관리
  const [questionCategory, setQuestionCategory] = useState("");
  const [questionDetail, setQuestionDetail] = useState("");

  // 문의 제출 핸들러
  const { handleInquiryFormSubmit } = useInquiryFormViewModel({
    questionCategory,
    questionDetail,
    onTabChange
  });

  // 카테고리 변경 핸들러
  const handleQuestionCategoryChange = (event) => {
    setQuestionCategory(event.target.value);
  };

  // 서브카테고리 변경 핸들러
  const handleQuestionDetailChange = (event) => {
    setQuestionDetail(event.target.value);
  };

  // 제출 버튼 클릭 핸들러
  const onSubmitClick = () => {
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    handleInquiryFormSubmit(title, content);
  };

  // 선택된 카테고리에 따라 서브카테고리 목록 결정
  const selectQuestionDetailArr = QUESTION_INQUIRY_MENU[questionCategory];

  return (
    <section data-testid="inquiry-form-panel">
      <div className="p-4 font-bold">
        이용에 문제가 생기셨나요?
        <br />
        자주 묻는 질문에서 해결할 수 있어요!
      </div>

      <div className="flex justify-between mt-4 mx-2">
        {/* 카테고리 드롭다운 */}
        <QuestionCategoryDropdown
          InquiryMenu={QUESTION_INQUIRY_MENU}
          questionCategory={questionCategory}
          handleQuestionCategoryChange={handleQuestionCategoryChange}
        />

        {/* 세부 카테고리 드롭다운 */}
        <QuestionDetailDropdown
          questionDetail={questionDetail}
          selectQuestionDetailArr={selectQuestionDetailArr}
          handleQuestionDetailChange={handleQuestionDetailChange}
        />
      </div>

      {/* 제목 입력 필드 */}
      <TitleInput ref={titleRef} />

      {/* 내용 입력 필드 */}
      <ContentInput ref={contentRef} />

      {/* 제출 버튼 */}
      <div className="flex justify-center p-2">
        <button
          onClick={onSubmitClick}
          data-testid="submit-button"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-primary/90 h-10 px-4 py-2 bg-[#007bff] text-white w-full">
          문의하기
        </button>
      </div>
    </section>
  );
}
