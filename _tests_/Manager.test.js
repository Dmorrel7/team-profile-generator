  
const { test, expect } = require("@jest/globals")
const Manager = require("../lib/Manager")

test('creates manager object', () => 
{
    manager = new Manager('AJ', '25', 'ajcuddeback@gmail.com', '52');

    expect(manager.name).toBe('AJ');
    expect(manager.id).toBe('25');
    expect(manager.email).toBe('ajcuddeback@gmail.com');
    expect(manager.officeNumber).toBe('52');
});

test('managers office number', () => 
{
     const manager = new Manager('Dalton', '29', 'daltonmorrel7@gmail.com', '77');

    expect(manager.getOfficeNumber()).toBe('Office Number: 77');
});

test('managers role', () => 
{
    const manager = new Manager('Dalton', '29', 'daltonmorrel7@gmail.com', '77');

    expect(manager.getRole()).toBe("Role: Manager")
})