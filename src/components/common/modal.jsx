// components/Modal.js
import useModalStore from "../../store/modalStore";

const Modal = () => {
  const { isModalOpen, modalContent, confirm } = useModalStore();

  if (!isModalOpen) return null;

  return (
    <div
      data-testid="modal"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-xs w-full">
        <div
          data-testid="modal-content"
          className="modal-content text-black text-sm font-bold">
          {modalContent}
        </div>
        <button
          data-testid="modal-confirm-button"
          onClick={confirm}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          확인
        </button>
      </div>
    </div>
  );
};

export default Modal;
