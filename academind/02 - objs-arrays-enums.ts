enum ROLE2 {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  role_2: ROLE2;
} = {
  name: "Derek",
  age: 30,
  hobbies: ["Sports", `Cooking`],
  role: [2, "author"],
  role_2: ROLE2.ADMIN,
};

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby, hobby.toUpperCase());
}
