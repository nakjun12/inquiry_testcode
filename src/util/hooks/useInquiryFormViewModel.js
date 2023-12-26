// useInquiryFormViewModel.js
import { useState } from "react";
import useModalStore from "../../store/modalStore";
import validateInquiry from "../inquiryValidator";
import { useRQPostInquiry } from "./RQ/useRQPostInquiry";

const useInquiryFormViewModel = (onTabChange) => {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const openModal = useModalStore((state) => state.openModal);
  const { mutate: postInquiry } = useRQPostInquiry();

  const submitInquiry = async (inquiry) => {
    if (!inquiry) return;

    postInquiry(inquiry, {
      onSuccess: () => {
        openModal("1:1문의를 등록하였습니다.", () => onTabChange(1));
      },
      onError: (error) => {
        console.error("Failed to post inquiry:", error);
        // 여기에 필요한 오류 처리 로직 추가
      }
    });
  };

  const handleSubmit = async (titleRef, contentRef) => {
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const isValid = validateInquiry({
      openModal,
      category,
      subcategory,
      title,
      content
    });
    if (!isValid) {
      return;
    }

    const newInquiry = { category, subcategory, title, content };
    await submitInquiry(newInquiry);
  };
  return { category, setCategory, subcategory, setSubcategory, handleSubmit };
};

export default useInquiryFormViewModel;
