/// <reference types = "cypress-downloadFile" /> 

it('File upload demo', function(){
    //cy.visit('https://filebin.net/')
    //cy.get('#fileField').attachFile('4th step.png')

    cy.visit('http://tinyupload.com/')
    //cy.get('.pole_plik').attachFile('4th step.png')
    cy.get('[name="uploaded_file"]').attachFile('4th step.png')
    
})

it('File download demo',function(){
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
})
