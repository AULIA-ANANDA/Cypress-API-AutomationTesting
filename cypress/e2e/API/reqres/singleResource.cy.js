///<reference types="cypress"/>

describe('Reqres API Testing', () => {
    it('Get Single Resource', () => {
        cy.request('GET','https://reqres.in/api/unknown/2')
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
        })
    });
})