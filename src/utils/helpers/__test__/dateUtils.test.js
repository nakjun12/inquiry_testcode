import { expect, test } from "vitest";
import { formatLongWeekday, formatShortWeekday } from "../dateUtils";

// formatShortWeekday 테스트
test('formatShortWeekday should format registeredDate to "년-월-일 (요일)" with short weekday', () => {
  const registeredDate = new Date("2024-01-02").getTime(); // 테스트용 타임스탬프 (예: '2024-01-02')
  const formattedDate = formatShortWeekday(registeredDate); // 함수 실행
  expect(formattedDate).toBe("2024. 01. 02. (화)"); // 기대 결과: '2024-01-02 (수)'
});

// formatLongWeekday 테스트
test('formatLongWeekday should format registeredDate to "년 월 일, 요일" with full weekday name', () => {
  const registeredDate = new Date("2024-01-02").getTime(); // 테스트용 타임스탬프 (예: '2024-01-02')
  const formattedDate = formatLongWeekday(registeredDate); // 함수 실행
  expect(formattedDate).toBe("2024년 1월 2일 화요일"); // 기대 결과: '2024년 1월 2일, 수요일'
});
