describe('Validate the buttons', () => {
    it('Navigate to demoqa site', () => {
      cy.visit('https://demoqa.com/upload-download');
      cy.wait(2000);
    });

    it('Click on Links', () => {
        cy.contains('Links').click();
    });

    it('Click on new tab link', () => {
        cy.get('#linkWrapper h5 strong').eq(0).invoke('text').should('eq', 'Following links will open new tab');
        // Remove target attribute and click on home link
        cy.get('#simpleLink').invoke('removeAttr', 'target').click();
        cy.wait(4000);
        // Click on browser back button
        cy.go('back');
        cy.wait(4000);
    });

    it('Click on dynamic new tab link', () => {
        // Remove target attribute and click on home link
        cy.get('#dynamicLink').invoke('removeAttr', 'target').click();
        cy.wait(4000);
    });
});
