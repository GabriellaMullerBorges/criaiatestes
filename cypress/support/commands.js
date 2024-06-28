// ***********************************************
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Gabi')
    cy.get('#lastName').type('Borges')
    cy.get('#email').type('gabimullerborges@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click() //tag e o texto que deve ser contido nesse elemento
})