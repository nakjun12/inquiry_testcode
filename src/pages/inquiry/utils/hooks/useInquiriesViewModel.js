import { useDeleteInquiryMutation } from "@/utils/hooks/quries/inquiriesQueries/useDeleteInquiryMutation";
import { useInquiriesQuery } from "@/utils/hooks/quries/inquiriesQueries/useInquiriesQuery";

/**
 * 문의 관련 데이터와 동작을 관리하는 훅입니다.
 *
 * @param {Object} props - 훅의 매개변수
 *   @param {Function} props.handleBack - 문의 삭제 후 호출될 함수
 * @returns {Object} - 문의 목록과 문의 삭제 핸들러
 */
const useInquiriesViewModel = ({ handleBack }) => {
  // 문의 삭제를 위한 뮤테이션 훅을 사용합니다.
  const { mutateDeleteInquiry } = useDeleteInquiryMutation();
  // 문의 목록을 조회하기 위한 쿼리 훅을 사용합니다.
  const { inquiries } = useInquiriesQuery();

  // 문의를 삭제하는 핸들러입니다.
  // 삭제 성공 시, handleBack 함수를 호출하고, 오류 발생 시 콘솔에 오류를 출력합니다.
  const handleDeleteInquiry = (id) => {
    mutateDeleteInquiry(id, {
      onSuccess: () => {
        handleBack(); // 삭제 성공 후 처리
      },
      onError: (error) => {
        console.error("Error deleting inquiry:", error); // 에러 처리
      }
    });
  };

  // 문의 목록과 문의 삭제 핸들러를 반환합니다.
  return {
    inquiries,
    handleDeleteInquiry
  };
};

export default useInquiriesViewModel;
