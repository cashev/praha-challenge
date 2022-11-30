describe('Cross Player wins', () => {
    it('should show Winner: X', () => {
        cy.visit('/');

        cy.get('[data-e2e=square-index-4]').click();
        cy.get('[data-e2e=square-index-3]').click();
        cy.get('[data-e2e=square-index-0]').click();
        cy.get('[data-e2e=square-index-6]').click();
        cy.get('[data-e2e=square-index-8]').click();

        cy.get('[data-e2e=status]').should('have.text', 'Winner: X');
    })
})
