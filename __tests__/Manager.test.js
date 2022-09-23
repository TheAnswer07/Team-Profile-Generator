const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
    const testValue = 77777;
    const e = new Manager("Hey", 7, "md@gmail.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Hey", 7, "md@gmail.com", 77777);
    expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOfficeNumber()", () => {
    const testValue = "UCB";
    const e = new Manager("Hey", 7, "md@gmail.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});