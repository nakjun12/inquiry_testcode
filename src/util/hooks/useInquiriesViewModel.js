// useInquiriesViewModel.js
import { useState } from "react";
import { useDeleteInquiryMutation } from "./quries/inquiriesQueries/useDeleteInquiryMutation";
import { useInquiriesQuery } from "./quries/inquiriesQueries/useInquiriesQuery";

const useInquiriesViewModel = () => {
  const [selectedInquiryId, setSelectedInquiryId] = useState(null);
  const { mutateDeleteInquiry } = useDeleteInquiryMutation();
  const { inquiries } = useInquiriesQuery();

  const handleDeleteInquiry = (id) => {
    mutateDeleteInquiry(id, {
      onSuccess: () => {
        handleBack();
        setSelectedInquiryId(null);
        // 성공 처리 로직
      },
      onError: (error) => {
        console.error("Error deleting inquiry:", error);
        // 에러 처리 로직
      }
    });
  };

  const handleInquirySelect = (id) => {
    setSelectedInquiryId(id);
  };

  const handleBack = () => {
    setSelectedInquiryId(null);
  };

  const selectedInquiry = inquiries
    ? inquiries.find((inquiry) => inquiry.id === selectedInquiryId)
    : null;

  return {
    inquiries,
    selectedInquiryId,
    selectedInquiry,
    handleDeleteInquiry,
    handleInquirySelect,
    handleBack
  };
};

export default useInquiriesViewModel;
