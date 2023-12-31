// useInquiryFormViewModel.js
import {
  QUESTION_CATEGORY_MAPPING,
  QUESTION_DETAIL_MAPPING
} from "@/utils/constants/dummy";
import validateThenModal from "@/utils/helpers/validateThenModal";
import { usePostInquiryMutation } from "@/utils/hooks/quries/inquiriesQueries/usePostInquiryMutation";
import useModalStore from "@/utils/hooks/store/useModalStore";
/**
 * 문의 폼 관련 로직을 제공하는 훅입니다.
 *
 * @param {Object} params - 훅의 매개변수입니다.
 * @param {string} params.questionCategory - 문의의 주 카테고리입니다.
 * @param {string} params.questionDetail - 문의의 하위 카테고리입니다.
 * @param {Function} params.onTabChange - 탭 변경 처리 함수입니다.
 * @returns {Object} 문의 폼 제출 핸들러 함수를 반환합니다.
 */

const userEmail = "wns450@gmail.com";

const useInquiryFormViewModel = ({
  questionCategory,
  questionDetail,
  onTabChange
}) => {
  // 모달 상태 관리를 위한 스토어 훅
  const openModal = useModalStore((state) => state.openModal);
  // 문의 제출을 위한 뮤테이션 훅
  const { mutatePostInquiry: postInquiry } = usePostInquiryMutation();

  //  서버에 문의를 제출하는 함수입니다.
  const submitInquiry = async (inquiry) => {
    if (!inquiry) return;

    // 서버에 문의 제출 요청
    postInquiry(inquiry, {
      onSuccess: () => {
        // 성공 시 모달을 열고 탭을 변경
        openModal("1:1문의를 등록하였습니다.", () => onTabChange(1));
      },
      onError: (error) => {
        // 오류 발생 시 콘솔에 기록
        console.error("Failed to post inquiry:", error);
        openModal("네트워크 연결에 실패하였습니다.", () => {});
      }
    });
  };

  // 문의 폼 제출 이벤트 핸들러입니다. 유효성 검사 후 문의를 제출합니다.
  const handleInquiryFormSubmit = async (title, content) => {
    // 입력값에 대한 유효성 검사 수행
    const isValid = validateThenModal(
      [
        {
          value: questionCategory,
          message: "문의할 카테고리를 선택해주세요."
        },
        {
          value: questionDetail,
          message: "문의할 하위 카테고리를 선택해주세요.",
          // 'condition' 함수는 이 규칙의 검사를 수행할지 여부를 결정합니다.
          // 여기서는 'questionCategory'가 '차량관제'나 '기타'일 경우, 이 규칙의 검사를 생략합니다.
          condition: () =>
            questionCategory !== "차량관제" && questionCategory !== "기타"
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

    const convertQuestionCategory = QUESTION_CATEGORY_MAPPING[questionCategory];
    const convertQuestionDetail =
      QUESTION_DETAIL_MAPPING[questionDetail] || "OTHER";

    // 유효한 문의 객체 생성
    const newInquiry = {
      questionCategory: convertQuestionCategory,
      questionDetail: convertQuestionDetail,
      title,
      content,
      userEmail
    };
    // 문의 제출
    await submitInquiry(newInquiry);
  };

  return { handleInquiryFormSubmit };
};

export default useInquiryFormViewModel;
