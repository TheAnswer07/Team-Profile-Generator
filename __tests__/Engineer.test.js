const Engineer = require("../lib/Engineer");

test("Can set GitHub account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Hey", 7, "md@gmail.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Hey", 7, "md@gmail.com", testValue);
    expect(e.getRole()).toBe("Engineer");
});

test("Can get Email via getEmail", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Hey", 7, "md@gmail.com", testValue);
    expect(e.getEmail()).toBe("md@gmail.com");
});