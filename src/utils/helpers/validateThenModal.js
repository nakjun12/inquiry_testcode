/**
 * 주어진 검사 규칙에 따라 값을 검증하고, 조건에 맞지 않으면 모달을 표시하는 함수.
 * @param {Object[]} rules - 검사할 규칙의 배열. 각 규칙 객체는 다음 속성을 가짐:
 *   @param {string} rules[].value - 검증할 값.
 *   @param {string} rules[].message - 검증에 실패할 경우 표시할 메시지.
 *   @param {function} [rules[].condition] - 추가적인 검증 조건을 정의하는 함수. 제공되지 않으면 모든 값에 대해 기본 검증을 수행.
 * @param {function} openModal - 유효하지 않을 경우 표시할 모달을 여는 함수.
 * @returns {boolean} - 모든 규칙이 유효하면 true, 그렇지 않으면 false를 반환.
 */
export default function validateThenModal(rules, openModal) {
  for (const rule of rules) {
    const { value, message, condition } = rule;

    // condition 함수가 제공되지 않았거나, condition 함수가 참을 반환하는 경우에만 검사
    // 조건에 맞지 않으면 모달을 표시하고 false 반환
    if ((condition === undefined || condition()) && !value) {
      console.error(message);
      openModal(message, null);
      return false;
    }
  }

  return true; // 모든 검사를 통과했을 경우 true 반환
}
