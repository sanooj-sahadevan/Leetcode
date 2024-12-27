/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    if (n <= 2) return 0;
    let count = 1;

    const isPrime = num => {
        if (num === 2) return true;
        if (num % 2 === 0) return false;

        for (let i = 3; i * i <= num; i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = 3; i < n; i += 2) {
        if (isPrime(i)) count++;
    }

    return count;
}