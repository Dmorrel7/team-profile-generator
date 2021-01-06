  
const { test, expect } = require("@jest/globals")
const Intern = require("../lib/Intern")

test('creates intern object', () => 
{
    const intern = new Intern('Dalton', '29', 'daltonmorrel7@gmail.com', 'UCF');

    expect(intern.name).toBe('Dalton');
    expect(intern.id).toBe('29');
    expect(intern.email).toBe('daltonmorrel7@gmail.com');
    expect(intern.school).toBe('UCF');
});

test('interns school', () => 
{
    const intern = new Intern('Dalton', '29', 'daltonmorrel7@gmail.com', 'UCF');

    expect(intern.getSchool()).toBe('School: UCF');
});

test('interns role', () => 
{
    const intern = new Intern('Dalton', '29', 'daltonmorrel7@gmail.com', 'UCF');

    expect(intern.getRole()).toBe('Role: Intern');
});
