import { formatLongWeekday } from "@/util/dateUtils";

const InquiryDetail = ({ inquiry, onBack, onDelete }) => {
  // 날짜 포맷팅
  const formattedLongDate = formatLongWeekday(inquiry.timestamp);
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800">{inquiry.title}</h2>
      <div className="mt-2">
        <span className="text-sm text-gray-500">{formattedLongDate}</span>
        <span
          className={`ml-2 px-2 py-1 text-sm rounded-full ${
            !inquiry.isWaitingForResponse
              ? "bg-red-200 text-red-700"
              : "bg-green-200 text-green-700"
          }`}>
          {!inquiry.isWaitingForResponse ? "답변 대기" : "답변 완료"}
        </span>
      </div>
      <div className="mt-4">
        <div className="text-gray-600">
          <strong>카테고리:</strong> {inquiry.category}{" "}
          {inquiry.subcategory && `> ${inquiry.subcategory}`}
        </div>
        <div className="mt-2 text-gray-600">
          <strong>내용:</strong>
          <p className="mt-1 whitespace-pre-line">{inquiry.content}</p>
        </div>
      </div>
      <div className="flex justify-around mt-8">
        <button
          onClick={onBack}
          className="bg-white text-gray-800 border border-gray-300 py-2 px-4 rounded shadow hover:bg-gray-50 transition duration-200 ease-in-out">
          뒤로가기
        </button>
        <button
          onClick={() => onDelete(inquiry.id)}
          className="bg-white text-gray-800 border border-gray-300 py-2 px-4 rounded shadow hover:bg-gray-50 transition duration-200 ease-in-out">
          삭제
        </button>
      </div>
    </div>
  );
};

export default InquiryDetail;
