const { test, expect } = require("@jest/globals")
const Engineer = require('../lib/Engineer')

test('expect engineer to be a new instance', ()=> 
{
    const engineer = new Engineer()
    expect(typeof(engineer)).toBe('object')
})

test('expect a github username to be the same as constructor argument', ()=> 
{
    const github = 'Dmorrel7'
    const engineer = new Engineer('Dalton', 29, 'daltonmorrel7@gmail.com', github)
    expect(engineer.github).toBe(github)

})

test('expect get github to be a link of engineer', ()=> 
{
    const engineer = new Engineer('Dalton', 29, 'daltonmorrel7@gmail.com', 'Dmorrel7')
    expect(engineer.getGithub()).toBe(engineer.github)
})

test('expect get role to be value of engineer', ()=> 
{
    const engineer = new Engineer('Dalton', 29, 'daltonmorrel7@gmail.com', 'Dmorrel7')

    expect(engineer.getRole()).toBe('Engineer')
})