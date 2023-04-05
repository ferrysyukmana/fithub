describe('/api/users/2', () => {
    context('DELETE', () => {
        it('delete users 2', () => {
              cy.api({
                    method:'DELETE',
                    url: 'https://reqres.in/api/users/2',
                    }).
                    then((response)=>{
                      cy.log(JSON.stringify(response.body))
                      cy.log(JSON.stringify(response.headers))
                      expect(response.status).to.eq(204)
                       
            })
        })
    })
})