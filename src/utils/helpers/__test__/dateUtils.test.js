import { describe, expect, it } from "vitest";
import { formatLongWeekday, formatShortWeekday } from "../dateUtils";

describe("Date Utils Tests", () => {
  // formatShortWeekday 정상 동작 테스트
  it('formatShortWeekday should format registeredDate to "년-월-일 (요일)" with short weekday', () => {
    const registeredDate = new Date("2024-01-02").getTime();
    const formattedDate = formatShortWeekday(registeredDate);
    expect(formattedDate).toBe("2024. 01. 02. (화)");
  });

  // formatLongWeekday 정상 동작 테스트
  it('formatLongWeekday should format registeredDate to "년 월 일, 요일" with full weekday name', () => {
    const registeredDate = new Date("2024-01-02").getTime();
    const formattedDate = formatLongWeekday(registeredDate);
    expect(formattedDate).toBe("2024년 1월 2일 화요일");
  });

  // formatShortWeekday 및 formatLongWeekday 실패 케이스
  describe("Failure Tests", () => {
    const testCases = [
      { func: formatShortWeekday, description: "formatShortWeekday" },
      { func: formatLongWeekday, description: "formatLongWeekday" }
    ];

    testCases.forEach(({ func, description }) => {
      it(`${description} should handle undefined input`, () => {
        const formattedDate = func(undefined);
        expect(formattedDate).toBe("Invalid Date");
      });

      it(`${description} should handle invalid date input`, () => {
        const formattedDate = func("Invalid Date");
        expect(formattedDate).toBe("Invalid Date");
      });
    });
  });
});
