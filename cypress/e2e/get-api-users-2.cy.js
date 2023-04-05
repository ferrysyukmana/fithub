describe('/api/users/2', () => {
    context('GET SINGLE USER', () => {
        it('get data single user', () => {
              cy.api({
                    method:'GET',
                    url: 'https://reqres.in/api/users/2',
                    }).
                    then((response)=>{
                      cy.log(JSON.stringify(response.body))
                      cy.log(JSON.stringify(response.headers))
                      expect(response.status).to.eq(200)
                      expect(response.body.data).to.have.property('id')
                      expect(response.body.data).to.have.property('email')
                      expect(response.body.data).to.have.property('first_name')
                      expect(response.body.data).to.have.property('last_name')
                      expect(response.body.data).to.have.property('avatar')  
                      expect(response.body.support).to.have.property('url')   
                      expect(response.body.support).to.have.property('text')
                      expect(response.body.data.id).to.eq(2)
                      expect(response.body.data.email).to.eq('janet.weaver@reqres.in')  
                      expect(response.body.data.first_name).to.eq('Janet')  
                      expect(response.body.data.last_name).to.eq('Weaver')  
                      expect(response.body.data.avatar).to.eq('https://reqres.in/img/faces/2-image.jpg')
                      expect(response.body.support.url).to.eq('https://reqres.in/#support-heading') 
                      expect(response.body.support.text).to.eq('To keep ReqRes free, contributions towards server costs are appreciated!') 
            })
        })
    })
})