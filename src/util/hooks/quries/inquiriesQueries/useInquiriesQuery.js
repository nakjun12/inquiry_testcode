// useInquiriesQuery.js
import { getInquiries } from "@/api/inquiry";
import { useQuery } from "@tanstack/react-query";
import { INQUIRY_KEY } from "../queryKey";

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
