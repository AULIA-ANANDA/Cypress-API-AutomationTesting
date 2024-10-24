///<reference types="cypress"/>

describe('Reqres API Testing', () => {
    it('Get Single Resource Not Found', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown/23',
            failOnStatusCode: false
        })
        .then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.deep.eq({})
        })
    });
})