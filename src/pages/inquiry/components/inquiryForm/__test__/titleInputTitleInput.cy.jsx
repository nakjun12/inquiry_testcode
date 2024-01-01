import TitleInput from "./titleInput";

describe("<TitleInput />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TitleInput />);
  });
});
