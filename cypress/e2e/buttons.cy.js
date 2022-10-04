describe('Validate the buttons', () => {
    it('passes', () => {
      cy.visit('https://demoqa.com/upload-download');
    });

    it('Click on button menu', () => {
        cy.wait(3000);
        cy.contains('Buttons').click({force: true});
    });

    it('Click on double click me button', () => {
        cy.get('#doubleClickBtn').dblclick();
        cy.get('#doubleClickMessage').invoke('text').should('eq', 'You have done a double click');
    });

    it('Click on right click me button', () => {
        cy.wait(2000);
        cy.get('#rightClickBtn').rightclick({force: true});
        cy.get('#rightClickMessage').invoke('text').should('eq', 'You have done a right click');
    });

    it('Click on click me button', () => {
        cy.get('.mt-4 .btn-primary').eq(2).click({force: true});
        cy.get('#dynamicClickMessage').invoke('text').should('eq', 'You have done a dynamic click');
    });

    
});
