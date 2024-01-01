describe.skip("탭 전환 기능 테스트", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("문의하기 탭이 기본적으로 활성화되어 있는지 확인", () => {
    cy.verifyTabAndContent(
      '[data-testid="inquiry-tab"]',
      '[data-testid="inquiry-form-panel"]',
      true
    );
  });

  it("내 문의내역 탭으로 전환 시 올바르게 활성화되는지 확인", () => {
    cy.get('[data-testid="my-inquiry-tab"]').click();
    cy.verifyTabAndContent(
      '[data-testid="my-inquiry-tab"]',
      '[data-testid="inquiry-list-panel"]',
      true
    );
  });
  it("문의하기 탭과 내 문의내역 탭 간의 전환을 검증", () => {
    // 문의하기 탭으로 전환 및 검증
    cy.verifyTabAndContent(
      '[data-testid="inquiry-tab"]',
      '[data-testid="inquiry-form-panel"]',
      true
    );

    // 내 문의내역 탭으로 전환 및 검증
    cy.get('[data-testid="my-inquiry-tab"]').click();
    cy.verifyTabAndContent(
      '[data-testid="my-inquiry-tab"]',
      '[data-testid="inquiry-list-panel"]',
      true
    );

    // 다시 문의하기 탭으로 전환 및 검증
  });
});

describe.skip("inquireForm 테스트", () => {
  beforeEach(() => {
    // 모든 테스트 케이스가 실행되기 전에 "index.html" 페이지를 방문합니다.
    cy.visit("/");
  });

  it("폼 필드에 입력할 수 있는지 검증", () => {
    cy.typeAndVerifyInput('[data-testid="title-input"]', "테스트 제목");
    cy.typeAndVerifyInput('[data-testid="content-input"]', "테스트 내용");
  });

  it("카테고리 및 세부 카테고리를 선택할 수 있는지 검증", () => {
    cy.selectAndVerifyDropdownOption(
      '[data-testid="category-dropdown"]',
      "카셰어링"
    );
    cy.selectAndVerifyDropdownOption(
      '[data-testid="subcategory-dropdown"]',
      "예약문의"
    );
  });
  it("카테고리 선택하지 않는 경우, 검증", () => {
    // 필요한 정보 입력
    cy.typeAndVerifyInput('[data-testid="title-input"]', "테스트 제목");
    cy.typeAndVerifyInput('[data-testid="content-input"]', "테스트 내용");

    // 폼 제출
    cy.get('[data-testid="submit-button"]').click();

    cy.verifyModalContentAndConfirm("문의할 카테고리를 선택해주세요.");
    // 모달이 나타나는 것 확인
  });

  it("폼 필드에 입력하지 않는 경우, 검증", () => {
    cy.selectAndVerifyDropdownOption(
      '[data-testid="category-dropdown"]',
      "카셰어링"
    );
    cy.selectAndVerifyDropdownOption(
      '[data-testid="subcategory-dropdown"]',
      "예약문의"
    );
    // 폼 제출
    cy.get('[data-testid="submit-button"]').click();

    cy.verifyModalContentAndConfirm("문의할 제목을 입력해주세요");
  });

  it("문의 조건을 충족하여 등록하는 경우 검증", () => {
    cy.submitInquiry("카셰어링", "예약문의");

    // 내 문의내역 탭의 aria-selected 속성이 true로 설정되었는지 확인
    cy.get('[data-testid="my-inquiry-tab"]').should(
      "have.attr",
      "aria-selected",
      "true"
    );
  });

  it("카테고리가 기타일 경우 검증", () => {
    cy.submitInquiry("기타");

    // 내 문의내역 탭의 aria-selected 속성이 true로 설정되었는지 확인
    cy.get('[data-testid="my-inquiry-tab"]').should(
      "have.attr",
      "aria-selected",
      "true"
    );
  });

  it("문의 등록 2개 이상일 경우 검증", () => {
    const repeatCount = 4; // 반복 횟수 설정

    for (let i = 0; i < repeatCount; i++) {
      if (i % 2 === 0) {
        // 짝수 번째 반복에서는 "기타" 카테고리 선택
        cy.submitInquiry("기타");
      } else {
        // 홀수 번째 반복에서는 "카셰어링" 카테고리 및 "예약문의" 서브카테고리 선택
        cy.submitInquiry("카셰어링", "예약문의");
      }

      // 내 문의내역 탭의 aria-selected 속성 검증
      cy.get('[data-testid="my-inquiry-tab"]').should(
        "have.attr",
        "aria-selected",
        "true"
      );

      // 다음 반복을 위해 문의하기 탭으로 전환
      if (i < repeatCount - 1) {
        cy.get('[data-testid="inquiry-tab"]').click();
        cy.verifyTabAndContent(
          '[data-testid="inquiry-tab"]',
          '[data-testid="inquiry-form-panel"]',
          true
        );
      }
    }
  });
});

describe("Inquiries API Test", () => {
  beforeEach(() => {});
  //기능테스트 해보자
  //msw에서 작동 안하는거같음
  // it("loads inquiries correctly after submitting an inquiry", () => {
  //   // 첫 페이지 로드
  //   cy.fixture("inquiries").then((json) => {
  //     console.log(json, "데이타");
  //     cy.intercept("GET", "/inquire", json).as("getInquiries");
  //   });

  //   cy.visit("/");
  //   const inquiryData = {
  //     category: "기타",
  //     subcategory: "",
  //     title: "테스트 중입니다.",
  //     content: "양해 바랍니다",
  //     id: 1,
  //     timestamp: "2023-12-22T05:19:52.722Z",
  //     isResponse: false
  //   };

  //   cy.request("POST", "/inquire", inquiryData).then((response) => {
  //     expect(response.status).to.eq(200); // 상태 코드가 200이라고 가정
  //     // 추가적인 응답 검증이 필요한 경우 여기에 작성
  //   });
});

//   MSW 작동 방식: MSW는 서비스 워커를 사용하여 HTTP 요청을 가로채고 모의 응답을 제공합니다. 이는 브라우저 수준에서 작동하며, 애플리케이션이 실제로 네트워크 요청을 보내기 전에 이 요청을 가로채고 처리합니다.

// Cypress cy.intercept() 작동 방식: Cypress의 cy.intercept()는 Cypress 테스트 러너에서 네트워크 요청을 가로채고 조작합니다. 이는 브라우저 밖에서 작동하며, 브라우저가 네트워크 요청을 보낸 후 이 요청을 가로챕니다.

// 상호 작용: MSW가 요청을 먼저 가로채고 처리하기 때문에, Cypress의 cy.intercept()는 MSW에 의해 이미 처리된 요청을 "보지" 못할 수 있습니다. 즉, MSW가 요청을 가로채고 모의 응답을 반환하면, Cypress는 원래의 요청을 가로채지 못할 수 있습니다.

// 테스트 시 고려사항: MSW를 사용하는 경우, Cypress의 cy.intercept()를 사용하여 요청을 추가로 가로채거나 변경하는 것은 불필요하거나 혼란을 야기할 수 있습니다. 대신, MSW를 사용하여 모의 응답을 설정하고, Cypress는 이러한 응답에 기반한 애플리케이션의 동작을 검증하는 데 집중하는 것이 좋습니다.
