const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Type a number you want to match: ', (input) => {
    let value = [1, 2, 3, 4, 5];
    let num = parseInt(input);

    for (let i = 0; i < value.length; i++) {
        if (value[i] === num) {
            console.log(`Your value ${num} is matched at index position ${i}`);
        }
    }

    rl.close();
});

