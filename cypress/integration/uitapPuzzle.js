///<reference types ='Cypress'/>
//importando a classe utpPuzzlePage que tem as funcoes
import uitapPuzzlePage from "../pages/uitapPuzzlePage";
import puzzlePage from "../pages/uitapPuzzlePage"

describe('Puzzle solving', () => {
    beforeEach(() => {
        puzzlePage.homePage();
    })
    it('CT001_Dynamic ID', () => {

        puzzlePage.clickHomePageElementsByText('Dynamic ID');

        puzzlePage.checkUrl('dynamicid');

        cy.get('section div[class=container] button[class="btn btn-primary"]')
            .contains('Button with Dynamic ID').click();

        puzzlePage.homeButton();
    })

    it('CT002_Class_Attribute', () => {

        puzzlePage.clickHomePageElementsByText('Class Attribute');

        puzzlePage.checkUrl('classattr');

        cy.get('.btn-primary').click();

        cy.on('window:alert', (text) => {
            expect(text).to.contains('Primary button pressed')
        })
        puzzlePage.homeButton();
    })

    it('CT003_Hidden_Layers', () => {

        puzzlePage.clickHomePageElementsByText('Hidden Layers')

        cy.get('#greenButton').dblclick({ force: true })

        cy.contains('User can not click green button in the current application state!')

        puzzlePage.homeButton();
    })
    it('CT004_Load_Delay', () => {

        puzzlePage.clickHomePageElementsByText('Load Delay');

        cy.waitFor('button[class="btn btn-primary"]')

        cy.get('button[class="btn btn-primary"]')
            .contains('Button Appearing After Delay')
            .click()

        puzzlePage.homeButton();

    })
    it('CT005_Ajax_data', () => {

        puzzlePage.clickHomePageElementsByText('AJAX Data')

        cy.get('#content').should('not.be.visible')

        cy.get('#ajaxButton').click()

        cy.wait(15000);

        cy.get('.bg-success')
            .contains('Data loaded with AJAX get request.')
            .should('be.visible')

        puzzlePage.homeButton();
    })
    it('CT006_Client_Side_Delay', () => {

        puzzlePage.clickHomePageElementsByText('Client Side Delay');

        cy.get('.bg-success').should('not.exist')

        cy.get('#ajaxButton').click({ force: true })

        cy.wait(15000);

        cy.get('.bg-success').should('be.visible')

        puzzlePage.homeButton()
    })
    it('CT007_Click', () => {

        puzzlePage.clickHomePageElementsByText('Click');

        cy.get('#badButton').should('have.class', 'btn btn-primary')
            .click({ force: true })

        cy.get('#badButton').should('have.class', 'btn btn-success')

        puzzlePage.homePage()
    })
    it('CT008_Text Input', () => {

        puzzlePage.clickHomePageElementsByText('Text Input');

        cy.get('#newButtonName')
            .type('nome do botão')
            .should('have.value', 'nome do botão')

        cy.get('#updatingButton')
            .contains("Button That Should Change it's Name Based on Input Value")
            .click()

        cy.get('#updatingButton')
            .contains('nome do botão')

        puzzlePage.homePage();

    })
    it('CT009_Scrollbars', () => {

        puzzlePage.clickHomePageElementsByText('Scrollbars');

        cy.get('[style="height:150px;overflow-y: scroll;width:300px;overflow-x:scroll"]').scrollTo(250, 125)

        cy.get('#hidingButton').click()

        puzzlePage.homePage();

    })
    it.skip('CT010_Dynamic Table', () => {

        puzzlePage.clickHomePageElementsByText('Dynamic Table');

        cy.get('span[role="cell"]').each(($e1, index) => {
            const textIndex = $e1.text()
            if (textIndex.includes('Chrome')) {
                cy.get('span[role="cell"]').eq(index)
            }
        })
        cy.get('span[role="columnheader"]').each(($e2, index2) => {
            const textIndex2 = $e2.text()
            if (textIndex2.includes('CPU')) {
                cy.get('span[role="columnheader"]').eq(index2)
            }
        })


    })
    it('CT011_Verify_Text', () => {

        puzzlePage.clickHomePageElementsByText('Verify Text')

        cy.get('.bg-primary').contains('Welcome UserName!')


        puzzlePage.homePage()
    })
    it('CT012_Progress_Bar', () => {

        puzzlePage.clickHomePageElementsByText('Progress')

        cy.get('#startButton').click()

        cy.get('.progress', { timeout: 250000 }).should('include.text', '75%')

        cy.get('#stopButton').click()

        puzzlePage.homePage()

    })
    it('CT013_Visibility', () => {

        puzzlePage.clickHomePageElementsByText('Visibility')

        cy.get('#hideButton').click()

        cy.get('#removedButton').should('not.exist')

        cy.get('#zeroWidthButton').should('not.be.visible')

        cy.get('#overlappedButton').should('be.visible')

        puzzlePage.homePage()

    })
    it('CT014_Sample App', () => {

        uitapPuzzlePage.clickHomePageElementsByText('Sample App');

        cy.get('#loginstatus').contains('User logged out.');

        cy.get('input[name="UserName"]')
            .type('josin')
            .should('have.value', 'josin');

        cy.get('input[name="Password"]')
            .type('pwd')
            .should('have.value', 'pwd');

        cy.get('#login').click();

        cy.get('#loginstatus').contains('Welcome, josin!');

        puzzlePage.homePage();
    })
    it('CT015_Mouse_Over', () => {

        puzzlePage.clickHomePageElementsByText('Mouse Over')

        cy.get('a[class="text-primary"][title="Click me"]')
            .contains('Click me')
            .click()

        cy.get('.text-warning')
            .contains('Click me')
            .click()

        cy.get('body section div[class="container"] p').contains('The link clicked 2 times.')

        puzzlePage.homePage()

    })
    it('CT016_Non-Breaking Space', () => {

        puzzlePage.clickHomePageElementsByText('Non-Breaking Space');

        cy.get('button[class="btn btn-primary"][type="button"]');

        puzzlePage.homePage();

    })
    it('CT017_Overlapped Element', () => {

        puzzlePage.clickHomePageElementsByText('Overlapped Element');

        cy.get('#id')
            .type('666')
            .should('have.value', '666')

        cy.get('[style="overflow-y: scroll; height:100px;"]').scrollTo(0, 100)

        cy.get('#name')
            .type('huenildo')
            .should('have.value', 'huenildo')


        puzzlePage.homePage();
    })
})