/// <reference types="cypress" />
import HomeElements from "../elements/home_elements"

const homeElements = new HomeElements
const url = Cypress.config('baseUrl')

class HomePage {

    accessHomePage() {
        cy.visit(url)
    }

    fillName(firstName, lastName) {
        cy.get(homeElements.inputFirstName()).type(firstName)
        cy.get(homeElements.inputLastName()).type(lastName)
    }

    selectCountry(pais) {
        cy.get(homeElements.selectCountry()).select(pais)
    }

    fillWhatsapp(contato) {
        cy.get(homeElements.inputWhatsappNumber()).type(contato)
    }

    fillBusiness(nomeEmpresarial) {
        cy.get(homeElements.inputBusinessName()).type(nomeEmpresarial)
    }

    fillEmail(email) {
        cy.get(homeElements.inputEmail()).type(email)
    }

    fillCountNumber() {

        let numb1
        let numb2
        let getResult

        cy.get(homeElements.countNumbersOne()).invoke('text').then(numberText1 => { // usando o invoke() para pegar o texto do elemento e alterando o valor para inteiro com o parseInt()
            numb1 = parseInt(numberText1)
            cy.get(homeElements.countNumbersTwo()).invoke('text').then(numberText2 => { // usando o invoke() para pegar o texto do elemento e alterando o valor para inteiro com o parseInt()
                numb2 = parseInt(numberText2)
                getResult = numb1 + numb2
                cy.log('Resultado: ' + getResult)
                cy.get(homeElements.inputResult()).type(getResult)
            })
        })

    }

    btnSubmit() {
        cy.get(homeElements.btnSubmit()).click()
    }

} export default HomePage