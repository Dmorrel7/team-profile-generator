const { test, expect } = require("@jest/globals")
const Manager = require("../lib/Manager")

test('creates manager object', () => 
{
    const manager = new Manager('Dalton', '29', 'daltonmorrel7@gmail.com', '77');

    expect(manager.name).toBe('Dalton');
    expect(manager.id).toBe('29');
    expect(manager.email).toBe('daltonmorrel7@gmail.com');
    expect(manager.officeNumber).toBe('77');
});

test('managers office number', () => 
{
     const manager = new Manager('Dalton', '29', 'daltonmorrel7@gmail.com', '77');

    expect(manager.getOfficeNumber()).toBe('Office Number: 77');
});

test('managers role', () => 
{
    const manager = new Manager('Dalton', '29', 'daltonmorrel7@gmail.com', '77');

    expect(manager.getRole()).toBe("Manager")
})