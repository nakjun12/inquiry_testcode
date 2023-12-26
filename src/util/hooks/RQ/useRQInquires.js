import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteInquiry, getInquiries } from "../../../api/inquiry";
import { INQUIRY_KEY } from "./queryKey";

export const useRQInquiries = () => {
  const queryClient = useQueryClient();

  const { data: inquiries, ...queryInfo } = useQuery({
    queryKey: [INQUIRY_KEY],
    queryFn: getInquiries
  });

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
    inquiries,
    ...queryInfo,
    mutateDeleteInquiry,
    ...mutationDeleteInfo
  };
};
