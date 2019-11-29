/*
We are working on a security system for a badged-access room in our company's building.

Given an ordered list of employees who used their badge to enter or exit the room, write a function that returns two collections:

1. All employees who didn't use their badge while exiting the room - they recorded an enter without a matching exit. (All employees are required to leave the room before the log ends.)

2. All employees who didn't use their badge while entering the room - they recorded an exit without a matching enter. (The room is empty when the log begins.)

Each list should contain no duplicates, regardless of how many times a given employee matches the criteria for belonging to it.

badge_records_1 = [
  ["Martha",   "exit"],
  ["Paul",     "enter"],
  ["Martha",   "enter"],
  ["Martha",   "exit"],
  ["Jennifer", "enter"],
  ["Paul",     "enter"],
  ["Curtis",   "exit"],
  ["Curtis",   "enter"],
  ["Paul",     "exit"],
  ["Martha",   "enter"],
  ["Martha",   "exit"],
  ["Jennifer", "exit"],
  ["Paul",     "enter"],
  ["Paul",     "enter"],
  ["Martha",   "exit"],
]

Expected output: ["Curtis", "Paul"], ["Martha", "Curtis"]

Additional test cases:

badge_records_2 = [
  ["Paul", "enter"],
  ["Paul", "enter"],
  ["Paul", "exit"],
]

Expected output: ["Paul"], []

badge_records_3 = [
  ["Paul", "enter"],
  ["Paul", "exit"],
  ["Paul", "exit"],
]

Expected output: [], ["Paul"]

badge_records_4 = [
  ["Paul", "exit"],
  ["Paul", "enter"],
  ["Martha", "enter"],
  ["Martha", "exit"],
]

Expected output: ["Paul"], ["Paul"]

badge_records_5 = [
  ["Paul", "enter"],
  ["Paul", "exit"],
]

Expected output: [], []

n: length of the badge records array
*/

function findBadEmployees(badgeRecords) {
  const records = {};

  badgeRecords.forEach(record => {
    const person = record[0];
    const action = record[1];

    if (!records[person]) {
      records[person] = [];
    }

    const personRecords = records[person];
    if (personRecords.length === 0) {
      personRecords.push(action);
    } else {
      const lastAction = personRecords[personRecords.length - 1];
      if (action === "exit" && lastAction === "enter") {
        personRecords.pop();
      } else {
        personRecords.push(action);
      }
    }
  });

  const badEntries = [];
  const badExits = [];
  for (let person in records) {
    const personRecords = records[person];

    if (personRecords.length) {
      if (personRecords.includes("enter")) {
        badEntries.push(person);
      }

      if (personRecords.includes("exit")) {
        badExits.push(person);
      }
    }
  }

  return {
    badEntries,
    badExits
  };
}

module.exports = findBadEmployees;
