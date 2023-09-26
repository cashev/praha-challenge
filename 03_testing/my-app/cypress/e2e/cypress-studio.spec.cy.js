describe('cypress studio spec', () => {
  it('passes', () => {
    cy.visit('/')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Cross wins', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get('[data-e2e="square-index-4"]').click();
    cy.get('[data-e2e="square-index-8"]').click();
    cy.get('[data-e2e="square-index-5"]').click();
    cy.get('[data-e2e="square-index-3"]').click();
    cy.get('[data-e2e="square-index-1"]').click();
    cy.get('[data-e2e="square-index-6"]').click();
    cy.get('[data-e2e="square-index-7"]').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Circle wins', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get('[data-e2e="square-index-4"]').click();
    cy.get('[data-e2e="square-index-5"]').click();
    cy.get('[data-e2e="square-index-7"]').click();
    cy.get('[data-e2e="square-index-1"]').click();
    cy.get('[data-e2e="square-index-3"]').click();
    cy.get('[data-e2e="square-index-2"]').click();
    cy.get('[data-e2e="square-index-8"]').click();
    cy.get('[data-e2e="square-index-0"]').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Draw', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get('[data-e2e="square-index-4"]').click();
    cy.get('[data-e2e="square-index-2"]').click();
    cy.get('[data-e2e="square-index-7"]').click();
    cy.get('[data-e2e="square-index-1"]').click();
    cy.get('[data-e2e="square-index-0"]').click();
    cy.get('[data-e2e="square-index-8"]').click();
    cy.get('[data-e2e="square-index-5"]').click();
    cy.get('[data-e2e="square-index-3"]').click();
    cy.get('[data-e2e="square-index-6"]').click();
    /* ==== End Cypress Studio ==== */
  });
})
