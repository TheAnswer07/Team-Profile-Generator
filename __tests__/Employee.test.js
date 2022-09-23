const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name via constructor argument", () => {
    const name = "Moussa";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const testValue = 77;
    const e = new Employee("Hey", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
    const testValue = "md@gmail.com";
    const e = new Employee("Hey", 7, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Moussa";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get name via getId()", () => {
    const testValue = 77;
    const e = new Employee("Hey", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get name via getEmail()", () => {
    const testValue = "md@gmail.com";
    const e = new Employee("Hey", 7, testValue);
    expect(e.getEmail()).toBe(testValue);
});


