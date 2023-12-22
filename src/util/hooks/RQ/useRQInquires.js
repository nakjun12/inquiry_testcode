import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const getInquiries = async () => {
  try {
    const { data } = await axios.get("/inquire");
    console.log(data, "데이타!");
    return data;
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return []; // 요청 실패 시 빈 배열 반환
  }
};

export const useRQInquiries = () => {
  const queryClient = useQueryClient();

  const { data: inquiries, ...queryInfo } = useQuery({
    queryKey: ["inquiries"],
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

  return { inquiries, deleteInquiry, ...queryInfo };
};
