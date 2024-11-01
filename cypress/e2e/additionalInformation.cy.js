describe('Página /additionalInformation - Validação do Campo CPF em Branco', () => {
  beforeEach(() => {
    // Limpa cookies, armazenamento local e cache de sessão antes de cada teste
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.clearAllSessionStorage();
  });


  it('Deve carregar a página de registro sem redirecionar automaticamente', () => {
    // Bloqueia todas as tentativas de redirecionamento
    cy.intercept('GET', '**/termsAndConditions*', { statusCode: 204 });
    cy.intercept('GET', '**/faq*', { statusCode: 204 });
    cy.intercept('GET', '**/', { statusCode: 204 });

    // Visita a página de registro diretamente
    cy.visit('https://criaai.com/registro', { failOnStatusCode: false });

    // Aguarda e verifica que a URL ainda está na página de registro
    cy.url({ timeout: 10000 }).should('include', '/registro');
    cy.window().then(win => win.close())
  });

  it('Preenche o formulário de registro e tenta submeter', () => {
    // Intercepta e bloqueia as requisições que causam o redirecionamento
    cy.intercept('POST', '**/identitytoolkit.googleapis.com/**', { statusCode: 204 });
    cy.intercept('POST', '**/f.clarity.ms/**', { statusCode: 204 });
    cy.intercept('GET', '**/faq', { statusCode: 204 });
    cy.intercept('GET', '**/users/getUser', { statusCode: 204 });

    // Visita a página de registro diretamente
    cy.visit('https://criaai.com/registro', { failOnStatusCode: false });

    // Preenche o campo Nome
    cy.get('input[placeholder="Nome"]').type('Gabriela');

    // Preenche o campo Email
    cy.get('input[placeholder="Email"]').type('gabi@email.com');

    // Preenche o campo Senha
    cy.get('input[placeholder="Senha"]').type('!Gabi1234!');

    // Preenche o campo Confirmar Senha
    cy.get('input[placeholder="Confirmar Senha"]').type('!Gabi1234!');

    cy.get('input[type="checkbox"][name="accepted"]').check()

    cy.get('button[type="submit"]').click();
    
    cy.get('button[type="submit"]').should('not.be.disabled')

  });
});
 