/// <reference types="cypress" />

import HomePage from "../pages/home_page"

const homePage = new HomePage

Given(/^usuario acessando a home do portal$/, () => {
	homePage.accessHomePage()
})

When(/^o usuario informar o Nome "([^"]*)" e o Sobrenome "([^"]*)"$/, (firstName, lastName) => {
    homePage.fillName(firstName, lastName)
})

When(/^informar o DD do pais "([^"]*)"$/, (pais) => {
    homePage.selectCountry(pais)
})

When(/^informar numero para contato "([^"]*)"$/, (contato) => {
    homePage.fillWhatsapp(contato)
})

When(/^informar a sua empresa "([^"]*)"$/, (nomeEmpresarial) => {
    homePage.fillBusiness(nomeEmpresarial)
})

When(/^informar o seu email "([^"]*)"$/, (email) => {
    homePage.fillEmail(email)
})

When(/^informar o resultado da soma entres os numeros "([^"]*)" "([^"]*)"$/, (numb1,numb2) => {
    homePage.fillCountNumber(numb1,numb2)
})

When(/^clicar no botão de cadastrar$/, () => {
    homePage.btnSubmit()
})

Then(/^o cadastro será realizado com sucesso$/, () => {
    cy.log('Cadastro realizado!')
})
