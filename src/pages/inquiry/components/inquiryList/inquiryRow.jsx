import InquiryListItem from "./inquiryListItem";
/**
 * 문의 목록 내 각 문의 항목을 렌더링하는 컴포넌트입니다.
 * `react-window`에서 제공하는 `FixedSizeList`에 의해 사용되며,
 * 각 문의에 대한 정보와 상호작용을 관리합니다.
 *
 * @param {object} props - 컴포넌트에 전달되는 props
 *   @param {number} props.index - 현재 렌더링되는 항목의 인덱스
 *   @param {object} props.style - `react-window`에 의해 제공되는 스타일링, 각 항목의 위치 지정에 사용됨
 *   @param {object} props.data - `FixedSizeList`로부터 전달되는 추가 데이터
 *     @param {object[]} props.data.inquiries - 전체 문의 목록
 *     @param {function} props.data.onSelect - 문의 항목 선택 시 호출되는 함수, 문의 ID를 인자로 받음
 */
const InquiryRow = ({ index, style, data }) => {
  const { inquiries, onSelect } = data;
  const inquiry = inquiries[index];

  return (
    <div style={style} className={`inquiry-row-${index}`}>
      <InquiryListItem
        inquiry={inquiry}
        onSelect={() => onSelect(inquiry.id)}
      />
    </div>
  );
};

export default InquiryRow;
