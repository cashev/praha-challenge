describe('First Player is X', () => {
    it('should show Next Player is X', () => {
        cy.visit('/');
        cy.get('[data-e2e=status]').should('have.text', '次のプレイヤー: X');
    })
})

describe('Turn to Next Player is O', () => {
    it('should show Next Player is O', () => {
        cy.visit('/');
        cy.get('[data-e2e=square-index-4]').click();
        cy.get('[data-e2e=status]').should('have.text', '次のプレイヤー: O');
    })
})

describe('Turn to Next Player is X', () => {
    it('should show Next Player is X', () => {
        cy.visit('/');
        cy.get('[data-e2e=square-index-4]').click();
        cy.get('[data-e2e=square-index-0]').click();
        cy.get('[data-e2e=status]').should('have.text', '次のプレイヤー: X');
    })
})

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

describe('Circle Player wins', () => {
    it('should show Winner: X', () => {
        cy.visit('/');
        cy.get('[data-e2e=square-index-4]').click();
        cy.get('[data-e2e=square-index-0]').click();
        cy.get('[data-e2e=square-index-8]').click();
        cy.get('[data-e2e=square-index-1]').click();
        cy.get('[data-e2e=square-index-7]').click();
        cy.get('[data-e2e=square-index-2]').click();
        cy.get('[data-e2e=status]').should('have.text', 'Winner: O');
    })
})

describe('Draw', () => {
    it('should show Draw!', () => {
        cy.visit('/');
        cy.get('[data-e2e=square-index-4]').click();
        cy.get('[data-e2e=square-index-0]').click();
        cy.get('[data-e2e=square-index-1]').click();
        cy.get('[data-e2e=square-index-7]').click();
        cy.get('[data-e2e=square-index-2]').click();
        cy.get('[data-e2e=square-index-6]').click();
        cy.get('[data-e2e=square-index-3]').click();
        cy.get('[data-e2e=square-index-5]').click();
        cy.get('[data-e2e=square-index-8]').click();
        cy.get('[data-e2e=status]').should('have.text', 'Draw!');
    })
})

describe('Go to game start', () => {
    it('should clear all', () => {
        cy.visit('/');
        cy.get('[data-e2e=square-index-4]').click();
        cy.get('[data-e2e=square-index-0]').click();
        cy.get('[data-e2e=square-index-1]').click();
        cy.get('[data-e2e=square-index-7]').click();
        cy.get('[data-e2e=square-index-2]').click();
        cy.get('[data-e2e=square-index-6]').click();
        cy.get('[data-e2e=square-index-3]').click();
        cy.get('[data-e2e=square-index-5]').click();
        cy.get('[data-e2e=square-index-8]').click();
        cy.get('[data-e2e=move-index-0]').click();
        cy.get('[data-e2e=square-index-0]').should('have.text', '');
        cy.get('[data-e2e=square-index-1]').should('have.text', '');
        cy.get('[data-e2e=square-index-2]').should('have.text', '');
        cy.get('[data-e2e=square-index-3]').should('have.text', '');
        cy.get('[data-e2e=square-index-4]').should('have.text', '');
        cy.get('[data-e2e=square-index-5]').should('have.text', '');
        cy.get('[data-e2e=square-index-6]').should('have.text', '');
        cy.get('[data-e2e=square-index-7]').should('have.text', '');
        cy.get('[data-e2e=square-index-8]').should('have.text', '');
    })
})

describe('Go to move #1', () => {
    it('should remove O', () => {
        cy.visit('/');
        cy.get('[data-e2e=square-index-4]').click();
        cy.get('[data-e2e=square-index-0]').click();
        cy.get('[data-e2e=move-index-1]').click();
        cy.get('[data-e2e=square-index-0]').should('have.text', '');
        cy.get('[data-e2e=square-index-1]').should('have.text', '');
        cy.get('[data-e2e=square-index-2]').should('have.text', '');
        cy.get('[data-e2e=square-index-3]').should('have.text', '');
        cy.get('[data-e2e=square-index-4]').should('have.text', 'X');
        cy.get('[data-e2e=square-index-5]').should('have.text', '');
        cy.get('[data-e2e=square-index-6]').should('have.text', '');
        cy.get('[data-e2e=square-index-7]').should('have.text', '');
        cy.get('[data-e2e=square-index-8]').should('have.text', '');
    })
})

describe('Go to move #8', () => {
    it('should remove only 1 O', () => {
        cy.visit('/');
        cy.get('[data-e2e=square-index-4]').click();
        cy.get('[data-e2e=square-index-0]').click();
        cy.get('[data-e2e=square-index-1]').click();
        cy.get('[data-e2e=square-index-7]').click();
        cy.get('[data-e2e=square-index-2]').click();
        cy.get('[data-e2e=square-index-6]').click();
        cy.get('[data-e2e=square-index-3]').click();
        cy.get('[data-e2e=square-index-5]').click();
        cy.get('[data-e2e=square-index-8]').click();
        cy.get('[data-e2e=move-index-8]').click();
        cy.get('[data-e2e=square-index-0]').should('have.text', 'O');
        cy.get('[data-e2e=square-index-1]').should('have.text', 'X');
        cy.get('[data-e2e=square-index-2]').should('have.text', 'X');
        cy.get('[data-e2e=square-index-3]').should('have.text', 'X');
        cy.get('[data-e2e=square-index-4]').should('have.text', 'X');
        cy.get('[data-e2e=square-index-5]').should('have.text', 'O');
        cy.get('[data-e2e=square-index-6]').should('have.text', 'O');
        cy.get('[data-e2e=square-index-7]').should('have.text', 'O');
        cy.get('[data-e2e=square-index-8]').should('have.text', '');
    })
})
