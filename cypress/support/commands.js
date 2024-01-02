// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("typeAndVerifyInput", (selector, inputValue) => {
  cy.get(selector).type(inputValue);
  cy.get(selector).should("have.value", inputValue);
});

Cypress.Commands.add(
  "selectAndVerifyDropdownOption",
  (dropdownSelector, optionText) => {
    cy.get(dropdownSelector).contains(optionText).should("be.visible");
    cy.get(dropdownSelector).select(optionText);
    cy.get(dropdownSelector).should("have.value", optionText);
  }
);

Cypress.Commands.add("verifyModalContentAndConfirm", (modalContent) => {
  cy.get('[data-testid="modal"]').should("be.visible");
  cy.get('[data-testid="modal-content"]').should("contain", modalContent);
  cy.get('[data-testid="modal-confirm-button"]').click();
});

Cypress.Commands.add(
  "verifyTabAndContent",
  (tabTestId, panelTestId, isActive) => {
    cy.get(tabTestId).should(
      "have.attr",
      "aria-selected",
      isActive ? "true" : "false"
    );
    if (isActive) {
      cy.get(panelTestId).should("be.visible");
    }
  }
);

Cypress.Commands.add("submitInquiry", (questionCategory, questionDetail) => {
  // 카테고리 선택
  if (questionCategory) {
    cy.selectAndVerifyDropdownOption(
      '[data-testid="questionCategory-dropdown"]',
      questionCategory
    );
  }

  if (questionDetail) {
    cy.selectAndVerifyDropdownOption(
      '[data-testid="questionDetail-dropdown"]',
      questionDetail
    );
  }

  // 입력 필드에 텍스트 입력 및 폼 제출
  cy.typeAndVerifyInput('[data-testid="title-input"]', "테스트 중입니다.");
  cy.typeAndVerifyInput('[data-testid="content-input"]', "양해 바랍니다");
  cy.get('[data-testid="submit-button"]').click();
  cy.verifyModalContentAndConfirm("1:1문의를 등록하였습니다.");
});
