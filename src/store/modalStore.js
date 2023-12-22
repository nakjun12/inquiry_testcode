// store/modalStore.js
import { create } from "zustand";

const useModalStore = create((set) => ({
  isModalOpen: false,
  modalContent: null,
  onConfirm: null, // 새로운 상태 추가
  openModal: (content, onConfirm) =>
    set({ isModalOpen: true, modalContent: content, onConfirm }),
  confirm: () => {
    set((state) => {
      if (state.onConfirm) {
        state.onConfirm();
      }
      return { isModalOpen: false, modalContent: null, onConfirm: null };
    });
  }
}));

export default useModalStore;
