"use strict";
var ROLE2;
(function (ROLE2) {
    ROLE2[ROLE2["ADMIN"] = 0] = "ADMIN";
    ROLE2[ROLE2["READ_ONLY"] = 1] = "READ_ONLY";
    ROLE2[ROLE2["AUTHOR"] = 2] = "AUTHOR";
})(ROLE2 || (ROLE2 = {}));
const person = {
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
