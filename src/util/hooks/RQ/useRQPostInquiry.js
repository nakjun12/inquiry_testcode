import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postInquiry } from "../../../api/inquiry";
import { INQUIRY_KEY } from "./queryKey";

export const useRQPostInquiry = () => {
  const queryClient = useQueryClient();
  const { mutate, ...mutationInfo } = useMutation({
    mutationFn: postInquiry,
    onSuccess: () => {
      console.log("무효화!");
      queryClient.invalidateQueries({ queryKey: [INQUIRY_KEY] }); // 문의 목록 쿼리 무효화
    }
  });

  return { mutate, ...mutationInfo };
};
