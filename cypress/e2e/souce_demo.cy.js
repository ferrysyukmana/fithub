describe('/api/users', () => {
    context('POST CREATE', () => {
        it('check create users and validation', () => {
            cy.visit("https://www.saucedemo.com/")
            cy.xpath('//input[@data-test="username"]').type("standard_user")
            cy.xpath('//input[@data-test="password"]').type("secret_sauce")
            cy.get('#login-button').click()
        })
    })
})