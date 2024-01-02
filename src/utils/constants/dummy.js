const QUESTION_INQUIRY_MENU = {
  회원정보: ["개인정보 변경", "소속변경", "면허/카드 등록", "기타"],
  카셰어링: ["예약문의", "반납문의", "결제문의", "도어제어문의", "기타"],
  차량관제: [],
  기타: ""
};

const QUESTION_CATEGORY_MAPPING = {
  회원정보: "MEMBER_INFO",
  카셰어링: "CAR_SHARING",
  차량관제: "VEHICLE_CONTROL",
  기타: "OTHER"
};

const QUESTION_DETAIL_MAPPING = {
  "개인정보 변경": "PERSONAL_INFO_CHANGE",
  소속변경: "AFFILIATION_CHANGE",
  "면허/카드 등록": "LICENSE_CARD_REGISTRATION",
  예약문의: "RESERVATION_INQUIRY",
  반납문의: "RETURN_INQUIRY",
  결제문의: "PAYMENT_INQUIRY",
  도어제어문의: "DOOR_CONTROL_INQUIRY",
  기타: "OTHER"
};

export {
  QUESTION_CATEGORY_MAPPING,
  QUESTION_DETAIL_MAPPING,
  QUESTION_INQUIRY_MENU
};
