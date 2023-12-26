import { formatShortWeekday } from "../../../util/dateUtils";

const InquiryListItem = ({ inquiry, onSelect }) => {
  const { category, title, timestamp, isWaitingForResponse } = inquiry;

  const formattedShortDate = formatShortWeekday(timestamp);

  return (
    <button
      onClick={onSelect}
      className="flex justify-between items-center p-4 border-b w-full">
      <div>
        <div className="flex items-center">
          <div
            className={
              !isWaitingForResponse
                ? "px-3 py-1 bg-red-200 text-red-800 rounded-full text-sm font-medium"
                : "px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium"
            }>
            {!isWaitingForResponse ? "답변 대기" : "답변 완료"}
          </div>
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
