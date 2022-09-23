const Intern = require("../lib/Intern");

test("Can set School via constructor", () => {
    const testValue = "UCB";
    const e = new Intern("Hey", 7, "md@gmail.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Hey", 7, "md@gmail.com", "UCB");
    expect(e.getRole()).toBe(testValue);
});

test("Can get School via getSchool()", () => {
    const testValue = "UCB";
    const e = new Intern("Hey", 7, "md@gmail.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});