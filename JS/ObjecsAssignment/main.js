const complexArray = [
  {
    id: 1,
    name: "Alice",
    attributes: {
      age: 30,
      skills: ["JavaScript", "React", "Node.js"],
      isAvailable: true,
    },
    history: [
      { year: 2020, role: "Developer" },
      { year: 2021, role: "Senior Developer" },
      { year: 2022, role: "Team Lead" },
    ],
  },
  {
    id: 2,
    name: "Bob",
    attributes: {
      age: 28,
      skills: ["Python", "Django", "Flask"],
      isAvailable: false,
    },
    history: [
      { year: 2019, role: "Intern" },
      { year: 2020, role: "Junior Developer" },
      { year: 2021, role: "Developer" },
    ],
  },
  {
    id: 3,
    name: "Charlie",
    attributes: {
      age: 35,
      skills: ["Java", "Spring", "Hibernate"],
      isAvailable: true,
    },
    history: [
      { year: 2018, role: "Senior Developer" },
      { year: 2019, role: "Architect" },
      { year: 2022, role: "Consultant" },
    ],
  },
];

// Example Challenge:
// 1. Find the name of the person who has "Node.js" in their skills.
const personName = complexArray.find((item) => {
  const hasSkill = item.attributes.skills.findIndex(
    (skill) => skill === "Node.js"
  );
  if (hasSkill !== -1) {
    return item;
  }
});
console.log(
  `The name of the person who has "Node.js" in their skills is ${personName.name}`
);

// 2. List all roles held by Bob throughout the years.
let rolesOfBob = "";
const indexOfBob = complexArray.findIndex((item) => item.name === "Bob");
complexArray[indexOfBob].history.forEach((his) => {
  rolesOfBob += `${his.year} - ${his.role} `;
});

console.log(`List all roles held by Bob: ${rolesOfBob}`);

// 3. Determine who is currently available and has experience as a "Team Lead".
const teamLead = complexArray.find((per) => {
  let indexOfTeamLead = per.history.findIndex(
    (his) => his.role === "Team Lead" && per.attributes.isAvailable
  );
  if (indexOfBob !== -1) {
    return per;
  }
});
console.log(
  `The person who is currently available and has experience as a "Team Lead" is ${teamLead.name}`
);
