import { formatShortWeekday } from "@/utils/helpers/dateUtils";

/**
 * 개별 문의 항목을 표시하는 컴포넌트입니다.
 *
 * @param {Object} props - 컴포넌트의 props
 *   @param {Object} props.inquiry - 표시할 문의 객체
 *     @param {string} props.inquiry.category - 문의의 카테고리
 *     @param {string} props.inquiry.title - 문의의 제목
 *     @param {string} props.inquiry.timestamp - 문의가 작성된 시간 (타임스탬프)
 *     @param {boolean} props.inquiry.isResponse - 답변 응답 여부
 *   @param {Function} props.onSelect - 문의 항목 선택 시 실행될 함수
 */
const InquiryListItem = ({ inquiry, onSelect }) => {
  // 문의 객체에서 필요한 정보를 추출합니다.
  const { category, title, timestamp, isResponse } = inquiry;

  // 타임스탬프를 짧은 형식의 날짜로 포매팅합니다.
  const formattedShortDate = formatShortWeekday(timestamp);

  // 답변 대기 상태에 따라 배지의 클래스를 결정합니다.
  const badgeClass = isResponse
    ? "px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium"
    : "px-3 py-1 bg-red-200 text-red-800 rounded-full text-sm font-medium";

  // 답변 대기 상태에 따라 버튼 텍스트를 설정합니다.
  const buttonText = isResponse ? "답변 완료" : "답변 대기";

  // 컴포넌트의 JSX 구조를 반환합니다.
  return (
    <button
      onClick={onSelect}
      className="flex justify-between items-center p-4 border-b w-full">
      <div>
        <div className="flex items-center">
          <span className={badgeClass}>{buttonText}</span>
          <div className="ml-2  text-gray-400 text-sm">
            {formattedShortDate}
          </div>
        </div>

        <div className="flex items-center font-bold mt-2">
          [{category}]
          <div className="ml-2 text-gray-800 font-medium">{title}</div>
        </div>
      </div>
      <div>
        <span className="text-gray-400 text-xl">&gt;</span>
      </div>
    </button>
  );
};

export default InquiryListItem;
