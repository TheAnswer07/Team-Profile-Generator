const Engineer = require("../lib/Engineer");

test("Can set GitHub account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Hey", 7, "md@gmail.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Hey", 7, "md@gmail.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Hey", 7, "md@gmail.com", testValue);
    expect(e.getRole()).toBe(testValue);
});