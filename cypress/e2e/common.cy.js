// Login function

export function login() {
    return describe('Visit the demoQA site', () => {
        it('Navigate to demoQA site', () => {
            cy.visit('https://demoqa.com/');
            cy.wait(10000);
        });
    });
}
