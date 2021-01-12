"use strict";
function add_03(n1, n2, conv) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    if (conv === "as-number") {
        return +result; // same as parseFloat(result)
    }
    else {
        return result.toString();
    }
}
console.log(add_03(1, 2, "as-number"));
console.log(add_03(1, 2, "as-string"));
console.log(add_03("11", "22", "as-number"));
console.log(add_03("str1", "str2", "as-string"));
