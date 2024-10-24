///<reference types="cypress"/>

  import loginPage from "../../../pom/login/login.cy";

  describe('Testing Login Fitur', () => {
      it.only('TC_LOG_001 Login dengan Valid Username dan Password', () => {
        //untuk kunjungi halaman login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPage.verifyLoginPage().should('have.text','Login');
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');
        cy.intercept('GET','**/action-summary').as('actionSummary');
        loginPage.buttonSubmit().click();
        cy.wait('@actionSummary').then((intercept) => {
          expect(intercept.response.statusCode).to.equal(200);
        });
        loginPage.dashboardPage().should('have.text','Dashboard');
    
      });
  
    it.only('TC_LOG_002 Login dengan Valid Username dan Password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.verifyLoginPage().should('have.text','Login');
      loginPage.inputUsername().type('Admin');
      loginPage.inputPassword().type('Admin123');
      loginPage.buttonSubmit().click();
      loginPage.invalidCredentials().should('have.text','Invalid credentials');
    });
    
    it.only('TC_LOG_003 Login dengan Valid Username dan Invalid Password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPage.verifyLoginPage().should('have.text','Login');
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123444');
        loginPage.buttonSubmit().click();
        loginPage.invalidCredentials().should('have.text','Invalid credentials');
    });

    it.only('TC_LOG_004 Login dengan Username menggunakan simbol dan Valid Password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.verifyLoginPage().should('have.text','Login');
      loginPage.inputUsername().type('Admin@*_');
      loginPage.inputPassword().type('admin123');
      loginPage.buttonSubmit().click();
      loginPage.invalidCredentials().should('have.text','Invalid credentials');
    });
  
    it.only('TC_LOG_005 Login dengan Valid Username dan Password menggunakan simbol', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.verifyLoginPage().should('have.text','Login');
      loginPage.inputUsername().type('Admin');
      loginPage.inputPassword().type('admin123@@@');
      loginPage.buttonSubmit().click();
      loginPage.invalidCredentials().should('have.text','Invalid credentials');
    });
  
    it.only('TC_LOG_006 Login dengan Valid Username dan Empty Password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.verifyLoginPage().should('have.text','Login');
      loginPage.inputUsername().type('Admin');
      loginPage.inputPassword().should('be.empty');
      loginPage.buttonSubmit().click();
      loginPage.requiredMessage().should('contain','Required');
    });
  
    it.only('TC_LOG_007 Login dengan Empty Username dan Valid Password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.verifyLoginPage().should('have.text','Login');
      loginPage.inputUsername().should('be.empty');
      loginPage.inputPassword().type('admin123');
      loginPage.buttonSubmit().click();
      loginPage.requiredMessage().should('contain','Required');
    });
    it.only('TC_LOG_008 Login dengan Empty Username dan Password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.verifyLoginPage().should('have.text','Login');
      loginPage.inputUsername().should('be.empty');
      loginPage.inputPassword().should('be.empty');
      loginPage.buttonSubmit().click();
      loginPage.requiredMessage().should('contain','Required');
    });
  
    it.only('TC_LOG_009 Login dengan Copy Username dan Password dari Notepad', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.verifyLoginPage().should('have.text','Login');
      loginPage.inputUsername().type('Admin');
      loginPage.inputPassword().type('admin123');
      cy.intercept('GET','**/action-summary').as('actionSummary');
      loginPage.buttonSubmit().click();
      cy.wait('@actionSummary').then((intercept) => {
        expect(intercept.response.statusCode).to.equal(200);
      });
      loginPage.dashboardPage().should('have.text','Dashboard');
    });
    it.only('TC_LOG_010 Login Menggunakan Tombol Enter Setelah Input Valid Username dan Password ', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.verifyLoginPage().should('have.text','Login');
      loginPage.inputUsername('[name="username"]').type('Admin');
      loginPage.inputPassword('[name="password"]').type('admin123{enter}');
      cy.intercept('GET','**/action-summary').as('actionSummary');
      cy.wait('@actionSummary').then((intercept) => {
        expect(intercept.response.statusCode).to.equal(200);
      });
      loginPage.dashboardPage().should('have.text','Dashboard');
    });
    it.only('TC_LOG_011 Login Menggunakan Tombol Enter Setelah Input Valid Username', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.verifyLoginPage().should('have.text','Login');
      loginPage.inputUsername('[name="username"]').type('Admin{enter}');
      loginPage.inputPassword('[name="password"]').should('be.empty');
      loginPage.buttonSubmit('[type="submit"]').click();
      loginPage.requiredMessage('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('contain','Required');
    });
  
    it.only('TC_LOG_0012 Validasi Link Reset Password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.verifyLoginPage().should('have.text','Login');
      loginPage.forgotPassword().should('be.visible');
      loginPage.forgotPassword().click();
      cy.url().should('include','https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
      loginPage.dashboardForgotPassword().should('have.text','Reset Password');
    });

    it.only('TC_LOG_0013 Pengukuran Waktu Respons Login', () => {
      const startTime = performance.now();
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.verifyLoginPage().should('have.text','Login');
      loginPage.inputUsername().type('Admin');
      loginPage.inputPassword().type('admin123');
      cy.intercept('GET','**/action-summary').as('actionSummary');
      loginPage.buttonSubmit().click();
      cy.wait('@actionSummary').then((intercept) => {
        expect(intercept.response.statusCode).to.equal(200);
      });
      cy.url().should('include','/dashboard').then(() => {
        const endTime = performance.now();
        const duration = endTime - startTime;

        cy.log('Login time: ${duration.toFixed(2)} milliseconds');
      });
    });

  })