/**
 * 문의 목록을 표시하는 컴포넌트입니다. react-window의 FixedSizeList를 사용하여
 * 문의 목록을 효율적으로 렌더링합니다.
 *
 * @param {Object[]} inquiries - 표시할 문의 목록 배열입니다.
 * @param {Function} onSelect - 문의 항목을 선택할 때 호출될 함수입니다.
 *                             각 문의의 ID를 인자로 받습니다.
 */
const InquiryList = ({ inquiries, onSelect }) => {
  // 문의 목록이 비어있는 경우 안내 메시지를 표시합니다.
  if (!inquiries?.length) {
    return <p className="text-center py-4">작성한 문의 내역이 없습니다.</p>;
  }

  // itemData는 InquiryRow 컴포넌트에 전달될 데이터입니다.
  const itemData = { inquiries, onSelect };

  // FixedSizeList 컴포넌트를 사용하여 문의 목록을 렌더링합니다.
  return (
    <List
      height={500} // 리스트의 높이
      itemCount={inquiries.length} // 렌더링할 아이템의 총 개수
      itemSize={100} // 각 아이템의 높이
      width={"100%"} // 리스트의 너비
      itemData={itemData} // InquiryRow 매개변수
    >
      {InquiryRow}
    </List>
  );
};

export default InquiryList;
