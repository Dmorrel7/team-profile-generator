const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test('expect employee to be an instance', ()=> 
{
    const employee = new Employee()
    expect(typeof(employee)).toBe('object');
});

test('expect employee name to be same as constructor argument', ()=> 
{
    const name = 'Dalton'
    const employee = new Employee(name)
    expect(employee.name).toBe(name)
})

test('expect employee id to be the same as constructor argument', ()=>
{
    const id = 24
    const employee = new Employee('Dalton', id)
    expect(employee.id).toBe(id)
})

test('expect employee email to be the same as constructor argument', ()=>
{
    const email = 'daltonmorrel7@gmail.com'
    const employee = new Employee('Dalton', 29, email)
    expect(employee.email).toBe(email)
})

test('expect to get employee name via get name method', ()=> 
{
    const name = 'Dalton'
    const employee = new Employee(name)
    expect(employee.getName()).toBe(name)
})