import axios from "axios";

export const getInquiries = async () => {
  try {
    const { data } = await axios.get("/inquire");
    console.log(data, "데이타!");
    return data;
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return []; // 요청 실패 시 빈 배열 반환
  }
};

export const postInquiry = async (inquiryData) => {
  const { data } = await axios.post("/inquire", inquiryData);
  return data;
};

export const deleteInquiry = async (id) => {
  await axios.delete(`/inquire/${id}`);
};
