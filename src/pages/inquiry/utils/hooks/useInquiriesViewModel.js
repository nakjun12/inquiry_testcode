import { useDeleteInquiryMutation } from "@/utils/hooks/quries/inquiriesQueries/useDeleteInquiryMutation";
import { useInquiriesQuery } from "@/utils/hooks/quries/inquiriesQueries/useInquiriesQuery";
import useModalStore from "@/utils/hooks/store/useModalStore";
/**
 * 문의 관련 데이터와 동작을 관리하는 훅입니다.
 *
 * @param {Object} props - 훅의 매개변수
 *   @param {Function} props.handleBack - 문의 삭제 후 호출될 함수
 * @returns {Object} - 문의 목록과 문의 삭제 핸들러
 */
const useInquiriesViewModel = ({ handleBack }) => {
  // 모달 상태 관리를 위한 스토어 훅
  const openModal = useModalStore((state) => state.openModal);
  // 문의 삭제를 위한 뮤테이션 훅을 사용합니다.
  const { mutateDeleteInquiry } = useDeleteInquiryMutation();
  // 문의 목록을 조회하기 위한 쿼리 훅을 사용합니다.
  const { inquiries } = useInquiriesQuery();

  // 문의를 삭제하는 핸들러입니다.
  // 삭제 성공 시, handleBack 함수를 호출하고, 오류 발생 시 콘솔에 오류를 출력합니다.
  const handleDeleteInquiry = (id) => {
    mutateDeleteInquiry(id, {
      onSuccess: () => {
        openModal("삭제에 성공하였습니다.", () => handleBack());
      },
      onError: (error) => {
        openModal("네트워크 연결에 실패하였습니다.", () => {});
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
