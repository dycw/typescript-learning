const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Derek",
  age: 30,
  hobbies: ["Sports", `Cooking`],
  role: [2, "author"],
};

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby, hobby.toUpperCase());
}
