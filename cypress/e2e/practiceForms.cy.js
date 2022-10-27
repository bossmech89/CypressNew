const visit = require('./common.cy.js');

// Function for Practice form in the left nav
function practiceForm() {
    cy.contains('Practice Form').click();
    // Validate the "Student Registration form" text
    cy.get('.practice-form-wrapper h5').invoke('text').should('eq', 'Student Registration Form');
    // Enter Firstname and Last name
    cy.get('#firstName').type('Demo')
    cy.get('#lastName').type('1');
    // Enter email id
    cy.get('#userEmail').type('demo@test.in');
    // Select Gender
    cy.get('.custom-control-input').eq(0).click({ force: true });
    // Enter Mobile Number
    const mobileNumber = '9876543210'
    cy.get('#userNumber').type(mobileNumber);
    // Select DOB
    cy.wait(2000);
    cy.get('#dateOfBirthInput').click();
    cy.wait(1000);
    cy.get('div[aria-label="Choose Sunday, September 25th, 2022"]').click({force: true});
    // Select hobbies
    cy.get('#hobbies-checkbox-1').click({ force: true });
    // Upload Picture
    cy.get('#uploadPicture').selectFile('cypress/fixtures/file.png', { force: true });
}


describe('Validate the Forms module', () => {

    before(() => {
        // Visit the demoqa site
        // visit.login();
        cy.visit('https://demoqa.com/')
        cy.wait(4000);
    });

    it('Click on the Forms module', () => {
        cy.get('.category-cards .card-body').eq(1).click();
        cy.wait(3000);
    });

    it('Click on the Practice form in the left nav', () => {
        practiceForm();
    })
});


