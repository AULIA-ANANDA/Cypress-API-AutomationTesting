///<reference types="cypress"/>

describe('Reqres API Testing', () => {
    it('GET Delayed Response', () => {
        cy.request('GET','https://reqres.in/api/users?delay=3')
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
        })
    });
})