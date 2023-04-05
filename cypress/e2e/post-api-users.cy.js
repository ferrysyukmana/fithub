describe('/api/users', () => {
    context('POST CREATE', () => {
        it('check create users and validation', () => {
              cy.api({
                    method:'POST',
                    url: 'https://reqres.in/api/users',
                    body:{
                        "name": "morpheus",
                        "job": "leader"
                    }
                    }).
                    then((response)=>{
                      cy.log(JSON.stringify(response.body))
                      cy.log(JSON.stringify(response.headers))
                      expect(response.status).to.eq(201)
                      expect(response.body).to.have.property('name')
                      expect(response.body).to.have.property('job')
                      expect(response.body).to.have.property('id')
                      expect(response.body).to.have.property('createdAt')   
                      expect(response.body.name).to.eq('morpheus')   
                      expect(response.body.job).to.eq('leader')   
            })
        })
    })
})