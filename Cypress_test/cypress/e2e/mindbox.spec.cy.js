/// <reference types="Cypress" />
describe('template spec', () => {
  it('Заявка в шапке', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://mindbox.ru')
      .get('.header-side__button.js-call-sidebar').click()
      .get('.js-sidebar-popup__form').contains('Заявка на презентацию платформы')
      .get('form.js-sidebar-popup__form input[name="name"]')
      .type('test')
      .get('form.js-sidebar-popup__form input[name="company"]')
      .type('intensa.ru')
      .get('form.js-sidebar-popup__form input[name="email"]')
      .type('k.kostenok@intensa.ru')
      .get('form.js-sidebar-popup__form input[name="phone"]')
      .type('+71111111111')
      .get('form.js-sidebar-popup__form input[name="phone"]')
      .get('.js-dropdown-input.sidebar-form__dropdown-input').click()
      .get('.js-dropdown-element.sidebar-form__dropoption:nth-child(5)').click()
      .get("[type='checkbox']").check({ force: true })

  })
  //it ('Random Check', ()=> {
  //  cy.viewport(1920, 1080)
  //  cy.visit('https://mindbox.ru/subscribe/')
  //    .get(".subscribe-form__inner input[type=checkbox]")
  //    .should("be.visible")
  //    .and("have.length", 7)
  //    .then(($items)=> {
  //      return Cypress._.sampleSize($items.toArray(), 2)
  //   })
  //   .should("have.length", 2)
  //    .click({ multiple: true })





  //  })


})