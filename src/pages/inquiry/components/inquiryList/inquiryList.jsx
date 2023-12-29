// InquiryList.js
import useInquiriesViewModel from "@/utils/hooks/useInquiriesViewModel";
import { useState } from "react";
import InquiryListDisplay from "./InquiryListDisplay";
import InquiryDetail from "./inquiryDetail";

const InquiryList = () => {
  const [selectedInquiryId, setSelectedInquiryId] = useState(null);

  const handleBack = () => {
    setSelectedInquiryId(null);
  };

  const { inquiries, handleDeleteInquiry } = useInquiriesViewModel({
    handleBack
  });

  const handleInquirySelect = (id) => {
    setSelectedInquiryId(id);
  };

  const selectedInquiry = inquiries
    ? inquiries.find((inquiry) => inquiry.id === selectedInquiryId)
    : null;

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
