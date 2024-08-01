const prompt = require('prompt-sync')();

console.log((6 * 3) <= (3 + 6 * 2));

console.log(((10 + 6) < (7 * 2) || (6 + 7 * 3) < (10 * 3)));

// a = 10, b = 7 e c = 6
var a = 3;
var b = 0;
var c = 3;
while (c < a) {
    a = a - 1;
    b = b + 1;
    c = c + b;
};

console.log(a, b, c);

var a = 3;
var b = 0;
var c = 3;
do {
    a = a - 1;
    b = b + 1;
    c = c + b;
} while(c < a);

console.log(a, b, c);


