describe('Página', () => {
    it('Deve ', () => {
        // Limpa cookies, cache e sessão antes de visitar a página
    
        // Visita a página de registro diretamente
        cy.visit('https://criaai.com/registro');
        cy.pause();
    
        // Confirma que a URL é a esperada e permanece na página de registro
        cy.url().should('include', '/registro');
      });
      
    });