///<reference types="cypress"/>

describe('Reqres API Testing', () => {
    it('UPDATE PUT', () => {
        cy.request('PUT','https://reqres.in/api/users/2')
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
        })
    });
})