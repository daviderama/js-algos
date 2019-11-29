const findBadEmployees = require("./badgedAccess");

describe("when all employees used their badge correctly", () => {
  test("it should not return any name", () => {
    const badge_records = [
      ["Paul", "enter"],
      ["Paul", "exit"]
    ];

    expect(findBadEmployees(badge_records)).toEqual({
      badEntries: [],
      badExits: []
    });
  });
});

describe("when employees didn't use their badges while exiting", () => {
  test("it should return the names of the employees", () => {
    const badge_records = [
      ["Paul", "enter"],
      ["Paul", "exit"],
      ["Paul", "exit"]
    ];

    expect(findBadEmployees(badge_records)).toEqual({
      badEntries: [],
      badExits: ["Paul"]
    });
  });
});

describe("when employees didn't use their badges while entering", () => {
  test("it should return the names of the employees", () => {
    const badge_records = [
      ["Paul", "enter"],
      ["Paul", "enter"],
      ["Paul", "exit"]
    ];

    expect(findBadEmployees(badge_records)).toEqual({
      badEntries: ["Paul"],
      badExits: []
    });
  });
});

describe("when employees didn't use their badges while entering and exiting", () => {
  test("it should return the names of the employees", () => {
    const badge_records = [
      ["Paul", "exit"],
      ["Paul", "enter"],
      ["Martha", "enter"],
      ["Martha", "exit"]
    ];

    expect(findBadEmployees(badge_records)).toEqual({
      badEntries: ["Paul"],
      badExits: ["Paul"]
    });
  });

  test("it should return the names of the employees", () => {
    const badge_records = [
      ["Martha", "exit"],
      ["Paul", "enter"],
      ["Martha", "enter"],
      ["Martha", "exit"],
      ["Jennifer", "enter"],
      ["Paul", "enter"],
      ["Curtis", "exit"],
      ["Curtis", "enter"],
      ["Paul", "exit"],
      ["Martha", "enter"],
      ["Martha", "exit"],
      ["Jennifer", "exit"],
      ["Paul", "enter"],
      ["Paul", "enter"],
      ["Martha", "exit"]
    ];

    expect(findBadEmployees(badge_records)).toEqual({
      badEntries: ["Paul", "Curtis"],
      badExits: ["Martha", "Curtis"]
    });
  });
});
