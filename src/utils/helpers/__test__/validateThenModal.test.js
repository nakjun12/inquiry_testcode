import useModalStore from "@/utils/hooks/store/useModalStore";
import { expect, test, vi } from "vitest";
import validateThenModal from "../validateThenModal";

test("returns true when all rules are valid", () => {
  const openModalMock = vi.fn();
  const rules = [
    { value: "valid value", message: "Invalid" },
    { value: "another valid value", message: "Invalid" }
  ];

  const result = validateThenModal(rules, openModalMock);
  expect(result).toBe(true);
  expect(openModalMock).not.toHaveBeenCalled();
});

test("opens modal and returns false when a rule is invalid", () => {
  const openModalMock = vi.fn();
  const rules = [{ value: "", message: "Empty value", condition: () => true }];

  const result = validateThenModal(rules, openModalMock);
  expect(result).toBe(false);
  expect(openModalMock).toHaveBeenCalled();
});

test("opens modal and returns false when a rule is invalid22", () => {
  // Zustand 스토어 초기화

  // 검증 규칙 정의
  const rules = [{ value: "", message: "Empty value", condition: () => true }];

  // validateThenModal 함수 실행
  const result = validateThenModal(rules, useModalStore.getState().openModal);
  expect(result).toBe(false);

  // Zustand 스토어의 상태 확인
  const { isModalOpen, modalContent } = useModalStore.getState();
  expect(isModalOpen).toBe(true); // 모달이 열려있는지 확인
  expect(modalContent).toBe("Empty value"); // 모달 내용이 정확한지 확인
});
