var ROLE2;
(function (ROLE2) {
    ROLE2[ROLE2["ADMIN"] = 0] = "ADMIN";
    ROLE2[ROLE2["READ_ONLY"] = 1] = "READ_ONLY";
    ROLE2[ROLE2["AUTHOR"] = 2] = "AUTHOR";
})(ROLE2 || (ROLE2 = {}));
var person = {
    name: "Derek",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
    role_2: ROLE2.ADMIN
};
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby, hobby.toUpperCase());
}
