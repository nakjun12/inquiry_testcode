import { formatLongWeekday } from "@/utils/helpers/dateUtils";

/**
 * 답변 상세 정보를 표시하는 컴포넌트입니다.
 *
 * @param {Object} props - 컴포넌트의 props
 *   @param {Object} props.answer - 답변 정보 객체
 *     @param {number} props.answer.id - 답변의 고유 식별자(ID)
 *     @param {boolean} props.answer.isAnswer - 답변이 제공되었는지 여부
 *     @param {string} props.answer.title - 답변의 제목
 *     @param {string} props.answer.content - 답변의 내용
 *     @param {string} props.answer.answeredDate - 답변이 제공된 날짜 및 시간
 */

const InquiryAnswerDetail = ({ answer }) => {
  if (!answer) return null;

  const { title, content, answeredDate } = answer;
  const formattedAnsweredDate = formatLongWeekday(answeredDate);

  return (
    <div className="mt-12 p-4 bg-white rounded-lg border border-gray-200">
      <div className="border-b border-gray-200 mb-2 pb-2">
        <p className="text-sm text-gray-700 mt-1">{title}</p>

        <span className="text-xs text-gray-500">{formattedAnsweredDate}</span>
      </div>
      <div>
        <p className="text-sm text-gray-700 whitespace-pre-line mt-1">
          {content}
        </p>
      </div>
    </div>
  );
};

export default InquiryAnswerDetail;
