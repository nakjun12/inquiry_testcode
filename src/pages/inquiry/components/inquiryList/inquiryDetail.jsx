import { formatLongWeekday } from "@/utils/helpers/dateUtils";

/**
 * 문의 상세 정보를 표시하는 컴포넌트입니다.
 *
 * @param {Object} props - 컴포넌트의 props
 *   @param {Object} props.inquiry - 문의 정보 객체
 *     @param {number} props.inquiry.id - 문의의 고유 식별자(ID)
 *     @param {string} props.inquiry.timestamp - 문의가 작성된 시간을 나타내는 타임스탬프
 *     @param {string} props.inquiry.title - 문의의 제목
 *     @param {boolean} props.inquiry.isResponse - 문의가 답변을 기다리고 있는지 여부를 나타내는 부울 값
 *     @param {string} props.inquiry.category - 문의가 속한 주 카테고리
 *     @param {string} [props.inquiry.subcategory] - 문의가 속한 부 카테고리 (선택 사항)
 *     @param {string} props.inquiry.content - 문의의 상세 내용
 *   @param {Function} props.onBack - 뒤로가기 버튼 클릭 시 호출되는 함수
 *   @param {Function} props.onDelete - 삭제 버튼 클릭 시 호출되는 함수
 */

const InquiryDetail = ({ inquiry, onBack, onDelete }) => {
  // inquiry 객체에서 필요한 속성들을 추출합니다.
  const { timestamp, title, isResponse, category, subcategory, content, id } =
    inquiry;

  // timestamp를 이용해 포맷된 날짜 문자열을 생성합니다.
  const formattedLongDate = formatLongWeekday(timestamp);

  // 답변 대기 상태에 따라 배지 스타일을 결정합니다.
  const badgeClasses = isResponse
    ? "bg-green-200 text-green-700"
    : "bg-red-200 text-red-700";

  // 답변 대기 상태에 따라 버튼 텍스트를 설정합니다.
  const buttonText = isResponse ? "답변 완료" : "답변 대기";

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <div className="mt-2">
        <span className="text-sm text-gray-500">{formattedLongDate}</span>
        <span className={`ml-2 px-2 py-1 text-sm rounded-full ${badgeClasses}`}>
          {buttonText}
        </span>
      </div>
      <div className="mt-4">
        <div className="text-gray-600">
          <strong>카테고리:</strong> {category}
          {subcategory && `> ${subcategory}`}
        </div>
        <div className="mt-2 text-gray-600">
          <strong>내용:</strong>
          <p className="mt-1 whitespace-pre-line">{content}</p>
        </div>
      </div>
      <div className="flex justify-around mt-8">
        <button
          onClick={onBack}
          className="bg-white text-gray-800 border border-gray-300 py-2 px-4 rounded shadow hover:bg-gray-50 transition duration-200 ease-in-out">
          뒤로가기
        </button>
        <button
          onClick={() => onDelete(id)}
          className="bg-white text-gray-800 border border-gray-300 py-2 px-4 rounded shadow hover:bg-gray-50 transition duration-200 ease-in-out">
          삭제
        </button>
      </div>
    </div>
  );
};

export default InquiryDetail;
