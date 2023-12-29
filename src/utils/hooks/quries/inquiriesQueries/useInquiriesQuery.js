// useInquiriesQuery.js
import { getInquiries } from "@/api/inquiry";
import { INQUIRY_KEY } from "@/utils/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useInquiriesQuery = () => {
  const { data: inquiries, ...inquiriesQueryInfo } = useQuery({
    queryKey: [INQUIRY_KEY],
    queryFn: getInquiries
  });

  return {
    inquiries,
    ...inquiriesQueryInfo
  };
};
