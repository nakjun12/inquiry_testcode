    const isValid = validateThenModal(
      [
        {
          value: category,
          message: "문의할 카테고리를 선택해주세요."
        },
        {
          value: subcategory,
          message: "문의할 하위 카테고리를 선택해주세요.",
          // 'condition' 함수는 이 규칙의 검사를 수행할지 여부를 결정합니다.
          // 여기서는 'category'가 '차량관제'나 '기타'일 경우, 이 규칙의 검사를 생략합니다.
          condition: () => category !== "차량관제" && category !== "기타"
        },
        {
          value: title,
          message: "문의할 제목을 입력해주세요."
        },
        {
          value: content,
          message: "문의할 내용을 입력해주세요."
        }
      ],
      openModal
    );
