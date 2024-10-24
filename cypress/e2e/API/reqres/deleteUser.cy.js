///<reference types="cypress"/>

describe('Reqres API Testing', () => {
    it('DELETE USER', () => {
        cy.request('DELETE','https://reqres.in/api/users/2')
        .then((response) => {
            expect(response.status).to.eq(204)
            expect(response.body).to.not.be.null
        })
    });
})