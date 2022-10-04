let firstName;

describe('Validate the webtable', () => {
    it('Click on web tables', () => {
        cy.visit('https://demoqa.com/upload-download');
        cy.wait(4000);
    });

    it('Validate the first name', () => {
        cy.contains('Web Tables').click({force: true});
        const position = 2;
        firstName = Cypress.$('.rt-table .rt-tbody .rt-tr-group div:nth-child(1) .rt-td').eq(position).text();
        console.log(firstName);
        cy.scrollTo('left');
        // Validate the first name
        cy.get('.rt-table .rt-tbody .rt-tr-group').each(row => {
            const first = row.find('.rt-td').eq(position).text();
            if (first === firstName) {
                cy.get('.action-buttons span[title="Edit"]').eq(position).click({force: true});
            }
            console.log(first);
        })
    });

    it('Edit the details in Registration form', () => {
        const firstName = ' Test';
        const lastName = ' Nos'
        // Edit the first name and last name
        cy.wait(3000);
        cy.get('#firstName').type(firstName);
        cy.get('#lastName').type(lastName);
        // Edit the Email ID
        cy.get('#userEmail').clear();
        cy.get('#userEmail').type('test@gmail.com');
        // Click on submit button
        cy.get('#submit').click();
    })
})
