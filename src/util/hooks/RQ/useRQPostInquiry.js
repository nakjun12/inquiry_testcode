import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useRQPostInquiry = () => {
  const queryClient = useQueryClient();
  const { mutate, ...mutationInfo } = useMutation({
    mutationFn: postInquiry,
    onSuccess: () => {
      console.log("무효화!");
      queryClient.invalidateQueries({ queryKey: ["inquiries"] }); // 문의 목록 쿼리 무효화
    }
  });

  return { mutate, ...mutationInfo };
};
