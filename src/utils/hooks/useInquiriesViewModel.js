// useInquiriesViewModel.js
import { useDeleteInquiryMutation } from "./quries/inquiriesQueries/useDeleteInquiryMutation";
import { useInquiriesQuery } from "./quries/inquiriesQueries/useInquiriesQuery";

const useInquiriesViewModel = ({ handleBack }) => {
  const { mutateDeleteInquiry } = useDeleteInquiryMutation();
  const { inquiries } = useInquiriesQuery();

  const handleDeleteInquiry = (id) => {
    mutateDeleteInquiry(id, {
      onSuccess: () => {
        handleBack();
        // 성공 처리 로직
      },
      onError: (error) => {
        console.error("Error deleting inquiry:", error);
        // 에러 처리 로직
      }
    });
  };

  return {
    inquiries,
    handleDeleteInquiry
  };
};

export default useInquiriesViewModel;
