describe('All API Tests' , () => {


   // Cypress.config('baseurl', '')
    it('GET 1' , () => {
    
        cy.request('GET', 'https://reqres.in/api/users?page=2')
        .then((responce) => {
            expect(responce).to.have.property('status',200)
            expect(responce.status).to.equal(200)
            expect(responce.body).not.to.be.null;
            expect(responce.body).to.have.property('page',2)
            expect(responce.body.data).to.have.length(6)

        })
    })

    it('GET 2',() => {

        cy.request('GET', 'https://reqres.in/api/users?page=2').as('User_list');
        cy.get('@User_list')
        .should((responce) => {
            expect(responce).to.have.property('status',200)
            expect(responce.status).to.equal(200)
            expect(responce.body).not.to.be.null;
            expect(responce.body).to.have.property('page',2)
            expect(responce.body.data).to.have.length(6)

        })
        
    })
 
     it('POST 1', () => {
         cy.request({

            'method' : 'POST',
            'url' : 'https://reqres.in/api/users',
            body : {
                "name": "srushti",
                "job": "employee"
            }
         })

         
     })
     it('PUT 1', () => {

        cy.request({
            'method' : 'PUT',
            'url' : 'https://reqres.in/api/users/2',
            body: {
                "name": "John",
                "job": "Engineer"
            }
        })
        .then((response) => {
            expect(response).to.have.property('status', 200);
            expect(response.status).to.equal(200);
            expect(response.body).not.to.be.null;
        })
    })


    it('DELETE 1', () => {
        cy.request({
            'method' : 'DELETE',
            'url' : 'https://reqres.in/api/users/2'
        })
        .then((response) => {
            expect(response).to.have.property('status', 204);
            expect(response.status).to.equal(204);
            expect(response.body).not.to.be.null;
        })
    })
     
})
