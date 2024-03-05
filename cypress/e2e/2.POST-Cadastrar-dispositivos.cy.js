/// <reference types="cypress" />

describe('Cadastrar dispositivos', () => {
    it('Cadastrar dispositivos com sucesso', () => {
       cy.request({
          method: 'POST',
          url:'https://api.restful-api.dev/objects',
          body:{
            
                "name": "Dispositivo GLEYCI",
                "data": {
                   "year": 2019,
                   "price": 1849.99,
                   "CPU model": "Intel Core i9",
                   "Hard disk size": "1 TB"
                }

          }
       })
       .then((resultado) => {
           expect(resultado.status).to.equal(200);
           expect(resultado.body.name).to.equal('Dispositivo GLEYCI');

       });

      });

       it('Cadastrar dispositivos com name vazio', () => {
         cy.request({
            method: 'POST',
            url:'https://api.restful-api.dev/objects',
            failOnStatusCode: false,
            body:{
            
               "name": " ",
               "data": {
                  "year": 2019,
                  "price": 1849.99,
                  "CPU model": "Intel Core i9",
                  "Hard disk size": "1 TB"
               }
           }
      })
      .then((resultado) => {
         expect(resultado.status).to.equal(200);
         expect(resultado.body.name).to.be.a('string')
     });
     
   });
 });
