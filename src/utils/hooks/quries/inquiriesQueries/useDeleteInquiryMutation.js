// useDeleteInquiryMutation.js
import { deleteInquiry } from "@/api/inquiry";
import { INQUIRY_KEY } from "@/utils/constants/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteInquiryMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: mutateDeleteInquiry, ...mutationDeleteInfo } = useMutation({
    mutationFn: deleteInquiry,
    onSuccess: () => {
      // 성공 시 캐시 무효화 또는 다른 작업 수행
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
