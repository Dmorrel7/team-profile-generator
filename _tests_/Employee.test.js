const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test('Creates new employee object', () => 
{
    const employee = new Employee('Dalton', '29', 'daltonmorrel7@gmail.com');

    expect(employee.name).toBe('Dalton');
    expect(employee.id).toBe('29');
    expect(employee.email).toBe('daltonmorrel7@gmail.com');
});

test('gets employees name', () => 
{
    const employee = new Employee('Dalton', '29', 'daltonmorrel7@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employees id', () => 
{
    const employee = new Employee('Dalton', '29', 'daltonmorrel7@gmail.com');

    expect(employee.getId()).toEqual(expect.any(String));
});

test('gets employees email', () => 
{
    const employee = new Employee('Dalton', '29', 'daltonmorrel7@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('gets the employees role', () => 
{
    const employee = new Employee('Dalton', '29', 'daltonmorrel7@gmail.com');

    expect(employee.getRole()).toBe("Role: Employee");
});