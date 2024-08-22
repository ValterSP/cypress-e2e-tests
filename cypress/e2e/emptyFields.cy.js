describe('Login Form Validation', () => {
  const email = Cypress.env('testEmail')
  const password = Cypress.env('testPassword')
  it('shows error message when email field is empty', () => {
    cy.visit('https://glarassist.com/login')

    cy.contains("Começar").click()

    cy.get('input[id=loginPassword]').type("123")

    cy.get('button[id=userLoginSubmit]').click()

    cy.get('p[id=loginEmail-helper-text]').should('have.text', 'Este campo não pode estar vazio')
  });

  it('shows error message when password field is empty', () => {
    cy.visit('https://glarassist.com/login');

    cy.contains("Começar").click();

    // Preenche o campo de email
    cy.get('input[id=loginEmail]').type("teste@exemplo.com");

    // Deixa o campo de senha vazio e tenta submeter
    cy.get('button[id=userLoginSubmit]').click();

    // Verifica se a mensagem de erro para o campo de senha vazio é exibida
    cy.get('p[id=loginPassword-helper-text]').should('have.text', 'Este campo não pode estar vazio');
  });

  it('shows error message with wrong email', () => {
    cy.visit('https://glarassist.com/login');

    cy.contains("Começar").click();

    cy.get('input[id=loginEmail]').type("wrongEmail@exemplo.com");
    cy.get('input[id=loginPassword]').type(password);
    cy.get('button[id=userLoginSubmit]').click();
    
    
    cy.get('p[id=loginEmail-helper-text]').should('have.text', 'A conta não existe')
  });

  it('shows error message with wrong password' , () => {
    cy.visit('https://glarassist.com/login');

    cy.contains("Começar").click();

    cy.get('input[id=loginEmail]').type(email);
    cy.get('input[id=loginPassword]').type("wrongPassword");
    cy.get('button[id=userLoginSubmit]').click();
    
    
    cy.get('p[id=loginPassword-helper-text]').should('have.text', 'Palavra-passe incorreta')
  })

  it('logs in successfully' , () => {
    cy.visit('https://glarassist.com/login');

    cy.contains("Começar").click();

    cy.get('input[id=loginEmail]').type(email);
    cy.get('input[id=loginPassword]').type(password);
    cy.get('button[id=userLoginSubmit]').click();
    
    cy.get('button[id=userLogout]').should('be.visible')
  })

})
