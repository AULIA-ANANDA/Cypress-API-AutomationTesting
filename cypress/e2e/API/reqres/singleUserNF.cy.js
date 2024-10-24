///<reference types="cypress"/>

describe('Reqres API Testing', () => {
    it('Testing API Single Users Not Found', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/23',
            failOnStatusCode: false
        })
        .then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.deep.eq({})
        })
    });
})