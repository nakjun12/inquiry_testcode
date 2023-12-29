import { postInquiry } from "@/api/inquiry";
import { INQUIRY_KEY } from "@/utils/constants/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

/**
 * 새로운 문의를 게시하는 뮤테이션 훅입니다.
 *
 * @returns {Object} 문의 게시 함수와 뮤테이션 관련 정보를 포함하는 객체
 */
export const usePostInquiryMutation = () => {
  const queryClient = useQueryClient();

  // 문의를 게시하는 뮤테이션을 사용합니다.
  const { mutate: mutatePostInquiry, ...postInquiryMutationInfo } = useMutation(
    {
      mutationFn: postInquiry,
      onSuccess: () => {
        // 문의 게시 성공 시 문의 목록 쿼리 무효화
        queryClient.invalidateQueries({ queryKey: [INQUIRY_KEY] });
      }
    }
  );

  // 문의 게시 함수와 뮤테이션 관련 정보를 반환합니다.
  return { mutatePostInquiry, ...postInquiryMutationInfo };
};
