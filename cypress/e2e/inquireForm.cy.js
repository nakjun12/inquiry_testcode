describe("탭 전환 기능 테스트", () => {
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
    cy.get('[data-testid="inquiry-tab"]').click();
    cy.verifyTabAndContent(
      '[data-testid="inquiry-tab"]',
      '[data-testid="inquiry-form-panel"]',
      true
    );
  });
});

describe("inquireForm 테스트", () => {
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

    cy.verifyModalContentAndConfirm("문의할 제목과 내용을 입력해주세요");
  });

  it("문의 조건을 충족하여 등록하는 경우 검증", () => {
    // 카테고리 선택
    cy.selectAndVerifyDropdownOption(
      '[data-testid="category-dropdown"]',
      "카셰어링"
    );

    cy.selectAndVerifyDropdownOption(
      '[data-testid="subcategory-dropdown"]',
      "예약문의"
    );

    cy.typeAndVerifyInput('[data-testid="title-input"]', "테스트 중입니다.");
    cy.typeAndVerifyInput('[data-testid="content-input"]', "양해 바랍니다");

    // 폼 제출
    cy.get('[data-testid="submit-button"]').click();

    cy.verifyModalContentAndConfirm("1:1문의를 등록하였습니다.");

    // 내 문의내역 탭의 aria-selected 속성이 true로 설정되었는지 확인
    cy.get('[data-testid="my-inquiry-tab"]').should(
      "have.attr",
      "aria-selected",
      "true"
    );
  });
});
