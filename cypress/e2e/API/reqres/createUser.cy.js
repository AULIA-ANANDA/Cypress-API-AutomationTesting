///<reference types="cypress"/>

describe('Reqres API Testing', () => {
    it('POST CREATE', () => {
        const requestBody = {
            name: 'Aulia',
            job: 'QA Angineer'
        };
        cy.request('POST','https://reqres.in/api/users', requestBody)
        .then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.not.be.null
            expect(response.body.name).to.eq(requestBody.name);
            expect(response.body.job).to.eq(requestBody.job);
        })
    });
})