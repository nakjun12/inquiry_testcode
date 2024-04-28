import { describe, expect, test, vi } from "vitest";
import validateThenModal from "../validateThenModal";

describe("validateThenModal 함수 테스트", () => {
  const openModalMock = vi.fn();

  beforeEach(() => {
    openModalMock.mockClear();
  });

  test("모든 규칙이 유효할 때 true를 반환한다", () => {
    const rules = [
      { value: "valid value", message: "Invalid" },
      { value: "another valid value", message: "Invalid" }
    ];

    const result = validateThenModal(rules, openModalMock);
    expect(result).toBe(true);
    expect(openModalMock).not.toHaveBeenCalled();
  });

  test("규칙이 유효하지 않을 때 모달을 열고 false를 반환한다", () => {
    const rules = [
      { value: "", message: "Empty value", condition: () => true }
    ];

    const result = validateThenModal(rules, openModalMock);
    expect(result).toBe(false);
    expect(openModalMock).toHaveBeenCalled();
  });

  test("복수의 무효 규칙이 있을 때 첫 번째 무효 규칙에 대한 모달만 열린다", () => {
    const rules = [
      { value: "", message: "First invalid value" },
      { value: "", message: "Second invalid value" }
    ];

    const result = validateThenModal(rules, openModalMock);
    expect(result).toBe(false);
    expect(openModalMock).toHaveBeenCalledTimes(1);
    expect(openModalMock).toHaveBeenCalledWith("First invalid value", null);
  });

  test("condition 함수가 false를 반환하면 해당 규칙을 무시한다", () => {
    const rules = [
      { value: "", message: "Invalid", condition: () => false },
      { value: "valid value", message: "Invalid" }
    ];

    const result = validateThenModal(rules, openModalMock);
    expect(result).toBe(true);
    expect(openModalMock).not.toHaveBeenCalled();
  });

  test("빈 규칙 배열이나 유효하지 않은 규칙 배열을 적절히 처리한다", () => {
    let result = validateThenModal([], openModalMock);
    expect(result).toBe(true);
    expect(openModalMock).not.toHaveBeenCalled();

    result = validateThenModal([{}], openModalMock);
    expect(result).toBe(false);
    expect(openModalMock).toHaveBeenCalled();
  });
});
