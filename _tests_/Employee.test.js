const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee');

test('Creates employee object', () =>
{
    const employee = new Employee('Dalton', '29', 'daltonmorrel7@gmail.com');

    expect(employee.name).toBe('Dalton');
    expect(employee.id).toBe('25');
    expect(employee.email).toBe('daltonmorrel7@gmail.com');
});

test('gets employee name', () =>
{
    const employee = new Employee('Dalton', '29', 'daltonmorrel7@gmail.com');
    
    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id', () =>
{
    const employee = new Employee('Dalton', '29', 'daltonmorrel7@gmail.com');

    expect(employee.getId()).toEqual(expect.any(String));
});

test('gets employee email', () =>
{
    const employee = new Employee('Dalton', '29', 'daltonmorrel7@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('gets employee role', () =>
{
    const employee = new Employee('Dalton', '29', 'daltonmorrel7@gmail.com');

    expect(employee.getRole()).toBe("Role: Employee");
});