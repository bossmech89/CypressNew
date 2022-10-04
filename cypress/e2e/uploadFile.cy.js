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
});

