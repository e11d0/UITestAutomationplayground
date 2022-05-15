///<reference types ='Cypress'/>
class uitapPuzzlePage {
    homePage() {
        //acessando a url home
        cy.visit('/');
        //validando o checkpoint da pagina home
        cy.get('h1').contains('UI Test AutomationPlayground');
    }
    checkUrl(url){
        cy.url().should('equal','http://uitestingplayground.com/'+url);
    }
    clickHomePageElementsByText(elementText){
        cy.get('#overview div[class="row"] div[class="col-sm"] h3 a').contains(elementText).click();
    }
    homeButton(){
        cy.get('#navbarSupportedContent a[class="nav-link"]').contains('Home').click();
        this.checkUrl('home');
    }   

}
export default new uitapPuzzlePage