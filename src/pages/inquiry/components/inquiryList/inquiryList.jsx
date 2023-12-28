// InquiryList.js
import useInquiriesViewModel from "@/util/hooks/useInquiriesViewModel";
import InquiryListDisplay from "./InquiryListDisplay";
import InquiryDetail from "./inquiryDetail";

const InquiryList = () => {
  const {
    inquiries,
    selectedInquiryId,
    selectedInquiry,
    handleDeleteInquiry,
    handleInquirySelect,
    handleBack
  } = useInquiriesViewModel();

  return (
    <div
      className="bg-white shadow rounded-lg"
      data-testid="inquiry-list-panel">
      {selectedInquiryId === null ? (
        <InquiryListDisplay
          inquiries={inquiries}
          onSelect={handleInquirySelect}
        />
      ) : (
        <InquiryDetail
          inquiry={selectedInquiry}
          onDelete={handleDeleteInquiry}
          onBack={handleBack}
        />
      )}
    </div>
  );
};

export default InquiryList;
