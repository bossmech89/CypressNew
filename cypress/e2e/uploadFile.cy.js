let firstName;

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/upload-download');
  });

  it('Upload single file', () => {
    cy.get('input[type=file]').selectFile('cypress/fixtures/file.png', { force: true });
  });

  it('Enter text box values', () => {
    cy.get('#item-0 .text').eq(0).click();
    // Enter full name
    cy.wait(4000);
    cy.get('#userName').type('Baskaran');
  });

  it('Enable the check box', () => {
    cy.contains('Check Box').click();
    // Click on the check box
    cy.get('.rct-checkbox').click();
  });

  it('Verify whether the check is enabled', () => {
    cy.get('.rct-checkbox svg').should('class', 'rct-icon-check')
  });

  it('Click on Radio button', () => {
    cy.contains('Radio Button').click();
    // Validate the text
    cy.get('.mb-3').invoke('text').should('eq', 'Do you like the site?');
    // Select yes radio button
    cy.get('.custom-control-label').click({multiple: true});
  });

  it('Click on web tables', () => {
    cy.contains('Web Tables').click();
  });

  it('Validate the first name', () => {
    const position = 2;
    firstName = Cypress.$('.rt-table .rt-tbody .rt-tr-group div:nth-child(1) .rt-td').eq(position).text();
    console.log(firstName);
    // Validate the first name
    cy.get('.rt-table .rt-tbody .rt-tr-group').each(row => {
      const first = row.find('.rt-td').eq(position).text();
      if (first === firstName){
        cy.get('.action-buttons span[title="Edit"]').eq(position).click();
      }
      console.log(first);
    })
  });

  it('Edit the details in Registration form', () => {
    const firstName = ' Test';
    const lastName = ' Nos'
      // Edit the first name and last name
      cy.get('#firstName').type(firstName);
      cy.get('#lastName').type(lastName);
      // Edit the Email ID
      cy.get('#userEmail').clear();
      cy.get('#userEmail').type('test@gmail.com');
      // Click on submit button
      cy.get('#submit').click();
  })
});

