/// <reference types="cypress" />

describe('Atualizar objeto', () => {

    it('Atualizar parcialmente objeto por id', () => {
        cy.request({
            method: 'PATCH',
            url:'https://api.restful-api.dev/objects/ff8081818dfdd992018e0fdc9c8d1037',
            body:{
                "name": "Apple Gleyciana (Updated Name)"
             }
         })
         .then((resultado) => {
        
             expect(resultado.body.name).to.equal('Apple Gleyciana (Updated Name)');
             expect(resultado.status).to.equal(200);
             expect(resultado.status).to.exist;
            
  
         });
       
    });

    it('Ataulizar parcialmente por id inválido', () => {
        cy.request({
           method: 'PATCH',
           url:'https://api.restful-api.dev/objects/ff8081',
           failOnStatusCode: false,
           body:{
            "name": "Apple Gleyciana (Updated Name)"
         }
     })
        .then((response) => {
            expect(response.status).to.equal(404);
            expect(response.status).to.exist;
            expect(response.body.error.includes("The Object with id = ff8081818dfd doesn't exist.")).to.be.false; 
        
        });
     
    });
  });
 