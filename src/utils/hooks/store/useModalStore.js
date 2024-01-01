import { create } from "zustand";

/**
 * 모달 관련 상태를 관리하는 Zustand 스토어입니다.
 */
const useModalStore = create((set) => ({
  isModalOpen: false, // 모달의 열림 상태
  modalContent: null, // 모달에 표시될 내용
  onConfirm: null, // 모달 확인 버튼 클릭 시 실행될 함수

  // 모달을 여는 함수
  openModal: (content, onConfirm) =>
    set({ isModalOpen: true, modalContent: content, onConfirm }),

  // 모달의 확인 버튼을 처리하는 함수
  confirm: () => {
    set((state) => {
      if (state.onConfirm) {
        state.onConfirm(); // onConfirm 함수 실행
      }
      return { isModalOpen: false, modalContent: null, onConfirm: null }; // 상태 초기화
    });
  }
}));

export default useModalStore;
