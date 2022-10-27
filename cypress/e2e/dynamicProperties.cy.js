// Wait for elements will be enabled
function waitFiveSeconds(millisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, millisec)
    })
};

describe('Validate the buttons', () => {
    it('passes', () => {
        cy.visit('https://demoqa.com/upload-download');
    });

    it('Click on Dynamic Properties menu', () => {
        cy.contains('Dynamic Properties').click();
    });

    it('Validate the dynamic properties', async () => {
        cy.get('#enableAfter').should('be.disabled');
        // async function myFunction(){
        // await waitFiveSeconds(8000);
        // };
        // myFunction();
    });

    it('Click on "Will enable 5 seconds" button', () => {
        cy.wait(5000);
        cy.get('#enableAfter').click({force: true});
        cy.get('#enableAfter').should('be.enabled');
    });

    it('Validate color change text color', () => {
        // cy.wait(5000);
        cy.get('#colorChange').should('have.class', 'text-danger');
        cy.get('#visibleAfter').should('contain', 'Visible After 5 Seconds');
    });
});
