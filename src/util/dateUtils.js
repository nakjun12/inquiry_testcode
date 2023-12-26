// utils/dateUtils.js

/**
 * 날짜를 "년-월-일 (요일)" 형식으로 포맷합니다. 요일은 축약형으로 표시합니다.
 * @param {number} timestamp - 변환할 타임스탬프
 * @returns {string} 포맷된 날짜 문자열
 */
export const formatShortWeekday = (timestamp) => {
  return new Date(timestamp).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short"
  });
};

/**
 * 날짜를 "년 월 일, 요일" 형식으로 포맷합니다. 요일은 전체 이름으로 표시합니다.
 * @param {number} timestamp - 변환할 타임스탬프
 * @returns {string} 포맷된 날짜 문자열
 */
export const formatLongWeekday = (timestamp) => {
  return new Date(timestamp).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  });
};
