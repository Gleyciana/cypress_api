/// <reference types="cypress" />

describe('Buscar dispositivos', () => {

    it('Buscar todos os dispositivos', () => {
        cy.request({
            method: 'GET',
            url:'https://api.restful-api.dev/objects'
         })
         .then((resultado) => {
            resultado.body.forEach(({ id, name, data }) => {
                expect({ id, name, data }).to.include.all.keys('id', 'name', 'data');
            });
             expect(resultado.status).to.equal(200);
             expect(resultado.status).to.exist;
            
  
         });
       
    });

    it('Buscar dispositivos por id', () => {
       cy.request({
          method: 'GET',
          url:'https://api.restful-api.dev/objects/6'
       })
       .then((resultado) => {
           expect(resultado.status).to.equal(200);
           expect(resultado.status).to.exist;
           expect(resultado.body.name).to.equal('Apple AirPods');
           expect(resultado.body.id).to.equal('6');

       });

    });

    it('Buscar dispositivos por id inválido', () => {
        cy.request({
           method: 'GET',
           url:'https://api.restful-api.dev/objects/124',
           failOnStatusCode: false
        })
        .then((response) => {
            expect(response.status).to.equal(404);
            expect(response.status).to.exist;
            expect(response.body.error).to.equal('Oject with id=124 was not found.');
          });
         
     });


});