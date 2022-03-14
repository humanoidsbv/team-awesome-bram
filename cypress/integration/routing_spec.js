describe("Routing", () => {
  it("Navigates to other pages", () => {
    cy.visit("/");
    cy.get("a").contains("Team members").click();
    cy.url().should("include", "team-members");
    cy.get("button").contains("New Humanoid").click();
    cy.get("dialog").should("be.visible");
    cy.get("input").first().type("test");
    cy.get("input").eq(1).type("de test");
    cy.get("input").eq(2).type("test@test.com");
    cy.get("input").eq(3).type("No label");
    cy.get("input").eq(4).type("Test 21Company");
    cy.get("input").eq(5).type("Tester");
    cy.get("input").eq(6).type("1997-12-31");
    cy.get("form").submit();
  });
});
