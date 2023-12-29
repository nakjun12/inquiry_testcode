// usePostInquiryMutation.js
import { postInquiry } from "@/api/inquiry";
import { INQUIRY_KEY } from "@/utils/constants/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePostInquiryMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: mutatePostInquiry, ...postInquiryMutationInfo } = useMutation(
    {
      mutationFn: postInquiry,
      onSuccess: () => {
        // 문의 목록 쿼리 무효화
        queryClient.invalidateQueries({ queryKey: [INQUIRY_KEY] });
      }
    }
  );

  return { mutatePostInquiry, ...postInquiryMutationInfo };
};
