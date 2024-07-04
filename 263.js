const n = 6;
// Output: true
// Explanation: 6 = 2 × 3

while (n > 0) {
    let a = 0;
    if (n % 2 === 1) {
        console.log(true);
    }
    a = n % 2;
    console.log(a);
    if ((a = a % 3 == 1)) {
        console.log(true);
    }

    if ((a = a % 5 == 1)) {
        console.log(true);
    }
    console.log(false);
}
