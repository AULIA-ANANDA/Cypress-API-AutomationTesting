///<reference types="cypress"/>

describe('API Testing', () => {
    it('Testing API Single User', () => {
        cy.request('GET','https://reqres.in/api/users?page=2')
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null
        })
    });
})