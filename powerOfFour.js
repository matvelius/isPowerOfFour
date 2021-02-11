let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function isPowerOfFour(num) {
    return Number.isInteger(Math.log(num) / Math.log(4))
}

// 4^x = inputNum
// log(4^x) = log(inputNum) 
// xlog(4) = log(inputNum)
// x = log(inputNum)/log(4) 

rl.on('line', function (line) {
    const inputNum = parseInt(line)
    isPowerOfFour(inputNum) ? console.log("True") : console.log("False")
    rl.close()
})
