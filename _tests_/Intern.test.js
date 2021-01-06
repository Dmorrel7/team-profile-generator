  
const { test, expect } = require("@jest/globals")
const Intern = require("../lib/Intern")

test('expect intern to be an instance' ,()=> 
{
    const intern = new Intern()
    expect(typeof(intern)).toBe('object');
})

test('expect the value of school to be the same as constructor argument', ()=> 
{
    const school = 'EX School'
    const intern = new Intern('Dalton', '29', 'daltonmorrel7@gmail.com', school);

    expect(intern.school).toBe(school)
})

test('expect get school to be displayed as a string', ()=> 
{
    const intern = new Intern('Dalton', '29', 'daltonmorrel7@gmail.com', 'EX School');

    expect(intern.getSchool()).toBe(intern.school)
})

test('expect get role to be value of intern', ()=> 
{
    const intern = new Intern('Dalton', '29', 'daltonmorrel7@gmail.com', 'EX School');

    expect(intern.getRole()).toBe('Intern')
})


