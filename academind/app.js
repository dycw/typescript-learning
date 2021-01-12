var person = {
    name: "Derek",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
};
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby, hobby.toUpperCase());
}
