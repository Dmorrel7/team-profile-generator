const { test, expect } = require("@jest/globals")
const Engineer = require('../lib/Engineer')

test('Creates enginineer object', () => 
{
    const engineer = new Engineer('Dalton', '29', 'daltonmorrel7@gmail.com', 'Dmorrel7');

    expect(engineer.name).toBe('Dalton');
    expect(engineer.id).toBe('29');
    expect(engineer.email).toBe('daltonmorrel7@gmail.com');
    expect(engineer.github).toBe('Dmorrel7');
});

test('engineers github', () =>
{
    const engineer = new Engineer('Dalton', '29', 'daltonmorrel7@gmail.com', 'Dmorrel7');

    expect(engineer.getGithub()).toBe('https://github.com/Dmorrel7/');
})

test('role of engineer', () => {
    const engineer = new Engineer('Dalton', '29', 'daltonmorrel7@gmail.com', 'Dmorrel7');

    expect(engineer.getRole()).toBe('Role: Engineer');
});