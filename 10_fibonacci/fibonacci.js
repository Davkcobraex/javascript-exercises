const fibonacci = function(num) {
    let lastNum = 1;
    let currentNum = 0;

    if (num < 0)  {
        return "OOPS";
    }
    if (num === 0) {
        return 0;
    }

    for (let i = 0; i < num; i++) {
        const sum = lastNum + currentNum;
        lastNum = currentNum;
        currentNum = sum;

    }
    return currentNum;
};

console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
