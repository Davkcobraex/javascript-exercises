const palindromes = function (string) {
    const initalString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return initalString.split("").reverse().join("") == initalString;
};
palindromes("string banana");
// Do not edit below this line
module.exports = palindromes;
