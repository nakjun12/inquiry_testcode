import { getInquiries } from "@/api/inquiry";
import { INQUIRY_KEY } from "@/utils/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

/**
 * 문의 목록을 조회하는 쿼리 훅입니다.
 *
 * @returns {Object} 문의 목록 데이터와 쿼리 관련 정보를 포함하는 객체
 */
export const useInquiriesQuery = () => {
  // 문의 목록을 가져오는 React Query 훅을 사용합니다.
  const { data: inquiries, ...inquiriesQueryInfo } = useQuery({
    queryKey: [INQUIRY_KEY],
    queryFn: getInquiries
  });

  // 문의 목록 데이터와 쿼리 관련 정보를 반환합니다.
  return {
    inquiries,
    ...inquiriesQueryInfo
  };
};
