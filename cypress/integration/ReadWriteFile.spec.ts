
describe('Read write file demo', function(){

beforeEach(function(){
cy.fixture('example.json').as('data')
})

it('Read file using fixture', function(){

    cy.fixture('example.json')
    .its('name').should('eq','cypress')

    cy.log(this.data.name)
    cy.log(this.data.email)
})

it('read  file using read file command', function(){

    cy.readFile('./cypress/fixtures/example.json')
    .its('name').should('eq','cypress')
})

it('Write file demo',function(){

    cy.writeFile('./sample.txt', 'hello i am learning cypress')
    cy.writeFile('./sample.txt', '\nThis is interesting', {flag: 'a+'})
})

})