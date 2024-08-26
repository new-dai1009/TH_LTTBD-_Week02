function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function sumFirst100Primes() {
    let primes = [];
    let num = 2;

    while (primes.length < 100) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    const sum = primes.reduce((acc, prime) => acc + prime, 0);
    return [sum, primes];
}

const [sum, primes] = sumFirst100Primes();
console.log("Sum of first 100 primes:", sum);
console.log("First 100 primes:", primes);
