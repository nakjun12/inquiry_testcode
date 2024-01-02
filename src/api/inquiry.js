import { BACK_URL } from "@/utils/constants/config";
import axios from "axios";
export const INQUIRY_ENDPOINT = `${BACK_URL}/inquiry`;

export const getInquiries = async () => {
  try {
    const { data } = await axios.get(INQUIRY_ENDPOINT);
    console.log(data, "데이타!");
    return data;
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return []; // 요청 실패 시 빈 배열 반환
  }
};

export const postInquiry = async (inquiryData) => {
  const { data } = await axios.post(INQUIRY_ENDPOINT, inquiryData);
  return data;
};

export const deleteInquiry = async (id) => {
  await axios.delete(`${INQUIRY_ENDPOINT}/${id}`);
};
