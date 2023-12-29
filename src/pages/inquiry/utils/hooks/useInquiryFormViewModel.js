// useInquiryFormViewModel.js
import useModalStore from "@/store/modalStore";
import { usePostInquiryMutation } from "@/util/hooks/quries/inquiriesQueries/usePostInquiryMutation";
import validateThenModal from "@/util/validateThenModal";

const useInquiryFormViewModel = ({ category, subcategory, onTabChange }) => {
  const openModal = useModalStore((state) => state.openModal);
  const { mutatePostInquiry: postInquiry } = usePostInquiryMutation();

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

  /**
   * 문의 폼 제출 이벤트 핸들러입니다. 유효성 검사 후 문의를 제출합니다.
   *
   * @param {React.RefObject} titleRef - 문의 제목을 입력하는 input 참조 객체입니다.
   * @param {React.RefObject} contentRef - 문의 내용을 입력하는 textarea 참조 객체입니다.
   */
  const handleInquiryFormSubmit = async (title, content) => {
    // 입력값에 대한 유효성 검사 수행
    const isValid = validateThenModal(
      [
        {
          value: category,
          message: "문의할 카테고리를 선택해주세요."
        },
        {
          value: subcategory,
          message: "문의할 하위 카테고리를 선택해주세요.",
          // 'condition' 함수는 이 규칙의 검사를 수행할지 여부를 결정합니다.
          // 여기서는 'category'가 '차량관제'나 '기타'일 경우, 이 규칙의 검사를 생략합니다.
          condition: () => category !== "차량관제" && category !== "기타"
        },
        {
          value: title,
          message: "문의할 제목을 입력해주세요."
        },
        {
          value: content,
          message: "문의할 내용을 입력해주세요."
        }
      ],
      openModal
    );
    if (!isValid) {
      return;
    }

    const newInquiry = { category, subcategory, title, content };
    await submitInquiry(newInquiry);
  };
  return { handleSubmit };
};

export default useInquiryFormViewModel;
