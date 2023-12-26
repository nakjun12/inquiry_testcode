import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { INQUIRY_KEY } from "./queryKey";

export const useRQInquiries = () => {
  const [selectedInquiryId, setSelectedInquiryId] = useState(null);
  const queryClient = useQueryClient();

  const { data: inquiries, ...queryInfo } = useQuery({
    queryKey: [INQUIRY_KEY],
    queryFn: getInquiries
  });

  const deleteInquiry = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`/inquire/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
    }
  });

  const handleDeleteInquiry = (id) => {
    deleteInquiry.mutate(id, {
      onSuccess: () => {
        // 삭제 후 추가적으로 수행할 작업이 있다면 여기에 작성
        setSelectedInquiryId(null);
      },
      onError: (error) => {
        console.error("Error deleting inquiry:", error);
        // 사용자에게 에러 메시지를 표시하는 로직 추가
      }
    });
  };

  return {
    inquiries,
    selectedInquiryId,
    setSelectedInquiryId,
    handleDeleteInquiry,
    ...queryInfo
  };
};
