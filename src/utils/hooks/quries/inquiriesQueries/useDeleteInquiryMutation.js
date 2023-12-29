import { deleteInquiry } from "@/api/inquiry";
import { INQUIRY_KEY } from "@/utils/constants/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

/**
 * 문의 삭제를 위한 뮤테이션 훅입니다.
 *
 * @returns {Object} mutateDeleteInquiry 함수와 뮤테이션 관련 정보를 포함하는 객체
 */
export const useDeleteInquiryMutation = () => {
  const queryClient = useQueryClient();

  // 문의 삭제 뮤테이션을 사용합니다.
  const { mutate: mutateDeleteInquiry, ...mutationDeleteInfo } = useMutation({
    mutationFn: deleteInquiry,
    onSuccess: () => {
      // 삭제 성공 시 캐시 무효화
      queryClient.invalidateQueries({ queryKey: [INQUIRY_KEY] });
    },
    onError: (error) => {
      // 에러 처리
      console.error("Error deleting inquiry:", error);
    }
  });

  return {
    mutateDeleteInquiry,
    ...mutationDeleteInfo
  };
};
