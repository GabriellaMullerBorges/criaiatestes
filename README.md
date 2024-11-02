# Testes CriaAI

Este projeto contém uma suíte de testes automatizados usando [Cypress](https://www.cypress.io/) para validar o fluxo de autenticação e outras funcionalidades do sistema **CriaAI**. Os testes garantem a qualidade da aplicação, cobrindo cenários críticos de login, navegação e preenchimento de formulários.

## Pré-requisitos

- **Node.js** versão 12 ou superior
- **NPM** versão 6 ou superior
- **Cypress** versão ^9.5.1 (configurada no `package.json`)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/testes-criaai.git
Entre no diretório do projeto:

   ```bash
cd testes-criaai

```
Instale as dependências:
   ```bash
npm install
```
## Como Executar os Testes

### Modo Interativo
Execute os testes com a interface do Cypress:

 ```bash
npx cypress open
```
### Modo Headless
Execute os testes sem interface (útil para CI/CD):
 ```bash
npx cypress run
 ```
## Estrutura do Projeto

cypress/integration/: Contém os arquivos de teste.
cypress/support/commands.js: Comandos customizados como cy.preenchelogin().
cypress/fixtures/: Dados de teste usados nos casos de teste.
cypress.config.js: Configurações do Cypress, incluindo baseUrl para a aplicação.

## Exemplo de Teste de Login
Utilize o comando cy.preenchelogin() para automatizar o fluxo de login no CriaAI. 
Exemplo:

 ```bash
describe('Teste de Login', () => {
   it('Deve fazer login e redirecionar corretamente', () => {
      cy.preenchelogin()
      cy.url().should('include', '/onboarding-cpf')
   })
})
 ```

### Contribuição
Contribuições são bem-vindas! 
Abra uma issue ou envie um pull request.
